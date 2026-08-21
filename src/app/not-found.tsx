import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-container text-center">
      <p className="font-heading text-h2 text-ink">404</p>
      <p className="font-body text-body text-paragraph max-w-md">
        Esta página todavía no forma parte de la réplica. Se irán añadiendo una a una.
      </p>
      <Link
        href="/"
        className="bg-yellow text-ink rounded-pill font-body text-body px-6 py-3.5 leading-none font-medium"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
