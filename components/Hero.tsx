"use client";

import { content } from "@/data/content";
import Image from "next/image";

interface HeroProps {
  onQuizOpen: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Интерьер от DERZAi Group"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-20 md:px-8">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-white/50" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/70">
              {content.company.city}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
            {content.hero.heading}
          </h1>

          <p className="mt-7 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-white/70 md:text-xl">
            {content.hero.subheading}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onQuizOpen}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-[#D8D0C4]"
            >
              {content.hero.ctaPrimary}
            </button>

            <a
              href={content.company.briefFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/15 pt-8 text-white/80">
            <div>
              <p className="text-3xl font-semibold">13+</p>
              <p className="mt-1 text-sm text-white/50">лет в дизайне</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">30+</p>
              <p className="mt-1 text-sm text-white/50">проектов</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">15 мин</p>
              <p className="mt-1 text-sm text-white/50">до ответа</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
