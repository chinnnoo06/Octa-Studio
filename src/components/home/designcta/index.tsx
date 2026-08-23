'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DESIGN_CTA } from '@/lib/home-data';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';

export { Offers } from './Offers';

export const DesignCta = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.5, 1]);

  return (
    <motion.section
      ref={ref}
      data-section="designcta"
      style={{ scale }}
      className="relative z-[100] mt-section flex min-h-[880px] items-center justify-center bg-cover bg-center bg-no-repeat py-section tab:mt-0 tab:min-h-[500px] tab:!scale-100 land:min-h-[350px] mob:min-h-[300px]"
    >
      {/* La imagen va como <Image> de fondo para que Next la optimice */}
      <Image
        src="/images/pages/home/design-cta-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="container-livinor">
        <div className="mx-auto flex w-full max-w-[1375px] items-stretch justify-between gap-5">
          <Image
            src="/images/pages/home/design-line.webp"
            alt="Long white link icon with star in both side"
            width={16}
            height={430}
            className="h-[430px] w-4 max-h-[430px] shrink-0 object-contain land:flex land:items-center land:justify-center mob:hidden"
          />

          <div className="flex flex-1 flex-col items-end justify-center gap-[60px] tab:gap-10 land:justify-between land:gap-[30px] mob:items-start mob:justify-center mob:gap-5">
            <div className="flex flex-col gap-20 tab:gap-[30px] land:block">
              <h3 className="text-paper font-heading text-h6 max-w-[280px] uppercase tab:max-w-none mob:hidden">
                {DESIGN_CTA.eyebrowFirst}
                <span className="text-beige">{DESIGN_CTA.eyebrowSpan}</span>
              </h3>
              {/* text-hero pero con weight 600: el 700 es exclusivo del h1 del hero */}
              <h2 className="text-paper font-heading text-hero font-semibold uppercase">
                {DESIGN_CTA.titleFirst}
                <span className="text-beige">{DESIGN_CTA.titleSpan}</span>
              </h2>
            </div>

            <PrimaryButton href={DESIGN_CTA.cta.href}>{DESIGN_CTA.cta.label}</PrimaryButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
