import Image from 'next/image';
import Eyebrow from '@/components/ui/Eyebrow';
import { ABOUT, STATS } from '@/lib/home-data';
import { cn } from '@/utils/cn';
import Odometer from './Odometer';
import WipeHeading from './WipeHeading';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';

const BOX_VARIANT = {
  one: 'bg-paper rounded-br-tile tab:bg-paper',
  two: 'bg-transparent border-l border-[#bfbfbf] rounded-tr-tile tab:bg-paper',
  three: 'bg-transparent border-t border-[#bfbfbf] rounded-b-tile tab:bg-paper',
  four: 'bg-card border-t border-l border-[#bfbfbf] rounded-br-tile tab:bg-paper',
} as const;

export default function About() {
  return (
    <section data-section="about" className="pt-section pb-bigsection">
      <div className="container-livinor">
        <div className="mx-auto grid max-w-[1700px] grid-cols-2 gap-[60px] tab:grid-cols-1 tab:gap-10 mob:gap-[30px]">
          {/* ── Columna izquierda ───────────────────────────────────────── */}
          <div className="flex min-h-[850px] flex-col justify-between gap-10 tab:min-h-0 mob:gap-[30px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
                <WipeHeading
                  text={ABOUT.heading}
                  className="text-ink font-heading text-h4 uppercase"
                />
              </div>

              <div className="flex max-w-[480px] items-center gap-10">
                <PrimaryButton href={ABOUT.cta.href}>{ABOUT.cta.label}</PrimaryButton>
                <p className="text-paragraph font-body text-body flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="size-2.5 shrink-0 rounded-full bg-[#00c853]"
                  />
                  {ABOUT.slotText}
                </p>
              </div>
            </div>

            <div className="rounded-card overflow-hidden">
              <Image
                src={ABOUT.image.src}
                alt={ABOUT.image.alt}
                width={630}
                height={425}
                className="h-[425px] w-full object-cover tab:h-[400px] land:h-[300px] mob:h-[250px]"
              />
            </div>
          </div>

          {/* ── Bento 2×2 de stats ──────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-0 tab:gap-5 land:gap-x-2.5 mob:flex mob:overflow-x-auto mob:pb-2.5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className={cn(
                  'flex flex-col items-end justify-end p-10 mob:min-w-[220px] mob:shrink-0',
                  BOX_VARIANT[s.variant],
                )}
              >
                <div className="flex max-w-[330px] flex-col items-end justify-between gap-10 land:max-w-none land:items-start land:gap-5 mob:flex-wrap">
                  <Odometer values={s.odometer} suffix={s.suffix} />
                  <div className="flex flex-col items-end gap-2.5 text-right land:items-start land:text-left">
                    <p className="text-ink font-heading text-h6 uppercase">{s.label}</p>
                    <p className="text-paragraph font-body text-body land:hidden">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
