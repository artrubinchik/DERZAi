import { content } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="section-dark relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute left-0 top-0 h-px w-full bg-white" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
        <div className="absolute left-1/3 top-0 h-full w-px bg-white" />
        <div className="absolute right-1/3 top-0 h-full w-px bg-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-10 bg-[var(--text-main)]/40" />

            <span className="text-[10px] uppercase tracking-[0.36em] text-muted">
              Отзывы
            </span>
          </div>

          <h2 className="text-4xl font-light leading-[0.96] tracking-[-0.055em] md:text-6xl">
            Спокойный
            <br />
            процесс реализации
          </h2>
        </div>

        <div className="grid gap-px border border-[var(--line)] md:grid-cols-2">
          {content.testimonials.map((item, i) => (
            <div key={i} className="premium-card border-0 p-8 md:p-10">
              <div className="mb-6 text-[11px] uppercase tracking-[0.26em] text-muted">
                0{i + 1}
              </div>

              <p className="text-xl font-light leading-relaxed tracking-[-0.03em] text-main md:text-2xl">
                “{item.text}”
              </p>

              <div className="mt-10 border-t border-[var(--line)] pt-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-main">
                  {item.name}
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">
                  {item.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
