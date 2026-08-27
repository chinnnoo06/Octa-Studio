import Image from 'next/image';
import { Marquee } from '@/components/ui/Marquee';
import Img1 from "@/assets/media/Img2.webp"
import Img2 from "@/assets/media/Img3.webp"
import Img3 from "@/assets/media/Img4.webp"

export const HeroSlider = () => {
  return (
    <Marquee duration={19.7} direction="left" gap={0} pauseOnHover={false}>
      <div className="border-primary h-37.5 w-34 shrink-0 overflow-hidden rounded-xl border-5 sm:h-40.5 sm:w-37.5 md:h-65.5 md:w-62.5 lg:h-100.5 lg:w-90">
        <Image
          src={Img1}
          alt="Montaje de stand"
          width={348}
          height={390}
          className="size-full object-cover"
          priority
        />
      </div>

      <div className="border-primary h-37.5 w-34 shrink-0 overflow-hidden rounded-xl border-5 sm:h-40.5 sm:w-37.5 md:h-65.5 md:w-62.5 lg:h-100.5 lg:w-90">
        <Image
          src={Img2}
          alt=""
          width={348}
          height={390}
          className="size-full object-cover"
        />
      </div>

      <div className="border-primary h-37.5 w-34 shrink-0 overflow-hidden rounded-xl border-5 sm:h-40.5 sm:w-37.5 md:h-65.5 md:w-62.5 lg:h-100.5 lg:w-90">
        <Image
          src={Img3}
          alt=""
          width={348}
          height={390}
          className="size-full object-cover"
        />
      </div>
    </Marquee>
  );
}
