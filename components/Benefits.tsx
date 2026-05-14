const steps = [
  {
    title: "Знакомство",
    text: "Обсуждаем объект, задачу, бюджет и ожидания.",
  },
  {
    title: "Концепция",
    text: "Определяем планировку, стиль, материалы и визуальный сценарий.",
  },
  {
    title: "Проект",
    text: "Готовим чертежи, спецификации и решения для реализации.",
  },
  {
    title: "Реализация",
    text: "Сопровождаем ремонт, комплектацию и финальную сборку.",
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

            <h2 className="text-2xl font-light tracking-[-0.045em] md:text-4xl">
              Этапы работ
            </h2>
          </div>
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
      </div>
    </section>
  );
}
