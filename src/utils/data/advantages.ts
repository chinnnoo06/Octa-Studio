import ImgObra1 from '@/assets/media/stands/ImgStand2.webp';
import ImgObra2 from '@/assets/media/stands/ImgStand3.webp';
import ImgObra3 from '@/assets/media/stands/ImgStand4.webp';

export const ADVANTAGES_BADGE_TEXTS = [
  'Stands',
  'Expos',
  'Congresos',
  'Eventos',
  'Showrooms',
] as const;

export const ADVANTAGES = {
  leftBottomTitle: 'Montaje y desmontaje con equipo propio',
  centerTitle: 'Cobertura en todo México y parte de Estados Unidos',
  /** El diferenciador concreto del brief. Antes iba en un odómetro que
   *  contaba hasta 0: el número obligaba a leer la etiqueta para entenderlo. */
  centerClaim: 'Sin viáticos',
  centerClaimDetail:
    'Traslados, hospedaje y dietas del equipo de montaje, incluidos en cualquier ciudad del país.',
  rightTopTitle: 'Cada stand, diseñado desde cero',
  rightBottomTitle: 'Trato directo, sin intermediarios',
} as const;

export const ADVANTAGES_CORNER_IMAGES = [
  { src: ImgObra1, alt: 'Stand montado por Octa en feria' },
  { src: ImgObra2, alt: 'Montaje de estructura en recinto' },
  { src: ImgObra3, alt: 'Stand iluminado durante un evento' },
] as const;
