/**
 * Manifiesto de páginas replicadas. NO renderiza nada: cada página tiene su
 * ruta explícita en src/app/(public)/. Lo usan el orchestrator para retomar
 * en otra sesión, `sitemap.ts`, y la validación final para saber qué falta.
 */
export type PageStatus = 'done' | 'in-progress' | 'pending';

export interface PageEntry {
  route: string;
  dir: string;
  label: string;
  sections: readonly string[];
  status: PageStatus;
  sourceUrl: string;
  scores?: { desktop: number; tablet: number; mobile: number };
}

export const pageRegistry = {
  home: {
    route: '/',
    dir: 'home',
    label: 'Home',
    sections: [
      'Hero',
      'About',
      'Projects',
      'Process',
      'Services',
      'DesignCta',
      'Advantages',
      'Products',
      'Testimonials',
      'Blogs',
    ],
    status: 'in-progress',
    sourceUrl: 'https://livinor.webflow.io/',
    // Media por sección, iteración 3. El primer número es pixelmatch crudo;
    // el segundo excluye las bandas de marquee, cuyo diff mide la fase del
    // bucle y no la fidelidad del diseño.
    scores: { desktop: 0.873, tablet: 0.801, mobile: 0.759 },
  },
} satisfies Record<string, PageEntry>;

export type PageKey = keyof typeof pageRegistry;

// El cast ensancha `status` de su literal a PageStatus; sin él TypeScript
// da la comparación por imposible cuando solo hay una página en el registry.
export const donePages = (Object.values(pageRegistry) as PageEntry[])
  .filter((p) => p.status === 'done')
  .map((p) => p.route);

/** Páginas de la navbar del original, pendientes de replicar. */
export const pendingRoutes = [
  '/about-us',
  '/projects',
  '/shop',
  '/services',
  '/blogs',
  '/contact',
  '/team-one',
] as const;
