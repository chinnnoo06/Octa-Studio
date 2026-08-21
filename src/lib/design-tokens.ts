/**
 * Espejo TypeScript del bloque `@theme` de src/app/globals.css.
 * CONGELADO tras el análisis. Si cambia un valor aquí, cambia el MISMO valor
 * en `@theme`. Nunca uno solo — Tailwind emitiría un color y el JS otro.
 *
 * Uso: solo para lo que Tailwind no cubre (framer-motion, cálculos, canvas).
 * En JSX se consumen las utilidades (`bg-yellow`, `text-h2`, `p-section`).
 */
export const tokens = {
  color: {
    page: '#fef8f0',
    card: '#fae9ce',
    beige: '#f1dfc2',
    yellow: '#ffd900',
    ink: '#000000',
    paper: '#ffffff',
    paragraph: '#575757',
    muted: '#8e8e8e',
    dark: '#191919',
  },
  font: {
    heading: 'var(--font-sora)',
    body: 'var(--font-inter)',
  },
  text: {
    big: '300px',
    hero: '130px',
    display: '124px',
    h1: '96px',
    h2: '72px',
    h3: '56px',
    h4: '40px',
    h5: '32px',
    h6: '24px',
    body: '16px',
  },
  /** Valores desktop. Se reescalan por breakpoint en globals.css
   *  (991: 80/80/60/40 · 767: 60/60/40/30 · 479: 40/40/30/20). */
  spacing: {
    bigsection: '150px',
    section: '100px',
    layout: '80px',
    container: '60px',
  },
  radius: {
    card: '12px',
    tile: '10px',
    pill: '50px',
  },
  /** max-width real del contenedor; 1320 es solo el resultado a 1440 de viewport. */
  container: 1820,
} as const;

export type Tokens = typeof tokens;
