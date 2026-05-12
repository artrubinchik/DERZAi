import { content } from "@/data/content";

interface PricingProps {
  onQuizOpen: () => void;
}

export default function Pricing({ onQuizOpen }: PricingProps) {
  return (
    <section id="pricing" className="bg-[#0D0D0D] py-24 text-white md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-20 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-white/60" />
              <span className="text-xs uppercase tracking-[0.4em] text-white/45">
                Стоимость услуг
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.98] tracking-[-0.06em] md:text-7xl">
              Прозрачный
              <br />
              старт проекта
            </h2>
          </div>

          <p className="max-w-md text-sm font-light leading-relaxed text-white/45">
            Цена зависит от площади, состояния объекта, состава работ и уровня
            материалов. Начинаем с предварительного расчёта.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {content.pricing.map((item, i) => (
            <div
              key={i}
              className={`relative border p-8 transition duration-300 ${
                item.highlight
                  ? "border-white bg-white text-black"
                  : "border-white/15 bg-white/[0.03] text-white hover:border-white/40"
              }`}
            >
              <div
                className={`mb-10 text-[10px] uppercase tracking-[0.35em] ${
                  item.highlight ? "text-black/45" : "text-white/35"
                }`}
              >
                {item.highlight ? "Популярно" : `0${i + 1}`}
              </div>

              <h3 className="text-3xl font-light tracking-[-0.05em]">
                {item.service}
              </h3>

              <p
                className={`mt-6 text-4xl font-light tracking-[-0.06em] ${
                  item.highlight ? "text-black" : "text-white"
                }`}
              >
                {item.price}
              </p>

              <p
                className={`mt-6 min-h-[84px] text-sm font-light leading-relaxed ${
                  item.highlight ? "text-black/55" : "text-white/45"
                }`}
              >
                {item.desc}
              </p>

              <div className={`my-8 h-px ${item.highlight ? "bg-black/10" : "bg-white/10"}`} />

              <ul className="mb-10 flex flex-col gap-4">
                {item.features.map((feature, j) => (
                  <li
                    key={j}
                    className={`text-sm font-light ${
                      item.highlight ? "text-black/65" : "text-white/55"
                    }`}
                  >
                    — {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={onQuizOpen}
                className={`w-full border px-6 py-4 text-xs uppercase tracking-[0.25em] transition ${
                  item.highlight
                    ? "border-black bg-black text-white hover:bg-transparent hover:text-black"
                    : "border-white/25 text-white hover:border-white hover:bg-white hover:text-black"
                }`}
              >
                Рассчитать
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-light text-white/35">
          Точная стоимость рассчитывается индивидуально после обсуждения задачи.
        </p>
      </div>
    </section>
  );
}
