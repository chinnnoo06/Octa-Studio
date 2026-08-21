'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Réplica de `.button-white` del original (Webflow IX2).
 *
 * Estados medidos en https://livinor.webflow.io/:
 *  - Desktop reposo : `.button-box` amarillo #ffd900, `.arrow-div` oculto
 *                     (opacity 0, translate3d(-105%,0,0) scale(.75))
 *  - Desktop hover  : box → blanco, arrow-div entra (opacity 1, translate 0, scale 1)
 *  - Móvil (sin IX2): box blanco + arrow-div amarillo, ambos visibles
 *
 * El grupo usa `group` de Tailwind, así el hover afecta a las dos piezas.
 */

type Variant = 'yellow' | 'black' | 'outline-white';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** Botones del hero sobre imagen oscura: la flecha va en círculo amarillo. */
  arrowTone?: 'white' | 'yellow';
}

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M7.275 6.25h11.524v11.475h-2.149V9.93L7.9 18.78 6.38 17.26l8.85-8.85H7.275V6.25Z"
      fill="currentColor"
    />
  </svg>
);

export default function Button({
  href,
  children,
  variant = 'yellow',
  className,
  arrowTone = 'white',
}: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);

  const box = {
    yellow:
      'bg-paper text-ink md:bg-yellow md:group-hover:bg-paper transition-colors duration-300',
    black: 'bg-ink text-paper transition-colors duration-300',
    'outline-white':
      'bg-transparent text-paper border border-paper/60 md:group-hover:bg-paper md:group-hover:text-ink transition-colors duration-300',
  }[variant];

  const arrowBg = {
    yellow: arrowTone === 'yellow' ? 'bg-yellow text-ink' : 'bg-yellow text-ink md:bg-paper',
    black: 'bg-ink text-paper',
    'outline-white': 'bg-paper text-ink',
  }[variant];

  const content = (
    <>
      <span
        className={cn(
          'inline-flex items-center justify-center rounded-pill px-6 py-3.5 text-body leading-none font-medium whitespace-nowrap',
          box,
        )}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex size-[46px] shrink-0 items-center justify-center rounded-full',
          // Móvil: siempre visible. Desktop: oculto en reposo, entra al hover.
          'opacity-100 md:-ml-[105%] md:scale-75 md:opacity-0',
          'md:group-hover:ml-0 md:group-hover:scale-100 md:group-hover:opacity-100',
          'transition-all duration-300 ease-[var(--ease-brand)]',
          arrowBg,
        )}
      >
        <ArrowIcon />
      </span>
    </>
  );

  const classes = cn('group inline-flex items-center gap-2', className);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
