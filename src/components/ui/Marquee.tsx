import { cn } from '@/utils/cn';

/**
 * Loop infinito en CSS (keyframes en globals.css).
 *
 * Geometría del bucle: el track no lleva gap propio; cada mitad es un flex con
 * `gap` y un `padding-inline-end` del mismo valor. Así el ancho de cada mitad
 * incluye su separación final y el `translate3d(-50%)` cae exactamente sobre
 * el primer item de la segunda copia — sin salto ni deriva acumulada.
 *
 * Se usa en 3 sitios del original: la tira de imágenes del hero, el marquee de
 * texto gigante de services (2 filas en direcciones opuestas) y el marquee de
 * ofertas bajo la sección designcta.
 */
export default function Marquee({
  children,
  duration = 40,
  direction = 'left',
  pauseOnHover = true,
  className,
  gap = 40,
}: {
  children: React.ReactNode;
  /** Segundos por vuelta completa. Más alto = más lento. */
  duration?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
  /** Separación entre items, en píxeles. */
  gap?: number;
}) {
  const half = (
    <div
      className="flex shrink-0 items-center"
      style={{ gap: `${gap}px`, paddingInlineEnd: `${gap}px` }}
    >
      {children}
    </div>
  );

  return (
    <div
      className={cn('marquee-root relative w-full overflow-hidden', className)}
      aria-hidden="true"
    >
      <div
        className="marquee-track"
        data-direction={direction}
        data-pause-on-hover={pauseOnHover}
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {half}
        {half}
      </div>
    </div>
  );
}
