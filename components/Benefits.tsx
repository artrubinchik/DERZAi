import { content } from "@/data/content";

const steps = [
  {
    title: "Знакомство",
    text: "Обсуждаем задачу, объект, бюджет, сроки и желаемый уровень реализации.",
  },
  {
    title: "Концепция",
    text: "Формируем направление: планировка, настроение, материалы и визуальная логика.",
  },
  {
    title: "Проект",
    text: "Готовим дизайн-проект, чертежи, спецификации и решения для реализации.",
  },
  {
    title: "Реализация",
    text: "Сопровождаем ремонт, комплектацию и финальную сборку пространства.",
  },
];

export default function Benefits() {
  return (
    <section className="section-soft py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-muted">
              Process
            </p>

            <h2 className="text-3xl font-light tracking-[-0.055em] md:text-4xl">
              Этапы работ
            </h2>
          </div>

          <p className="hidden max-w-sm text-sm font-light leading-relaxed text-muted md:block">
            Процесс построен так, чтобы клиент понимал каждый шаг — от первой
            идеи до готового пространства.
          </p>
        </div>

        <div className="grid gap-px border border-[var(--line)] md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="p-5 md:p-6">
              <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-muted">
                0{i + 1}
              </p>

              <h3 className="text-lg font-light tracking-[-0.04em]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-px border border-[var(--line)] md:grid-cols-2">
          {content.testimonials.map((item, i) => (
            <div key={i} className="p-6 md:p-7">
              <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-muted">
                Отзыв 0{i + 1}
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
