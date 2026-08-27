'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/utils/cn';

type SectionTitleProps = {
  lead: string;
  rotating?: string;
  className?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  rotate?: boolean;
  rotatingClassName?: string;
};

const LINE = 'h-10.5 lg:h-14.5';

export const SectionTitle = ({
  lead,
  rotating,
  className,
  align = 'left',
  as: Tag = 'h2',
  rotate = true,
  rotatingClassName,
}: SectionTitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, amount: 0 });

  return (
    <Tag
      ref={ref}
      className={cn(
        'text-secondary text-4xl lg:text-5xl font-bold uppercase leading-[1.2] tracking-[-0.02em]',
        align === 'center' && 'text-center',
        className,
      )}
    >

      {lead}{' '}
      {rotating &&
        (rotate ? (
          <span className={cn('inline-block overflow-hidden align-bottom', LINE)}>
            <span
              className={cn(
                'flex flex-col transition-transform delay-500 duration-1000 ease-out',
                inView && '-translate-y-1/2',
              )}
            >
              <span className={cn('flex items-center', LINE)}>{rotating}</span>
              <span
                aria-hidden="true"
                className={cn('text-secondary/75 flex items-center', LINE, rotatingClassName)}
              >
                {rotating}
              </span>
            </span>
          </span>
        ) : (
          <span className={cn('text-secondary/75', rotatingClassName)}>{rotating}</span>
        ))}
    </Tag>
  );
};
