'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/utils/data/navigation';
import { cn } from '@/utils/cn';
import { Logo } from '../Logo';
import { HamburgerButton } from './HamburgerButton';
import { useHeader } from '@/hooks/ui/useHeader';
import { MobileNav } from './MobileNav';
import { isActiveHref } from '@/utils/isActiveHref';
import { PHONE_DISPLAY, PHONE_HREF } from '@/utils/data/contact';
import { HiOutlinePhone } from 'react-icons/hi2';

const NavLink = ({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) => {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className="group relative inline-block py-1"
    >
      <span
        className="font-text text-sm xl:text-base leading-none transition-colors duration-300 text-primary"
      >
        {label}
      </span>
      <span aria-hidden="true"
        className={cn(
          'absolute inset-x-0 bottom-0 h-[1.5px] origin-left',
          active
            ? 'bg-primary scale-x-100'
            : 'bg-primary scale-x-0 transition-transform duration-300 ease-brand group-hover:scale-x-100',
        )}
      />
    </Link>
  );
}

export const Header = () => {
  const { menuVisible, hamburgerRef, actions } = useHeader()
  const pathname = usePathname();

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-100 h-18 bg-secondary backdrop-blur-md border-b transition-colors duration-300',
          menuVisible ? 'border-transparent' : 'border-primary/25',
        )}
      >

        <div className="relative max-w-[1700px] mx-auto flex justify-between items-center w-full px-5 h-18 gap-10">

          <div className="flex items-center justify-start shrink-0">
            <div className="w-20 xl:w-25 shrink-0 transition-transform duration-300 hover:scale-[1.03]">
              <Link href="/" className="no-underline" aria-label="Ir al inicio">
                <Logo />
              </Link>
            </div>
          </div>

          <div className='hidden lg:flex grow justify-center'>
            <nav aria-label="Navegación principal">
              <ul role="list" className="flex items-center gap-10 xl:gap-15">
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

          {/* Tercera columna: el teléfono como dato, sin píldora ni fondo, para
              que no compita con la navegación ni haga de CTA — de eso ya se
              encarga el botón flotante de WhatsApp. */}
          <div className="hidden shrink-0 items-center justify-end lg:flex">
            <a
              href={PHONE_HREF}
              className="text-primary hover:text-primary/70 font-text inline-flex items-center gap-2.5 text-sm leading-none whitespace-nowrap transition-colors duration-300 xl:text-base"
            >
              <HiOutlinePhone className="size-3.5 shrink-0 xl:size-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="flex items-center justify-end shrink-0 lg:hidden">
            <HamburgerButton
              ref={hamburgerRef}
              open={menuVisible}
              toggleMenu={actions.toggleMenu}
            />
          </div>
        </div>

      </header>

      <MobileNav menuVisible={menuVisible} toggleMenu={actions.toggleMenu} />
    </>
  );
}
