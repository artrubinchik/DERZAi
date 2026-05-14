"use client";

import { content } from "@/data/content";

interface PricingProps {
  onQuizOpen: () => void;
}

export default function Pricing({ onQuizOpen }: PricingProps) {
  return (
    <section id="pricing" className="bg-[#0d0d0d] py-14 text-white md:py-18">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 md:px-12 lg:px-16">
        <div>
          <p className="mb-6 text-[10px] uppercase tracking-[0.26em] text-white/55">
            Стоимость услуг
          </p>

          <div className="space-y-4 text-white/85">
            {content.pricing.map((item, i) => (
              <div key={i}>
                <p className="text-[11px] text-white/45">{item.service}</p>
                <p className="text-xl font-light tracking-[0.08em]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={onQuizOpen}
            className="mt-7 text-[10px] uppercase tracking-[0.22em] text-white/70 transition hover:text-white hover:underline hover:underline-offset-8"
          >
            Точный расчет после консультации
          </button>
        </div>

        <div className="border-l border-white/12 pl-8">
          <p className="mb-6 text-[10px] uppercase tracking-[0.26em] text-white/55">
            Отзыв
          </p>

          <p className="text-2xl leading-none text-white/80">“</p>

          <p className="mt-2 text-sm font-light leading-relaxed text-white/70">
            Работа с Артемом — это не про ремонт, это про результат,
            который превосходит ожидания. Команда слышит, понимает и делает
            больше, чем обещает.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/20" />

            <div>
              <p className="text-xs text-white/80">Мария и Алексей</p>
              <p className="text-[10px] text-white/45">Квартира 82 м²</p>
            </div>
          </div>
        </div>

        <div className="border-l border-white/12 pl-8">
          <p className="mb-6 text-[10px] uppercase tracking-[0.26em] text-white/55">
            Обсудить проект
          </p>

          <div className="space-y-4 text-sm text-white/75">
            <a href="tel:+79171234567" className="flex gap-3 hover:text-white">
              <span>☎</span>
              <span>+7 (917) 123-45-67</span>
            </a>

            <a
              href="https://wa.me/79171234567"
              target="_blank"
              className="flex gap-3 hover:text-white"
            >
              <span>◌</span>
              <span>WhatsApp</span>
            </a>

            <a
              href="https://t.me/derzai_group"
              target="_blank"
              className="flex gap-3 hover:text-white"
            >
              <span>↗</span>
              <span>Telegram</span>
            </a>

            <a
              href="https://max.ru/derzai_group"
              target="_blank"
              className="flex gap-3 hover:text-white"
            >
              <span>✦</span>
              <span>MAX</span>
            </a>

            <a
              href="https://instagram.com/derzai.group"
              target="_blank"
              className="flex gap-3 hover:text-white"
            >
              <span>◎</span>
              <span>@derzai.group</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
