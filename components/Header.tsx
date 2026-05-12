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
    <div className="relative h-[46px] w-[46px] shrink-0">
      <div className={`absolute left-0 top-0 h-[22px] w-[36px] rounded-r-full ${fill}`} />
      <div className={`absolute bottom-0 left-0 h-[19px] w-[16px] ${fill}`} />
      <div
        className={`absolute bottom-0 right-[6px] h-0 w-0 border-b-[19px] border-r-[19px] ${border} border-r-transparent`}
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
  const navItems = content.nav.filter((item) => !item.isDzen);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isWhite
          ? "border-b border-black/10 bg-white text-[#111111]"
          : "bg-[#050505]/88 text-white backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto grid h-[82px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center gap-5 justify-self-start">
          <RubikLogo inverted={isWhite} />

          <div className="flex flex-col justify-center">
            <div className="whitespace-nowrap text-[18px] font-light uppercase leading-none tracking-[0.46em]">
              Rubik ART
            </div>
            <div
              className={`mt-2 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.22em] ${
                isWhite ? "text-black/45" : "text-white/55"
              }`}
            >
              Interior | Architecture | Realisation
            </div>
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[11px] font-medium uppercase tracking-[0.22em] transition ${
                isWhite
                  ? "text-black/55 hover:text-black"
                  : "text-white/62 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <a
            href={`tel:${content.company.phone}`}
            className={`text-[11px] font-light tracking-[0.16em] transition ${
              isWhite
                ? "text-black/55 hover:text-black"
                : "text-white/65 hover:text-white"
            }`}
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={onQuizOpen}
            className={`border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] transition ${
              isWhite
                ? "border-black/35 text-black hover:border-black"
                : "border-white/40 text-white hover:border-white"
            }`}
          >
            Просчёт за 2 минуты
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="justify-self-end flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Меню"
        >
          <span
            className={`h-px w-7 transition ${
              isWhite ? "bg-black" : "bg-white"
            } ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-7 transition ${
              isWhite ? "bg-black" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-7 transition ${
              isWhite ? "bg-black" : "bg-white"
            } ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/10 bg-white px-6 py-7 text-black lg:hidden">
          <nav className="mb-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.22em] text-black/60"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a
              href={`tel:${content.company.phone}`}
              className="text-base tracking-[0.08em] text-black"
            >
              {content.company.phoneDisplay}
            </a>

            <button
              onClick={() => {
                onQuizOpen();
                setMenuOpen(false);
              }}
              className="w-full border border-black/35 px-6 py-4 text-xs uppercase tracking-[0.22em] text-black"
            >
              Просчёт за 2 минуты
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
