"use client";

import Image from "next/image";

interface HeroProps {
  onQuizOpen?: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* IMAGE RIGHT 3/4 */}
      <div className="absolute bottom-0 right-0 top-0 w-full md:w-3/4">
        <Image
          src="/images/hero.jpg"
          alt="Rubik ART интерьер"
          fill
          priority
          className="object-cover grayscale-[15%] opacity-[0.82]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-black/10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* LEFT CONTENT 1/4 */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1920px] items-center px-6 pt-24 md:px-12 lg:px-16">
        <div className="max-w-xl md:w-1/4">
          <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-white/55">
            Дизайн и ремонт под ключ
          </p>

          <h1 className="text-3xl font-light leading-[1.02] tracking-[-0.055em] text-white md:text-4xl lg:text-[48px]">
            Интерьеры,
            <br />
            в которых
            <br />
            продумана
            <br />
            каждая деталь
          </h1>

          <div className="mt-10 h-px w-20 bg-white/35" />

          <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-white/58">
            Проектируем и реализуем частные и общественные пространства,
            где эстетика работает вместе с функцией.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 z-10 text-[10px] uppercase tracking-[0.28em] text-white/55 md:left-12 lg:left-16">
        Набережные Челны / Россия
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden max-w-sm text-right text-[10px] uppercase tracking-[0.24em] text-white/55 md:block md:right-12 lg:right-16">
        Частные и общественные пространства
      </div>
    </section>
  );
}
