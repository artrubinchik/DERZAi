import { content } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-black" />
          <span className="text-xs font-medium tracking-widest uppercase text-gray">
            Отзывы клиентов
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {content.testimonials.map((t, i) => (
            <div
              key={i}
              className="p-7 md:p-8 border border-line rounded-xl bg-off-white hover:border-black/20 hover:shadow-sm transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-black text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-black leading-relaxed mb-6 font-medium">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-warm flex items-center justify-center text-sm font-bold text-black">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-gray">{t.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
