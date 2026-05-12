import { content } from "@/data/content";

export default function Benefits() {
  return (
    <section className="section-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-[var(--text-main)]/50" />
            <span className="text-xs uppercase tracking-[0.42em] text-muted">
              Подход
            </span>
          </div>

          <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Минимализм
            <br />
            без компромиссов
          </h2>
        </div>

        <div className="grid gap-px border border-[var(--line)] md:grid-cols-2">
          {content.benefits.map((item, i) => (
            <div
              key={i}
              className="premium-card border-0 p-10"
            >
              <div className="mb-8 text-3xl font-light text-[var(--text-main)]/55">
                {item.icon}
              </div>

              <h3 className="text-2xl font-light tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
