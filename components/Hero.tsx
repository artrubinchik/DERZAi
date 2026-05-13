"use client";

import Image from "next/image";
import { content } from "@/data/content";

interface HeroProps {
  onQuizOpen?: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Rubik ART интерьер"
          fill
          priority
          className="object-cover grayscale-[18%] opacity-[0.76]"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.72),rgba(0,0,0,0.18),rgba(0,0,0,0.42))]" />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
      </div>

      {/* graphic lines */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute left-0 top-0 h-px w-full bg-white" />
        <div className="absolute left-1/3 top-0 h-full w-px bg-white" />
        <div className="absolute right-1/3 top-0 h-full w-px bg-white" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-36 md:px-12 lg:px-16">
        <div className="max-w-5xl">
          {/* CITY */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px w-14 bg-white/45" />

            <span className="text-[10px] uppercase tracking-[0.42em] text-white/65">
              {content.company.city}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-4xl text-4xl font-light leading-[0.92] tracking-[-0.065em] text-white md:text-6xl lg:text-[82px]">
            Архитектура
            <br />
            минимализма
            <br />
            и тишины
          </h1>

          {/* MISSION */}
          <div className="mt-14 max-w-2xl border-l border-white/22 pl-8">
            <p className="text-base font-light leading-relaxed text-white/72 md:text-lg">
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
