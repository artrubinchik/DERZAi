import { content } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-muted">
              Projects
            </p>

            <h2 className="text-3xl font-light tracking-[-0.055em] md:text-5xl">
              Пространства
              <br />
              с характером
            </h2>
          </div>

          <p className="hidden max-w-sm text-sm font-light leading-relaxed text-muted md:block">
            Интерьеры, где геометрия, свет, материалы и сценарии жизни собраны
            в одну спокойную систему.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.projects.map((project) => (
            <article key={project.id} className="group">
              <div className="relative h-[500px] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>

              <div className="border border-[var(--line)] border-t-0 p-5">
                <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-muted">
                  {project.style}
                </p>

                <h3 className="text-xl font-light tracking-[-0.04em]">
                  {project.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-muted">
                  <span>{project.area}</span>
                  <span>—</span>
                  <span>{project.duration}</span>
                  <span>—</span>
                  <span>{project.budget}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
