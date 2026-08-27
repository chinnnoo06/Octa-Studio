/**
 * Contenido de la sección About, incluidas las 4 stats con sus odómetros.
 */

import type { Stat } from './types';

export const ABOUT = {
  eyebrow: 'About Us',
  heading: 'From homes to offices, we bring your vision to life. Our results speak for themselves',
  cta: { label: 'Want Design', href: '/contact' },
  slotText: 'Slots are available',
  image: { src: '/images/pages/home/about-office.webp', alt: 'Smart Office' },
} as const;

export const STATS: Stat[] = [
  {
    odometer: ['20', '19', '18', '17', '16', '15', '14', '13', '12', '11'],
    suffix: '+',
    label: 'Años de experiencia',
    description: 'Dos décadas diseñando y montando en todo México',
    variant: 'one',
  },
  {
    odometer: ['500', '480', '460', '440', '420', '400', '380', '360', '340', '320'],
    suffix: '+',
    label: 'Stands montados',
    description: 'De espacios compactos a montajes de gran formato',
    variant: 'two',
  },
  {
    odometer: ['300', '290', '280', '270', '260', '250', '240', '230', '220', '210'],
    suffix: '+',
    label: 'Marcas atendidas',
    description: 'Empresas nacionales, internacionales y expositoras',
    variant: 'three',
  },
  {
    odometer: ['3', '2', '1', '9', '8', '7', '6', '5', '4', '3'],
    label: 'Países de operación',
    description: 'México, Estados Unidos y clientes de Asia y Sudamérica',
    variant: 'four',
  },
];
