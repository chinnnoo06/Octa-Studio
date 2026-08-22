/**
 * Contenido de la sección Hero — Octa Building Studio.
 * Mismas imágenes que la plantilla base; solo cambia el copy.
 */

export const HERO = {
  titleFirst: 'Diseñamos y montamos ',
  titleSpan: 'experiencias',
  points: [
    '1. Stands y ferias',
    '2. Shows y eventos masivos',
    '3. Congresos y convenciones',
  ],
  taglineFirst: 'Diseño y montaje ',
  taglineSpan: 'a nivel nacional e internacional',
  cta: { label: 'Agenda tu proyecto', href: '/contacto' },
  slides: [
    { src: '/images/pages/home/hero-slide-1.webp', alt: 'Montaje de stand' },
    { src: '/images/pages/home/hero-slide-2.webp', alt: 'Montaje de stand' },
    { src: '/images/pages/home/hero-slide-3.webp', alt: 'Montaje de stand' },
  ],
} as const;
