import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { LivinorMark } from '@/components/ui/LivinorMark';
import { Odometer } from '@/components/home/about/Odometer';
import { BrandBadge } from './BrandBadge';
import { DetailStar } from './DetailStar';
import { ADVANTAGES, ADVANTAGES_CORNER_IMAGES } from '@/lib/home-data';

export const Advantages = () => {
  return (
    <section data-section="advantages" className="pt-section pb-bigsection">
      <div className="container-livinor">
        <div className="flex flex-col gap-layout">
          {/* Encabezado centrado */}
          <div className="flex flex-col items-center gap-5">
            <Eyebrow align="center">Advantages</Eyebrow>
            <SectionTitle align="center" lead="Why choose" rotating="us" className="text-h2" />
          </div>

          <div className="grid grid-cols-3 items-start gap-5 tab:grid-cols-1 land:flex land:gap-5 land:overflow-x-auto land:overflow-y-hidden land:pb-2">
            {/* ── Columna izquierda ────────────────────────────────────── */}
            <div className="flex flex-col gap-5 tab:grid tab:grid-cols-2 land:flex land:h-[250px] land:w-auto land:shrink-0 land:flex-row land:gap-5">
              <div className="rounded-tile bg-paper flex h-[287px] items-center justify-center border border-[#dbdbdb] px-5 py-10 land:h-[250px] land:w-[280px] land:shrink-0">
                <BrandBadge />
              </div>

              <div
                className="rounded-tile relative h-[550px] overflow-hidden bg-cover bg-center tab:h-[400px] land:h-[250px] land:w-[280px] land:shrink-0"
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
            <div className="flex flex-col gap-5 tab:grid tab:grid-cols-2 tab:h-[400px] land:flex land:h-[250px] land:w-auto land:shrink-0 land:flex-row land:gap-5">
              <div className="rounded-tile bg-card relative min-h-[270px] overflow-hidden pt-[30px] pr-0 pb-[30px] pl-[30px] land:min-h-0 land:h-[250px] land:w-[250px] land:shrink-0 land:p-5">
                {/* Las 3 fotos van escalonadas en diagonal —no apiladas— dentro de un
              wrap rotado -20°, y se salen por la derecha (la tarjeta recorta).
              Geometría medida sobre el original en reposo:

                wrap    350×192  absolute top 64.5  left 256  rotate(-20deg)
                caja    140×192  relative y CENTRADA en el wrap (mx-auto):
                        pegada a la izquierda desplaza las fotos 98px
                  foto1 140×192  absolute top 48  left -152.6
                  foto2 140×192  absolute top 65  left -14   z-index 1
                  foto3 140×178  en flujo y SIN margen: cae pegada al borde
                        izquierdo de la caja (offsetLeft 0 medido en vivo). Un
                        ml- aquí la empuja fuera de vista: la caja ya va
                        centrada por mx-auto, no hay que compensar dos veces
                cada una: border 8px #fff · radius 12 · imagen 124×162
                (la foto no llena el alto del marco: deja más blanco abajo,
                 como una polaroid)

              En <=767 las fotos NO cambian de tamaño: lo único que se mueve es
              el wrap, que encoge a 250 de ancho y se recoloca (top 93 left 150;
              top 45.5 ya en <=479). Con el left de escritorio dentro de una
              caja de 250 el bloque entero cae fuera y no se ve ni una foto.
              El título del recuadro se oculta ahí (medido: block a 991, none a 767).

              Entran escalonadas desde la derecha en bucle de 3,6s
              (`.corner-cycle` en globals.css). */}
          <div className="absolute top-[64.5px] left-[256px] h-[192px] w-[350px] rotate-[-20deg] land:top-[93px] land:left-[150px] land:w-[250px] mob:top-[45.5px]">
            <div className="corner-cycle relative mx-auto h-[192px] w-[140px]">
              <div className="border-paper absolute top-[48px] left-[-152.594px] h-[192px] w-[140px] overflow-hidden rounded-[12px] border-8">
                <Image
                  src={ADVANTAGES_CORNER_IMAGES[0].src}
                  alt={ADVANTAGES_CORNER_IMAGES[0].alt}
                  width={124}
                  height={162}
                  className="h-[162px] w-full object-cover"
                />
              </div>
              <div className="border-paper absolute top-[65px] left-[-14px] z-[1] h-[192px] w-[140px] overflow-hidden rounded-[12px] border-8">
                <Image
                  src={ADVANTAGES_CORNER_IMAGES[1].src}
                  alt={ADVANTAGES_CORNER_IMAGES[1].alt}
                  width={124}
                  height={162}
                  className="h-[162px] w-full object-cover"
                />
              </div>
              <div className="border-paper h-[178px] w-[140px] overflow-hidden rounded-[12px] border-8">
                <Image
                  src={ADVANTAGES_CORNER_IMAGES[2].src}
                  alt={ADVANTAGES_CORNER_IMAGES[2].alt}
                  width={124}
                  height={162}
                  className="h-[162px] w-full object-cover"
                />
              </div>
            </div>
          </div>
                <div className="relative z-10 flex max-w-[295px] flex-col gap-10">
                  <h3 className="text-ink font-heading text-h6 uppercase land:hidden">
                    {ADVANTAGES.centerTitle}
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    <Odometer
                      values={ADVANTAGES.centerCounter.odometer}
                      suffix={ADVANTAGES.centerCounter.suffix}
                    />
                    <p className="text-ink font-body text-body">
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
            <div className="flex flex-col gap-5 tab:grid tab:grid-cols-2 land:flex land:h-[250px] land:w-auto land:shrink-0 land:flex-row land:gap-5">
              <div
                className="rounded-tile relative flex min-h-[560px] flex-col justify-center overflow-hidden bg-cover bg-center px-5 py-[50px] tab:h-[400px] tab:min-h-0 tab:py-[30px] land:h-[250px] land:w-[250px] land:shrink-0 land:p-3"
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
                className="rounded-tile relative flex min-h-[270px] items-center overflow-hidden bg-cover bg-center land:min-h-0 land:h-[250px] land:w-[250px] land:shrink-0"
                style={{ backgroundImage: 'url(/images/pages/home/adv-lamp.webp)' }}
              >
                <span aria-hidden="true" className="absolute inset-0 bg-black/40" />
                <div className="relative z-[1] ml-10 flex max-w-[230px] flex-col gap-[30px]">
                  <DetailStar
                    className="text-paper spin-slow size-[59px]"
                    style={{ ['--spin-duration' as string]: '6s' }}
                  />
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
