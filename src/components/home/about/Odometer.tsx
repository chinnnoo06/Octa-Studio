'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Odometer({
  values,
  suffix,
}: {
  values: readonly string[];
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className="flex items-end">
      <div data-odometer className="h-[66px] overflow-hidden tab:h-[30px] land:h-[25px]">
        <motion.div
          className="flex flex-col"
          initial={{ y: '-90%' }}
          animate={{ y: inView ? '0%' : '-90%' }}
          transition={{ duration: 3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {values.map((v, i) => (
            <span
              key={`${v}-${i}`}
              aria-hidden={i > 0}
              className="text-ink font-heading text-h4 block h-[66px] leading-[66px] tab:h-[30px] tab:leading-[30px] land:h-[25px] land:leading-[25px]"
            >
              {v}
            </span>
          ))}
        </motion.div>
      </div>
      {suffix ? (
        <span className="text-ink font-heading text-h4 leading-[66px] tab:leading-[30px] land:leading-[25px]">
          {suffix}
        </span>
      ) : null}
    </div>
  );
}
