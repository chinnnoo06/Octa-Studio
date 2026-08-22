'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/utils/data/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '../Logo';
import { HamburgerButton } from './HamburgerButton';
import { useHeader } from '@/hooks/ui/useHeader';

/** Activo en la ruta exacta y en sus subrutas (`/proyectos/casa-x`). */
function isActiveHref(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className="group relative inline-block py-1"
    >
      <span className="text-paper font-body text-body leading-none">{label}</span>
      <span
        aria-hidden="true"
        className={cn(
          'bg-paper absolute inset-x-0 bottom-0 h-[1.5px] origin-left',
          active
            ? 'scale-x-100'
            : 'scale-x-0 transition-transform duration-300 ease-[var(--ease-brand)] group-hover:scale-x-100',
        )}
      />
    </Link>
  );
}

export const Header = () => {
  const { menuVisible, hamburgerRef, actions } = useHeader()
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-100 backdrop-blur-sm h-18 bg-[#00000026]">

      <div className="relative max-w-[1700px] mx-auto flex justify-between items-center w-full px-5 h-18 gap-10">

        <div className="flex items-center justify-start shrink-0">
          <div className="w-30 xl:w-35 shrink-0 transition-transform duration-300 hover:scale-[1.03]">
            <Link href="/" className="no-underline" aria-label="Ir al inicio">
              <Logo />
            </Link>
          </div>
        </div>

        <div className='hidden lg:flex grow justify-center'>
          <nav aria-label="Navegación principal">
            <ul role="list" className="flex items-center gap-10 xl:gap-20">
              {NAV_LINKS.map((link) => {
                return (
                  <li key={link.href}>
                    <NavLink
                      href={link.href}
                      label={link.label}
                      active={isActiveHref(pathname, link.href)}
                    />
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-end gap-2 shrink-0">
          <Link
            href="/contacto"
            className="group bg-yellow text-ink font-body text-body rounded-pill hidden items-center gap-2 px-5 py-2.5 leading-none font-medium whitespace-nowrap transition-colors duration-300 ease-[var(--ease-brand)] hover:bg-paper md:inline-flex"
          >
            Agenda tu proyecto
            <svg
              width="16"
              height="16"
              viewBox="0 0 25 25"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 ease-[var(--ease-brand)] group-hover:translate-x-0.5"
            >
              <path
                d="M7.275 6.25h11.524v11.475h-2.149V9.93L7.9 18.78 6.38 17.26l8.85-8.85H7.275V6.25Z"
                fill="currentColor"
              />
            </svg>
          </Link>

          <div className="lg:hidden">
            <HamburgerButton
              ref={hamburgerRef}
              open={menuVisible}
              toggleMenu={actions.toggleMenu}
            />
          </div>
        </div>
      </div>

    </header>
  );
}
