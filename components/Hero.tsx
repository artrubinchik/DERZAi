"use client";

import { content } from "@/data/content";
import Image from "next/image";

interface HeroProps {
  onQuizOpen?: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Rubik ART интерьер"
          fill
          priority
          className="object-cover grayscale opacity-[var(--hero-opacity)]"
        />

        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          {/* TOP LABEL */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-14 bg-[var(--text-main)]/40" />

            <span className="text-[10px] uppercase tracking-[0.42em] text-[var(--text-muted)]">
              {content.company.city}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-5xl text-5xl font-light leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-[112px]">
            Пространства,
            <br />
            которые ощущаются
            <br />
            как стиль жизни
          </h1>

          {/* SUBTEXT */}
          <div className="mt-12 max-w-2xl border-l border-[var(--line)] pl-8">
            <p className="text-lg font-light leading-relaxed text-[var(--text-muted)] md:text-xl">
              Архитектурный минимализм,
              продуманные материалы
              и реализация без компромиссов —
              от концепции до готового интерьера.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-20 grid max-w-2xl grid-cols-3 border-t border-[var(--line)] pt-10">
            <div>
              <p className="text-4xl font-light tracking-[-0.06em]">
                13+
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                лет опыта
              </p>
            </div>

            <div>
              <p className="text-4xl font-light tracking-[-0.06em]">
                30+
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                реализованных проектов
              </p>
            </div>

            <div>
              <p className="text-4xl font-light tracking-[-0.06em]">
                Full
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                design & realisation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
    </section>
  );
}
