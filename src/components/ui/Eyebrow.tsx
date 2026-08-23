import { EyebrowIcon } from './EyebrowIcon';
import { cn } from '@/utils/cn';

export const Eyebrow = ({ children, className, tone = 'dark', align = 'left'}: {
  children: React.ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5',
        align === 'center' && 'justify-center',
        tone === 'light' ? 'text-primary' : 'text-secondary',
        className,
      )}
    >
      <EyebrowIcon className="size-6 lg:size-8 shrink-0" />
      <p className="font-display text-3xl lg:text-4xl leading-[0.85] font-normal tracking-[0.04em] normal-case">{children}</p>
    </div>
  );
}
