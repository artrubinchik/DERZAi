import { content } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-dark text-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-warm" />
              <span className="text-xs font-medium tracking-widest uppercase text-gray">
                Реализованные проекты
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Каждый проект —<br />
              <span className="text-warm">наш лучший</span>
            </h2>
          </div>
          <p className="text-gray text-sm max-w-xs leading-relaxed">
            Работы, которыми мы гордимся. Реальные объекты, реальные бюджеты, довольные клиенты.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {content.projects.map((project, i) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image placeholder / real image */}
              <div
                className="aspect-[3/4] bg-gradient-to-br"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #2A2A2A 0%, #3A3530 100%)"
                      : i === 1
                      ? "linear-gradient(135deg, #2A2822 0%, #3A3020 100%)"
                      : "linear-gradient(135deg, #22282A 0%, #203035 100%)",
                }}
              >
                {/* Real image (uncomment when added) */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                /> */}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs text-warm/80 mb-1.5 tracking-wider uppercase">
                    {project.style}
                  </p>
                  <h3 className="text-lg font-semibold text-off-white mb-3">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-gray">
                    <span>{project.area}</span>
                    <span className="text-warm/30">·</span>
                    <span>{project.duration}</span>
                    <span className="text-warm/30">·</span>
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
