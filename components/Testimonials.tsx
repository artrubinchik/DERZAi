import { content } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="section-soft relative overflow-hidden py-16 md:py-22">
      <img
        src="/images/testimonials-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover grayscale opacity-[0.14]"
      />
      <div className="absolute inset-0 bg-[var(--bg-main)]/84" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-muted">
              Clients
            </p>

            <h2 className="text-3xl font-light tracking-[-0.055em] md:text-4xl">
              Отзывы
            </h2>
          </div>
        </div>

        <div className="grid gap-px border border-[var(--line)] md:grid-cols-2">
          {content.testimonials.map((item, i) => (
            <div key={i} className="bg-[var(--bg-main)]/35 p-6 backdrop-blur-sm md:p-7">
              <p className="mb-8 text-[9px] uppercase tracking-[0.26em] text-muted">
                0{i + 1}
              </p>

              <p className="text-lg font-light leading-relaxed tracking-[-0.03em]">
                “{item.text}”
              </p>

              <div className="mt-7 border-t border-[var(--line)] pt-5">
                <p className="text-[10px] uppercase tracking-[0.2em]">
                  {item.name}
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-muted">
                  {item.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
