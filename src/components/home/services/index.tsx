import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import WipeHeading from '@/components/home/about/WipeHeading';
import { SERVICES, SERVICES_HEADING } from '@/lib/home-data';
import ServicesMarquee from './ServicesMarquee';

/**
 * Services (`section.overflow`, y 5772–7318).
 *
 * Tres bloques: la cabecera partida por una línea vertical, las 3 tarjetas y el
 * marquee de dos filas.
 *
 * Las 3 tarjetas son **idénticas** (420×546) y arrancan a la misma altura: lo
 * que parece un escalonado en el screenshot es que el bloque de texto está
 * pegado abajo (`justify-between`) y el título ocupa 1 o 2 líneas según el
 * servicio.
 *
 * El titular grande usa el mismo wipe por líneas que `about` (8 franjas grises
 * con `mix-blend-mode: lighten`, solo ≥992px). En ≤767 el original directamente
 * **oculta** ese titular.
 */
export default function Services() {
  return (
    <section data-section="services" className="overflow-hidden pt-bigsection pb-section">
      <div className="container-livinor">
        <div className="flex flex-col gap-section tab:gap-[60px] land:gap-10">
          {/* ── Cabecera ─────────────────────────────────────────────────── */}
          <div className="grid grid-cols-[.3fr_.7fr] items-start gap-10 border-t border-[#bfbfbf] tab:gap-5 land:flex land:flex-col land:gap-10 land:border-t-0">
            <div className="h-full border-r border-[#bfbfbf] pt-[60px] pr-5 tab:pt-5 land:rounded-tile land:flex land:flex-row land:items-end land:justify-between land:border land:border-[#bfbfbf] land:p-0 land:pb-5 land:pl-5 mob:flex-col mob:items-start mob:p-2.5">
              <div className="flex max-w-[290px] flex-col gap-10">
                <Eyebrow>Our Services</Eyebrow>
                <div className="rounded-card overflow-hidden">
                  <Image
                    src="/images/pages/home/services-stairs.webp"
                    alt="Lightening Stairs"
                    width={290}
                    height={185}
                    className="h-[185px] w-full object-cover land:h-[200px]"
                  />
                </div>
              </div>
              {/* Botón que el original solo muestra en ≤767 (`.button-hide`) */}
              <div className="hidden land:block">
                <Button href="/services">All Services</Button>
              </div>
            </div>

            <div className="flex items-stretch land:hidden">
              <div className="flex max-w-[1075px] flex-col gap-10 pt-[60px] tab:pt-5">
                <WipeHeading
                  text={SERVICES_HEADING}
                  className="text-ink font-heading text-h4 uppercase"
                />
                <div className="land:hidden">
                  <Button href="/services">View All Services</Button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Tarjetas ─────────────────────────────────────────────────── */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-3 gap-[30px] tab:grid-cols-2 tab:gap-5 land:flex land:overflow-x-auto land:pb-5 mob:flex-col mob:overflow-visible">
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-paper rounded-tile hover:bg-card flex min-h-[500px] items-center px-5 py-[60px] transition-colors duration-500 tab:min-h-0 tab:border tab:border-[#8e8e8e] tab:py-10 land:min-w-[300px] land:shrink-0 land:p-3"
                >
                  <div className="flex min-h-[380px] w-full max-w-[380px] flex-col justify-between gap-[60px] tab:min-h-0 tab:gap-10 land:max-w-none land:flex-row land:items-center land:justify-between land:gap-5 mob:gap-[15px]">
                    <div className="bg-card group-hover:bg-paper flex size-[150px] shrink-0 items-center justify-center rounded-[14px] transition-colors duration-500 tab:size-20 tab:rounded-card land:size-[60px] land:rounded-tile mob:size-10 mob:min-w-[30px] mob:rounded-[5px]">
                      <Image
                        src={s.icon}
                        alt={s.iconAlt}
                        width={90}
                        height={90}
                        className="size-[90px] transition-transform duration-500 group-hover:scale-110 tab:size-[50px] land:size-9 mob:size-6"
                      />
                    </div>
                    <div className="flex flex-col gap-6">
                      <h3 className="text-ink font-heading text-h5 uppercase">{s.title}</h3>
                      <p className="text-paragraph font-body text-body land:hidden">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Marquee de 2 filas ───────────────────────────────────────── */}
          <ServicesMarquee />
        </div>
      </div>
    </section>
  );
}
