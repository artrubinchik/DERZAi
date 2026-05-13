import { content } from "@/data/content";

export default function Founder() {
  const { founder } = content;

  return (
    <section className="section-soft py-16 md:py-22">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[360px_1fr] md:items-center">
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden bg-[var(--bg-card)]">
              <img
                src={founder.image}
                alt={founder.name}
                className="founder-light h-full w-full object-cover grayscale-[30%] transition duration-700 hover:grayscale-0"
              />

              <img
                src="/images/founder02.jpg"
                alt={founder.name}
                className="founder-dark h-full w-full object-cover grayscale-[20%] transition duration-700 hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-muted">
              Founder
            </p>

            <h2 className="text-3xl font-light tracking-[-0.055em] md:text-5xl">
              {founder.name}
            </h2>

            <p className="mt-6 max-w-xl whitespace-pre-line text-base font-light leading-relaxed text-muted">
              {founder.role}
            </p>

            <div className="mt-9 grid max-w-xl grid-cols-3 border-t border-[var(--line)] pt-7">
              {founder.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-light tracking-[-0.05em]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 border-l border-[var(--line)] pl-6">
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
