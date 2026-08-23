'use client';

import { useRef } from 'react';
import {
  motion,
  useInView,
  type Variants,
  type Transition,
  type HTMLMotionProps,
} from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/motion';

/**
 * Anima su contenido al entrar en viewport.
 *
 * Existe porque **framer-motion 13 eliminó las props `whileInView` y
 * `viewport`**: el único mecanismo soportado es el hook `useInView`. Este
 * componente lo encapsula para que las secciones no tengan que repetir el
 * `ref` + `useInView` + `animate` en cada bloque.
 *
 * Si se le pasan `variants` de contenedor (p.ej. `staggerParent()`), los hijos
 * `motion.*` con sus propias variantes heredan el estado y el stagger funciona
 * igual que antes.
 */
export const Reveal = ({
  children,
  variants = fadeUp,
  className,
  delay,
  as = 'div',
  amount = viewportOnce.amount,
  once = viewportOnce.once,
  transition,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'span' | 'li' | 'article' | 'header';
  amount?: number | 'some' | 'all';
  once?: boolean;
  transition?: Transition;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  // `motion[as]` es una unión de componentes por etiqueta y TypeScript
  // intersecta sus tipos de `ref`, que son incompatibles entre sí. El elemento
  // renderizado siempre es un HTMLElement, así que se estrecha a la firma de
  // `div` — el `as` solo cambia la etiqueta emitida.
  const Tag = motion[as] as React.ComponentType<
    HTMLMotionProps<'div'> & { ref?: React.Ref<HTMLDivElement> }
  >;

  return (
    <Tag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={delay ? { delay, ...transition } : transition}
    >
      {children}
    </Tag>
  );
}
