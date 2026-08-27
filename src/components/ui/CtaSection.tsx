'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';
import { TickLine } from '@/components/ui/TickLine';
import Img from '@/assets/media/Img11.webp';

export const CtaSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45], [0.5, 1]);

  return (
    <motion.section
      ref={ref}
      data-section="cta"
      style={{ scale }}
      className="relative flex min-h-[80vh] lg:min-h-screen items-center justify-center overflow-hidden py-20 lg:py-25 bg-white"
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5">
        <div className="flex items-center gap-10">
          <TickLine className="text-primary hidden lg:flex" />

          <div className="flex flex-col items-start gap-5">

            <h2 className="text-primary/70 text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold uppercase leading-[1.05] tracking-[-0.02em]">
              Construyendo ideas,{' '}
              <span className="text-primary">Creando experiencias</span>
            </h2>

            <p className="text-primary/75 max-w-2xl text-base lg:text-lg">
               Desde el primer boceto hasta el desmontaje. Escríbenos y te
              acompañamos en todo el proceso.
            </p>

            <PrimaryButton href="/contacto">Hablemos ahora</PrimaryButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
