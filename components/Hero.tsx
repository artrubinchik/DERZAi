"use client";

import { content } from "@/data/content";
import Image from "next/image";

interface HeroProps {
  onQuizOpen: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Интерьер от DERZAi"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-24 md:px-8">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-white/50" />
            <span className="text-xs uppercase tracking-[0.45em] text-white/60">
              {content.company.city}
            </span>
          </div>

          <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            {content.hero.heading}
          </h1>

          <p className="mt-8 max-w-2xl whitespace-pre-line text-lg font-light leading-relaxed text-white/65 md:text-xl">
            {content.hero.subheading}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={onQuizOpen}
              className="border border-white bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] text-black transition hover:-translate-y-0.5 hover:bg-transparent hover:text-white"
            >
              {content.hero.ctaPrimary}
            </button>

            <a
              href={content.company.briefFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/35 px-8 py-4 text-center text-xs font-medium uppercase tracking-[0.28em] text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/15 pt-8">
            <div>
              <p className="text-3xl font-light">13+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">лет</p>
            </div>
            <div>
              <p className="text-3xl font-light">30+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">проектов</p>
            </div>
            <div>
              <p className="text-3xl font-light">15</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">минут</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
