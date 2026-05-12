import { content } from "@/data/content";

interface PricingProps {
  onQuizOpen: () => void;
}

export default function Pricing({ onQuizOpen }: PricingProps) {
  return (
    <section
      id="pricing"
      className="section-dark py-24 text-main md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* HEADER */}
        <div className="mb-20 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--text-main)]/50" />
              <span className="text-xs uppercase tracking-[0.42em] text-muted">
                Стоимость услуг
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Прозрачный
              <br />
              старт проекта
            </h2>
          </div>

          <p className="max-w-md text-sm font-light leading-relaxed text-muted">
            Каждый проект рассчитывается индивидуально: площадь, уровень
            материалов, сложность и сроки реализации.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-5 md:grid-cols-3">
          {content.pricing.map((item, i) => (
            <div
              key={i}
              className={`premium-card relative p-8 ${
                item.highlight
                  ? "border-[var(--text-main)] bg-[rgba(255,255,255,0.04)]"
                  : ""
              }`}
            >
              <div className="mb-10 text-[10px] uppercase tracking-[0.35em] text-muted">
                {item.highlight ? "Популярно" : `0${i + 1}`}
              </div>

              <h3 className="text-3xl font-light tracking-[-0.05em]">
                {item.service}
              </h3>

              <p className="mt-6 text-4xl font-light tracking-[-0.06em]">
                {item.price}
              </p>

              <p className="mt-6 min-h-[84px] text-sm font-light leading-relaxed text-muted">
                {item.desc}
              </p>

              <div className="my-8 h-px bg-[var(--line)]" />

              <ul className="mb-10 flex flex-col gap-4">
                {item.features.map((feature, j) => (
                  <li
                    key={j}
                    className="text-sm font-light text-muted"
                  >
                    — {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={onQuizOpen}
                className="btn-minimal w-full"
              >
                Рассчитать
              </button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-light text-muted">
          Финальная стоимость формируется после обсуждения задачи и анализа
          объекта.
        </p>
      </div>
    </section>
  );
}
