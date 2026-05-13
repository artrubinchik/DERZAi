"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function RubikLogo() {
  return (
    <div className="relative h-[42px] w-[42px] shrink-0">
      <div className="absolute left-0 top-0 h-[20px] w-[32px] rounded-r-full bg-current" />
      <div className="absolute bottom-0 left-0 h-[17px] w-[14px] bg-current" />
      <div className="absolute bottom-0 right-[5px] h-0 w-0 border-b-[17px] border-r-[17px] border-b-current border-r-transparent" />
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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="mx-auto grid h-[70px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 lg:px-16">
        {/* LEFT */}
        <Link href="/" className="flex items-center gap-4 justify-self-start">
          <RubikLogo />

          <div className="flex flex-col justify-center">
            <div className="whitespace-nowrap text-[15px] font-light uppercase leading-none tracking-[0.42em]">
              Rubik ART
            </div>

            <div className="mt-1.5 whitespace-nowrap text-[7px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Interior | Architecture | Realisation
            </div>
          </div>
        </Link>

        {/* CENTER */}
        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[9px] uppercase tracking-[0.22em] text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="hidden items-center justify-end gap-4 lg:flex">
          <a
            href={`tel:${content.company.phone}`}
            className="text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)] transition hover:text-[var(--text-main)]"
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={onQuizOpen}
            className="btn-minimal !px-3 !py-2 !text-[8px]"
          >
            Просчёт
          </button>

          <button
            onClick={() => setIsLight(!isLight)}
            className="border border-[var(--line)] px-3 py-2 text-[8px] uppercase tracking-[0.18em] text-[var(--text-muted)] transition hover:border-[var(--text-main)] hover:text-[var(--text-main)]"
          >
            {isLight
              ? "Поменять на тёмную версию"
              : "Поменять на светлую версию"}
          </button>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 justify-self-end lg:hidden"
          aria-label="Меню"
        >
          <span
            className={`h-px w-6 bg-current transition ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-6 bg-current transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-px w-6 bg-current transition ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
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

          <div className="flex flex-col gap-4">
            <a
              href={`tel:${content.company.phone}`}
              className="text-sm tracking-[0.08em]"
            >
              {content.company.phoneDisplay}
            </a>

            <button
              onClick={() => {
                onQuizOpen();
                setMenuOpen(false);
              }}
              className="btn-minimal w-full"
            >
              Просчёт проекта
            </button>

            <button
              onClick={() => setIsLight(!isLight)}
              className="border border-[var(--line)] px-5 py-4 text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]"
            >
              {isLight
                ? "Поменять на тёмную версию"
                : "Поменять на светлую версию"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
