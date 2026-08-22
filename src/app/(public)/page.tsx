import type { Metadata } from 'next';
import Hero from '@/components/home/hero';
import About from '@/components/home/about';
import Projects from '@/components/home/projects';
import Process from '@/components/home/process';
import Services from '@/components/home/services';
import DesignCta, { Offers } from '@/components/home/designcta';
import Advantages from '@/components/home/advantages';
import Products from '@/components/home/products';
import Testimonials from '@/components/home/testimonials';
import Blogs from '@/components/home/blogs';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Process />
      <Services />
      <DesignCta />
      <Offers />
      <Advantages />
      <Products />
      <Testimonials />
      <Blogs />
    </main>
  );
}
