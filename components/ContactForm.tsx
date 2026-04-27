"use client";

import { useState } from "react";
import { content } from "@/data/content";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    try {
      const message =
        `💬 *Заявка с формы обратной связи*\n\n` +
        `👤 Имя: ${name}\n` +
        `📞 Телефон: ${phone}\n` +
        `💬 Комментарий: ${comment || "—"}`;

      await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-off-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-warm" />
              <span className="text-xs font-medium tracking-widest uppercase text-gray">
                Свяжитесь с нами
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Начните свой<br />
              <span className="text-warm">проект сегодня</span>
            </h2>
            <p className="text-gray leading-relaxed mb-8">
              Расскажите о своём объекте. Мы свяжемся в течение 15 минут и проконсультируем бесплатно.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${content.company.phone}`}
                className="flex items-center gap-3 text-off-white hover:text-warm transition-colors"
              >
                <span className="w-9 h-9 rounded-full border border-off-white/20 flex items-center justify-center text-sm">
                  ☎
                </span>
                <span className="font-medium">{content.company.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-3 text-gray text-sm">
                <span className="w-9 h-9 rounded-full border border-off-white/10 flex items-center justify-center text-base">
                  ◎
                </span>
                <span>{content.company.city}</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-lg bg-white/5 border border-off-white/10 text-off-white placeholder:text-gray/50 text-sm focus:outline-none focus:border-off-white/30 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-lg bg-white/5 border border-off-white/10 text-off-white placeholder:text-gray/50 text-sm focus:outline-none focus:border-off-white/30 transition-colors"
                />
                <textarea
                  placeholder="Расскажите о проекте (необязательно)"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3.5 rounded-lg bg-white/5 border border-off-white/10 text-off-white placeholder:text-gray/50 text-sm focus:outline-none focus:border-off-white/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-off-white text-black text-sm font-bold rounded-lg hover:bg-warm transition-colors disabled:opacity-50 mt-1"
                >
                  {sending ? "Отправляем..." : "Получить консультацию"}
                </button>
                <p className="text-xs text-gray/50 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            ) : (
              <div className="text-center py-10 animate-fade-in">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Заявка отправлена</h3>
                <p className="text-gray">Перезвоним в течение 15 минут</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
