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
          className="h-[800px] w-full object-cover transition-transform duration-700 ease-[var(--ease-brand)] group-hover:scale-110 tab:h-[400px] land:h-[200px] mob:h-[198px]"
        />
        {/* Overlay del original; se quita en ≤991 */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-black/30 tab:hidden"
        />
      </div>

      {/* Círculo que sigue al cursor. En el original (`.project-mouse-move-element`)
          es un ANILLO: 95×95, `border: 2px solid #ffd900`, fondo transparente, con
          una flecha ↗ amarilla de 20px dentro. No un disco relleno. */}
      <motion.span
        aria-hidden="true"
        style={{ x, y }}
        className="border-yellow text-yellow pointer-events-none absolute top-0 left-0 -mt-[47.5px] -ml-[47.5px] flex size-[95px] items-center justify-center rounded-full border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 tab:hidden"
      >
        <svg viewBox="0 0 21 21" fill="currentColor" className="size-5" aria-hidden="true">
          <path d="M1.72674 0C7.83942 0 13.9521 0 20.25 0C20.25 6.08677 20.25 12.1735 20.25 18.4448C19.1103 18.4448 17.9707 18.4448 16.7965 18.4448C16.7706 14.3265 16.7447 10.2082 16.718 5.96512C12.0299 10.6532 7.3418 15.3413 2.51163 20.1715C2.26064 20.046 2.14552 19.9819 1.96029 19.795C1.91632 19.751 1.87234 19.707 1.82703 19.6617C1.78058 19.6144 1.73413 19.5672 1.68627 19.5185C1.63794 19.4699 1.5896 19.4213 1.5398 19.3713C1.3859 19.2165 1.23255 19.0612 1.07922 18.9059C0.974805 18.8007 0.870358 18.6955 0.765875 18.5904C0.510166 18.333 0.254955 18.075 0 17.8169C0.104085 17.5862 0.216992 17.4233 0.395707 17.2449C0.44496 17.1953 0.494212 17.1457 0.544957 17.0947C0.599165 17.0409 0.653373 16.9872 0.709224 16.9318C0.76673 16.8741 0.824235 16.8165 0.883484 16.7571C1.07678 16.5636 1.27064 16.3706 1.46449 16.1776C1.60296 16.0391 1.7414 15.9007 1.87981 15.7622C2.17813 15.4638 2.47669 15.1657 2.77547 14.8678C3.20745 14.4371 3.639 14.006 4.07045 13.5747C4.77045 12.8751 5.47081 12.1757 6.17138 11.4767C6.85192 10.7976 7.5323 10.1183 8.21246 9.4388C8.27599 9.37534 8.27599 9.37534 8.3408 9.31059C8.67202 8.9797 9.00323 8.64879 9.33443 8.31789C10.9579 6.6959 12.5822 5.07475 14.2064 3.45349C10.0881 3.42759 5.96983 3.40169 1.72674 3.375C1.72674 2.26125 1.72674 1.1475 1.72674 0Z" />
        </svg>
      </motion.span>
    </Link>
  );
}
