'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { FOOTER, FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/home-data';

/**
 * Footer del original (`section.foter`).
 *
 * Estructura y medidas sacadas de la hoja original:
 *   section.foter        pt 100 · pb 20 · bg `contain` con `background-position: 0%`
 *                        (se repite en mosaico: de ahí la textura de paneles
 *                        verticales) sobre #090909. No lleva overlay — la
 *                        oscuridad es la propia foto.
 *   .footer-layout       flex col · justify-between · gap 40 · min-h 550
 *   .footer-top          flex · justify-between · items-**end** · gap 40
 *   .footer-left         max-w 635 · flex col · justify-between · gap 40 · min-h 360
 *   .footer-right        max-w 850 · flex col · gap 50
 *   .footer-content-wrap #191919 · radius 10 · padding 50px 20px
 *   .footer-social-box   75×75 · border 1px #fff · radius 100% (50 en ≤991, 40 en ≤767)
 *   .footer-bottom       flex col · gap 45
 *
 * El botón "Submit Now" va DENTRO del input de 635px, no al lado.
 *
 * Nota de fidelidad: en el original el 3.er glifo es LinkedIn pero enlaza a
 * instagram.com y el 4.º es Instagram enlazando a linkedin.com. Se replica el
 * cruce tal cual porque esto es un clon visual (ver `SOCIAL_LINKS`).
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <footer
      data-section="footer"
      className="relative isolate overflow-hidden bg-[#090909] pt-section pb-5"
      style={{
        backgroundImage: 'url(/images/pages/home/footer-bg.webp)',
        backgroundSize: 'contain',
        backgroundPosition: '0%',
      }}
    >
      <div className="container-livinor">
        <div className="flex min-h-[550px] flex-col justify-between gap-10 tab:min-h-[520px] land:min-h-0 land:gap-[30px]">
          {/* ── Fila superior ───────────────────────────────────────────── */}
          <div className="flex items-end justify-between gap-10 tab:items-start land:flex-col land:gap-[30px]">
            {/* Columna izquierda */}
            <div className="flex min-h-[360px] w-full max-w-[635px] flex-col justify-between gap-10 land:min-h-0 land:max-w-none land:gap-5">
              <div className="flex flex-col gap-10 land:gap-5">
                <Image
                  src="/images/shared/logo-footer.png"
                  alt="Livinor Nav Image"
                  width={218}
                  height={72}
                  className="h-[72px] w-auto self-start"
                />
                <a
                  href={`mailto:${FOOTER.email.trim()}`}
                  className="text-paper font-heading text-mail block leading-[var(--lh-mail)] font-semibold"
                >
                  {FOOTER.email.trim()}
                </a>
              </div>

              <form
                className="relative w-full max-w-[635px]"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <label htmlFor="footer-email" className="sr-only">
                  {FOOTER.form.placeholder}
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={FOOTER.form.placeholder}
                  className="text-paper placeholder:text-faint font-body text-caption h-[70px] w-full rounded-[8px] bg-[#2a2a2a] pr-[180px] pl-6 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                />
                <button
                  type="submit"
                  className="text-paper border-paper/70 font-body text-body rounded-pill absolute top-1/2 right-2.5 h-[50px] -translate-y-1/2 border bg-black/60 px-7 leading-none transition-colors duration-300 hover:bg-white hover:text-black"
                >
                  {FOOTER.form.submit}
                </button>
                <p aria-live="polite" className="sr-only">
                  {sent ? FOOTER.form.success : ''}
                </p>
              </form>
            </div>

            {/* Columna derecha */}
            <div className="flex w-full max-w-[850px] flex-col gap-[50px] tab:gap-10 land:gap-[30px]">
              <div className="flex flex-wrap items-center justify-between gap-[30px] tab:gap-5">
                <h2 className="text-paper font-heading text-h6 w-full uppercase">
                  {FOOTER.taglineFirst}
                  <span className="text-card">{FOOTER.taglineSpan}</span>
                </h2>

                <ul className="flex items-center gap-5 tab:gap-2.5">
                  {SOCIAL_LINKS.map((s) => {
                    const Icon = SocialIcon[s.icon];
                    return (
                      <li key={s.icon}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.icon}
                          className="border-paper text-paper hover:bg-yellow hover:border-yellow hover:text-ink flex size-[75px] items-center justify-center rounded-full border bg-black transition-colors duration-300 tab:size-[50px] land:size-10"
                        >
                          <Icon className="size-7 tab:size-5" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-tile flex w-full items-center justify-center bg-dark px-5 py-[50px] tab:justify-start tab:py-10 land:justify-center land:py-[30px]">
                <ul className="flex w-full flex-wrap items-center justify-between gap-x-8 gap-y-3">
                  <li className="w-full">
                    <p className="text-yellow font-heading text-h6 uppercase">
                      {FOOTER.quickLinksTitle}
                    </p>
                  </li>
                  {FOOTER_LINKS.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-paper font-body text-body hover:text-yellow transition-colors duration-300"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Barra inferior ──────────────────────────────────────────── */}
          <div className="flex flex-col gap-[45px] land:gap-[30px]">
            <div className="border-paper/15 flex items-center justify-between gap-10 border-t pt-8 land:flex-col land:items-center land:gap-[15px]">
              <p className="text-paper font-body text-body">
                {FOOTER.copyright}{' '}
                <a
                  href={FOOTER.copyrightLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow"
                >
                  {FOOTER.copyrightLink.label}
                </a>
              </p>
              <p className="text-paper font-body text-body">
                {FOOTER.poweredBy}{' '}
                <a
                  href={FOOTER.poweredByLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow"
                >
                  {FOOTER.poweredByLink.label}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
