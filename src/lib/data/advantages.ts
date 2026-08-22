/**
 * Contenido del bento de Advantages y del badge rotatorio.
 */

import type { Project } from './types';

export const ADVANTAGES_BADGE_TEXTS = [
  'Bold Designs',
  'Stark Designs',
  'Nexo Designs',
  'Prime Designs',
  'Aura Designs',
] as const;

export const ADVANTAGES = {
  leftBottomTitle: 'Unique Design asthetic',   // errata original
  centerTitle: 'Proven Work and Trusted Reputation',
  centerCounter: { odometer: ['350','349','348','347','346','345','344','343','342','341'], suffix: '+' },
  centerCounterLabel: 'Project Launched',
  rightTopTitle: 'Client-Focused Approach',
  rightBottomTitle: 'Attention to details',
} as const;

/**
 * Las 3 fotos que entran escalonadas en "Proven Work and Trusted Reputation".
 * En el original son `.cover-image-wrap.corner-one/two/three`, apiladas dentro
 * de un wrap rotado -20°, con un bucle de entrada de 4s.
 */
export const ADVANTAGES_CORNER_IMAGES = [
  { src: '/images/pages/home/adv-corner-1.webp', alt: 'Modern Home' },
  { src: '/images/pages/home/adv-corner-2.webp', alt: 'Modern Home' },
  { src: '/images/pages/home/adv-corner-3.webp', alt: 'Modern Home' },
] as const;
