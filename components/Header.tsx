"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function RubikLogo() {
  return (
    <div className="relative h-[46px] w-[46px] shrink-0">
      <div className="absolute left-0 top-0 h-[22px] w-[36px] rounded-r-full bg-current" />
      <div className="absolute bottom-0 left-0 h-[19px] w-[16px] bg-current" />
      <div className="absolute bottom-0 right-[6px] h-0 w-0 border-b-[19px] border-r-[19px] border-b-current border-r-transparent" />
    </div>
  );
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light-theme", isLight);
  }, [isLight]);

  const navItems = content.nav.filter((item) => !item.isDzen);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--bg-main)]/92 text-[var(--text-main)] backdrop-blur-xl">
      <div className="mx-auto grid h-[78px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center gap-5 justify-self-start">
          <RubikLogo />

          <div className="flex flex-col justify-center">
            <div className="whitespace-nowrap text-[17px] font-light uppercase leading-none tracking-[0.44em]">
              Rubik ART
            </div>
            <div className="mt-2 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Interior | Architecture | Realisation
            </div>
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <a
            href={`tel:${content.company.phone}`}
            className="text-[10px] font-light tracking-[0.16em] text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
          >
            {content.company.phoneDisplay}
          </a>

          <button onClick={onQuizOpen} className="btn-minimal !px-4 !py-2">
            Просчёт
          </button>

          <button
            onClick={() => setIsLight(!isLight)}
            className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
          >
            {isLight ? "Тёмная" : "Светлая"}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 justify-self-end lg:hidden"
          aria-label="Меню"
        >
          <span className={`h-px w-7 bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-7 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-7 bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--bg-main)] px-6 py-7 text-[var(--text-main)] lg:hidden">
          <nav className="mb-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.22em] text-[var(--text-muted)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a href={`tel:${content.company.phone}`} className="text-base tracking-[0.08em]">
              {content.company.phoneDisplay}
            </a>

            <button
              onClick={() => {
                onQuizOpen();
                setMenuOpen(false);
              }}
              className="btn-minimal w-full"
            >
              Просчёт за 2 минуты
            </button>

            <button
              onClick={() => setIsLight(!isLight)}
              className="border border-[var(--line)] px-6 py-4 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]"
            >
              {isLight ? "Включить тёмную тему" : "Включить светлую тему"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
