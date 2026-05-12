import { content } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="section-soft py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-[var(--text-main)]/50" />
            <span className="text-xs uppercase tracking-[0.42em] text-muted">
              Отзывы
            </span>
          </div>

          <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Опыт,
            <br />
            который запоминается
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {content.testimonials.map((item, i) => (
            <div key={i} className="premium-card p-10">
              <div className="mb-8 flex gap-1 text-[var(--text-main)]/45">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s}>✦</span>
                ))}
              </div>

              <p className="text-2xl font-light leading-relaxed tracking-[-0.03em] text-main">
                “{item.text}”
              </p>

              <div className="mt-10 border-t border-[var(--line)] pt-6">
                <p className="text-sm uppercase tracking-[0.22em] text-main">
                  {item.name}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
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
