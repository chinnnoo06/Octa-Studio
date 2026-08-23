import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PROJECTS, PROJECTS_INTRO } from '@/lib/home-data';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const [left, right] = [PROJECTS.slice(0, 2), PROJECTS.slice(2)];

  return (
    <section data-section="projects" className="bg-paper py-bigsection">
      <div className="container-livinor">
        <div className="flex flex-col gap-layout overflow-hidden">
          {/* Encabezado */}
          <div className="flex flex-col items-start gap-5">
            <Eyebrow>Our Projects</Eyebrow>
            <SectionTitle lead="Our Featured" rotating="work" className="text-h2" />
          </div>

          {/* Grid escalonado */}
          <div className="grid grid-cols-2 gap-[30px] land:flex land:flex-col mob:gap-5">
            {/* Columna izquierda */}
            <div className="flex flex-col gap-[30px]">
              {left.map((p) => (
                <ProjectCard key={p.href} project={p} />
              ))}
            </div>

            {/* Columna derecha: intro + 2 tarjetas. El intro es lo que genera
                el desfase de 246px respecto a la columna izquierda. */}
            <div className="flex flex-col gap-layout land:contents">
              <div className="ml-auto flex min-h-[166px] max-w-[445px] flex-col justify-center gap-10 land:hidden">
                <p className="text-paragraph font-body text-body">{PROJECTS_INTRO}</p>
                <PrimaryButton href="/projects">View All Projects</PrimaryButton>
              </div>
              <div className="flex flex-col gap-[30px] land:contents">
                {right.map((p) => (
                  <ProjectCard key={p.href} project={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
