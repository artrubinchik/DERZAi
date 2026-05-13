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
    <section
      id="contact"
      className="section-dark py-14 md:py-18"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-light tracking-[-0.05em] md:text-3xl">
            Контакты
          </h2>

          <span className="text-[9px] uppercase tracking-[0.24em] text-muted">
            Contact
          </span>
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
            className="border-t border-[var(--line)] text-[9px] uppercase tracking-[0.22em] transition hover:bg-white hover:text-black md:border-l md:border-t-0"
          >
            {loading ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </section>
  );
}
