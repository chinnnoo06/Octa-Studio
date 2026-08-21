import Image from 'next/image';
import Button from '@/components/ui/Button';
import { HERO } from '@/lib/home-data';
import HeroSlider from './HeroSlider';

/**
 * Hero (`section.hero`, 1440×972 en desktop).
 *
 * Estructura del original:
 *   section.hero [bg Hero_Banner.webp cover 50%/50%, min-h 950, mb 100]
 *   └ .hero-navbar-wrap [70px]         ← la Navbar va absolute desde el layout;
 *                                        aquí solo se reserva su altura.
 *   └ .hero-content-box [mt 80, flex col, justify-between, gap 100, h 822]
 *     ├ .hero-top    [h 300 @y150]  h1 a la izquierda + caja informativa a la derecha
 *     └ .hero-bottom [h 422 @y550]  bloque de texto + tira de imágenes
 *
 * El fondo se verificó píxel a píxel: `cover` centrado reproduce la referencia
 * con ratio 1.000 en todos los puntos medidos. **No lleva overlay** — la banda
 * oscura de arriba es de la propia navbar, no del hero.
 *
 * El bloque `.left-text-wrap.dex-hide` del original está oculto en desktop y
 * aparece en ≤767: es la variante móvil del tagline + CTA, con el layout
 * reordenado. No es un stack del desktop.
 */
export default function Hero() {
  const tagline = (
    <h2 className="text-paper font-heading text-h6 uppercase">
      {HERO.taglineFirst}
      <span className="text-beige">{HERO.taglineSpan}</span>
    </h2>
  );

  const cta = <Button href={HERO.cta.href}>{HERO.cta.label}</Button>;

  return (
    <section
      data-section="hero"
      className="relative mb-section min-h-[950px] w-full bg-cover bg-center bg-no-repeat tab:min-h-[600px] land:min-h-[400px] mob:min-h-[520px]"
      style={{ backgroundImage: 'url(/images/pages/home/hero-banner.webp)' }}
    >
      {/* Altura reservada para la navbar, que se pinta absolute desde el layout */}
      <div className="h-[70px]" aria-hidden="true" />

      <div className="mt-20 flex min-h-[822px] flex-col justify-between gap-[100px] tab:mt-[60px] tab:min-h-[530px] tab:gap-[60px] land:mt-10 land:min-h-0 land:gap-10 mob:mt-[30px] mob:gap-[30px]">
        {/* ── Bloque superior ───────────────────────────────────────────── */}
        <div className="mx-auto flex w-full max-w-[1475px] items-start justify-between gap-10 px-container tab:grid tab:grid-cols-2 tab:place-items-start tab:justify-items-end tab:gap-5 land:flex land:flex-col mob:items-center mob:gap-5">
          {/* h1: caja de 998px con overflow hidden y texto alineado a la derecha */}
          <div className="w-full max-w-[998px] overflow-hidden">
            <h1 className="text-paper font-heading text-hero text-right uppercase tab:text-left mob:text-center">
              {HERO.titleFirst}
              <span className="text-beige">{HERO.titleSpan}</span>
            </h1>
          </div>

          {/* Caja informativa derecha */}
          <div className="flex items-center gap-[15px] tab:ml-auto land:w-full land:flex-row land:items-end land:justify-between mob:flex-col mob:gap-5">
            <Image
              src="/images/shared/tick-line.svg"
              alt=""
              width={22}
              height={300}
              aria-hidden="true"
              className="h-[300px] w-[22px] shrink-0 tab:hidden"
            />

            <div className="flex flex-col items-center justify-between gap-4 tab:ml-auto tab:items-start mob:mx-auto mob:gap-3">
              <Image
                src="/images/shared/mark.svg"
                alt="Icon"
                width={197}
                height={197}
                className="size-[197px] tab:h-20 tab:w-auto"
              />
              <div className="flex flex-col gap-[5px] mob:hidden">
                {HERO.points.map((p) => (
                  <p key={p} className="text-paper font-body text-body leading-none font-semibold">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Variante móvil del tagline + CTA (`.dex-hide`): oculta en desktop */}
            <div className="hidden land:flex land:flex-col land:gap-5 mob:items-center mob:justify-between">
              <div className="mob:text-center">{tagline}</div>
              {cta}
            </div>
          </div>
        </div>

        {/* ── Bloque inferior ───────────────────────────────────────────── */}
        <div className="flex min-h-[422px] items-center justify-between gap-10 pl-container tab:min-h-0 tab:pl-10 land:pl-0">
          {/* Texto + CTA de desktop */}
          <div className="flex max-w-[300px] items-center gap-2.5 land:hidden">
            <Image
              src="/images/shared/tick-line.svg"
              alt=""
              width={22}
              height={300}
              aria-hidden="true"
              className="h-[300px] w-[22px] shrink-0"
            />
            <div className="flex min-h-[260px] flex-col justify-between gap-[5px]">
              {tagline}
              {cta}
            </div>
          </div>

          {/* Tira de imágenes: caja blanca redondeada solo por arriba */}
          <div className="bg-paper ml-auto w-full max-w-[690px] overflow-hidden rounded-t-tile border-[10px] border-paper tab:max-w-none">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
