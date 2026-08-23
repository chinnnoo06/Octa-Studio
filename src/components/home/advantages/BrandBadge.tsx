'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ADVANTAGES_BADGE_TEXTS } from '@/lib/home-data';

const DURACION_POR_ETIQUETA = 2.32; // 312px / 27px/s / 5 etiquetas

export const BrandBadge = () => {
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
