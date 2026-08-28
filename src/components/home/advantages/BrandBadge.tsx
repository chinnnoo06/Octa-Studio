'use client';

import { motion } from 'framer-motion';
import { DotRing } from '../../ui/DotRing';
import { ADVANTAGES_BADGE_TEXTS } from '@/utils/data/advantages';

const DURACION_POR_ETIQUETA = 2.32;

const VISIBLES = 2;

export const BrandBadge = () => {
  const total = ADVANTAGES_BADGE_TEXTS.length;

  const etiquetas = [...ADVANTAGES_BADGE_TEXTS, ...ADVANTAGES_BADGE_TEXTS.slice(0, VISIBLES)];

  const recorrido = `-${((total / etiquetas.length) * 100).toFixed(4)}%`;
  const duracion = total * DURACION_POR_ETIQUETA;

  return (
    <div className="relative flex size-40 items-center justify-center lg:size-55">
      <DotRing
        className="spin-slow text-secondary size-full"
        style={{ ['--spin-duration' as string]: '10s' }}
      />

      <div className="absolute inset-0 m-auto flex h-14 w-32 items-start overflow-hidden lg:h-16 lg:w-40">
        <motion.div
          className="flex w-full flex-col"
          initial={{ y: 0 }}
          animate={{ y: recorrido }}
          transition={{ duration: duracion, ease: 'linear', repeat: Infinity }}
        >
          {etiquetas.map((t, i) => (
            <span
              key={`${t}-${i}`}
              aria-hidden={i > 0}
              className="text-secondary flex h-7 shrink-0 items-center justify-center text-lg lg:text-xl leading-none font-semibold whitespace-nowrap uppercase lg:h-8 "
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
