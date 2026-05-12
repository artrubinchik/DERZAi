import { content } from "@/data/content";

export default function Founder() {
  const { founder } = content;

  return (
    <section className="py-20 md:py-32 bg-warm/30 border-y border-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
           {/* Photo */} 
          <div className="relative">
            <div className="aspect-[3/4] max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden bg-warm">
              {/* Placeholder */}
              <div className="w-full h-full flex items-end p-8 bg-gradient-to-t from-black/20 to-transparent">
                {/* Real image (uncomment when added): */}
                {/* <Image src={founder.image} alt={founder.name} fill className="object-cover" /> */}
              </div>
            </div>

            {/* Quote bubble */}
            <div className="absolute -right-4 md:-right-10 bottom-10 bg-off-white border border-line rounded-xl p-5 shadow-md max-w-[200px]">
              <p className="text-sm text-black leading-snug font-medium">
                "{founder.quote}"
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-black" />
              <span className="text-xs font-medium tracking-widest uppercase text-gray">
                Основатель
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              {founder.name}
            </h2>
            <p className="text-gray text-sm whitespace-pre-line mb-10 leading-relaxed">
              {founder.role}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">
              {founder.stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-black pl-4">
                  <p className="text-2xl font-bold text-black">{stat.value}</p>
                  <p className="text-xs text-gray leading-snug mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
