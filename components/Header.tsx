"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function RubikLogo({ dark }: { dark: boolean }) {
  return (
    <div className="relative h-[42px] w-[42px] shrink-0">
      <div className={`absolute left-0 top-0 h-[20px] w-[32px] rounded-r-full ${dark ? "bg-black" : "bg-white"}`} />
      <div className={`absolute bottom-0 left-0 h-[17px] w-[14px] ${dark ? "bg-black" : "bg-white"}`} />
      <div
        className={`absolute bottom-0 right-[5px] h-0 w-0 border-b-[17px] border-r-[17px] border-r-transparent ${
          dark ? "border-b-black" : "border-b-white"
        }`}
      />
    </div>
  );
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setFilled(window.scrollY > window.innerHeight * 0.82);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkText = filled || menuOpen;
  const navItems = content.nav.filter((item) => !item.isDzen);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${
        filled || menuOpen
          ? "border-b border-black/10 bg-[var(--bg-light)] text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto grid h-[70px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center gap-4 justify-self-start">
          <RubikLogo dark={isDarkText} />

          <div>
            <div className="whitespace-nowrap text-[15px] font-light uppercase leading-none tracking-[0.42em]">
              Rubik ART
            </div>
            <div
              className={`mt-1.5 whitespace-nowrap text-[7px] uppercase tracking-[0.22em] ${
                isDarkText ? "text-black/50" : "text-white/60"
              }`}
            >
              Interior | Architecture | Realisation
            </div>
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[9px] uppercase tracking-[0.22em] transition ${
                isDarkText ? "text-black/55 hover:text-black" : "text-white/65 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-4 lg:flex">
          <a
            href={`tel:${content.company.phone}`}
            className={`text-[9px] uppercase tracking-[0.16em] transition ${
              isDarkText ? "text-black/55 hover:text-black" : "text-white/65 hover:text-white"
            }`}
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={onQuizOpen}
            className={`border px-3 py-2 text-[8px] uppercase tracking-[0.18em] transition ${
              isDarkText
                ? "border-black/25 text-black hover:border-black"
                : "border-white/35 text-white hover:border-white"
            }`}
          >
            Просчёт
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 justify-self-end lg:hidden"
          aria-label="Меню"
        >
          <span className={`h-px w-6 transition ${isDarkText ? "bg-black" : "bg-white"} ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 transition ${isDarkText ? "bg-black" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 transition ${isDarkText ? "bg-black" : "bg-white"} ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/10 bg-[var(--bg-light)] px-6 py-7 text-black lg:hidden">
          <nav className="mb-8 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.22em] text-black/60"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => {
              onQuizOpen();
              setMenuOpen(false);
            }}
            className="w-full border border-black/25 px-5 py-4 text-[9px] uppercase tracking-[0.18em]"
          >
            Просчёт за 2 минуты
          </button>
        </div>
      )}
    </header>
  );
}
