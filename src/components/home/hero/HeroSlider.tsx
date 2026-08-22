import Image from 'next/image';
import Marquee from '@/components/ui/Marquee';

/**
 * Tira de imágenes del hero (`.hero-slider`).
 *
 * Geometría del original: caja de 690×422 con borde blanco de 10px y radio de
 * 10px; dentro, ítems de 360×402 con borde de 6px (imagen 348×390) y sin gap.
 *
 * Velocidad medida en vivo: 54.7 px/s hacia la izquierda. Un set son 3 ítems
 * = 1080px, así que la vuelta dura 1080 / 54.7 ≈ 19.7s.
 */
export default function HeroSlider() {
  return (
    <Marquee duration={19.7} direction="left" gap={0} pauseOnHover={false}>
      <div className="border-primary h-[91px] w-[120px] shrink-0 overflow-hidden rounded-[10px] border-[3px] sm:h-[162px] sm:w-[150px] sm:border-[6px] md:h-[262px] md:w-[250px] lg:h-[402px] lg:w-[360px]">
        <Image
          src="/images/pages/home/hero-slide-1.webp"
          alt="Montaje de stand"
          width={348}
          height={390}
          className="size-full object-cover"
          priority
        />
      </div>

      <div className="border-primary h-[91px] w-[120px] shrink-0 overflow-hidden rounded-[10px] border-[3px] sm:h-[162px] sm:w-[150px] sm:border-[6px] md:h-[262px] md:w-[250px] lg:h-[402px] lg:w-[360px]">
        <Image
          src="/images/pages/home/hero-slide-2.webp"
          alt=""
          width={348}
          height={390}
          className="size-full object-cover"
        />
      </div>

      <div className="border-primary h-[91px] w-[120px] shrink-0 overflow-hidden rounded-[10px] border-[3px] sm:h-[162px] sm:w-[150px] sm:border-[6px] md:h-[262px] md:w-[250px] lg:h-[402px] lg:w-[360px]">
        <Image
          src="/images/pages/home/hero-slide-3.webp"
          alt=""
          width={348}
          height={390}
          className="size-full object-cover"
        />
      </div>
    </Marquee>
  );
}
