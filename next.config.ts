import type { NextConfig } from 'next';

/**
 * Headers de seguridad por defecto. Un clon visual estático no necesita
 * relajarlos: todos los assets están descargados y servidos desde /public.
 * Si una página futura enlazara a un CDN externo, se añade ese dominio
 * concreto — nunca `*` ni `'unsafe-eval'`.
 */
const isDev = process.env.NODE_ENV === 'development';

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "img-src 'self' data: blob:",
      "media-src 'self'",
      "font-src 'self' data:",
      // Tailwind y next/font inyectan estilos inline; next/image usa blob:
      "style-src 'self' 'unsafe-inline'",
      // 'unsafe-eval' SOLO en dev: Turbopack lo necesita para HMR.
      // En producción el script-src queda sin eval.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
      `connect-src 'self'${isDev ? ' ws: wss:' : ''}`,
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  // El badge de dev se superpone al contenido y contaminaría las capturas
  // que usa el loop de comparación visual.
  devIndicators: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  images: {
    // Todos los assets son locales; no hay remotePatterns.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
