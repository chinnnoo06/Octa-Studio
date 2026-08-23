import HeroSlider from './HeroSlider';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';
import { TickLine } from '@/components/ui/TickLine';


export const Hero = () => {
  return (
    <section
      data-section="hero"
      className="relative w-full overflow-x-clip bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/pages/home/about-office.webp)' }}
    >
      <div
        aria-hidden="true"
        className="from-primary/50 to-primary/75 absolute inset-0 bg-linear-to-b"
      />

      <div className="relative z-10 w-full">
        <div className="h-18" aria-hidden="true" />

        <div className="mt-10 flex flex-col justify-between gap-8 sm:mt-14 md:mt-20 md:gap-10 md:min-h-135 lg:min-h-200">

          {/* ── Bloque superior ───────────────────────────────────────────── */}
          <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center gap-8 px-5 lg:gap-10 md:flex-row md:items-start md:justify-start md:gap-10">

            <div className="w-full md:w-fit md:min-w-0">
              <h1 className="text-secondary/75 font-display px-[0.08em] pb-[0.14em] text-center md:text-end
                   text-[3rem] sm:text-[4rem] md:text-[3.5rem] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8rem]
                   leading-[0.85] font-normal tracking-[0.04em] normal-case">
                Construyendo ideas, <br className="hidden md:block" />
                <span className="text-secondary">Creando experiencias</span>
              </h1>
            </div>

            <div className="flex w-full flex-col items-center gap-5 md:w-auto md:flex-row md:items-start md:gap-6 lg:gap-10">
              <TickLine className="text-secondary hidden md:flex" />

              <div className="hidden md:flex md:flex-col md:gap-5">
                <p className="text-secondary font-text text-base tracking-[0.15em] uppercase">
                  Qué montamos
                </p>

                <ul role="list" className="divide-secondary/25 flex flex-col divide-y">
                  <li className="flex items-baseline gap-5 pb-5">
                    <span className="text-secondary font-text text-sm tracking-[0.15em]">
                      01
                    </span>
                    <span className="text-secondary font-text text-sm leading-none lg:text-base">
                      Stands y ferias
                    </span>
                  </li>
                  <li className="flex items-baseline gap-5 py-5">
                    <span className="text-secondary font-text text-sm tracking-[0.15em]">
                      02
                    </span>
                    <span className="text-secondary font-text text-sm leading-none lg:text-base">
                      Shows y eventos masivos
                    </span>
                  </li>
                  <li className="flex items-baseline gap-5 py-5">
                    <span className="text-secondary font-text text-sm tracking-[0.15em]">
                      03
                    </span>
                    <span className="text-secondary font-text text-sm leading-none lg:text-base">
                      Congresos y convenciones
                    </span>
                  </li>
                  <li className="flex items-baseline gap-5 py-5">
                    <span className="text-secondary font-text text-sm tracking-[0.15em]">
                      04
                    </span>
                    <span className="text-secondary font-text text-sm leading-none lg:text-base">
                      Showrooms y activaciones
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center gap-5 md:hidden">

                <p className="flex items-center gap-3.5">
                  <span className="text-secondary font-text text-5xl leading-none font-light">
                    20
                  </span>
                  <span className="text-secondary/75 font-text text-start text-[0.6875rem] leading-tight tracking-[0.15em] uppercase">
                    años de montajes
                    <br />
                    nacional e internacional
                  </span>
                </p>

                <h2 className="text-secondary font-text text-center text-base leading-snug uppercase sm:text-lg">
                  Todo desde cero{' '}
                  <span className="text-secondary/75">de la idea al desmontaje.</span>
                </h2>
                <PrimaryButton href="/contacto">Agenda tu proyecto</PrimaryButton>
              </div>
            </div>
          </div>

          {/* ── Bloque inferior ───────────────────────────────────────────── */}
          <div className="mx-auto flex w-full max-w-[2000px] items-center justify-between gap-10">

            <div className="hidden max-w-100 items-center gap-2.5 md:flex md:ml-[max(0px,calc((100%-1700px)/2))] px-5">
              <TickLine className="text-secondary" />
              <div className="flex min-h-55 flex-col justify-between gap-5 lg:min-h-65">
                <p className="flex items-center gap-4">
                  <span className="text-secondary font-text text-6xl lg:text-7xl leading-none font-light">
                    20
                  </span>
                  <span className="text-secondary font-text text-xs lg:text-sm leading-tight tracking-[0.2em] uppercase">
                    años de montajes
                    <br />
                    nacional e internacional
                  </span>
                </p>

                <h2 className="text-secondary font-text text-lg uppercase">
                  Todo desde cero{' '}
                  <span className="text-secondary/75">de la idea al desmontaje.</span>
                </h2>
                <PrimaryButton href="/contacto">Agenda tu proyecto</PrimaryButton>
              </div>
            </div>

            <div className="bg-secondary border-secondary ml-auto w-full overflow-hidden rounded-t-xl border-5 lg:max-w-170 lg:border-10">
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
