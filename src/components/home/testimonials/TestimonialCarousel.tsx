'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { TESTIMONIALS } from '@/lib/home-data';

/**
 * Carrusel de testimonios (`.slider.w-slider`).
 *
 * Configuración verificada en vivo sobre el original:
 *  - **4 slides**, `loop: true`, transición 500ms `ease`, 1 slide visible
 *  - **SIN autoplay**: el `data-delay="4000"` está en el DOM pero es inerte
 *    porque `data-autoplay="false"` (comprobado: tras 6s el slide no cambia)
 *  - **Los dots nunca se ven**: `.slide-nav { display: none }` está en el CSS
 *    base, en todos los breakpoints. Solo hay flechas.
 *  - Flechas 60×60, `border: 3px solid #fff`, fondo transparente, y con radios
 *    distintos entre sí: **10px la izquierda y 12px la derecha**.
 *    Responsive: 50×50 (≤991) · 40×40 con top 20% (≤767) · 30×30 con radius 6
 *    y `top: 100%` (≤479), es decir **debajo** del slider.
 */
const Chevron = ({ dir }: { dir: 'left' | 'right' }) => {
  return (
    <svg width="25" height="30" viewBox="0 0 25 30" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M17 4 7 15l10 11' : 'M8 4l10 11L8 26'}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const TestimonialCarousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: 'start',
    duration: 25,
    containScroll: false,
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on('select', onSelect);
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  };

  const arrowBase =
    'absolute top-1/2 z-[3] flex size-[60px] -translate-y-1/2 items-center justify-center border-[3px] border-white bg-transparent text-white transition-colors duration-300 hover:bg-white hover:text-black tab:size-[50px] land:top-[20%] land:size-10 mob:top-full mob:size-[30px] mob:-translate-y-0 mob:rounded-[6px]';

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonios de clientes"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="min-w-0 shrink-0 grow-0 basis-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${TESTIMONIALS.length}`}
              aria-hidden={selected !== i}
            >
              <div className="flex min-h-[400px] flex-col items-center gap-layout">
                <div className="flex max-w-[1165px] flex-col items-center gap-10">
                  <div className="flex h-5 items-center gap-1" aria-label={`${t.rating} de 5`}>
                    {Array.from({ length: t.rating }, (_, s) => (
                      <svg key={s} width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          d="M10 0l2.6 6.6L20 7.3l-5.4 4.8 1.7 7.2L10 15.6 3.7 19.3l1.7-7.2L0 7.3l7.4-.7L10 0Z"
                          fill="#ffd900"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-paper font-body text-body text-center land:hidden">
                    {t.quote}
                  </p>
                </div>

                <div className="flex max-w-[260px] flex-col items-center gap-5">
                  <div className="rounded-card overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.alt}
                      width={260}
                      height={190}
                      className="h-[190px] w-[260px] object-cover"
                    />
                  </div>
                  <div className="flex h-[65px] flex-col items-center gap-2.5">
                    <p className="text-paper font-heading text-h6 uppercase">{t.name}</p>
                    <p className="text-yellow font-body text-body">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Testimonio anterior"
        className={`${arrowBase} left-0 rounded-[10px]`}
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Testimonio siguiente"
        className={`${arrowBase} right-0 rounded-card`}
      >
        <Chevron dir="right" />
      </button>
    </div>
  );
}
