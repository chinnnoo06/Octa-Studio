import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
};

// Pendiente de contenido. La ruta existe para que el menu no de 404.
export default function ContactoPage() {
  return (
    <main className="pt-18">
      <div className="mx-auto max-w-[1700px] px-5 lg:px-15 py-20 lg:py-25">
        <h1 className="text-secondary text-4xl font-bold uppercase lg:text-5xl">Contacto</h1>
      </div>
    </main>
  );
}
