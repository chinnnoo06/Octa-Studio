'use client';

import { useRef } from 'react';
import {
  motion,
  useInView,
  type Variants,
  type Transition,
  type HTMLMotionProps,
} from 'framer-motion';
import { fadeUp, viewportOnce } from '@/utils/motion';

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
