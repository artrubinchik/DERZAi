import { content } from "@/data/content";

export default function Founder() {
  const { founder } = content;

  return (
    <section className="bg-[#F5F2ED] py-24 md:py-36 text-[#111111]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
          {/* Photo */}
          <div className="relative">
            <div className="relative h-[560px] overflow-hidden rounded-[32px] bg-[#D8D0C4] md:h-[680px]">
              <img
                src={founder.image}
                alt={founder.name}
                className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 left-6 right-6 rounded-3xl border border-black/10 bg-white/85 p-6 shadow-xl backdrop-blur md:-right-12 md:left-auto md:max-w-xs">
              <p className="text-sm font-medium leading-relaxed text-black/80">
                “{founder.quote}”
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="pt-10 md:pt-0">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="text-xs uppercase tracking-[0.35em] text-black/45">
                Основатель DERZAi
              </span>
            </div>

            <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl">
              {founder.name}
            </h2>

            <p className="mt-6 max-w-xl whitespace-pre-line text-lg leading-relaxed text-black/55">
              {founder.role}
            </p>

            <div className="mt-12 grid gap-6 border-t border-black/10 pt-8 sm:grid-cols-3">
              {founder.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-semibold tracking-[-0.04em] text-black">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-black/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-black/10 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-black/35">
                Подход
              </p>
              <p className="mt-4 max-w-2xl text-xl leading-relaxed text-black/75">
                Мы проектируем интерьер не как картинку, а как будущую систему
                жизни: планировка, свет, материалы, бюджет и реализация должны
                работать вместе.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
