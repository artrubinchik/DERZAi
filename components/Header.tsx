"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function RubikLogo({ inverted = false }: { inverted?: boolean }) {
  const fill = inverted ? "bg-[#111111]" : "bg-white";
  const border = inverted ? "border-b-[#111111]" : "border-b-white";

  return (
    <div className="relative h-[58px] w-[58px] shrink-0">
      <div className={`absolute left-0 top-0 h-[27px] w-[45px] rounded-r-full ${fill}`} />
      <div className={`absolute bottom-0 left-0 h-[24px] w-[20px] ${fill}`} />

      {/* Треугольник чуть левее */}
      <div
        className={`absolute bottom-0 right-[7px] h-0 w-0 border-b-[24px] border-r-[24px] ${border} border-r-transparent`}
      />
    </div>
  );
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isWhite = scrolled || menuOpen;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isWhite
          ? "border-b border-black/10 bg-white text-[#111111]"
          : "bg-[#050505]/88 text-white backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[118px] max-w-[1920px] items-center justify-between px-8 md:px-16 lg:px-20">
        <Link href="/" className="flex items-center gap-8">
          <RubikLogo inverted={isWhite} />

          <div className="min-w-max">
            <div
              className={`whitespace-nowrap text-[24px] font-light uppercase leading-none tracking-[0.62em] ${
                isWhite ? "text-[#111111]" : "text-white"
              }`}
            >
              RUBIK&nbsp;ART
            </div>

            <div
              className={`mt-4 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.22em] ${
                isWhite ? "text-black/50" : "text-white/70"
              }`}
            >
              INTERIOR | ARCHITECTURE | REALISATION
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          {content.nav.map((item) =>
            item.isDzen ? (
              <a
                key={item.label}
                href={content.company.dzenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[15px] font-medium uppercase tracking-[0.22em] transition ${
                  isWhite
                    ? "text-black/60 hover:text-black"
                    : "text-white/82 hover:text-white"
                }`}
              >
                ДЗЕН ↗
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`text-[15px] font-medium uppercase tracking-[0.22em] transition ${
                  isWhite
                    ? "text-black/60 hover:text-black"
                    : "text-white/82 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden min-w-[340px] flex-col items-end gap-5 lg:flex">
          <a
            href={`tel:${content.company.phone}`}
            className={`text-[16px] font-light tracking-[0.18em] transition ${
              isWhite ? "text-black/70 hover:text-black" : "text-white/85 hover:text-white"
            }`}
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={onQuizOpen}
            className={`border px-9 py-4 text-[14px] font-medium uppercase tracking-[0.24em] transition ${
              isWhite
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white/65 text-white hover:bg-white hover:text-black"
            }`}
          >
            ПРОСЧЁТ ЗА 2 МИНУТЫ
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-2 p-2 lg:hidden"
          aria-label="Меню"
        >
          <span
            className={`h-px w-8 transition ${
              isWhite ? "bg-black" : "bg-white"
            } ${menuOpen ? "translate-y-[9px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-8 transition ${
              isWhite ? "bg-black" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-8 transition ${
              isWhite ? "bg-black" : "bg-white"
            } ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/10 bg-white px-8 py-8 text-black lg:hidden">
          <nav className="mb-8 flex flex-col gap-6">
            {content.nav.map((item) =>
              item.isDzen ? (
                <a
                  key={item.label}
                  href={content.company.dzenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.25em] text-black/60"
                  onClick={() => setMenuOpen(false)}
                >
                  ДЗЕН ↗
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.25em] text-black/60"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <a
            href={`tel:${content.company.phone}`}
            className="mb-5 block text-lg tracking-[0.12em] text-black"
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={() => {
              onQuizOpen();
              setMenuOpen(false);
            }}
            className="w-full border border-black px-6 py-4 text-xs uppercase tracking-[0.25em] text-black"
          >
            ПРОСЧЁТ ЗА 2 МИНУТЫ
          </button>
        </div>
      )}
    </header>
  );
}
