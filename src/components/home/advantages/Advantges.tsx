import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BrandBadge } from './BrandBadge';
import { AdvantageFan } from './AdvantageFan';
import { DetailStar } from './DetailStar';
import { ADVANTAGES } from '@/utils/data/advantages';
import { Reveal } from '@/components/ui/Reveal';
import type { StaticImageData } from 'next/image';
import ImgMarca from "@/assets/media/brand/ImgLogo.webp"
import ImgMontaje from '@/assets/media/stands/ImgStand8.webp';
import ImgRender from '@/assets/media/renders/ImgRender2.webp';
import ImgTrato from '@/assets/media/stands/ImgStand2.webp';

const TILE_SIZES = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw';

/** El tile de montaje ocupa `col-span-2`: el doble de ancho que los demás. */
const WIDE_TILE_SIZES = '(min-width: 1024px) 50vw, 100vw';

const TILE = 'w-75 shrink-0 snap-start sm:w-auto sm:shrink';

const PhotoTile = ({
  src,
  alt,
  title,
  className,
  delay,
  children,
  sizes = TILE_SIZES,
  quality,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
  sizes?: string;
  quality?: number;
}) => {
  return (
    <Reveal
      delay={delay}
      className={`relative flex flex-col justify-end overflow-hidden rounded-xl p-5 ${TILE} ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} quality={quality} className="object-cover" />
      <div aria-hidden="true" className="bg-fourth/50 absolute inset-0" />
      <div className="relative z-10 flex flex-col gap-5">
        {children}
        <h3 className="text-primary max-w-90 text-xl lg:text-2xl font-semibold uppercase">
          {title}
        </h3>
      </div>
    </Reveal>
  );
};

export const Advantages = () => {
  return (
    <section data-section="advantages" className="bg-primary py-20 lg:py-25">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-10 px-5 lg:px-15">

        <div className="text-secondary flex flex-col items-center gap-5">
          <Eyebrow>Nuestras Ventajas</Eyebrow>
          <SectionTitle align="center" lead="20 años sin" rotating="improvisar" />
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden pb-5 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">

          {/* ── Fila 1 ─────────────────────────────────────────────────── */}
          <Reveal className={`border-fourth/30 bg-primary flex min-h-70 items-center justify-center rounded-xl border p-5 ${TILE}`}>
            <BrandBadge />
          </Reveal>

          <Reveal
            delay={0.08}
            className={`border-fourth/30 bg-primary flex min-h-70 items-center justify-center rounded-xl border p-10 ${TILE}`}
          >
            <Image
              src={ImgMarca}
              alt="Logotipo de Octa Building Studio"
              sizes="(min-width: 1024px) 300px, 220px"
              className="h-full w-full object-contain"
            />
          </Reveal>

          <Reveal
            delay={0.16}
            className={`border-fourth/30 bg-secondary/15 flex min-h-70 flex-col justify-between gap-5 rounded-xl border p-5 sm:col-span-2 ${TILE}`}
          >
            <h3 className="text-secondary max-w-90 font-semibold text-xl lg:text-2xl uppercase ">
              {ADVANTAGES.centerTitle}
            </h3>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex max-w-90 flex-col gap-2.5">
                <p className="text-secondary font-gentleman text-7xl lg:text-8xl leading-[0.7] font-normal tracking-[0.04em] normal-case">
                  {ADVANTAGES.centerClaim}
                </p>
                <p className="text-fourth/75 text-sm lg:text-base">
                  {ADVANTAGES.centerClaimDetail}
                </p>
              </div>

              <AdvantageFan />
            </div>
          </Reveal>

          {/* ── Fila 2 ─────────────────────────────────────────────────── */}
          <PhotoTile
            src={ImgMontaje}
            alt="Stand de PCP montado por Octa en feria"
            title={ADVANTAGES.leftBottomTitle}
            className="min-h-100 sm:col-span-2"
            delay={0.24}
            sizes={WIDE_TILE_SIZES}
            quality={90}
          />

          <PhotoTile
            src={ImgRender}
            alt="Render tridimensional de un stand antes de fabricarse"
            title={ADVANTAGES.rightTopTitle}
            className="min-h-100"
            delay={0.32}
          />

          <PhotoTile
            src={ImgTrato}
            alt="Atención a visitantes en el mostrador de un stand"
            title={ADVANTAGES.rightBottomTitle}
            className="min-h-100"
            delay={0.4}
          >
            <DetailStar
              className="text-primary spin-slow size-15"
              style={{ ['--spin-duration' as string]: '6s' }}
            />
          </PhotoTile>
        </div>
      </div>
    </section>
  );
}
