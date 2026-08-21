'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Título de sección de dos partes del original (`.h2-section-title`).
 *
 * La segunda palabra aparece 3 veces en el DOM (`work|work|work`,
 * `us|us|us`, `Collection|Collection|Collection`, `Insights|Insights|Insights`).
 * NO es un bucle: la interacción IX2 `a-92 "H2 Counter 3"` desplaza el track
 * `translateY: 0 → -66.666%` (exactamente 2 items) una sola vez al entrar en
 * viewport, con 1000ms de delay y 1000ms de duración. La 3ª copia lleva la
 * clase `.color` (#8e8e8e), así que el estado final —y el de reposo tras la
 * animación— es la palabra en gris. De ahí el efecto "rueda como una slot
 * machine y aterriza en gris".
 *
 * La ventana (`.h2-counter-wrap`) mide 85px en desktop y baja a 36/30/28px en
 * los breakpoints del original; se controla con `--rotator-h` en globals.css.
 */
export default function SectionTitle({
  lead,
  rotating,
  className,
  tone = 'dark',
  align = 'left',
  as: Tag = 'h2',
  rotate = true,
  rotatingClassName,
}: {
  /** Parte fija del título. */
  lead: string;
  /** Parte que rueda y acaba en gris. */
  rotating?: string;
  className?: string;
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  /** `false` para los títulos de un solo tono (process, testimonials). */
  rotate?: boolean;
  rotatingClassName?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={cn(
        'font-heading flex flex-wrap items-center gap-x-[10px] uppercase',
        tone === 'light' ? 'text-paper' : 'text-ink',
        align === 'center' && 'justify-center text-center',
        className,
      )}
    >
      <span>{lead}</span>

      {rotating ? (
        rotate ? (
          <span className="h-[var(--rotator-h)] overflow-hidden">
            <motion.span
              className="flex flex-col items-center"
              initial={{ y: 0 }}
              animate={{ y: inView ? '-66.666%' : 0 }}
              transition={{ delay: 1, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span>{rotating}</span>
              <span aria-hidden="true">{rotating}</span>
              <span aria-hidden="true" className={cn('text-muted', rotatingClassName)}>
                {rotating}
              </span>
            </motion.span>
          </span>
        ) : (
          <span className={cn('text-muted', rotatingClassName)}>{rotating}</span>
        )
      ) : null}
    </MotionTag>
  );
}
