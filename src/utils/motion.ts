import type { Variants, Transition } from 'framer-motion';

export const EASE_BRAND: Transition['ease'] = [0.25, 0.1, 0.25, 1];

/** Opciones de viewport equivalentes a las que usaba el antiguo `viewport`. */
export const viewportOnce = { once: true, amount: 0.2 } as const;

/** Fade + subida. El patrón dominante del sitio. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_BRAND } },
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_BRAND } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE_BRAND } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_BRAND } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_BRAND } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE_BRAND } },
};

/** Reveal de imagen por máscara vertical, como los `image-wrap` del original. */
export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  show: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.9, ease: EASE_BRAND },
  },
};

/** Contenedor con stagger entre hijos. Combínalo con las variantes de arriba. */
export const staggerParent = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});


export const accordionPanel = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.35, ease: EASE_BRAND },
} as const;
