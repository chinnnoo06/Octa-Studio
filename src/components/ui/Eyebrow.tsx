import { EyebrowIcon } from './EyebrowIcon';

export const Eyebrow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2.5 text-current">
      <EyebrowIcon className="size-6 shrink-0 lg:size-8" />
      <p className="font-gentleman text-4xl leading-[0.85] font-normal tracking-[0.04em] normal-case lg:text-5xl">
        {children}
      </p>
    </div>
  );
};
