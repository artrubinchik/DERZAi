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
    <section className="bg-[#0d0d0d] py-10 text-white md:py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-8 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-white/45">
              Process
            </p>

            <h2 className="text-2xl font-light tracking-[-0.045em] text-white md:text-3xl">
              Этапы работ
            </h2>
          </div>
        </div>

        <div className="grid gap-px border border-white/12 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="p-5 md:p-6">
              <p className="mb-5 text-[9px] uppercase tracking-[0.26em] text-white/40">
                0{i + 1}
              </p>

              <h3 className="text-lg font-light tracking-[-0.04em] text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm font-light leading-relaxed text-white/55">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
