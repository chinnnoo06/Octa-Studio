import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { BrandBadge } from './BrandBadge';
import { DetailStar } from './DetailStar';
import { ADVANTAGES, ADVANTAGES_CORNER_IMAGES } from '@/utils/data/advantages';
import type { StaticImageData } from 'next/image';
import ImgMarca from "@/assets/media/brand/ImgLogo.webp"
import ImgMontaje from '@/assets/media/stands/ImgStand8.webp';
import ImgRender from '@/assets/media/renders/ImgRender2.webp';
import ImgTrato from '@/assets/media/stands/ImgStand2.webp';

const TILE_SIZES = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw';

const TILE = 'w-75 shrink-0 snap-start sm:w-auto sm:shrink';

const PhotoTile = ({
  src,
  alt,
  title,
  className,
  children,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`relative flex flex-col justify-end overflow-hidden rounded-xl p-5 ${TILE} ${className}`}>
      <Image src={src} alt={alt} fill sizes={TILE_SIZES} className="object-cover" />
      <div aria-hidden="true" className="bg-fourth/50 absolute inset-0" />
      <div className="relative z-10 flex flex-col gap-5">
        {children}
        <h3 className="text-primary max-w-70 text-lg font-semibold uppercase lg:text-xl">
          {title}
        </h3>
      </div>
    </div>
  );
};

export const Advantages = () => {
  return (
    <section data-section="advantages" className="bg-primary py-20 lg:py-25">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-10 px-5">

        <div className="flex flex-col items-center gap-5">
          <Eyebrow align="center">Nuestras Ventajas</Eyebrow>
          <SectionTitle align="center" lead="20 años sin" rotating="improvisar" />
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">

          {/* ── Fila 1 ─────────────────────────────────────────────────── */}
          <div className={`border-fourth/30 bg-primary flex min-h-70 items-center justify-center rounded-xl border p-5 ${TILE}`}>
            <BrandBadge />
          </div>

          <div className={`border-fourth/30 bg-primary flex min-h-70 items-center justify-center rounded-xl border p-10 ${TILE}`}>
            <Image
              src={ImgMarca}
              alt="Logotipo de Octa Building Studio"
              className="h-full w-full object-contain"
            />
          </div>

          <div className={`border-fourth/30 bg-secondary/15 flex min-h-70 flex-col justify-between gap-5 rounded-xl border p-5 sm:col-span-2 ${TILE}`}>
            <h3 className="text-secondary max-w-90 text-lg lg:text-xl font-semibold uppercase ">
              {ADVANTAGES.centerTitle}
            </h3>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex max-w-90 flex-col gap-2.5">
                <p className="text-secondary text-3xl leading-none font-bold uppercase lg:text-4xl">
                  {ADVANTAGES.centerClaim}
                </p>
                <p className="text-fourth/75 text-sm lg:text-base">
                  {ADVANTAGES.centerClaimDetail}
                </p>
              </div>

              <div className="flex shrink-0 items-center">
                {ADVANTAGES_CORNER_IMAGES.map((img, i) => (
                  <Image
                    key={img.alt}
                    src={img.src}
                    alt={img.alt}
                    className={`border-primary size-20 rounded-xl border-4 object-cover lg:size-24 ${
                      i === 0 ? '-rotate-6' : i === 1 ? '-ml-6 rotate-3 z-10' : '-ml-6 -rotate-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Fila 2 ─────────────────────────────────────────────────── */}
          <PhotoTile
            src={ImgMontaje}
            alt="Stand de PCP montado por Octa en feria"
            title={ADVANTAGES.leftBottomTitle}
            className="min-h-100 sm:col-span-2"
          />

          <PhotoTile
            src={ImgRender}
            alt="Render tridimensional de un stand antes de fabricarse"
            title={ADVANTAGES.rightTopTitle}
            className="min-h-100"
          />

          <PhotoTile
            src={ImgTrato}
            alt="Atención a visitantes en el mostrador de un stand"
            title={ADVANTAGES.rightBottomTitle}
            className="min-h-100"
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
