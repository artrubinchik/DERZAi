"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function PremiumLogo() {
  return (
    <div className="relative h-[54px] w-[54px] shrink-0">
      <div className="absolute left-0 top-0 h-[26px] w-[42px] rounded-r-full border border-current" />
      <div className="absolute bottom-0 left-0 h-[24px] w-[1px] bg-current" />
      <div className="absolute bottom-0 left-[18px] h-[24px] w-[1px] bg-current" />
      <div className="absolute bottom-0 right-[8px] h-[24px] w-[1px] rotate-[-28deg] bg-current origin-bottom" />
    </div>
  );
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setFilled(window.scrollY > window.innerHeight * 0.72);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = content.nav.filter((item) => !item.isDzen);
  const darkHeader = !filled && !menuOpen;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${
        darkHeader
          ? "bg-transparent text-white"
          : "border-b border-[var(--line)] bg-[var(--bg-main)] text-[var(--text-main)]"
      }`}
    >
      <div className="mx-auto grid h-[92px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center gap-5 justify-self-start">
          <PremiumLogo />

          <div>
            <div className="whitespace-nowrap text-[19px] font-light uppercase leading-none tracking-[0.48em]">
              Rubik ART
            </div>

            <div
              className={`mt-2 whitespace-nowrap text-[8px] uppercase tracking-[0.24em] ${
                darkHeader ? "text-white/62" : "text-[var(--text-muted)]"
              }`}
            >
              Interior | Architecture | Realisation
            </div>
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[11px] uppercase tracking-[0.24em] transition ${
                darkHeader
                  ? "text-white/70 hover:text-white"
                  : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-4 lg:flex">
          <a
            href={`tel:${content.company.phone}`}
            className={`text-[10px] uppercase tracking-[0.18em] transition ${
              darkHeader
                ? "text-white/68 hover:text-white"
                : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={onQuizOpen}
            className={`border px-4 py-2 text-[9px] uppercase tracking-[0.2em] transition ${
              darkHeader
                ? "border-white/35 text-white hover:border-white"
                : "border-[var(--button-border)] text-[var(--text-main)] hover:border-[var(--text-main)]"
            }`}
          >
            Просчёт
          </button>

          <button
            onClick={() => setDark(!dark)}
            className={`border px-4 py-2 text-[8px] uppercase tracking-[0.18em] transition ${
              darkHeader
                ? "border-white/25 text-white/60 hover:text-white"
                : "border-[var(--line)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            {dark ? "Светлая версия" : "Тёмная версия"}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 justify-self-end lg:hidden"
          aria-label="Меню"
        >
          <span className="h-px w-7 bg-current" />
          <span className="h-px w-7 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--bg-main)] px-6 py-7 text-[var(--text-main)] lg:hidden">
          <nav className="mb-8 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setDark(!dark)}
            className="w-full border border-[var(--line)] px-5 py-4 text-[9px] uppercase tracking-[0.18em]"
          >
            {dark ? "Светлая версия" : "Тёмная версия"}
          </button>
        </div>
      )}
    </header>
  );
}
