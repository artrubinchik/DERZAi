import { content } from "@/data/content";

export default function Founder() {
  const { founder } = content;

  return (
    <section className="section-soft py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[380px_1fr_160px] md:items-stretch md:px-12 lg:px-16">
        <div className="relative h-[460px] overflow-hidden bg-[var(--bg-card)]">
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
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-muted">
            Founder
          </p>

          <h2 className="text-3xl font-light tracking-[-0.055em] md:text-5xl">
            {founder.name}
          </h2>

          <p className="mt-6 max-w-xl whitespace-pre-line text-base font-light leading-relaxed text-muted">
            {founder.role}
          </p>

          <div className="mt-8 border-l border-[var(--line)] pl-6">
            <p className="max-w-2xl text-lg font-light leading-relaxed">
              Дизайн — это не про моду. Это про людей, их образ жизни,
              привычки и ценности.
            </p>
          </div>
        </div>

        <div className="grid border-l border-[var(--line)]">
          {founder.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col justify-center border-b border-[var(--line)] px-6 last:border-b-0"
            >
              <p className="text-3xl font-light tracking-[-0.05em]">
                {stat.value}
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
