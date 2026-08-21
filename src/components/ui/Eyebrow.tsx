import LivinorMark from './LivinorMark';
import { cn } from '@/lib/utils';

/**
 * El "sub-text" del original: la marca de Livinor + una etiqueta corta.
 * Aparece encabezando 8 secciones (About Us, Our Projects, Our Process,
 * Our Services, Advantages, Featured Products, Testimonials, Our Blogs).
 */
export default function Eyebrow({
  children,
  className,
  tone = 'dark',
  align = 'left',
}: {
  children: React.ReactNode;
  className?: string;
  /** `dark` = texto negro (secciones claras). `light` = blanco (secciones oscuras). */
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5',
        align === 'center' && 'justify-center',
        tone === 'light' ? 'text-paper' : 'text-ink',
        className,
      )}
    >
      <LivinorMark className="size-5 shrink-0" />
      <p className="font-body text-body leading-none font-medium">{children}</p>
    </div>
  );
}
