import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PROJECTS } from '@/utils/data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [left, right] = [PROJECTS.slice(0, 2), PROJECTS.slice(2)];

  return (
    <section data-section="projects" className="py-20 lg:py-25 bg-primary">
      <div className="mx-auto max-w-[1700px] px-5 flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-10 overflow-hidden">

          <div className="text-secondary flex flex-col items-start gap-5 max-w-3xl">
            <Eyebrow>Nuestros Proyectos</Eyebrow>
            <SectionTitle lead="Proyectos que hablan por" rotating="nosotros" />
          </div>

          <div className="flex flex-col md:grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-10">
              {left.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>

            <div className="flex flex-col gap-10 ">
              <div className="hidden md:flex max-w-2xl flex-col justify-center gap-5">
                <p className="text-fourth/75 text-lg">
                  Más de 20 años montando stands para marcas nacionales e internacionales.
                  Cada proyecto nace desde cero, adaptado al espacio, los productos y el presupuesto de cada cliente.
                </p>
                <PrimaryButton href="/projects">Ver todos los proyectos</PrimaryButton>
              </div>
              <div className="flex flex-col gap-10">
                {right.map((p) => (
                  <ProjectCard key={p.name} project={p} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex md:hidden max-w-2xl flex-col justify-center gap-5">
            <p className="text-fourth/75 text-base">
              Más de 20 años montando stands para marcas nacionales e internacionales.
              Cada proyecto nace desde cero, adaptado al espacio, los productos y el presupuesto de cada cliente.
            </p>
            <PrimaryButton href="/projects">Ver todos los proyectos</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
