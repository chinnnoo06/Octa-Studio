import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { fadeUp } from '@/utils/motion/reveal';
import type { ProcessStep } from '@/utils/data/types';

export const Step = ({ step, index }: { step: ProcessStep; index: number }) => {
  return (
    <Reveal
      variants={fadeUp}
      delay={index * 0.08}
      className="w-75 shrink-0 snap-start sm:w-auto sm:shrink"
    >
      <article className="border-primary/30 bg-primary/10 hover:border-primary/50 flex h-full flex-col gap-5 rounded-xl border p-2.5 transition-colors duration-300 lg:p-5">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={step.img}
            alt={step.alt}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-45 w-full object-cover lg:h-55"
          />
          <span className="bg-primary text-fourth absolute top-2.5 left-2.5 rounded-lg px-2.5 py-1 text-xs font-medium uppercase">
            {step.step}
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="text-primary text-lg font-semibold uppercase lg:text-xl">{step.title}</h3>
          <p className="text-primary/75 text-sm lg:text-base">{step.description}</p>
        </div>
      </article>
    </Reveal>
  );
}
