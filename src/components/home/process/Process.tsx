import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Step } from './Step';
import { PROCESS_STEPS } from '@/utils/data/process';
import Bg from '@/assets/media/backgrounds/ImgBackground2.webp';

export const Process = () => {
  const [s1, s2, s3, s4, s5] = PROCESS_STEPS;

  /** Ancho fijo de cada tarjeta mientras es un carrusel horizontal. */
  const TARJETA = 'w-75 shrink-0 sm:w-100 md:w-auto md:shrink';

  return (
    <section
      data-section="process"
      className="bg-fourth relative overflow-hidden py-10 sm:py-15 md:py-20 lg:py-[150px]"
    >
      <Image
        src={Bg}
        alt=""
        fill
        sizes="(min-width: 640px) 2560px, 1200px"
        placeholder="blur"
        className="object-cover object-left-top"
      />

      <div aria-hidden="true" className="bg-fourth/40 absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-5 lg:px-15">
        <div className="flex flex-col items-center gap-[30px] sm:gap-10 md:gap-15 xl:grid xl:grid-cols-[293px_1fr] xl:items-start xl:gap-0">

          <div className="text-primary flex max-w-[490px] flex-col items-center gap-5 text-center xl:items-start xl:text-start">
            <Eyebrow>Nuestro Proceso</Eyebrow>
            <SectionTitle tone="light" lead="Así es como" rotating="trabajamos" />
          </div>

          <div className="flex w-full gap-5 overflow-x-auto overflow-y-hidden pb-5 md:flex-col md:items-center md:overflow-visible md:pb-0 xl:gap-3">

            <div className="contents md:mx-auto md:block md:w-[calc(50%-0.625rem)] xl:w-full">
              <div className={TARJETA}>
                <Step step={s1} index={0} hasArrow />
              </div>
            </div>

            <div className="contents md:grid md:w-full md:grid-cols-2 md:gap-5 xl:gap-4 xl:overflow-hidden">
              <div className={TARJETA}>
                <Step step={s2} index={1} hasArrow />
              </div>
              <div className={TARJETA}>
                <Step step={s3} index={2} hasArrow />
              </div>
            </div>

            <div className="contents md:grid md:w-full md:grid-cols-2 md:gap-5 xl:gap-0 xl:overflow-hidden">
              <div className={TARJETA}>
                <Step step={s4} index={3} className="xl:justify-start" />
              </div>
              <div className={TARJETA}>
                <Step step={s5} index={4} className="xl:justify-start" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
