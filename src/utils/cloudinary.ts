export const optimizeCloudinary = (url: string, width?: number): string => {
  // Inserta transformaciones estándar (auto format + auto quality) en URLs de Cloudinary.
  // Si se entrega width, limita el ancho para mejorar performance en grillas/carruseles.
  if (!url.includes('cloudinary.com')) return url;

  const parts = url.split('/upload/');
  if (parts.length < 2) return url;

  const transformation = width ? `f_auto,q_auto,w_${width},c_limit` : 'f_auto,q_auto';
  
  return `${parts[0]}/upload/${transformation}/${parts[1]}`;
};
