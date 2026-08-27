import ImgObra1 from '@/assets/media/Img2.webp';
import ImgObra2 from '@/assets/media/Img3.webp';
import ImgObra3 from '@/assets/media/Img4.webp';

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
  centerCounter: { odometer: ['0', '9', '8', '7', '6', '5', '4', '3', '2', '1'] },
  centerCounterLabel: 'Viáticos dentro de México',
  rightTopTitle: 'Cada stand, diseñado desde cero',
  rightBottomTitle: 'Trato directo, sin intermediarios',
} as const;

export const ADVANTAGES_CORNER_IMAGES = [
  { src: ImgObra1, alt: 'Stand montado por Octa en feria' },
  { src: ImgObra2, alt: 'Montaje de estructura en recinto' },
  { src: ImgObra3, alt: 'Stand iluminado durante un evento' },
] as const;
