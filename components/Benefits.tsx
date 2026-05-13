import { content } from "@/data/content";

export default function Benefits() {
  return (
    <section className="section-soft relative overflow-hidden py-12 md:py-16">
      <img
        src="/images/benefits-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover grayscale opacity-[0.16]"
      />
      <div className="absolute inset-0 bg-[var(--bg-main)]/82" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid gap-px border border-[var(--line)] md:grid-cols-4">
          {content.benefits.map((item, i) => (
            <div key={i} className="p-6 md:p-7">
              <p className="mb-10 text-[9px] uppercase tracking-[0.28em] text-muted">
                0{i + 1}
              </p>

              <h3 className="text-lg font-light leading-tight tracking-[-0.035em]">
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
