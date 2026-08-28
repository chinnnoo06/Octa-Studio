import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/utils/cn';
import type { ProcessStep } from '@/utils/data/types';

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
          <h3 className="text-primary text-xl lg:text-2xl leading-[23.4px] font-semibold uppercase  md:leading-[26px] xl:leading-[31.2px]">
            {step.title}
          </h3>
          <p className="text-primary/75 text-sm lg:text-base leading-6">{step.description}</p>
        </div>
      </div>
    </Reveal>
  );
}
