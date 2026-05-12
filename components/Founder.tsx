import { content } from "@/data/content";

export default function Founder() {
  const { founder } = content;

  return (
    <section className="bg-[#F7F7F7] py-24 text-[#0D0D0D] md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-24">
          <div className="relative">
            <div className="relative h-[620px] overflow-hidden bg-[#E5E5E5]">
              <img
                src={founder.image}
                alt={founder.name}
                className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-10 left-6 right-6 border border-black/10 bg-white/90 p-6 backdrop-blur md:-right-14 md:left-auto md:max-w-sm">
              <p className="text-sm font-light leading-relaxed text-black/70">
                “{founder.quote}”
              </p>
            </div>
          </div>

          <div className="pt-8 md:pt-0">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-black" />
              <span className="text-xs uppercase tracking-[0.4em] text-black/45">
                Основатель
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">
              {founder.name}
            </h2>

            <p className="mt-8 max-w-xl whitespace-pre-line text-lg font-light leading-relaxed text-black/50">
              {founder.role}
            </p>

            <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
              {founder.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-light tracking-[-0.06em]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-black/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 border border-black/10 p-7">
              <p className="text-xs uppercase tracking-[0.35em] text-black/35">
                Подход
              </p>
              <p className="mt-5 max-w-2xl text-xl font-light leading-relaxed text-black/65">
                Интерьер должен быть не просто визуально эффектным. Он должен
                работать как точная система: планировка, материалы, свет,
                бюджет и реализация.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
