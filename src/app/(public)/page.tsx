import { Hero } from '@/components/home/hero/Hero';
import { About } from '@/components/home/about/About';
import { Services } from '@/components/home/services/Services';
import { Process } from '@/components/home/process/Process';
import { Projects } from '@/components/home/projects/Projects';
import { BrandMarquee } from '@/components/ui/BrandMarquee';
import { Advantages } from '@/components/home/advantages/Advantges';
import { Testimonials } from '@/components/home/testimonials/Testimonials';
import { Faqs } from '@/components/home/faqs/Faqs';
import { Blogs } from '@/components/home/blogs/Blogs';
import { CtaSection } from '@/components/ui/CtaSection';

/**
 * El orden es el guion de una conversación de venta, y el fondo dice de qué
 * tipo es cada sección:
 *
 *   oscuro  → un momento, no contenido. Solo tres en toda la home: la apertura,
 *             la prueba social y el cierre.
 *
 * El Blog va DESPUÉS del cierre a propósito, por dos motivos: separa la foto
 * del CTA del azul del footer —pegados se funden en un solo bloque oscuro— y
 * hace de aterrizaje suave para quien todavía no está listo para escribir.
 *   thrird  → bloque que agrupa o da respiro.
 *   primary → contenido que se lee.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />          {/* FOTO   · quiénes somos, de golpe */}
      <About />         {/* thrird · los 20 años            */}
      <Services />      {/* blanco · qué hacemos            */}
      <Process />       {/* AZUL   · cómo lo hacemos        */}
      <Projects />      {/* blanco · la prueba              */}
      <BrandMarquee />  {/* thrird · respiro                */}
      <Advantages />    {/* blanco · por qué nosotros       */}
      <Testimonials />  {/* FOTO   · lo dicen ellos         */}
      <Faqs />          {/* thrird · últimas dudas          */}
      <CtaSection />    {/* FOTO   · el cierre              */}
      <Blogs />         {/* blanco · si aún no te decides   */}
    </main>
  );
}
