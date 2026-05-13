"use client";

import Image from "next/image";

interface HeroProps {
  onQuizOpen?: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative h-[720px] overflow-hidden bg-black text-white">
      <Image
        src="/images/hero.jpg"
        alt="Rubik ART интерьер"
        fill
        priority
        className="object-cover grayscale-[20%] opacity-[0.82]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.72),rgba(0,0,0,0.18),rgba(0,0,0,0.34))]" />

      <div className="relative z-10 flex h-full max-w-[1920px] items-center px-8 md:px-24">
        <div className="max-w-5xl">
          <h1 className="text-[48px] font-light uppercase leading-[1.08] tracking-[0.04em] md:text-[74px]">
            Пространства,
            <br />
            где эстетика становится
            <br />
            качеством жизни
          </h1>

          <div className="mt-14 flex max-w-3xl gap-8">
            <div className="w-px bg-white/55" />
            <p className="text-[22px] font-light leading-relaxed text-white/82">
              Мы создаём архитектуру и интерьеры, в которых продумана каждая
              деталь, а пространство работает на человека.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
