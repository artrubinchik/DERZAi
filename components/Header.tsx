"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function PremiumLogo() {
  return (
    <div className="relative h-[64px] w-[64px] shrink-0">
      {/* Верхняя форма */}
      <div className="absolute left-0 top-[4px] h-[30px] w-[50px] rounded-r-full border border-current bg-current" />

      {/* Нижний квадрат */}
      <div className="absolute bottom-0 left-0 h-[26px] w-[26px] border border-current bg-current" />

      {/* Треугольник */}
      <svg
        className="absolute bottom-0 left-[28px]"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="currentColor"
      >
        <path
          d="M1 25V1L25 25H1Z"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", dark);
  }, [dark]);

  const navItems = content.nav.filter((item) => !item.isDzen);

  return (
    <header className="relative z-50 bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="mx-auto grid h-[150px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center border-b border-[var(--line)] px-8 md:px-16">
        <Link href="/" className="flex items-center gap-7 justify-self-start">
          <PremiumLogo />

          <div className="border-l border-[var(--line)] pl-7">
            <div className="text-[28px] font-light uppercase tracking-[0.42em]">
              Rubik ART
            </div>
            <div className="mt-4 text-[13px] font-light text-[var(--text-muted)]">
              дизайн, реализация
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-11 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] uppercase tracking-[0.08em] text-[var(--text-main)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-9 md:flex">
          <a
            href={`tel:${content.company.phone}`}
            className="text-[20px] font-light tracking-[0.05em]"
          >
            {content.company.phoneDisplay}
          </a>

          <div className="h-10 w-px bg-[var(--line)]" />

          <button
            onClick={() => setDark(!dark)}
            className="border border-[var(--text-main)] px-7 py-4 text-[12px] uppercase tracking-[0.08em]"
          >
            {dark ? "Светлая версия" : "Тёмная версия"}
          </button>
        </div>
      </div>
    </header>
  );
}
