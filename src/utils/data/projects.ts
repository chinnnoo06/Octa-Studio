/**
 * Proyectos destacados en la home.
 *
 * Los cuatro son stands reales de Octa y el nombre sale del propio stand, no de
 * una lista aparte. En lugar del año va el SECTOR: el cliente no nos dio fechas
 * y un año inventado en la sección que sirve de portafolio es justo lo que no
 * conviene.
 *
 * Todos apuntan a `/proyectos` porque no hay ficha individual: el cliente no la
 * pidió, y las rutas `/projects/<slug>` que traía la plantilla daban 404.
 */

import type { Project } from './types';
import ImgAgrokorita from '@/assets/media/Img15.webp';
import ImgTemisa from '@/assets/media/Img16.webp';
import ImgToyoKasei from '@/assets/media/Img4.webp';
import ImgPcp from '@/assets/media/Img12.webp';

export const PROJECTS: Project[] = [
  {
    name: 'Agrokorita',
    sector: 'Agro',
    href: '/proyectos',
    image: ImgAgrokorita,
    alt: 'Stand de Agrokorita con frente amarillo y verde e iluminación LED perimetral',
  },
  {
    name: 'Temisa',
    sector: 'Agro',
    href: '/proyectos',
    image: ImgTemisa,
    alt: 'Stand de Temisa en blanco y verde con vitrina de producto retroiluminada',
  },
  {
    name: 'Toyo Kasei',
    sector: 'Industrial',
    href: '/proyectos',
    image: ImgToyoKasei,
    alt: 'Stand de Toyo Kasei con maquinaria de flejado y panelado azul',
  },
  {
    name: 'PCP',
    sector: 'Industrial',
    href: '/proyectos',
    image: ImgPcp,
    alt: 'Stand de PCP con mostrador iluminado y exhibidores de válvulas',
  },
];
