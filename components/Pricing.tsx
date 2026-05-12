import { content } from "@/data/content";

interface PricingProps {
  onQuizOpen: () => void;
}

export default function Pricing({ onQuizOpen }: PricingProps) {
  return (
    <section id="pricing" className="section-dark py-20 text-main md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px w-10 bg-[var(--text-main)]/45" />
              <span className="text-[10px] uppercase tracking-[0.38em] text-muted">
                Стоимость
              </span>
            </div>

            <h2 className="text-4xl font-light leading-[0.96] tracking-[-0.055em] md:text-6xl">
              Форматы работы
            </h2>
          </div>

          <p className="max-w-sm text-sm font-light leading-relaxed text-muted">
            Предварительный ориентир. Точная стоимость зависит от объекта,
            состава работ и уровня реализации.
          </p>
        </div>

        <div className="grid gap-px border border-[var(--line)] md:grid-cols-3">
          {content.pricing.map((item, i) => (
            <div
              key={i}
              className={`p-6 md:p-7 ${
                item.highlight ? "bg-[rgba(255,255,255,0.055)]" : "bg-transparent"
              }`}
            >
              <div className="mb-8 text-[10px] uppercase tracking-[0.3em] text-muted">
                {item.highlight ? "Основной" : `0${i + 1}`}
              </div>

              <h3 className="text-2xl font-light tracking-[-0.045em]">
                {item.service}
              </h3>

              <p className="mt-5 text-3xl font-light tracking-[-0.055em]">
                {item.price}
              </p>

              <p className="mt-5 min-h-[64px] text-sm font-light leading-relaxed text-muted">
                {item.desc}
              </p>

              <div className="my-6 h-px bg-[var(--line)]" />

              <ul className="mb-8 flex flex-col gap-3">
                {item.features.slice(0, 4).map((feature, j) => (
                  <li key={j} className="text-sm font-light text-muted">
                    — {feature}
                  </li>
                ))}
              </ul>

              <button onClick={onQuizOpen} className="btn-minimal w-full">
                Рассчитать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
