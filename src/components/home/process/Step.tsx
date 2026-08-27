import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { fadeUp } from '@/utils/motion';
import type { ProcessStep } from '@/utils/data/types';

/**
 * Un paso del proceso. Es la MISMA tarjeta en todos los tamaños: foto arriba con
 * el ordinal encima, texto debajo. Antes en `lg` se le quitaban borde y relleno
 * y el contenido quedaba flotando suelto sobre la foto de fondo.
 *
 * El `backdrop-blur` desenfoca la imagen justo detrás de la tarjeta: gana
 * contraste el texto sin tener que oscurecer la sección entera.
 */
export const Step = ({ step, index }: { step: ProcessStep; index: number }) => {
  return (
    <Reveal
      variants={fadeUp}
      delay={index * 0.08}
      className="w-75 shrink-0 snap-start sm:w-auto sm:shrink"
    >
      <article className="border-primary/20 bg-fourth/40 hover:border-primary/50 flex h-full flex-col gap-5 rounded-xl border p-2.5 backdrop-blur-sm transition-colors duration-300 lg:p-5">
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
          <h3 className="text-primary text-lg font-medium uppercase lg:text-xl">{step.title}</h3>
          <p className="text-primary/75 text-sm lg:text-base">{step.description}</p>
        </div>
      </article>
    </Reveal>
  );
}
