import Image from 'next/image';
import Marquee from '@/components/ui/Marquee';

export default function HeroSlider() {
  return (
    <Marquee duration={19.7} direction="left" gap={0} pauseOnHover={false}>
      <div className="border-primary h-37.5 w-34 shrink-0 overflow-hidden rounded-xl border-5 sm:h-40.5 sm:w-37.5 md:h-65.5 md:w-62.5 lg:h-100.5 lg:w-90">
        <Image
          src="/images/pages/home/hero-slide-1.webp"
          alt="Montaje de stand"
          width={348}
          height={390}
          className="size-full object-cover"
          priority
        />
      </div>

      <div className="border-primary h-37.5 w-34 shrink-0 overflow-hidden rounded-xl border-5 sm:h-40.5 sm:w-37.5 md:h-65.5 md:w-62.5 lg:h-100.5 lg:w-90">
        <Image
          src="/images/pages/home/hero-slide-2.webp"
          alt=""
          width={348}
          height={390}
          className="size-full object-cover"
        />
      </div>

      <div className="border-primary h-37.5 w-34 shrink-0 overflow-hidden rounded-xl border-5 sm:h-40.5 sm:w-37.5 md:h-65.5 md:w-62.5 lg:h-100.5 lg:w-90">
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
