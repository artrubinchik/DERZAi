import { content } from "@/data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#111111] py-24 md:py-36 text-[#F5F2ED]"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-10 bg-[#D8D0C4]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#D8D0C4]/70">
                Реализованные проекты
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Пространства,
              <br />
              которые хочется
              <span className="text-[#D8D0C4]"> проживать</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-white/45">
            Каждый интерьер создаётся под образ жизни клиента. Без визуального
            шума, случайных решений и шаблонных приёмов.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {content.projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-[28px] bg-[#1A1A1A]"
            >
              {/* Image */}
              <div className="relative h-[540px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#D8D0C4]/70">
                    {project.style}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight text-white">
                    {project.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
                    <span>{project.area}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                    <span>•</span>
                    <span>{project.budget}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
