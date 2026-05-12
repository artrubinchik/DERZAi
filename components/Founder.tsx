import { content } from "@/data/content";

export default function Founder() {
  const { founder } = content;

  return (
    <section
      className="section-soft py-24 text-main md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-24">
          {/* PHOTO */}
          <div className="relative">
            <div className="premium-card relative h-[620px] overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-10 left-6 right-6 border border-[var(--line)] bg-[rgba(20,20,20,0.45)] p-6 backdrop-blur-xl md:-right-14 md:left-auto md:max-w-sm">
              <p className="text-sm font-light leading-relaxed text-[var(--text-main)]/78">
                “{founder.quote}”
              </p>
            </div>
          </div>

          {/* TEXT */}
          <div className="pt-8 md:pt-0">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--text-main)]/50" />
              <span className="text-xs uppercase tracking-[0.4em] text-muted">
                Основатель
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">
              {founder.name}
            </h2>

            <p className="mt-8 max-w-xl whitespace-pre-line text-lg font-light leading-relaxed text-muted">
              {founder.role}
            </p>

            {/* STATS */}
            <div className="mt-12 grid gap-8 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
              {founder.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-light tracking-[-0.06em]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* APPROACH */}
            <div className="premium-card mt-12 p-7">
              <p className="text-xs uppercase tracking-[0.35em] text-muted">
                Подход
              </p>

              <p className="mt-5 max-w-2xl text-xl font-light leading-relaxed text-muted">
                Пространство должно быть не просто визуально эффектным.
                Интерьер обязан работать как единая система:
                планировка, свет, материалы, бюджет и реализация.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
