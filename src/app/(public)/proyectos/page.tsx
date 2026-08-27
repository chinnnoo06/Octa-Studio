import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos',
};

// Pendiente de contenido. La ruta existe para que el menu no de 404.
export default function ProyectosPage() {
  return (
    <main className="pt-18">
      <div className="mx-auto max-w-[1700px] px-5 py-20 lg:py-25">
        <h1 className="text-secondary text-4xl font-bold uppercase lg:text-5xl">Proyectos</h1>
      </div>
    </main>
  );
}
