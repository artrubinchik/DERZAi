"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function RubikLogo() {
  return (
    <div className="relative h-[58px] w-[58px] shrink-0">
      <div className="absolute left-0 top-0 h-[27px] w-[45px] rounded-r-full bg-white" />
      <div className="absolute bottom-0 left-0 h-[24px] w-[20px] bg-white" />
      <div className="absolute bottom-0 right-[2px] h-0 w-0 border-b-[24px] border-l-[24px] border-b-white border-l-transparent" />
    </div>
  );
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#050505]/82 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[118px] max-w-[1920px] items-center justify-between px-8 md:px-16 lg:px-20">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-8">
          <RubikLogo />

          <div>
            <div className="text-[24px] font-light uppercase leading-none tracking-[0.62em]">
              RUBIK ART
            </div>
            <div className="mt-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
              Interior | Architecture | Realisation
            </div>
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-12 lg:flex">
          {content.nav.map((item) =>
            item.isDzen ? (
              <a
                key={item.label}
                href={content.company.dzenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium uppercase tracking-[0.22em] text-white/82 transition hover:text-white"
              >
                Дзен ↗
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium uppercase tracking-[0.22em] text-white/82 transition hover:text-white"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* RIGHT */}
        <div className="hidden min-w-[340px] flex-col items-end gap-5 lg:flex">
          <a
            href={`tel:${content.company.phone}`}
            className="text-[16px] font-light tracking-[0.18em] text-white/85"
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={onQuizOpen}
            className="border border-white/65 px-9 py-4 text-[14px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-black"
          >
            Просчёт за 2 минуты
          </button>
        </div>

        {/* MOBILE BURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-2 p-2 lg:hidden"
          aria-label="Меню"
        >
          <span className={`h-px w-8 bg-white transition ${menuOpen ? "translate-y-[9px] rotate-45" : ""}`} />
          <span className={`h-px w-8 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-8 bg-white transition ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050505] px-8 py-8 lg:hidden">
          <nav className="mb-8 flex flex-col gap-6">
            {content.nav.map((item) =>
              item.isDzen ? (
                <a
                  key={item.label}
                  href={content.company.dzenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.25em] text-white/70"
                  onClick={() => setMenuOpen(false)}
                >
                  Дзен ↗
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.25em] text-white/70"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <a
            href={`tel:${content.company.phone}`}
            className="mb-5 block text-lg tracking-[0.12em] text-white"
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={() => {
              onQuizOpen();
              setMenuOpen(false);
            }}
            className="w-full border border-white/70 px-6 py-4 text-xs uppercase tracking-[0.25em] text-white"
          >
            Просчёт за 2 минуты
          </button>
        </div>
      )}
    </header>
  );
}
