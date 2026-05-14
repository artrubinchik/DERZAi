"use client";

import { useState } from "react";
import { content } from "@/data/content";

interface PricingProps {
  onQuizOpen: () => void;
}

export default function Pricing({ onQuizOpen }: PricingProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Заявка отправлена");
    }, 1200);
  }

  return (
    <section id="pricing" className="section-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-muted">
              Pricing / Contact
            </p>

            <h2 className="text-3xl font-light tracking-[-0.055em] md:text-4xl">
              Стоимость и заявка
            </h2>
          </div>

          <button onClick={onQuizOpen} className="btn-minimal hidden md:inline-flex">
            Рассчитать стоимость за 2 минуты
          </button>
        </div>

        <div className="grid gap-px border border-[var(--line)] md:grid-cols-3">
          {content.pricing.map((item, i) => (
            <div
              key={i}
              className={`p-6 md:p-7 ${
                item.highlight ? "bg-[var(--bg-card)]" : "bg-transparent"
              }`}
            >
              <p className="mb-7 text-[9px] uppercase tracking-[0.26em] text-muted">
                0{i + 1}
              </p>

              <h3 className="text-xl font-light tracking-[-0.045em]">
                {item.service}
              </h3>

              <p className="mt-5 text-2xl font-light tracking-[-0.055em]">
                {item.price}
              </p>

              <p className="mt-5 text-sm font-light leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-px border border-[var(--line)] md:grid-cols-4"
        >
          <input
            type="text"
            placeholder="Имя"
            className="bg-transparent px-5 py-5 text-sm font-light outline-none placeholder:text-[var(--text-muted)]"
          />

          <input
            type="tel"
            placeholder="Телефон"
            className="border-t border-[var(--line)] bg-transparent px-5 py-5 text-sm font-light outline-none placeholder:text-[var(--text-muted)] md:border-l md:border-t-0"
          />

          <input
            type="text"
            placeholder="Тип проекта"
            className="border-t border-[var(--line)] bg-transparent px-5 py-5 text-sm font-light outline-none placeholder:text-[var(--text-muted)] md:border-l md:border-t-0"
          />

          <button
            type="submit"
            disabled={loading}
            className="border-t border-[var(--line)] text-[9px] uppercase tracking-[0.22em] transition hover:bg-black hover:text-white md:border-l md:border-t-0"
          >
            {loading ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </section>
  );
}
