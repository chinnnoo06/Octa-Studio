import type { MotionProps, Variants, Transition } from 'framer-motion';

export const EASE_BRAND: Transition['ease'] = [0.25, 0.1, 0.25, 1];

export const viewportOnce = { once: true, amount: 0.2 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_BRAND } },
};

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

export const slideInBottomOnLoad: MotionProps = {
  initial: { opacity: 0, y: 80, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.5, ease: EASE_BRAND },
}

export const slideInBottom: MotionProps = {
  initial: { opacity: 0, y: 60, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE_BRAND },
}

export const slideInBottomScale: MotionProps = {
  initial: { opacity: 0, y: 30, scale: 0.96, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE_BRAND },
}
