import EyebrowIcon from './EyebrowIcon';
import { cn } from '@/lib/utils';

/**
 * El "sub-text" del original: la marca de Livinor + una etiqueta corta.
 * Aparece encabezando 8 secciones (About Us, Our Projects, Our Process,
 * Our Services, Advantages, Featured Products, Testimonials, Our Blogs).
 *
 * El icono va animado: en el original es un lottie en bucle cuyas dos formas
 * —dos rombos en trazo— entran escalando desde el centro. Ver `EyebrowIcon`.
 *
 * Medidas tomadas del original (`.mini-heading-wrap`), no estimadas:
 *   icono 32×32 · gap 10px · texto Inter 16px/24px peso 600 · alto total 32px
 * El `text-body` ya trae 24px de interlineado, así que no lleva `leading-none`.
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
      <EyebrowIcon className="size-8 shrink-0" />
      <p className="font-body text-body font-semibold">{children}</p>
    </div>
  );
}
