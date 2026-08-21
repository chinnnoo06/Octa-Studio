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
    odometer: ['2014','2013','2012','2011','2010','2010','2009','2008','2007','2006'],
    label: 'establishment',
    description: 'Over a decade of transforming spaces',
    variant: 'one',
  },
  {
    odometer: ['350','349','348','347','346','345','344','343','342','341'],
    suffix: '+',
    label: 'Projects finished',
    description: 'Homes to offices, we deliver excellence',
    variant: 'two',
  },
  {
    odometer: ['200','199','198','197','196','195','194','193','192','191'],
    suffix: '+',
    label: 'Happy Clients',
    description: 'People who love our designs',
    variant: 'three',
  },
  {
    odometer: ['25','24','23','22','21','20','19','18','17','16'],
    suffix: '+',
    label: 'Ongoing Projects',
    description: 'Homes to offices, we deliver excellence',
    variant: 'four',
  },
];
