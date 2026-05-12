"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled || menuOpen;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isLight
          ? "border-b border-black/10 bg-[#F5F2ED]/95 text-[#111111] backdrop-blur-xl"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold tracking-[-0.04em] transition ${
              isLight
                ? "border-black/15 bg-black text-white"
                : "border-white/25 bg-white/10 text-white backdrop-blur"
            }`}
          >
            D
          </div>

          <div className="leading-none">
            <div className="text-xl font-semibold tracking-[-0.05em]">
              DERZA<span className="font-light italic">i</span>
            </div>
            <div
              className={`mt-1 hidden text-[9px] uppercase tracking-[0.28em] md:block ${
                isLight ? "text-black/45" : "text-white/55"
              }`}
            >
              Design & renovation
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {content.nav.map((item) =>
            item.isDzen ? (
              <a
                key={item.label}
                href={content.company.dzenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs uppercase tracking-[0.18em] transition hover:opacity-100 ${
                  isLight ? "text-black/50 hover:text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs uppercase tracking-[0.18em] transition hover:opacity-100 ${
                  isLight ? "text-black/50 hover:text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${content.company.phone}`}
            className={`text-xs font-medium uppercase tracking-[0.16em] transition ${
              isLight ? "text-black/60 hover:text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={onQuizOpen}
            className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition hover:-translate-y-0.5 ${
              isLight
                ? "bg-[#111111] text-white hover:bg-black"
                : "bg-white text-black hover:bg-[#D8D0C4]"
            }`}
          >
            Просчёт
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Меню"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              isLight ? "bg-black" : "bg-white"
            } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              isLight ? "bg-black" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              isLight ? "bg-black" : "bg-white"
            } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/10 bg-[#F5F2ED] px-5 py-8 text-[#111111] md:hidden">
          <nav className="mb-8 flex flex-col gap-6">
            {content.nav.map((item) =>
              item.isDzen ? (
                <a
                  key={item.label}
                  href={content.company.dzenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.2em] text-black/60"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.2em] text-black/60"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="rounded-3xl border border-black/10 bg-white/60 p-5">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-black/40">
              Связаться
            </p>

            <a
              href={`tel:${content.company.phone}`}
              className="mb-4 block text-xl font-semibold text-black"
            >
              {content.company.phoneDisplay}
            </a>

            <button
              onClick={() => {
                onQuizOpen();
                setMenuOpen(false);
              }}
              className="w-full rounded-full bg-[#111111] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Просчёт за 2 минуты
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
