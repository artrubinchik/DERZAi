const projects = [
  {
    title: "Офис",
    area: "150 м²",
    location: "Набережные Челны",
    year: "2026",
    image: "/images/project-1.jpg",
  },
  {
    title: "Апартаменты",
    area: "60 м²",
    location: "Казань",
    year: "2026",
    image: "/images/project-2.jpg",
  },
  {
    title: "Коттедж",
    area: "145 м²",
    location: "Подсолнухи",
    year: "2025",
    image: "/images/project-3.jpg",
  },
  {
    title: "Дом",
    area: "220 м²",
    location: "Боровецкое",
    year: "2024",
    image: "/images/project-4.jpg",
  },
  {
    title: "Загородный дом",
    area: "300 м²",
    location: "Набережные Челны",
    year: "2023",
    image: "/images/project-5.jpg",
  },
  {
    title: "Квартира",
    area: "54 м²",
    location: "ЖК Притяжение",
    year: "2024",
    image: "/images/project-6.jpg",
  },
  {
    title: "Коммерческий интерьер",
    area: "95 м²",
    location: "Казань",
    year: "2023",
    image: "/images/project-7.jpg",
  },
  {
    title: "Частный дом",
    area: "154 м²",
    location: "Татарстан",
    year: "2022",
    image: "/images/project-8.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-soft py-10 md:py-10">
      <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-16">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-muted">
              Projects
            </p>

            <h2 className="text-2xl font-light tracking-[-0.045em] md:text-4xl">
              Избранные проекты
            </h2>
          </div>

          <div className="text-[28px] font-light text-[var(--text-muted)]">
            →
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-6">
          {projects.map((project, i) => (
            <article key={i} className="min-w-[320px] md:min-w-[420px]">
              <div className="relative h-[460px] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale-[20%] transition duration-700 hover:scale-[1.03] hover:grayscale-0"
                />
              </div>

              <div className="pt-5">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl font-light tracking-[-0.04em]">
                    {project.title}
                  </h3>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    {project.area}
                  </p>
                </div>

                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted">
                  {project.location} / {project.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
