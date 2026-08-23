import { Marquee } from '@/components/ui/Marquee';
import { LivinorMark } from '@/components/ui/LivinorMark';
import { SERVICES_MARQUEE } from '@/lib/home-data';

/**
 * Marquee de texto gigante de dos filas (`.services-bottom-slider`).
 *
 * Cada fila es una secuencia de `<icono 110px> PALABRA` con gap 30, en `text-h1`
 * (96px) Sora. Velocidades medidas en vivo sobre el original:
 *   fila superior → izquierda, 90.4 px/s
 *   fila inferior → derecha,   72.8 px/s
 * El set completo mide 2176px, así que la vuelta dura 2176/90.4 ≈ 24.1s arriba
 * y 2176/72.8 ≈ 29.9s abajo.
 *
 * En el original el bucle no es seamless (Webflow resetea con `duration: 0` y
 * se ve un salto); aquí sí lo es, manteniendo la misma velocidad.
 */
const Row = ({ direction, duration }: { direction: 'left' | 'right'; duration: number }) => {
  return (
    <Marquee duration={duration} direction={direction} gap={30} pauseOnHover={false}>
      {SERVICES_MARQUEE.map((word) => (
        <div key={word} className="flex shrink-0 items-center gap-[30px]">
          <LivinorMark className="text-muted size-[110px] shrink-0 tab:size-[60px] land:size-10" />
          <span className="text-ink font-heading text-h1 whitespace-nowrap uppercase">
            {word}
          </span>
        </div>
      ))}
    </Marquee>
  );
}

export const ServicesMarquee = () => {
  return (
    <div className="flex flex-col gap-3 tab:gap-2.5">
      <Row direction="left" duration={24.1} />
      <Row direction="right" duration={29.9} />
    </div>
  );
}
