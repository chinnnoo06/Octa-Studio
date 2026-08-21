/**
 * Los 3 productos destacados.
 */

import type { Product } from './types';

export const PRODUCTS: Product[] = [
  { name: 'leather armchair', price: '$ 499.00 USD', category: 'Chair', href: '/product/leather-armchair', image: '/images/pages/home/product-armchair.webp', alt: '' },
  { name: 'wooden chair',     price: '$ 599.00 USD', category: 'Chair', href: '/product/wooden-chair',     image: '/images/pages/home/product-chair.webp',    alt: '' },
  { name: 'leather bed',      price: '$ 299.00 USD', category: 'Bed',   href: '/product/leather-bed',      image: '/images/pages/home/product-bed.webp',      alt: '' },
];
