# Portafolio Filmmaker (Vite + React + TypeScript)

Sitio de portafolio con soporte ES/EN, secciones de proyectos, showreel y formulario de contacto. Incluye una Netlify Function para listar recursos de Cloudinary por carpeta/prefix.

## Requisitos

- Node.js + npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir `http://localhost:5173/`.

## Deploy en Netlify

Este repo ya incluye configuración base en [netlify.toml](file:///c:/Users/petat/Downloads/portafolio%20zentella/netlify.toml):

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

### 1) Variables de entorno (Cloudinary)

Si vas a usar la function de Cloudinary (para listar recursos por carpeta/prefix), crea estas variables en Netlify:

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Recomendaciones:

- Marca `CLOUDINARY_API_SECRET` como secreta (Contains secret values).
- Scope mínimo: `Functions` (puede estar también en `Builds`).
- Define el valor en `Production` (y opcionalmente en `Deploy Previews`).

La function está en [cloudinary-assets.js](file:///c:/Users/petat/Downloads/portafolio%20zentella/netlify/functions/cloudinary-assets.js) y se consume con:

`/.netlify/functions/cloudinary-assets?folder=Miniaturas`

Parámetros útiles:

- `folder` o `prefix` (obligatorio): prefijo del `public_id` en Cloudinary (ej: `Miniaturas/`)
- `resource_type` (opcional): `image` | `video` | `raw` (default: `image`)
- `max_results` (opcional): 1..500 (default: 100)
- `next_cursor` (opcional): paginación

Nota: para que `folder=Miniaturas` funcione, tus assets deben tener `public_id` con ese prefijo (ej: `Miniaturas/thumbnail-01`).

### 2) Formulario de contacto (Netlify Forms)

El formulario se envía usando Netlify Forms:

- El componente está en [Contact.tsx](file:///c:/Users/petat/Downloads/portafolio%20zentella/src/components/Contact.tsx).
- Para que Netlify detecte el formulario en un SPA, existe un formulario oculto en [index.html](file:///c:/Users/petat/Downloads/portafolio%20zentella/index.html).

Para que los mensajes lleguen por correo:

1. Netlify → Site → `Forms`
2. Selecciona el formulario `contact`
3. `Settings` / `Notifications` → `Add notification` → `Email notification`
4. Ingresa el correo destino (por ejemplo: `pixelboomstudios@gmail.com`)
5. Guarda

Después, dispara un deploy nuevo para que Netlify vuelva a escanear el build.

### 3) Troubleshooting

- Si el sitio aparece como “paused” por límites de uso, debes reactivarlo desde el panel de Netlify (Billing/Usage) antes de poder probar formularios o functions.
- Si la function devuelve `Missing Cloudinary server credentials`, revisa que las env vars estén definidas en `Production` y con scope `Functions`.
- Si la function devuelve `count: 0`, revisa que el nombre de carpeta/prefix coincida con el `public_id` real en Cloudinary.

## Scripts útiles

```bash
npm run typecheck
npm run lint
npm run build
```

