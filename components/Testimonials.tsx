import { content } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="section-soft py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-light tracking-[-0.05em] md:text-3xl">
            Отзывы
          </h2>

          <span className="text-[9px] uppercase tracking-[0.24em] text-muted">
            Clients
          </span>
        </div>

        <div className="grid gap-px border border-[var(--line)] md:grid-cols-2">
          {content.testimonials.map((item, i) => (
            <div key={i} className="p-6 md:p-7">
              <p className="text-lg font-light leading-relaxed tracking-[-0.03em]">
                “{item.text}”
              </p>

              <div className="mt-7 border-t border-[var(--line)] pt-4">
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
