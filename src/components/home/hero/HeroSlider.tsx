import Image from 'next/image';
import Marquee from '@/components/ui/Marquee';
import { HERO } from '@/lib/home-data';

/**
 * Tira de imágenes del hero (`.hero-slider`).
 *
 * Geometría del original: caja de 690×422 con `border: 10px solid #fff` y
 * `radius: 10px`; dentro, ítems de 360×402 con `border: 6px solid #fff` y
 * `radius: 10px` (imagen 348×390), **sin gap** entre ellos.
 *
 * Velocidad medida en vivo: 54.7 px/s hacia la izquierda. Un set son 3 ítems
 * = 1080px, así que la vuelta dura 1080 / 54.7 ≈ 19.7s. El original resetea con
 * `duration: 0` y da un salto visible cada 40s; aquí el bucle es seamless a la
 * misma velocidad (duplicando el set y desplazando -50%).
 */
export default function HeroSlider() {
  return (
    <Marquee duration={19.7} direction="left" gap={0} pauseOnHover={false}>
      {HERO.slides.map((s, i) => (
        <div
          key={s.src}
          className="border-paper rounded-tile h-[402px] w-[360px] shrink-0 overflow-hidden border-[6px] tab:h-[262px] tab:w-[250px] land:h-[162px] land:w-[150px] mob:h-[91px] mob:w-[120px] mob:border-[3px]"
        >
          <Image
            src={s.src}
            alt={i === 0 ? s.alt.trim() : ''}
            width={348}
            height={390}
            className="size-full object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </Marquee>
  );
}
