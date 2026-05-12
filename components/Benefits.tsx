import { content } from "@/data/content";

export default function Benefits() {
  return (
    <section className="section-dark border-y border-[var(--line)] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid gap-px border border-[var(--line)] md:grid-cols-4">
          {content.benefits.map((item, i) => (
            <div key={i} className="px-6 py-7 md:px-8 md:py-9">
              <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-muted">
                0{i + 1}
              </p>

              <h3 className="text-lg font-light leading-tight tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
