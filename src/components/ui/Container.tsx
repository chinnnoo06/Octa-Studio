import { cn } from '@/utils/cn';

/**
 * Contenedor de contenido del original: 1320px sobre viewport de 1440
 * (60px de gutter a cada lado en desktop).
 */
export default function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav';
}) {
  return <Tag className={cn('container-livinor', className)}>{children}</Tag>;
}
