'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TestimonialCarousel } from './TestimonialCarousel';
import { zoomOnScroll } from '@/utils/motion/scroll';
import Img from '@/assets/media/backgrounds/ImgBackground3.webp';

export const Testimonials = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: zoomOnScroll.offset });
  const scale = useTransform(scrollYProgress, zoomOnScroll.range, zoomOnScroll.scale);

  return (
    <section ref={ref} data-section="testimonials" className="bg-primary">
      <motion.div
        style={{ scale }}
        className="bg-fourth relative flex min-h-[60vh] items-center justify-center overflow-hidden py-20 lg:min-h-screen lg:py-25"
      >
        <Image
          src={Img}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />

        <div aria-hidden="true" className="bg-fourth/25 absolute inset-0" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5">

          <div className="text-primary flex w-full flex-col items-center gap-5 text-center">
            <Eyebrow>Testimonios</Eyebrow>
            <SectionTitle tone="light" align="center" lead="Lo dicen" rotating="ellos" trail="no nosotros" />
          </div>

          <TestimonialCarousel />
        </div>
      </motion.div>
    </section>
  );
}
