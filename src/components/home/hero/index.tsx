import Image from 'next/image';
import HeroSlider from './HeroSlider';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';
import { TickLine } from '@/components/ui/TickLine';

export default function Hero() {
  return (
    <section data-section="hero"
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/pages/home/hero-banner.webp)' }}
    >

      <div className="relative z-10 w-full">
        <div className="h-18" aria-hidden="true" />

        <div className="mt-8 flex flex-col justify-between gap-10 md:mt-15 md:min-h-[530px] md:gap-15 lg:mt-20 lg:min-h-[822px] lg:gap-25">

          {/* ── Bloque superior ───────────────────────────────────────────── */}
          <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center gap-8 px-5 md:flex-row md:items-start md:justify-between md:gap-10 lg:gap-20">

            <div className="w-full overflow-hidden md:w-[75%]">
              <h1 className="text-primary/75 font-display p-[0.08em] text-center text-4xl md:text-6xl lg:text-8xl 2xl:text-[140px] leading-[0.85] font-normal tracking-[0.04em] normal-case md:text-start ">
                Diseñamos y construimos {''}
                <span className="text-primary">experiencias</span>
              </h1>
            </div>

            <div className="flex w-full flex-col items-center gap-6 md:w-[25%] md:flex-row md:items-center md:gap-6 lg:gap-10">
              <TickLine className="hidden md:flex" />

              <div className="flex flex-col items-center gap-4 md:items-start">
                <Image
                  src="/images/shared/mark.svg"
                  alt=""
                  width={197}
                  height={197}
                  className="h-16 w-auto md:h-20 lg:h-[197px]"
                />

                <div className="hidden flex-col gap-3 md:flex lg:gap-5">
                  <p className="text-primary font-text text-sm leading-none lg:text-base">
                    1. Stands y ferias
                  </p>
                  <p className="text-primary font-text text-sm leading-none lg:text-base">
                    2. Shows y eventos masivos
                  </p>
                  <p className="text-primary font-text text-sm leading-none lg:text-base">
                    3. Congresos y convenciones
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-5 md:hidden">
                <h2 className="text-primary font-text text-center text-lg uppercase">
                  Diseño y montaje{' '}
                  <span className="text-primary/75">a nivel nacional e internacional</span>
                </h2>
                <PrimaryButton href="/contacto">Agenda tu proyecto</PrimaryButton>
              </div>
            </div>
          </div>

          {/* ── Bloque inferior ───────────────────────────────────────────── */}
          <div className="mx-auto flex w-full max-w-[2000px] items-center justify-between gap-10">

            <div className="hidden max-w-100 items-center gap-2.5 md:flex md:ml-[max(0px,calc((100%-1700px)/2))] px-5">
              <TickLine />
              <div className="flex min-h-55 flex-col justify-between gap-2 lg:min-h-65">
                <h2 className="text-primary font-text text-lg lg:text-2xl">
                  Diseño y montaje{' '}
                  <span className="text-primary/75">a nivel nacional e internacional</span>
                </h2>
                <PrimaryButton href="/contacto">Agenda tu proyecto</PrimaryButton>
              </div>
            </div>

            <div className="bg-primary border-primary ml-auto w-full overflow-hidden rounded-t-xl border-[6px] lg:max-w-170 lg:border-10">
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
