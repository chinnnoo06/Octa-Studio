'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ADVANTAGES_BADGE_TEXTS } from '@/lib/home-data';

/**
 * Badge de marca del bento (`.choice-left-top`).
 *
 * En el screenshot parece "texto en círculo", pero no lo es. Son dos cosas
 * superpuestas:
 *   1. Un anillo SVG de puntos (`Dot_Image.svg`, 205×205) que **rota 360° cada
 *      10s** en bucle. Lo hace la clase `.spin-slow` de globals.css.
 *   2. Un slot machine vertical de 5 etiquetas dentro de una ventana de ~60px.
 *      Cada etiqueta es un h6 que ocupa 2 líneas (lh 130% → ítem de 62.4px), y
 *      el track se desplaza `y: 0 → -400%` (= 4 ítems) en 10s, en bucle.
 *
 * El "DESIGNS / STARK / DESIGNS" que se ve en la referencia es ese rotador
 * congelado a mitad de recorrido, no un texto curvado.
 */
export default function BrandBadge() {
  return (
    <div className="relative flex size-[205px] items-center justify-center tab:size-[180px] land:size-[150px]">
      <Image
        src="/images/shared/dot-ring.svg"
        alt="Image like dot"
        width={205}
        height={205}
        className="spin-slow size-full"
        style={{ ['--spin-duration' as string]: '10s' }}
      />

      <div className="absolute inset-0 m-auto flex h-[60px] w-[115px] items-center overflow-hidden">
        <motion.div
          className="flex flex-col"
          animate={{ y: ['0%', '-400%'] }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
        >
          {ADVANTAGES_BADGE_TEXTS.map((t, i) => (
            <span
              key={t}
              aria-hidden={i > 0}
              className="text-ink font-heading text-h6 flex h-[62.4px] shrink-0 items-center text-center uppercase"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
