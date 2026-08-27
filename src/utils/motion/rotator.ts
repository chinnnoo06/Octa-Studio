import type { Transition } from 'framer-motion';
import { EASE_BRAND } from './base';

const SLIDE = 0.9;
const HOLD = 2.6;
const CYCLE = (HOLD + SLIDE) * 2;

export const rotatorY = ['0%', '0%', '-33.3333%', '-33.3333%', '-66.6667%'];

export const rotatorTransition: Transition = {
  duration: CYCLE,
  ease: EASE_BRAND,
  times: [0, HOLD / CYCLE, (HOLD + SLIDE) / CYCLE, (HOLD * 2 + SLIDE) / CYCLE, 1],
  repeat: Infinity,
  delay: 0.5,
};
