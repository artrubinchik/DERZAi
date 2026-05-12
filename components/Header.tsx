"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function RubikLogo({ light }: { light: boolean }) {
  const color = light ? "bg-[#111111]" : "bg-white";

  return (
    <div className="relative h-12 w-12 shrink-0">
      <div className={`absolute left-0 top-0 h-[23px] w-[38px] rounded-r-full ${color}`} />
      <div className={`absolute left-0 top-[28px] h-[20px] w-[17px] ${color}`} />
      <div
        className={`absolute bottom-0 right-[3px] h-0 w-0 border-b-[20px] border-l-[20px] ${
          light
            ? "border-b-[#111111] border-l-transparent"
            : "border-b-white border-l-transparent"
        }`}
      />
    </div>
  );
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

  const light = scrolled || menuOpen;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        light
          ? "border-b border-black/10 bg-[#F7F7F7]/95 text-[#111111] backdrop-blur-2xl"
          : "bg-[#0D0D0D]/72 text-white backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-5">
          <RubikLogo light={light} />

          <div>
            <div className="text-[20px] font-light uppercase leading-none tracking-[0.55em]">
              RUBIK ART
            </div>
            <div
              className={`mt-2 text-[8px] uppercase tracking-[0.36em] ${
                light ? "text-black/45" : "text-white/55"
              }`}
            >
              Interior | Architecture | Realisation
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {content.nav.map((item) =>
            item.isDzen ? (
              <a
                key={item.label}
                href={content.company.dzenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[10px] uppercase tracking-[0.3em] transition ${
                  light
                    ? "text-black/45 hover:text-black"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`text-[10px] uppercase tracking-[0.3em] transition ${
                  light
                    ? "text-black/45 hover:text-black"
                    : "text-white/55 hover:text-white"
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
            className={`text-[10px] uppercase tracking-[0.26em] transition ${
              light
                ? "text-black/50 hover:text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={onQuizOpen}
            className={`border px-6 py-3 text-[10px] font-medium uppercase tracking-[0.3em] transition hover:-translate-y-0.5 ${
              light
                ? "border-black bg-black text-white hover:bg-transparent hover:text-black"
                : "border-white/70 bg-transparent text-white hover:bg-white hover:text-black"
            }`}
          >
            Просчёт за 2 минуты
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Меню"
        >
          <span
            className={`h-px w-7 transition ${
              light ? "bg-black" : "bg-white"
            } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-7 transition ${
              light ? "bg-black" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-7 transition ${
              light ? "bg-black" : "bg-white"
            } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/10 bg-[#F7F7F7] px-5 py-8 text-black md:hidden">
          <nav className="mb-8 flex flex-col gap-6">
            {content.nav.map((item) =>
              item.isDzen ? (
                <a
                  key={item.label}
                  href={content.company.dzenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.25em] text-black/55"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.25em] text-black/55"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <a
            href={`tel:${content.company.phone}`}
            className="mb-5 block text-xl font-light tracking-[0.05em]"
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={() => {
              onQuizOpen();
              setMenuOpen(false);
            }}
            className="w-full border border-black bg-black px-6 py-4 text-xs uppercase tracking-[0.25em] text-white"
          >
            Просчёт за 2 минуты
          </button>
        </div>
      )}
    </header>
  );
}
