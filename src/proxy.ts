import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Puerta de acceso con autenticación básica HTTP.
 *
 * Vercel solo ofrece Password Protection en el plan Pro, así que la puerta va
 * en el propio código: es gratis y funciona igual en Hobby.
 *
 * Devolver 401 sirve además al objetivo de no aparecer en buscadores: un
 * rastreador nunca llega a ver el contenido, así que no hay nada que indexar
 * (además del `noindex` de `robots.ts` y del `metadata`).
 *
 * Si `SITE_USER` o `SITE_PASSWORD` no están definidas, no se bloquea nada —
 * así el desarrollo local sigue siendo directo.
 *
 * En Next.js 16 la convención `middleware` está deprecada y se llama `proxy`.
 */

/** Comparación en tiempo constante: no revela la longitud del prefijo correcto. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function proxy(request: NextRequest) {
  const user = process.env.SITE_USER;
  const password = process.env.SITE_PASSWORD;

  // Sin credenciales configuradas (p. ej. en local) la puerta queda abierta.
  if (!user || !password) return NextResponse.next();

  const header = request.headers.get('authorization');
  if (header?.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6));
      const sep = decoded.indexOf(':');
      if (sep !== -1) {
        const u = decoded.slice(0, sep);
        const p = decoded.slice(sep + 1);
        if (safeEqual(u, user) && safeEqual(p, password)) {
          return NextResponse.next();
        }
      }
    } catch {
      // cabecera mal formada: cae al 401 de abajo
    }
  }

  return new NextResponse('Acceso restringido.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Octa Studio", charset="UTF-8"',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store',
    },
  });
}

export const config = {
  // Todo queda detrás de la puerta salvo los assets estáticos que Next sirve
  // desde su propio CDN y que no revelan contenido por sí solos.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
