'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { rotatorY, rotatorTransition } from '@/utils/motion/rotator';
import { cn } from '@/utils/cn';

type TSectionTitleProps = {
  lead: string;
  rotating: string;
  trail?: string;
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
};

const LINE = 'h-[1.2em]';

export const SectionTitle = ({ lead, rotating, trail, tone = 'dark', align = 'left' }: TSectionTitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { amount: 0 });
  const reduced = useReducedMotion();

  const light = tone === 'light';

  const copia = (tenue: boolean, aria: boolean) => (
    <span
      aria-hidden={aria}
      className={cn(
        'flex items-center',
        LINE,
        tenue && (light ? 'text-primary/75' : 'text-secondary/75'),
      )}
    >
      {rotating}
    </span>
  );

  return (
    <h2
      ref={ref}
      className={cn(
        'text-[2rem] small:text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] font-bold uppercase leading-[1.2] tracking-[-0.02em] ',
        light ? 'text-primary' : 'text-secondary',
        align === 'center' && 'text-center',
      )}
    >
      {lead}{' '}
      <span className={cn('inline-block max-w-full overflow-hidden align-bottom', LINE)}>
        <motion.span
          className="flex flex-col"
          animate={{ y: inView && !reduced ? rotatorY : '0%' }}
          transition={rotatorTransition}
        >
          {copia(false, false)}
          {copia(true, true)}
          {copia(false, true)}
        </motion.span>
      </span>
      {trail ? ` ${trail}` : ''}
    </h2>
  );
};