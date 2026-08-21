import Image from 'next/image';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionTitle from '@/components/ui/SectionTitle';
import LivinorMark from '@/components/ui/LivinorMark';
import Odometer from '@/components/home/about/Odometer';
import BrandBadge from './BrandBadge';
import { ADVANTAGES } from '@/lib/home-data';

/**
 * Advantages (`section.choice`, y 8494–9818). Bento de 3 columnas.
 *
 * La altura de la fila (857px) la manda la columna izquierda: 287 + 20 + 550.
 * Las otras dos suman 850 y dejan 7px de aire abajo, así que las columnas se
 * alinean arriba y no se estiran.
 *
 * Los 287px de la caja del badge incluyen su `border: 1px solid #dbdbdb`
 * (40 + 205 + 40 + 2).
 *
 * En ≤991 las 3 columnas se apilan pero cada una se convierte en un grid de 2;
 * en ≤767 todo pasa a scroller horizontal.
 */
export default function Advantages() {
  return (
    <section data-section="advantages" className="pt-section pb-bigsection">
      <div className="container-livinor">
        <div className="flex flex-col gap-layout">
          {/* Encabezado centrado */}
          <div className="flex flex-col items-center gap-5">
            <Eyebrow align="center">Advantages</Eyebrow>
            <SectionTitle align="center" lead="Why choose" rotating="us" className="text-h2" />
          </div>

          <div className="grid grid-cols-3 items-start gap-5 tab:grid-cols-1 land:flex land:overflow-x-auto land:pb-5">
            {/* ── Columna izquierda ────────────────────────────────────── */}
            <div className="flex flex-col gap-5 tab:grid tab:grid-cols-2 land:flex land:max-h-[300px] mob:max-h-[250px]">
              <div className="rounded-tile bg-paper flex h-[287px] items-center justify-center border border-[#dbdbdb] px-5 py-10 land:min-w-[250px] mob:min-w-[280px]">
                <BrandBadge />
              </div>

              <div
                className="rounded-tile relative h-[550px] overflow-hidden bg-cover bg-center tab:h-[400px] land:min-w-[250px] mob:h-[250px] mob:min-w-[280px]"
                style={{ backgroundImage: 'url(/images/pages/home/adv-sofa.webp)' }}
              >
                {/* Único gradiente de la sección: 3deg, transparente → 60% negro */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(3deg,rgba(0,0,0,0),rgba(0,0,0,.6))]"
                />
                <h3 className="text-paper font-heading text-h6 relative top-[50px] left-[50px] z-[1] max-w-[210px] uppercase tab:top-10 tab:left-10 land:top-5 land:left-5 mob:top-[15px] mob:left-2.5 mob:max-w-none">
                  {ADVANTAGES.leftBottomTitle}
                </h3>
              </div>
            </div>

            {/* ── Columna central ──────────────────────────────────────── */}
            <div className="flex flex-col gap-5 tab:grid tab:grid-cols-2 tab:h-[400px] land:flex land:max-h-[300px] mob:max-h-[250px]">
              <div className="rounded-tile bg-card relative min-h-[270px] overflow-hidden pt-[30px] pr-0 pb-[30px] pl-[30px] land:min-w-[250px] land:p-5 mob:min-h-[250px]">
                {/* Fotos que asoman rotadas por la derecha y se recortan */}
                <div className="absolute inset-[auto_0%_5%_60%] max-w-[350px] rotate-[-20deg]">
                  <Image
                    src="/images/pages/home/adv-corner-1.webp"
                    alt="Modern Home"
                    width={350}
                    height={200}
                    className="rounded-tile w-full object-cover"
                  />
                </div>
                <div className="relative z-10 flex max-w-[295px] flex-col gap-10">
                  <h3 className="text-ink font-heading text-h6 uppercase">
                    {ADVANTAGES.centerTitle}
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    <Odometer
                      values={ADVANTAGES.centerCounter.odometer}
                      suffix={ADVANTAGES.centerCounter.suffix}
                    />
                    <p className="text-paragraph font-body text-body">
                      {ADVANTAGES.centerCounterLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* El original oculta esta caja en ≤991 */}
              <div className="rounded-tile bg-paper flex min-h-[270px] items-center justify-center border border-[#dbdbdb] tab:hidden">
                <LivinorMark className="text-muted size-[178px]" />
              </div>

              {/* Y esta otra en ≤767 */}
              <div className="flex min-h-[270px] justify-between gap-5 land:hidden">
                <Image
                  src="/images/pages/home/adv-mirror.webp"
                  alt="Mirror beside a wall"
                  width={203}
                  height={270}
                  className="rounded-card h-[270px] w-[203px] object-cover"
                />
                <Image
                  src="/images/pages/home/adv-beautiful-sofa.webp"
                  alt="Modern sofa"
                  width={203}
                  height={270}
                  className="rounded-card h-[270px] w-[203px] object-cover tab:hidden"
                />
              </div>
            </div>

            {/* ── Columna derecha ──────────────────────────────────────── */}
            <div className="flex flex-col gap-5 tab:grid tab:grid-cols-2 land:flex land:max-h-[300px] mob:max-h-[250px]">
              <div
                className="rounded-tile relative flex min-h-[560px] flex-col justify-center overflow-hidden bg-cover bg-center px-5 py-[50px] tab:h-[400px] tab:min-h-0 tab:py-[30px] land:h-[300px] land:min-w-[250px] mob:h-[250px] mob:p-3"
                style={{ backgroundImage: 'url(/images/pages/home/adv-girl-bg.webp)' }}
              >
                <span aria-hidden="true" className="absolute inset-0 bg-black/40" />
                <div className="relative z-[1] flex max-w-[450px] flex-col gap-[50px] tab:gap-[30px]">
                  <div className="rounded-tile overflow-hidden border-[0.5px] border-white">
                    <Image
                      src="/images/pages/home/adv-girl-inside.png"
                      alt="A girl using mobile"
                      width={387}
                      height={294}
                      className="h-[294px] w-full object-cover land:h-[160px]"
                    />
                  </div>
                  <h3 className="text-paper font-heading text-h6 max-w-[230px] uppercase">
                    {ADVANTAGES.rightTopTitle}
                  </h3>
                </div>
              </div>

              <div
                className="rounded-tile relative flex min-h-[270px] items-center overflow-hidden bg-cover bg-center land:min-w-[250px] mob:min-h-[250px]"
                style={{ backgroundImage: 'url(/images/pages/home/adv-lamp.webp)' }}
              >
                <span aria-hidden="true" className="absolute inset-0 bg-black/40" />
                <div className="relative z-[1] ml-10 flex max-w-[230px] flex-col gap-[30px]">
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    aria-hidden="true"
                    className="text-paper size-[51px]"
                  >
                    <path
                      d="M25.5 0c1.4 13.6 11.9 24.1 25.5 25.5C37.4 26.9 26.9 37.4 25.5 51 24.1 37.4 13.6 26.9 0 25.5 13.6 24.1 24.1 13.6 25.5 0Z"
                      fill="currentColor"
                    />
                  </svg>
                  <h3 className="text-paper font-heading text-h6 uppercase">
                    {ADVANTAGES.rightBottomTitle}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
