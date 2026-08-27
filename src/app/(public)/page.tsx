import { Hero } from '@/components/home/hero/Hero';
import { About } from '@/components/home/about/About';
import { Projects } from '@/components/home/projects/Projects';
import { Process } from '@/components/home/process/Process';
import { Services } from '@/components/home/services/Services';
import { CtaSection } from '@/components/ui/CtaSection';
import { Advantages } from '@/components/home/advantages/Advantges';
import { Testimonials } from '@/components/home/testimonials/Testimonials';
import { Faqs } from '@/components/home/faqs/Faqs';
import { Blogs } from '@/components/home/blogs/Blogs';
import { BrandMarquee } from '@/components/ui/BrandMarquee';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Process />
      <Services />
      <BrandMarquee />
      <CtaSection />
      <Advantages />
      <Testimonials />
      <Faqs />
      <Blogs />
    </main>
  );
}
