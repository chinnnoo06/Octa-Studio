'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TestimonialCarousel } from './TestimonialCarousel';
import Img from '@/assets/media/backgrounds/ImgBackground3.webp';

export const Testimonials = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45], [0.5, 1]);

  return (
    <motion.section
      ref={ref}
      data-section="testimonials"
      style={{ scale }}
      className="relative flex min-h-[60vh] lg:min-h-screen items-center justify-center overflow-hidden py-20 lg:py-25 bg-white"
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

        <div className="flex w-full flex-col items-center gap-5 text-center">
          <Eyebrow tone="light">Testimonios</Eyebrow>
          <h2 className="text-primary/75 text-4xl lg:text-5xl font-bold uppercase leading-[1.2] tracking-[-0.02em]">
            Lo dicen <span className="text-primary">ellos</span>, no nosotros
          </h2>
        </div>

        <TestimonialCarousel />
      </div>
    </motion.section>
  );
}
