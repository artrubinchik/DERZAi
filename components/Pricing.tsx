import { content } from "@/data/content";

interface PricingProps {
  onQuizOpen: () => void;
}

export default function Pricing({ onQuizOpen }: PricingProps) {
  return (
    <section id="pricing" className="bg-[#F5F2ED] py-24 md:py-36 text-[#111111]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-10 bg-[#111111]" />
              <span className="text-xs uppercase tracking-[0.35em] text-black/45">
                Стоимость услуг
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Прозрачный старт
              <br />
              без случайных цифр
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-black/45">
            Финальная стоимость зависит от площади, состояния объекта, уровня
            материалов и состава работ.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.pricing.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-[28px] border p-7 transition duration-300 md:p-8 ${
                item.highlight
                  ? "border-[#111111] bg-[#111111] text-white shadow-2xl"
                  : "border-black/10 bg-white/70 text-[#111111] hover:-translate-y-1 hover:border-black/25"
              }`}
            >
              {item.highlight && (
                <div className="mb-8 inline-flex rounded-full bg-[#D8D0C4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black">
                  Популярно
                </div>
              )}

              {!item.highlight && (
                <div className="mb-8 text-xs uppercase tracking-[0.22em] text-black/35">
                  0{i + 1}
                </div>
              )}

              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                {item.service}
              </h3>

              <p
                className={`mt-5 text-4xl font-semibold tracking-[-0.05em] ${
                  item.highlight ? "text-[#D8D0C4]" : "text-[#111111]"
                }`}
              >
                {item.price}
              </p>

              <p
                className={`mt-5 min-h-[72px] text-sm leading-relaxed ${
                  item.highlight ? "text-white/55" : "text-black/45"
                }`}
              >
                {item.desc}
              </p>

              <div
                className={`my-8 h-px ${
                  item.highlight ? "bg-white/15" : "bg-black/10"
                }`}
              />

              <ul className="mb-10 flex flex-col gap-4">
                {item.features.map((feature, j) => (
                  <li key={j} className="flex gap-3 text-sm">
                    <span
                      className={`mt-0.5 ${
                        item.highlight ? "text-[#D8D0C4]" : "text-black/35"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={
                        item.highlight ? "text-white/75" : "text-black/55"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onQuizOpen}
                className={`w-full rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] transition ${
                  item.highlight
                    ? "bg-white text-black hover:bg-[#D8D0C4]"
                    : "border border-black/15 text-black hover:border-black hover:bg-black hover:text-white"
                }`}
              >
                Рассчитать
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-black/40">
          Точная стоимость рассчитывается индивидуально после обсуждения задачи
          и состояния объекта.
        </p>
      </div>
    </section>
  );
}
