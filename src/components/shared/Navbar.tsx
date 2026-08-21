'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS, MEGAMENU } from '@/lib/home-data';
import { cn } from '@/lib/utils';

/**
 * Navbar del original (`.hero-navbar-wrap` > `.hero-navbar` > `.navbar-layout.hero`).
 *
 * Detalles verificados en vivo y en la hoja original:
 *  - NO es sticky ni fixed. Position relative, z-index 5000: se va con el hero
 *    y no reaparece al hacer scroll. No cambia de fondo.
 *  - Dos capas translúcidas anidadas con `backdrop-filter: blur(20px)`:
 *    `.hero-navbar-wrap` #00000026 y `.hero-navbar` #0003.
 *  - `.navbar-layout` min-height 70px, max-width 1700px, gap 40px.
 *  - Hover de link: `.nav-line` blanca de 1.5px pegada abajo que entra desde
 *    la izquierda y sale por la derecha.
 *  - Colapsa a hamburguesa en ≤991px (`data-collapse="medium"`). El panel móvil
 *    NO es un overlay a pantalla completa: baja desde detrás de la navbar,
 *    fondo #fae9ce, radius 12, 600ms, sin bloquear el scroll del body.
 *
 * Va posicionada absolute sobre el hero: en el original está en el flujo dentro
 * de `section.hero`, cuya imagen de fondo cubre también la banda de la navbar.
 * Aquí el layout la saca de la página, así que se superpone y el hero compensa
 * con su padding superior — el resultado renderizado es el mismo.
 */

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
    <Link href={href} className="group relative inline-block py-1">
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-[5000] backdrop-blur-[20px] [background-color:#00000026]">
      <div className="relative px-container backdrop-blur-[20px] [background-color:#0003]">
        <nav className="relative z-[1000] mx-auto flex min-h-[70px] w-full max-w-[1700px] items-center justify-between gap-10">
          {/* Izquierda: logo */}
          <Link href="/" className="shrink-0" aria-label="Livinor, inicio">
            <Image
              src="/images/shared/logo-navbar.svg"
              alt="Name and log of the website"
              width={170}
              height={55}
              priority
              className="h-[38px] w-auto"
            />
          </Link>

          {/* Centro: navegación (oculta en tablet/móvil) */}
          <div
            className="relative hidden w-full max-w-[515px] items-center justify-between gap-[30px] lg:flex"
            onMouseLeave={() => setMegaOpen(false)}
          >
            {NAV_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} active={l.href === '/'} />
            ))}

            {/* "Pages": megamenú */}
            <div className="relative" onMouseEnter={() => setMegaOpen(true)}>
              <button
                type="button"
                onClick={() => setMegaOpen((v) => !v)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className="group text-paper font-body text-body flex items-center gap-1.5 py-1 leading-none"
              >
                Pages
                <motion.svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  aria-hidden="true"
                  animate={{ rotate: megaOpen ? -90 : 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <path d="M1 1.5 5 5.5 9 1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.55, 0.06, 0.68, 0.19] }}
                    className="absolute top-full left-1/2 z-50 -translate-x-1/2 overflow-hidden pt-[30px]"
                  >
                    <div className="border-paper/70 flex min-h-[400px] min-w-[850px] justify-between gap-[30px] border p-[30px] backdrop-blur-[20px] [background-color:#0006]">
                      {MEGAMENU.map((col) => (
                        <div key={col.title} className="flex flex-col gap-4">
                          <p className="text-yellow font-heading text-body leading-none font-semibold uppercase">
                            {col.title}
                          </p>
                          <ul className="flex flex-col gap-3">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <NavLink href={l.href} label={l.label} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Derecha: carrito + hamburguesa */}
          <div className="flex shrink-0 items-center gap-4">
            <button
              type="button"
              aria-label="Abrir carrito, 0 artículos"
              className="relative flex items-center"
            >
              <Image
                src="/images/shared/cart-white.png"
                alt=""
                width={30}
                height={30}
                className="size-[30px]"
              />
              <span className="bg-yellow text-ink font-body text-badge -mt-2.5 ml-[3px] flex size-[18px] items-center justify-center rounded-full leading-none font-bold">
                0
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="text-paper flex size-12 items-center justify-center lg:hidden"
            >
              <svg width="24" height="16" viewBox="0 0 24 16" aria-hidden="true">
                <path d="M0 1h24M0 8h24M0 15h24" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Panel móvil: baja desde detrás de la navbar, recortado por el wrapper */}
      <div className="pointer-events-none absolute inset-x-0 top-full overflow-hidden px-2.5 lg:hidden">
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-card pointer-events-auto rounded-card p-6"
            >
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-ink font-body text-body"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => setMobilePagesOpen((v) => !v)}
                    aria-expanded={mobilePagesOpen}
                    className="text-ink font-body text-body flex items-center gap-1.5"
                  >
                    Pages
                    <motion.svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      aria-hidden="true"
                      animate={{ rotate: mobilePagesOpen ? -90 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path d="M1 1.5 5 5.5 9 1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {mobilePagesOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden pl-4"
                      >
                        {MEGAMENU.flatMap((c) => c.links).map((l) => (
                          <li key={l.label} className="pt-3">
                            <Link
                              href={l.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-paragraph font-body text-body"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
