'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ADVANTAGES_BADGE_TEXTS } from '@/lib/home-data';

/**
 * Badge de marca del bento (`.choice-left-top`).
 *
 * En el screenshot parece "texto en círculo", pero no lo es. Son dos cosas
 * superpuestas:
 *   1. Un anillo SVG de puntos que rota 360° cada 10s (clase `.spin-slow`).
 *   2. Un slot machine vertical con las 5 etiquetas, en bucle continuo.
 *
 * ── Cómo se consigue que el bucle no deje hueco ──────────────────────────────
 *
 * El track lleva **6 hijos**: las 5 etiquetas más una copia de la primera al
 * final. La animación desplaza `y` de 0 a **-83.3333%**, que es exactamente
 * 5 alturas de ítem sobre un track de 6 (5/6). Al terminar, quien llena la
 * ventana es la copia —idéntica a la primera—, así que el salto de vuelta a 0
 * es invisible y **nunca se ve el hueco**.
 *
 * El fallo anterior era usar `-400%`: en framer-motion ese porcentaje se
 * resuelve contra la altura del **propio track** (5 ítems = 312px), no contra
 * la de un ítem, así que desplazaba 1248px —cuatro veces más allá de todo el
 * contenido— y la ventana pasaba la mayor parte del ciclo vacía.
 *
 * Ritmo: medido en vivo sobre el original, el track avanza a **~27 px/s** y
 * recorre unos 250px (4 ítems) antes de reiniciar de golpe. Aquí se recorren
 * los 5 ítems (312px) a esa misma velocidad → 11,6s por vuelta, o sea 2,32s
 * por etiqueta. Mismo ritmo visual, pero sin el salto del original.
 *
 * La ventana y los ítems comparten la misma altura para que la etiqueta en
 * reposo quede siempre encuadrada entera.
 */
const DURACION_POR_ETIQUETA = 2.32; // 312px / 27px/s / 5 etiquetas

export default function BrandBadge() {
  const etiquetas = [...ADVANTAGES_BADGE_TEXTS, ADVANTAGES_BADGE_TEXTS[0]];
  const duracion = ADVANTAGES_BADGE_TEXTS.length * DURACION_POR_ETIQUETA;

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

      {/* `items-start` es crítico: con `items-center`, flexbox centra el track
          (374px) dentro de la ventana (62px), lo que lo arranca ya desplazado
          -156px. Al sumarle el recorrido de la animación se salía del contenido
          y la ventana quedaba vacía media vuelta. Alineado arriba, el rango
          0 → -83.3333% mapea exactamente sobre los 6 ítems. */}
      <div className="absolute inset-0 m-auto flex h-[62.4px] w-[115px] items-start overflow-hidden tab:h-[52px] land:h-[47px]">
        <motion.div
          className="flex w-full flex-col"
          initial={{ y: 0 }}
          animate={{ y: '-83.3333%' }}
          transition={{ duration: duracion, ease: 'linear', repeat: Infinity }}
        >
          {etiquetas.map((t, i) => (
            <span
              key={`${t}-${i}`}
              // La copia final solo existe para cerrar el bucle: no se anuncia.
              aria-hidden={i > 0}
              className="text-ink font-heading text-h6 flex h-[62.4px] shrink-0 items-center justify-center text-center uppercase tab:h-[52px] land:h-[47px]"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
