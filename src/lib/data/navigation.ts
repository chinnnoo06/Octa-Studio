/**
 * Navbar, megamenú, enlaces del footer y redes sociales.
 * Lo usan `shared/Navbar.tsx` y `shared/Footer.tsx`, así que afecta a TODAS
 * las páginas: coordina antes de tocarlo.
 */

import type { NavLink, MegaMenuColumn } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',     href: '/' },
  { label: 'About us', href: '/about-us' },
  { label: 'Projects', href: '/projects' },
  { label: 'Shop',     href: '/shop' },
];

export const MEGAMENU: MegaMenuColumn[] = [
  {
    title: 'Pages',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Blogs',      href: '/blogs' },
      { label: 'Services',   href: '/services' },
      { label: 'Shop',       href: '/shop' },
      { label: 'Team',       href: '/team-one' },
    ],
  },
  {
    title: 'Cms',
    links: [
      { label: 'Blogs Details',      href: 'https://livinor.webflow.io/blogs/the-art-of-home-and-living' },
      { label: 'Services Details',   href: 'https://livinor.webflow.io/services/floor-styling' },
      { label: 'Projects Details',   href: 'https://livinor.webflow.io/projects/luneth-maison' },
      { label: 'Products Details',   href: 'https://livinor.webflow.io/product/leather-armchair' },
      { label: 'Categories Details', href: 'https://livinor.webflow.io/category/all' },
    ],
  },
  {
    title: 'Utility',
    links: [
      { label: 'Style Guide',        href: '/utility-pages/style-guide' },
      { label: 'Changelog',          href: '/utility-pages/changelog' },
      { label: 'Licenses',           href: '/utility-pages/licenses' },
      { label: 'Password Protected', href: 'https://livinor.webflow.io/401' },
      { label: '404',                href: 'https://livinor.webflow.io/404' },
    ],
  },
  {
    title: 'E-Commerce',
    noWrap: true,
    links: [
      { label: 'Checkout',           href: 'https://livinor.webflow.io/checkout' },
      { label: 'Checkout (Paypal)',  href: 'https://livinor.webflow.io/paypal-checkout' },
      { label: 'Order Confirmation', href: 'https://livinor.webflow.io/order-confirmation' },
    ],
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Shop',     href: '/shop' },
  { label: 'Blogs',    href: '/blogs' },
  { label: 'Licenses', href: '/utility-pages/licenses' },
];

/** OJO: glifo e href no coinciden en el original (ver §7). Se replica tal cual. */
export const SOCIAL_LINKS = [
  { icon: 'facebook',  href: 'https://www.facebook.com/' },
  { icon: 'x',         href: 'https://x.com/' },
  { icon: 'linkedin',  href: 'https://www.instagram.com/' },
  { icon: 'instagram', href: 'https://www.linkedin.com/' },
] as const;
