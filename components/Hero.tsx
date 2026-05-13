"use client";

import Image from "next/image";
import { content } from "@/data/content";

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
          className="object-cover grayscale-[35%] opacity-[0.52]"
        />

        {/* cinematic overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.72),rgba(0,0,0,0.38),rgba(0,0,0,0.62))]" />

        {/* top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />

        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
      </div>

      {/* GRAPHIC LINES */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute left-0 top-0 h-px w-full bg-white" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-white" />
        <div className="absolute left-1/3 top-0 h-full w-px bg-white" />
        <div className="absolute right-1/3 top-0 h-full w-px bg-white" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          {/* TOP LABEL */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-14 bg-[var(--text-main)]/38" />

            <span className="text-[10px] uppercase tracking-[0.42em] text-[var(--text-muted)]">
              {content.company.city}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-4xl text-4xl font-light leading-[0.9] tracking-[-0.07em] md:text-6xl lg:text-[84px]">
            Архитектурный
            <br />
            минимализм
            <br />
            как стиль жизни
          </h1>

          {/* SUBTEXT */}
          <div className="mt-12 max-w-2xl border-l border-[var(--line)] pl-8">
            <p className="text-base font-light leading-relaxed text-[var(--text-muted)] md:text-lg">
              Интерьеры и пространства,
              где сочетаются эстетика,
              функциональность и реализация
              без визуального шума и компромиссов.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-4">
            <button
              onClick={onQuizOpen}
              className="btn-minimal"
            >
              Просчёт проекта
            </button>

            <a
              href="#projects"
              className="btn-minimal"
            >
              Смотреть проекты
            </a>
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
                проектов
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
    </section>
  );
}
