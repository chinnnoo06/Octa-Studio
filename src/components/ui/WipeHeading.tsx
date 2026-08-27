'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const STRIPES = 8;

const Stripe = ({ index, progress }: { index: number; progress: MotionValue<number> }) => {
  const start = 0.2 + index * 0.05;
  const x = useTransform(progress, [start, start + 0.05], ['0%', '100%']);
  return (
    <motion.span
      style={{ x, top: index * 50 }}
      className="bg-muted absolute left-0 block h-[50px] w-full mix-blend-lighten"
    />
  );
}

export const WipeHeading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <div ref={ref} className="relative overflow-hidden">
      <h2 className={className}>{text}</h2>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tab:hidden">
        {Array.from({ length: STRIPES }, (_, i) => (
          <Stripe key={i} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}
