import { content } from "@/data/content";

interface PricingProps {
  onQuizOpen: () => void;
}

export default function Pricing({ onQuizOpen }: PricingProps) {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-black" />
            <span className="text-xs font-medium tracking-widest uppercase text-gray">
              Стоимость услуг
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Прозрачные цены
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {content.pricing.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-xl p-7 md:p-8 border transition-all duration-300 ${
                item.highlight
                  ? "bg-black border-black text-off-white"
                  : "bg-off-white border-line hover:border-black/20 hover:shadow-sm"
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-3 left-7">
                  <span className="inline-flex px-3 py-1 bg-warm text-black text-xs font-semibold rounded-full">
                    Популярно
                  </span>
                </div>
              )}

              <h3
                className={`text-lg font-semibold mb-1 ${
                  item.highlight ? "text-off-white" : "text-black"
                }`}
              >
                {item.service}
              </h3>
              <p
                className={`text-2xl font-bold mb-3 ${
                  item.highlight ? "text-warm" : "text-black"
                }`}
              >
                {item.price}
              </p>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  item.highlight ? "text-gray" : "text-gray"
                }`}
              >
                {item.desc}
              </p>

              <ul className="flex flex-col gap-2 mb-8">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <span
                      className={`text-base leading-none ${
                        item.highlight ? "text-warm" : "text-black/40"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={item.highlight ? "text-off-white/80" : "text-gray"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onQuizOpen}
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all ${
                  item.highlight
                    ? "bg-off-white text-black hover:bg-warm"
                    : "border border-line text-black hover:border-black"
                }`}
              >
                Рассчитать стоимость
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray mt-8">
          Точная стоимость рассчитывается индивидуально после осмотра объекта
        </p>
      </div>
    </section>
  );
}
