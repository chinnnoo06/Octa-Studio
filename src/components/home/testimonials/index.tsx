import { Eyebrow } from '@/components/ui/Eyebrow';
import { TestimonialCarousel } from './TestimonialCarousel';

/**
 * Testimonials (`section.testimonials`, y 11134–12065). Sección oscura.
 *
 * Igual que `process`: la foto de fondo ya es oscura (media RGB rgb(21,21,21))
 * y **no lleva overlay CSS**. Debajo va un `#151515` sólido.
 *
 * El título es de un solo tono: aquí no hay rotador.
 */
export const Testimonials = () => {
  return (
    <section
      data-section="testimonials"
      className="bg-[#151515] bg-cover bg-center bg-no-repeat pt-bigsection pb-section mob:pb-[60px]"
      style={{ backgroundImage: 'url(/images/pages/home/testimonials-bg.webp)' }}
    >
      <div className="container-livinor">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col items-center gap-5">
            <Eyebrow tone="light" align="center">Testimonials</Eyebrow>
            <h2 className="text-paper font-heading text-h2 max-w-[933px] text-center uppercase">
              Our Happy Customers
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}
