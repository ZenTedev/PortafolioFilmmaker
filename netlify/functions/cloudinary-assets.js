/**
 * Netlify Function (server-side) para listar recursos de Cloudinary por carpeta/prefix.
 *
 * Este endpoint usa Cloudinary Admin API, por lo que requiere credenciales del servidor:
 * - CLOUDINARY_CLOUD_NAME
 * - CLOUDINARY_API_KEY
 * - CLOUDINARY_API_SECRET
 *
 * Query params:
 * - folder|prefix (obligatorio): prefijo del public_id en Cloudinary (ej: "Miniaturas/")
 * - resource_type (opcional): image | video | raw (default: image)
 * - max_results (opcional): 1..500 (default: 100)
 * - next_cursor (opcional): paginación
 */
const json = (statusCode, body, extraHeaders = {}) => ({
  statusCode,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'public, max-age=60',
    ...extraHeaders,
  },
  body: JSON.stringify(body),
});

const getEnv = (key) => {
  const value = process.env[key];
  return value && value.trim() ? value.trim() : undefined;
};

const toBasicAuth = (apiKey, apiSecret) => {
  const token = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  return `Basic ${token}`;
};

export const handler = async (event) => {
  try {
    if (event.httpMethod !== 'GET') {
      return json(405, { error: 'Method not allowed' }, { allow: 'GET' });
    }

    const cloudName = getEnv('CLOUDINARY_CLOUD_NAME');
    const apiKey = getEnv('CLOUDINARY_API_KEY');
    const apiSecret = getEnv('CLOUDINARY_API_SECRET');

    if (!cloudName || !apiKey || !apiSecret) {
      return json(500, {
        error: 'Missing Cloudinary server credentials',
        required: ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'],
      });
    }

    const folder = event.queryStringParameters?.folder?.trim();
    const prefix = event.queryStringParameters?.prefix?.trim();
    const resourceType = (event.queryStringParameters?.resource_type || 'image').trim();
    const maxResultsRaw = event.queryStringParameters?.max_results;
    const nextCursor = event.queryStringParameters?.next_cursor;

    if (!folder && !prefix) {
      return json(400, { error: 'Missing required query param: folder (or prefix)' });
    }

    if (resourceType !== 'image' && resourceType !== 'video' && resourceType !== 'raw') {
      return json(400, { error: 'Invalid resource_type. Use image | video | raw' });
    }

    const maxResultsNum = Number(maxResultsRaw);
    const maxResults = Number.isFinite(maxResultsNum)
      ? Math.min(Math.max(Math.floor(maxResultsNum), 1), 500)
      : 100;

    const effectivePrefix = prefix || folder;

    const url = new URL(`https://api.cloudinary.com/v1_1/${cloudName}/resources/${resourceType}`);
    url.searchParams.set('type', 'upload');
    url.searchParams.set('prefix', effectivePrefix);
    url.searchParams.set('max_results', String(maxResults));
    if (nextCursor) url.searchParams.set('next_cursor', nextCursor);

    const resp = await fetch(url.toString(), {
      headers: {
        authorization: toBasicAuth(apiKey, apiSecret),
      },
    });

    const data = await resp.json().catch(() => undefined);
    if (!resp.ok) {
      return json(resp.status, {
        error: 'Cloudinary API error',
        status: resp.status,
        details: data,
      });
    }

    const resources = Array.isArray(data?.resources) ? data.resources : [];

    return json(200, {
      prefix: effectivePrefix,
      resource_type: resourceType,
      next_cursor: data?.next_cursor || null,
      count: resources.length,
      urls: resources
        .map((r) => r?.secure_url || r?.url)
        .filter((u) => typeof u === 'string'),
      resources: resources.map((r) => ({
        asset_id: r.asset_id,
        public_id: r.public_id,
        format: r.format,
        resource_type: r.resource_type,
        type: r.type,
        version: r.version,
        width: r.width,
        height: r.height,
        bytes: r.bytes,
        created_at: r.created_at,
        secure_url: r.secure_url,
        url: r.url,
      })),
    });
  } catch {
    return json(500, { error: 'Unhandled error' });
  }
};
