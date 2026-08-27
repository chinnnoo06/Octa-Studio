import type { MotionProps, Variants } from 'framer-motion';
import { EASE_BRAND } from './base';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_BRAND } },
};

export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: EASE_BRAND },
  },
};

export const fadeUpScale: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: EASE_BRAND },
  },
};

/** Escalona a los hijos. Combinar con las variantes de arriba. */
export const staggerParent = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Al montar, sin esperar al scroll. Props sueltas para `{...}` sobre `motion.*`. */
export const fadeUpOnLoad: MotionProps = {
  initial: { opacity: 0, y: 80, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.5, ease: EASE_BRAND },
};
