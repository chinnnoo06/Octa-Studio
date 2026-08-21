'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

/**
 * Titular con "reveal" por líneas de `about` y `services` (`.text-color-box`).
 *
 * NO es un reveal palabra a palabra: el `<h3>` ya está en negro y encima hay
 * **8 franjas grises #8e8e8e de 50px** con `mix-blend-mode: lighten` que se
 * desplazan `x: 0% → 100%` de una en una según el progreso de scroll. Como
 * `lighten` sobre negro deja pasar el gris, cada franja tapa una línea del
 * titular hasta que se retira: el efecto es un barrido línea a línea.
 *
 * Cada franja tiene su ventana de 5% dentro del tramo 20%–60% del progreso.
 * En el CSS original `.text-color-box` es `display:none` en ≤991, así que en
 * tablet y móvil el titular sale directamente en negro y no se monta nada.
 */
const STRIPES = 8;

function Stripe({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const start = 0.2 + index * 0.05;
  const x = useTransform(progress, [start, start + 0.05], ['0%', '100%']);
  return (
    <motion.span
      style={{ x, top: index * 50 }}
      className="bg-muted absolute left-0 block h-[50px] w-full mix-blend-lighten"
    />
  );
}

export default function WipeHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <div ref={ref} className="relative overflow-hidden">
      <h3 className={className}>{text}</h3>
      {/* Las franjas solo existen en ≥992px, igual que en el original */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tab:hidden">
        {Array.from({ length: STRIPES }, (_, i) => (
          <Stripe key={i} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}
