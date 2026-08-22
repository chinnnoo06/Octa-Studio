'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/utils/data/navigation';
import { cn } from '@/utils/cn';
import { Logo } from '../Logo';
import { HamburgerButton } from './HamburgerButton';
import { useHeader } from '@/hooks/ui/useHeader';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { ThridButton } from '../buttons/ThirdButton';

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
      <span className="text-paper font-text text-sm xl:text-base leading-none">{label}</span>
      <span aria-hidden="true"
        className={cn(
          'bg-paper absolute inset-x-0 bottom-0 h-[1.5px] origin-left',
          active
            ? 'scale-x-100'
            : 'scale-x-0 transition-transform duration-300 ease-brand group-hover:scale-x-100',
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
            <ul role="list" className="flex items-center gap-10 xl:gap-12.5">
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
          <div className='hidden lg:flex'>
            <ThridButton href='/contacto' className='lg:text-sm xl:text-base'>
              Contactanos
            </ThridButton>
          </div>

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
