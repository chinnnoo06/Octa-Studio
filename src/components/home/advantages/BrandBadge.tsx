'use client';

import { motion } from 'framer-motion';
import { DotRing } from '../../ui/DotRing';
import { ADVANTAGES_BADGE_TEXTS } from '@/utils/data/advantages';

const DURACION_POR_ETIQUETA = 2.32;

export const BrandBadge = () => {
  const etiquetas = [...ADVANTAGES_BADGE_TEXTS, ADVANTAGES_BADGE_TEXTS[0]];
  const duracion = ADVANTAGES_BADGE_TEXTS.length * DURACION_POR_ETIQUETA;

  return (
    <div className="relative flex size-38 items-center justify-center lg:size-50">
      <DotRing
        className="spin-slow text-secondary size-full"
        style={{ ['--spin-duration' as string]: '10s' }}
      />

      <div className="absolute inset-0 m-auto flex h-12 w-28 items-start overflow-hidden lg:h-15 lg:w-32">
        <motion.div
          className="flex w-full flex-col"
          initial={{ y: 0 }}
          animate={{ y: '-83.3333%' }}
          transition={{ duration: duracion, ease: 'linear', repeat: Infinity }}
        >
          {etiquetas.map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i > 0}
              className="text-secondary flex h-12 shrink-0 items-center justify-center text-base font-medium whitespace-nowrap uppercase lg:h-15 lg:text-lg"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
