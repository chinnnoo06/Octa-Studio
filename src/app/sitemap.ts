import type { MetadataRoute } from 'next';
import { donePages } from '@/lib/page-registry';

const BASE = 'https://example.com';

/** Se construye desde el registry: solo se publican las rutas ya replicadas. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = donePages.length ? donePages : ['/'];
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
