import { content } from "@/data/content";

export default function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-off-white border-t border-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-black" />
          <span className="text-xs font-medium tracking-widest uppercase text-gray">
            Почему выбирают нас
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {content.benefits.map((item, i) => (
            <div
              key={i}
              className="group p-6 md:p-8 border border-line rounded-xl hover:border-black/20 hover:shadow-sm transition-all duration-300 bg-off-white"
            >
              {/* Icon */}
              <div className="text-2xl mb-5 text-warm group-hover:text-black transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-black mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
