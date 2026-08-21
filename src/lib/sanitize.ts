import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitiza HTML rico extraído de la referencia antes de inyectarlo.
 * Uso exclusivo:  <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(raw) }} />
 * Nunca pasar a dangerouslySetInnerHTML un valor que no salga de aquí.
 *
 * Nota: en esta réplica todas las secciones se construyen con JSX (que escapa
 * por defecto). Este helper existe como único punto de entrada permitido si
 * alguna página futura (ej. cuerpo de un blog post) lo necesitara.
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre',
      'img', 'figure', 'figcaption', 'span',
    ],
    ALLOWED_ATTR: ['href', 'title', 'target', 'rel', 'src', 'alt', 'class'],
    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
  });
}
