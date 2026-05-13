import { content } from "@/data/content";

export default function Founder() {
  const { founder } = content;

  return (
    <section className="section-soft py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid gap-14 md:grid-cols-[420px_1fr] md:items-center">
          {/* PHOTO */}
          <div className="relative">
            <div className="premium-card relative h-[480px] overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px w-10 bg-[var(--text-main)]/40" />

              <span className="text-[10px] uppercase tracking-[0.36em] text-muted">
                Основатель
              </span>
            </div>

            <h2 className="text-4xl font-light leading-[0.96] tracking-[-0.055em] md:text-6xl">
              {founder.name}
            </h2>

            <p className="mt-7 max-w-xl whitespace-pre-line text-base font-light leading-relaxed text-muted">
              {founder.role}
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-[var(--line)] pt-8">
              {founder.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-light tracking-[-0.05em]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l border-[var(--line)] pl-6">
              <p className="max-w-2xl text-base font-light leading-relaxed text-muted">
                “{founder.quote}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
