"use client";

import Image from "next/image";
import { content } from "@/data/content";

interface HeroProps {
  onQuizOpen?: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Rubik ART интерьер"
          fill
          priority
          className="object-cover grayscale-[18%] opacity-[0.76]"
        />

        {/* LIGHT */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.68),rgba(0,0,0,0.12),rgba(0,0,0,0.28))] dark:hidden" />

        {/* DARK */}
        <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(to_right,rgba(0,0,0,0.82),rgba(0,0,0,0.48),rgba(0,0,0,0.74))]" />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute left-0 top-0 h-px w-full bg-current" />
        <div className="absolute left-1/3 top-0 h-full w-px bg-current" />
        <div className="absolute right-1/3 top-0 h-full w-px bg-current" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-36 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-14 bg-current opacity-45" />

            <span className="text-[10px] uppercase tracking-[0.42em] opacity-65">
              {content.company.city}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-light leading-[0.92] tracking-[-0.065em] md:text-6xl lg:text-[82px]">
            Архитектура
            <br />
            минимализма
            <br />
            и тишины
          </h1>

          <div className="mt-14 max-w-2xl border-l border-current/20 pl-8">
            <p className="text-base font-light leading-relaxed opacity-72 md:text-lg">
              Мы создаём пространства,
              в которых эстетика,
              свет, пропорции и материалы
              формируют спокойную среду
              для жизни и работы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
