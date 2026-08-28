import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Step } from './Step';
import { PROCESS_STEPS } from '@/utils/data/process';
import Bg from '@/assets/media/backgrounds/ImgBackground2.webp';

/**
 * Proceso. Replica la estructura de la seccion "Our Design" de la referencia.
 *
 * Medido en vivo (movil -> escritorio):
 *
 *   seccion    pt/pb 40  ->  60   ->  80   ->  150
 *   layout     flex col centrado, gap 30 -> 40 -> 60
 *              a partir de `xl` pasa a GRID `293px 1fr` con gap 0, items-start.
 *              Entra en 1280 y no en 1024 porque por debajo de ese ancho la
 *              columna de pasos no da para dos fotos de 380 y encogian todas.
 *   titulo     columna izquierda, max-w 490
 *   pasos      columna derecha, 3 filas con gap 12 (20 por debajo de lg):
 *                fila 1 -> paso 1 solo
 *                fila 2 -> pasos 2 y 3 en dos columnas
 *                fila 3 -> pasos 4 y 5, alineados a la izquierda de su celda
 *
 * La primera columna del grid mide 293px y no 264 (=.25fr) porque el suelo
 * `min-content` del titulo la empuja; en la referencia sale 293.33 medido.
 *
 * Por debajo de `md` las tres filas pasan a `contents`, asi que los cinco
 * pasos se convierten en hijos directos del contenedor y forman un carrusel
 * horizontal, que es lo que hace la referencia. Sin `contents` habria que
 * duplicar el marcado.
 *
 * El fondo es la foto, no un color: se sirve con `next/image fill`, el mismo
 * patron que ya usan Testimonials, CtaSection y Footer.
 *
 * Sobre la pixelacion: NO era cosa de la calidad de compresion. Con el
 * `sizes="100vw"` habitual, Next elige la variante por el ANCHO del viewport
 * y servia 1440x804 para un hueco de 1440x1294; como la foto es apaisada y la
 * seccion alta, object-cover la ampliaba x1.6 en vertical. Pidiendo 2560 se
 * sirve la imagen entera (1429 de alto) y desaparece la ampliacion.
 *
 * Subir `quality` aqui no sirve de nada: Next 16 solo acepta los valores de
 * `images.qualities`, que por defecto es [75]; cualquier otro devuelve 400 y
 * el prop se ignora en silencio. Habria que tocar next.config.ts.
 */
export const Process = () => {
  const [s1, s2, s3, s4, s5] = PROCESS_STEPS;

  /** Ancho fijo de cada tarjeta mientras es un carrusel horizontal. */
  const TARJETA = 'w-75 shrink-0 sm:w-100 md:w-auto md:shrink';

  return (
    <section
      data-section="process"
      className="bg-fourth relative overflow-hidden py-10 sm:py-15 md:py-20 lg:py-[150px]"
    >
      <Image
        src={Bg}
        alt=""
        fill
        /* `sizes` NO es 100vw a proposito. La foto es apaisada (2560x1429) y
           esta seccion es alta, asi que object-cover la escala hasta cubrir el
           ALTO. Con 100vw, Next servia una variante de 1440x804 para un hueco
           de 1440x1294 y el navegador la ampliaba x1.6: de ahi la pixelacion.
           Pidiendo 2560 en pantallas medianas y grandes, Next devuelve la
           imagen entera (1429 de alto) y deja de haber ampliacion. */
        sizes="(min-width: 640px) 2560px, 1200px"
        placeholder="blur"
        className="object-cover object-left-top"
      />

      {/* Las otras secciones con foto usan /25, pero esta foto tiene una franja
          de luz muy clara y el texto blanco encima se quedaba en 4,4:1, por
          debajo del 4,5:1 de WCAG AA. Con /40 sube a 5,4:1. */}
      <div aria-hidden="true" className="bg-fourth/40 absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-5 lg:px-15">
        <div className="flex flex-col items-center gap-[30px] sm:gap-10 md:gap-15 xl:grid xl:grid-cols-[293px_1fr] xl:items-start xl:gap-0">

          <div className="text-primary flex max-w-[490px] flex-col items-center gap-5 text-center xl:items-start xl:text-start">
            <Eyebrow>Nuestro Proceso</Eyebrow>
            <SectionTitle tone="light" lead="Así es como" rotating="trabajamos" />
          </div>

          <div className="flex w-full gap-5 overflow-x-auto pb-5 md:flex-col md:items-center md:overflow-visible md:pb-0 xl:gap-3">

            {/* En el tramo apilado esta fila ocupa media columna menos medio
                hueco, que es exactamente lo que mide una celda de las filas de
                abajo. Asi el paso 1 no sale mas ancho que los otros cuatro. */}
            <div className="contents md:mx-auto md:block md:w-[calc(50%-0.625rem)] xl:w-full">
              <div className={TARJETA}>
                <Step step={s1} index={0} hasArrow />
              </div>
            </div>

            <div className="contents md:grid md:w-full md:grid-cols-2 md:gap-5 xl:gap-4 xl:overflow-hidden">
              <div className={TARJETA}>
                <Step step={s2} index={1} hasArrow />
              </div>
              <div className={TARJETA}>
                <Step step={s3} index={2} hasArrow />
              </div>
            </div>

            {/* Dos columnas, igual que la fila 2, para que las fotos midan lo
                mismo que las de arriba. El escalonado que en la referencia
                daba una rejilla de 4 columnas se consigue aqui alineando las
                tarjetas a la izquierda de su celda en vez de a la derecha:
                caen en 0 y 513, las mismas posiciones medidas en el original,
                pero con la foto a 380 en vez de 257. */}
            <div className="contents md:grid md:w-full md:grid-cols-2 md:gap-5 xl:gap-0 xl:overflow-hidden">
              <div className={TARJETA}>
                <Step step={s4} index={3} className="xl:justify-start" />
              </div>
              <div className={TARJETA}>
                <Step step={s5} index={4} className="xl:justify-start" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
