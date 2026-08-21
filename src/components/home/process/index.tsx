import Image from 'next/image';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import { fadeUp } from '@/lib/motion';
import { PROCESS_STEPS } from '@/lib/home-data';
import { cn } from '@/lib/utils';

/**
 * Process (`section.image.process`, y 4565–5772). Sección oscura.
 *
 * El fondo es la propia foto (`Our Journey BG Image.webp`, cover, origen 0 0):
 * **no lleva overlay CSS**. Su media RGB es rgb(12,12,12), así que debajo va un
 * `#0c0c0c` sólido para que no se vea la página cream mientras carga.
 *
 * El grid es `293px 1fr`: la primera columna no mide 264px (=.25fr) porque el
 * suelo `min-content` de la palabra "DESIGN" a 72px la empuja hasta 293.33.
 *
 * Los 5 pasos van en 3 filas con gap 12, escalonados con `mx auto` dentro de
 * cada celda. Los codos con flecha (`.step-box-arrow`) solo existen en los
 * pasos 1–3 y desaparecen en ≤991, donde cada paso gana un borde propio.
 */

/** Codo con punta de flecha que une un paso con el siguiente (100×100). */
function StepArrow() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className="min-h-[90px] min-w-[80px] shrink-0 text-[#616161] tab:hidden"
    >
      <path d="M99 4H24a4 4 0 0 0-4 4v80" stroke="currentColor" strokeWidth="1.5" />
      <path d="m14 80 6 12 6-12" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function Step({ step, className }: { step: (typeof PROCESS_STEPS)[number]; className?: string }) {
  return (
    <Reveal
      variants={fadeUp}
      className={cn(
        'mx-auto flex max-w-[590px] items-center justify-end gap-2.5',
        'tab:rounded-tile tab:max-w-none tab:border tab:border-[#616161] tab:p-2.5',
        className,
      )}
    >
      {step.hasConnector ? <StepArrow /> : null}

      <div className="flex max-w-[380px] flex-col gap-[50px] tab:max-w-none tab:gap-[30px] land:grid land:grid-cols-2 land:place-items-start land:items-center land:gap-5 mob:flex mob:flex-col mob:gap-[30px]">
        <div className="flex flex-col gap-5">
          <p className="text-yellow font-body text-body flex h-6 items-center gap-[15px] leading-none">
            <span aria-hidden="true" className="bg-yellow size-2 shrink-0 rounded-full" />
            {step.step}
          </p>
          <div className="rounded-card overflow-hidden">
            {/* El paso 03 usa una foto distinta en móvil; está así en el original */}
            <Image
              src={step.image}
              alt={step.alt}
              width={380}
              height={95}
              className={cn(
                'h-[95px] w-full min-w-[200px] object-cover tab:h-[150px] land:h-[200px]',
                step.imageMobile && 'land:hidden',
              )}
            />
            {step.imageMobile ? (
              <Image
                src={step.imageMobile}
                alt={step.alt}
                width={380}
                height={200}
                className="hidden land:block land:h-[200px] land:w-full land:object-cover"
              />
            ) : null}
          </div>
        </div>

        <div className="flex max-w-[285px] flex-col gap-2.5 tab:max-w-none land:h-full land:justify-between land:gap-[30px] mob:gap-5">
          <h3 className="text-paper font-heading text-h6 uppercase">{step.title}</h3>
          <p className="text-faint font-body text-body">{step.description}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Process() {
  const [s1, s2, s3, s4, s5] = PROCESS_STEPS;

  return (
    <section
      data-section="process"
      className="bg-[#0c0c0c] bg-cover bg-left-top bg-no-repeat py-bigsection"
      style={{ backgroundImage: 'url(/images/pages/home/process-bg.webp)' }}
    >
      <div className="container-livinor">
        <div className="grid grid-cols-[293px_1fr] items-start justify-between gap-0 tab:flex tab:flex-col tab:items-center tab:gap-[60px]">
          {/* Encabezado */}
          <div className="flex max-w-[490px] flex-col items-start gap-5 tab:items-center">
            <Eyebrow tone="light">Our Process</Eyebrow>
            <h2 className="text-paper font-heading text-h2 uppercase tab:text-center">
              Our Design
            </h2>
          </div>

          {/* Los 5 pasos */}
          <div className="flex flex-col gap-3 tab:w-full tab:items-center tab:gap-5 land:flex-row land:overflow-x-auto land:pb-5">
            <div className="tab:w-full land:min-w-[400px] land:max-w-[400px] mob:min-w-[300px] mob:max-w-[300px]">
              <Step step={s1} />
            </div>

            <div className="grid grid-cols-2 gap-4 overflow-hidden tab:w-full tab:gap-5 land:flex land:min-w-[800px] land:overflow-visible mob:min-w-[620px]">
              <div className="land:min-w-[400px] land:max-w-[400px] mob:min-w-[300px] mob:max-w-[300px]">
                <Step step={s2} />
              </div>
              <div className="land:min-w-[350px] land:max-w-[400px] mob:min-w-[300px] mob:max-w-[300px]">
                <Step step={s3} />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-0 overflow-hidden tab:grid-cols-2 tab:gap-5 land:flex land:min-w-[800px] land:overflow-visible mob:min-w-[620px]">
              <div className="land:min-w-[400px] land:max-w-[400px] mob:min-w-[300px] mob:max-w-[300px]">
                <Step step={s4} />
              </div>
              {/* Hueco del original (`.blank.hide`), que desaparece en ≤991 */}
              <div aria-hidden="true" className="tab:hidden land:hidden" />
              <div className="land:min-w-[400px] land:max-w-[400px] mob:min-w-[300px] mob:max-w-[300px]">
                <Step step={s5} />
              </div>
              <div aria-hidden="true" className="tab:hidden land:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
