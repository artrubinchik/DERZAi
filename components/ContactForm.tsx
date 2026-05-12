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
      className="section-dark py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--text-main)]/50" />
              <span className="text-xs uppercase tracking-[0.42em] text-muted">
                Контакты
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Обсудим
              <br />
              ваш проект
            </h2>

            <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-muted">
              Расскажите о задаче — мы подготовим предварительное видение,
              сроки и ориентир по бюджету.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="premium-card flex flex-col gap-6 p-10"
          >
            <input
              type="text"
              placeholder="Ваше имя"
              className="border-b border-[var(--line)] bg-transparent pb-4 text-sm font-light outline-none placeholder:text-[var(--text-muted)]"
            />

            <input
              type="tel"
              placeholder="Телефон"
              className="border-b border-[var(--line)] bg-transparent pb-4 text-sm font-light outline-none placeholder:text-[var(--text-muted)]"
            />

            <textarea
              placeholder="Кратко опишите проект"
              rows={5}
              className="border-b border-[var(--line)] bg-transparent pb-4 text-sm font-light outline-none placeholder:text-[var(--text-muted)]"
            />

            <button
              type="submit"
              disabled={loading}
              className="btn-minimal mt-4 w-full"
            >
              {loading ? "Отправка..." : "Отправить"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
