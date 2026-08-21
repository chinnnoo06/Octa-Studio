/**
 * Las 2 entradas de blog destacadas.
 */

import type { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'The Art of Home and Living',
    date: 'May 18, 2025',
    href: '/blogs/the-art-of-home-and-living',
    image: '/images/pages/home/blog-1.webp',
    alt: 'The Art of Home and Living',
    author: ' Isabella Moore',              // ← espacio inicial intencionado
    authorImage: '/images/pages/home/author-isabella.png',
    authorAlt: 'Beautiful Woman',
    layout: 'image-left',
  },
  {
    title: 'Elegant Spaces Journal of Style',
    date: 'Feb 14, 2025',
    href: '/blogs/elegant-spaces-journal-of-style',
    image: '/images/pages/home/blog-2.webp',
    alt: 'Elegant Spaces Journal of Style',
    author: 'William Clarke',
    authorImage: '/images/pages/home/author-william.webp',
    authorAlt: 'Handsome Man',
    layout: 'image-right',
  },
];
