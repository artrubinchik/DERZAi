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
      {/* Верхняя форма */}
      <div className="absolute left-0 top-0 h-[26px] w-[42px] rounded-r-full border border-current" />

      {/* Нижний левый квадрат */}
      <div className="absolute bottom-0 left-0 h-[23px] w-[19px] border border-current" />

      {/* Замкнутый треугольник */}
      <svg
        className="absolute bottom-0 right-0"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M1 23L1 1L23 23Z"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
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
    const onScroll = () =>
      setFilled(window.scrollY > window.innerHeight * 0.72);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const darkHeader = !filled && !menuOpen;
  const navItems = content.nav.filter((item) => !item.isDzen);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${
        darkHeader
          ? "bg-transparent text-white"
          : "border-b border-[var(--line)] bg-[var(--bg-main)] text-[var(--text-main)]"
      }`}
    >
      <div className="mx-auto grid h-[92px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 lg:px-16">
        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-5 justify-self-start">
          <PremiumLogo />

          <div>
            <div className="whitespace-nowrap text-[19px] font-light uppercase leading-none tracking-[0.46em]">
              Rubik ART
            </div>

            <div
              className={`mt-2 whitespace-nowrap text-[9px] uppercase tracking-[0.2em] ${
                darkHeader ? "text-white/62" : "text-[var(--text-muted)]"
              }`}
            >
              Дизайн, реализация
            </div>
          </div>
        </Link>

        {/* NAV */}
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

        {/* RIGHT */}
        <div className="hidden items-center justify-end gap-4 lg:flex">
          <a
            href={`tel:${content.company.phone}`}
            className={`text-[14px] font-light tracking-[0.12em] transition ${
              darkHeader
                ? "text-white/78 hover:text-white"
                : "text-[var(--text-main)] hover:opacity-70"
            }`}
          >
            {content.company.phoneDisplay}
          </a>

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

        {/* MOBILE */}
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
          <nav className="mb-7 flex flex-col gap-5">
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

          <a
            href={`tel:${content.company.phone}`}
            className="block text-[18px] font-light tracking-[0.1em]"
          >
            {content.company.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
