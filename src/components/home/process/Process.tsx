import { Eyebrow } from '@/components/ui/Eyebrow';
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';
import { Reveal } from '@/components/ui/Reveal';
import { fadeUp } from '@/utils/motion';
import { Step } from './Step';
import { PROCESS_STEPS } from '@/utils/data/process';
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton';

export const Process = () => {
  return (
    <section data-section="process" className="bg-secondary overflow-x-clip py-20 lg:py-25">

      <div className="mx-auto flex max-w-[1700px] flex-col gap-10 px-5">

        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-start">
          <Eyebrow tone="light">Nuestro Proceso</Eyebrow>
          <h2 className="text-primary/75 text-4xl leading-[1.2] font-bold tracking-[-0.02em] uppercase lg:text-5xl">
            Así es como <span className="text-primary">trabajamos</span>
          </h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <Step key={step.step} step={step} index={i} />
          ))}

          <Reveal
            variants={fadeUp}
            delay={PROCESS_STEPS.length * 0.08}
            className="h-full w-75 shrink-0 snap-start sm:w-auto sm:shrink"
          >
            <article className="bg-secondary flex h-full flex-col justify-between gap-5 rounded-xl p-5 lg:p-10">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-primary text-2xl lg:text-3xl font-bold uppercase">
                  ¿Empezamos?
                </h3>
                <p className="text-primary/75 text-sm lg:text-base">
                  Cuéntanos qué vas a exponer y en qué feria. Te devolvemos una propuesta con
                  render y precio cerrado.
                </p>
              </div>

              <SecondaryButton href="/contacto">Agenda tu proyecto</SecondaryButton>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
