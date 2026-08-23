import { Marquee } from '@/components/ui/Marquee';
import { PlusIcon } from '@/components/ui/PlusIcon';
import { OFFERS } from '@/lib/home-data';

/**
 * Franja de ofertas (`section.no-padding`, y 8303–8394, 91px de alto).
 *
 * Fondo `#fae9ce`, `padding-block: 30`, `overflow: hidden`, `margin-bottom: 100`.
 * Cada ítem es `<icono 17px> H6 <icono 17px>` con gap 20, y los ítems van
 * separados por gap 10.
 *
 * Dirección **derecha**, velocidad medida 69.1 px/s sobre un set de 1178px
 * → 1178 / 69.1 ≈ 17.0s por vuelta.
 */
export const Offers = () => {
  return (
    <section
      data-section="offers"
      className="bg-card mb-section overflow-hidden py-[30px] tab:mb-0 land:py-5"
    >
      <Marquee duration={17} direction="right" gap={10} pauseOnHover={false}>
        {OFFERS.map((o) => (
          <div key={o} className="flex shrink-0 items-center gap-5">
            <PlusIcon className="text-ink size-[17px] shrink-0" />
            <span className="text-ink font-heading text-h6 whitespace-nowrap uppercase">
              {o}
            </span>
            <PlusIcon className="text-ink size-[17px] shrink-0" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
