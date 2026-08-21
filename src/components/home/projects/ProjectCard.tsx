'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { Project } from '@/lib/home-data';

/**
 * Tarjeta de proyecto (`a.project-card`, 645×800 en desktop).
 *
 * Anatomía:
 *   .projects-info-box     90px de ancho, bg #fae9ce, radius 12 0 0 12
 *     └ nombre y año como `h3.h6` con `transform: rotate(90deg)` y nowrap
 *       (la clase `rotate` del original no anima nada: es texto vertical)
 *   .cover-image-wrap      555×800, radius 0 12 12 0, con un overlay
 *                          rgba(0,0,0,.3) que desaparece en ≤991
 *
 * Hover (medido con ratón real): la imagen hace zoom, el riel lateral pasa a
 * negro con texto blanco, y aparece un círculo amarillo de 95px que sigue al
 * cursor. El círculo usa motion values + spring para no re-renderizar en cada
 * `mousemove`.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.4 });
  const y = useSpring(my, { stiffness: 260, damping: 28, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <Link
      ref={ref}
      href={project.href}
      onMouseMove={onMove}
      className="group rounded-card relative flex overflow-hidden land:grid land:grid-cols-[1fr_.5fr] mob:flex mob:flex-col"
    >
      {/* Riel lateral con el nombre y el año en vertical */}
      <div className="bg-card flex w-[90px] shrink-0 items-center justify-center px-[30px] transition-colors duration-500 group-hover:bg-black tab:px-5 land:order-last land:w-auto land:px-0 mob:order-last">
        <div className="flex h-full max-h-[720px] w-[30px] flex-col items-center justify-between gap-5 land:h-auto land:w-full land:flex-row land:flex-wrap land:justify-between land:gap-2.5 land:p-5">
          <h3 className="text-ink font-heading text-h6 mt-20 rotate-90 whitespace-nowrap uppercase transition-colors duration-500 group-hover:text-white tab:mt-[110px] tab:mb-10 land:m-0 land:rotate-0">
            {project.name}
          </h3>
          <h3 className="text-ink font-heading text-h6 rotate-90 whitespace-nowrap uppercase transition-colors duration-500 group-hover:text-white land:rotate-0">
            {project.year}
          </h3>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={project.image}
          alt={`Proyecto ${project.name}, ${project.year}`}
          width={555}
          height={800}
          className="h-[800px] w-full object-cover transition-transform duration-700 ease-[var(--ease-brand)] group-hover:scale-105 tab:h-[400px] land:h-[200px] mob:h-[198px]"
        />
        {/* Overlay del original; se quita en ≤991 */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-black/30 tab:hidden"
        />
      </div>

      {/* Círculo amarillo que sigue al cursor */}
      <motion.span
        aria-hidden="true"
        style={{ x, y }}
        className="bg-yellow pointer-events-none absolute top-0 left-0 -ml-[47px] -mt-[47px] size-[95px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 tab:hidden"
      />
    </Link>
  );
}
