import { content } from "@/data/content";

interface PricingProps {
  onQuizOpen: () => void;
}

export default function Pricing({ onQuizOpen }: PricingProps) {
  return (
    <section id="pricing" className="section-soft relative overflow-hidden py-16 md:py-22">
      <img
        src="/images/pricing-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover grayscale opacity-[0.13]"
      />
      <div className="absolute inset-0 bg-[var(--bg-main)]/86" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-muted">
              Pricing
            </p>

            <h2 className="text-3xl font-light tracking-[-0.055em] md:text-4xl">
              Форматы работы
            </h2>
          </div>
        </div>

        <div className="grid gap-px border border-[var(--line)] md:grid-cols-3">
          {content.pricing.map((item, i) => (
            <div key={i} className="bg-[var(--bg-main)]/35 p-6 backdrop-blur-sm md:p-7">
              <p className="mb-7 text-[9px] uppercase tracking-[0.26em] text-muted">
                0{i + 1}
              </p>

              <h3 className="text-xl font-light tracking-[-0.045em]">
                {item.service}
              </h3>

              <p className="mt-5 text-2xl font-light tracking-[-0.055em]">
                {item.price}
              </p>

              <p className="mt-5 text-sm font-light leading-relaxed text-muted">
                {item.desc}
              </p>

              <div className="my-6 h-px bg-[var(--line)]" />

              <ul className="space-y-3">
                {item.features.slice(0, 4).map((feature, j) => (
                  <li key={j} className="text-sm font-light text-muted">
                    — {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button onClick={onQuizOpen} className="btn-minimal">
            Рассчитать стоимость за 2 минуты
          </button>
        </div>
      </div>
    </section>
  );
}
