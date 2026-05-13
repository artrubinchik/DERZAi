"use client";

import { useState } from "react";

export default function ContactForm() {
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
    <section id="contact" className="section-soft py-16 md:py-22">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-muted">
              Contact
            </p>

            <h2 className="text-3xl font-light tracking-[-0.055em] md:text-4xl">
              Обсудим проект
            </h2>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-px border border-[var(--line)] md:grid-cols-4"
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
