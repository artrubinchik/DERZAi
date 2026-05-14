"use client";

import Image from "next/image";

interface HeroProps {
  onQuizOpen?: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Rubik ART интерьер"
          fill
          priority
          className="object-cover grayscale-[18%] opacity-[0.78]"
        />

        <div className="absolute inset-0 bg-black/28" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 md:px-12 lg:px-16">
        <div className="max-w-6xl">
          <p className="mb-8 text-[10px] uppercase tracking-[0.38em] text-white/70">
            Дизайн и ремонт под ключ
          </p>

          <h1 className="max-w-5xl text-4xl font-light leading-[1.02] tracking-[-0.06em] text-white md:text-6xl lg:text-[76px]">
            Мы создаем интерьеры, в которых продумана каждая деталь,
            а пространство работает на человека
          </h1>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 z-10 text-[10px] uppercase tracking-[0.32em] text-white/70 md:left-12 lg:left-16">
        Набережные Челны / Россия
      </div>

      <div className="absolute bottom-8 right-6 z-10 max-w-sm text-right text-[10px] uppercase tracking-[0.26em] text-white/70 md:right-12 lg:right-16">
        Проектируем и реализуем частные и общественные пространства
      </div>
    </section>
  );
}
