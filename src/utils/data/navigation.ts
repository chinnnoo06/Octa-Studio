import type { NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio',    href: '/' },
  { label: 'Nosotros',  href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Contacto',  href: '/contacto' },
  { label: 'Blogs',     href: '/blogs' },
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
