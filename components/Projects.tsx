import { content } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-soft py-24 text-main md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-20 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-black/45" />
              <span className="text-xs uppercase tracking-[0.42em] text-black/45">
                Реализованные проекты
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Пространства
              <br />
              с характером
            </h2>
          </div>

          <p className="max-w-md text-sm font-light leading-relaxed text-black/50">
            Архитектурный минимализм, продуманная геометрия и атмосфера,
            которая ощущается даже в деталях.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {content.projects.map((project) => (
            <article key={project.id} className="group relative overflow-hidden bg-black">
              <div className="relative h-[560px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white">
                    {project.style}
                  </p>

                  <h3 className="text-2xl font-light tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.24em] text-white">
                    <span>{project.area}</span>
                    <span>—</span>
                    <span>{project.duration}</span>
                    <span>—</span>
                    <span>{project.budget}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
