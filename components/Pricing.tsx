import { content } from "@/data/content";

interface PricingProps {
  onQuizOpen: () => void;
}

export default function Pricing({ onQuizOpen }: PricingProps) {
  return (
    <section id="pricing" className="section-dark py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-light tracking-[-0.05em] md:text-3xl">
            Форматы работы
          </h2>

          <span className="text-[9px] uppercase tracking-[0.24em] text-muted">
            Pricing
          </span>
        </div>

        <div className="grid gap-px border border-[var(--line)] md:grid-cols-3">
          {content.pricing.map((item, i) => (
            <div key={i} className="p-5 md:p-6">
              <p className="mb-6 text-[9px] uppercase tracking-[0.24em] text-muted">
                0{i + 1}
              </p>

              <h3 className="text-lg font-light">
                {item.service}
              </h3>

              <p className="mt-4 text-2xl font-light tracking-[-0.05em]">
                {item.price}
              </p>

              <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                {item.desc}
              </p>

              <button
                onClick={onQuizOpen}
                className="btn-minimal mt-6 w-full !text-[8px]"
              >
                Рассчитать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
