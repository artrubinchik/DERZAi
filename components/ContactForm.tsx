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
      className="section-soft relative overflow-hidden py-20 md:py-28"
    >
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute left-0 top-0 h-px w-full bg-white" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="h-px w-10 bg-[var(--text-main)]/40" />

              <span className="text-[10px] uppercase tracking-[0.36em] text-muted">
                Контакты
              </span>
            </div>

            <h2 className="text-4xl font-light leading-[0.96] tracking-[-0.055em] md:text-6xl">
              Обсудим
              <br />
              ваш проект
            </h2>

            <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-muted">
              Расскажите о задаче — подготовим концепцию, ориентир по бюджету
              и дальнейший план реализации.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="premium-card border border-[var(--line)] p-8 md:p-10"
          >
            <div className="grid gap-8">
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
                rows={4}
                className="border-b border-[var(--line)] bg-transparent pb-4 text-sm font-light outline-none placeholder:text-[var(--text-muted)]"
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-minimal mt-4 w-full"
              >
                {loading ? "Отправка..." : "Отправить"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
