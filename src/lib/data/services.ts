/**
 * Contenido de la sección Services y los textos del marquee.
 */

import type { Service } from './types';

export const SERVICES_HEADING =
  'From interiors to lighting, we craft spaces that reflect your personality and purpose';

export const SERVICES: Service[] = [
  {
    title: 'Lighting Solutions',
    description: 'We craft stylish, functional interiors that reflect your taste and enhance everyday living. Our designs combine creativity and practicality to transform every corner of your home.',
    href: '/services/lighting-solutions',
    icon: '/images/pages/home/icon-lighting.svg',
    iconAlt: 'Box Shape Image',
  },
  {
    title: 'Space Planning',
    description: 'Our team optimizes layouts to make every corner of your space purposeful and visually balanced. We ensure each arrangement enhances both comfort and aesthetic appeal.',
    href: '/services/space-planning',
    icon: '/images/pages/home/icon-space.svg',
    iconAlt: 'Icon in a cubic form',
  },
  {
    title: 'Furniture Styling',
    description: 'From statement pieces to subtle accents, we curate furniture that completes your home’s look. Every selection is chosen to harmonize style, function, and personality.',
    href: '/services/furniture-styling',
    icon: '/images/pages/home/icon-furniture.svg',
    iconAlt: 'Icon Liike Dimond Shape',
  },
];

/** marquee 2 filas: 5 grupos arriba, 4 abajo, direcciones opuestas */
export const SERVICES_MARQUEE = ['Renovation', 'Planning', 'Styling'] as const;
export const SERVICES_MARQUEE_TOP_GROUPS = 5;
export const SERVICES_MARQUEE_BOTTOM_GROUPS = 4;
