import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/utils/cn';
import type { ProcessStep } from '@/utils/data/types';

/**
 * Codo con punta de flecha que enlaza un paso con el siguiente.
 *
 * Solo aparece a partir de `2xl`. Ocupa 110px con su hueco, y por debajo de
 * ese ancho se los quitaba a la foto: a 1280 la dejaba en 323px en vez de 380,
 * y las cinco dejaban de medir igual.
 */
const StepArrow = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className="text-primary/30 hidden min-h-[90px] min-w-[80px] shrink-0 2xl:block"
  >
    <path d="M99 4H24a4 4 0 0 0-4 4v80" stroke="currentColor" strokeWidth="1.5" />
    <path d="m14 80 6 12 6-12" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

/**
 * Un paso del proceso, con la estructura del `.process-element` de la
 * referencia: fila con el codo a la izquierda y, a la derecha, una columna con
 * la etiqueta del paso + la tira de foto arriba y el texto debajo.
 *
 * Medido en la referencia (movil -> tablet -> escritorio):
 *   elemento   borde 1px + radio 10 + padding 10   ->  sin borde, max-w 590
 *   foto       alto 200        ->  150   ->  95 (min-w 200), radio 12
 *              en escritorio se sube a 140: a los 95 de la referencia las
 *              fotos de stands no se aprecian
 *   columna    gap 30          ->  30    ->  50, max-w 380
 *   titulo     18/23.4         ->  20/26 ->  24/31.2
 *   parrafo    16/24 en todos los cortes
 *
 * La rejilla escalonada entra en `xl` y no en `lg`: por debajo de 1280 la
 * columna de pasos se queda sin sitio para dos fotos de 380 y todo encogia.
 */
export const Step = ({
  step,
  index,
  hasArrow = false,
  className,
}: {
  step: ProcessStep;
  index: number;
  hasArrow?: boolean;
  className?: string;
}) => {
  return (
    <Reveal
      delay={index * 0.08}
      className={cn(
        'border-primary/30 mx-auto flex h-full max-w-[590px] items-center justify-end gap-2.5 rounded-[10px] border p-2.5',
        'xl:rounded-none xl:border-0 xl:p-0',
        className,
      )}
    >
      {hasArrow ? <StepArrow /> : null}

      <div className="flex w-full flex-col gap-[30px] sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-start sm:gap-5 md:flex md:flex-col xl:max-w-[380px] xl:gap-[50px]">
        <div className="flex w-full flex-col gap-5">
          <p className="text-primary/75 flex h-6 items-center gap-[15px] text-base leading-none">
            <span aria-hidden="true" className="bg-primary/75 size-2 shrink-0 rounded-full" />
            {step.step}
          </p>

          <div className="overflow-hidden rounded-xl">
            <Image
              src={step.img}
              alt={step.alt}
              sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 400px"
              className="h-50 w-full object-cover md:h-[150px] xl:h-[140px] xl:min-w-[200px]"
            />
          </div>
        </div>

        <div className="flex h-full w-full flex-col gap-5 sm:justify-between sm:gap-[30px] md:justify-start md:gap-2.5 xl:max-w-[285px]">
          <h3 className="text-primary text-lg leading-[23.4px] font-semibold uppercase md:text-xl md:leading-[26px] xl:text-2xl xl:leading-[31.2px]">
            {step.title}
          </h3>
          <p className="text-primary/75 text-base leading-6">{step.description}</p>
        </div>
      </div>
    </Reveal>
  );
}
