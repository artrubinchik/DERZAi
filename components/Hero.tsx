"use client";

import { content } from "@/data/content";
import Image from "next/image";

interface HeroProps {
  onQuizOpen: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Rubik ART интерьер"
          fill
          className="object-cover grayscale opacity-[var(--hero-opacity)]"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-[var(--text-main)]/50" />
            <span className="text-xs uppercase tracking-[0.45em] text-[var(--text-muted)]">
              {content.company.city}
            </span>
          </div>

          <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            {content.hero.heading}
          </h1>

          <p className="mt-8 max-w-2xl whitespace-pre-line text-lg font-light leading-relaxed text-[var(--text-muted)] md:text-xl">
            {content.hero.subheading}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button onClick={onQuizOpen} className="btn-minimal">
              {content.hero.ctaPrimary}
            </button>

            <a
              href={content.company.briefFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-minimal"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-[var(--line)] pt-8">
            <div>
              <p className="text-3xl font-light">13+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                лет
              </p>
            </div>
            <div>
              <p className="text-3xl font-light">30+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                проектов
              </p>
            </div>
            <div>
              <p className="text-3xl font-light">15</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                минут
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
