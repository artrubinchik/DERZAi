"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function PremiumLogo() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* LOGO */}
      <div className="relative h-[64px] w-[64px]">
        {/* top */}
        <div className="absolute left-0 top-0 h-[30px] w-[48px] rounded-r-full border border-current" />

        {/* bottom left */}
        <div className="absolute bottom-0 left-0 h-[26px] w-[20px] border border-current" />

        {/* bottom right triangle */}
        <div
          className="absolute bottom-0 right-0 h-0 w-0 border-b-[26px] border-l-[22px] border-b-current border-l-transparent"
        />

        {/* triangle outline */}
        <div
          className="absolute bottom-0 right-[1px] h-0 w-0 border-b-[25px] border-l-[21px] border-b-transparent border-l-transparent outline-none"
        />
      </div>

      {/* BRAND */}
      <div className="text-center">
        <div className="text-[16px] font-light uppercase tracking-[0.42em] leading-none">
          RUBIK ART
        </div>

        <div className="mt-2 text-[7px] uppercase tracking-[0.24em] opacity-60">
          Interior | Architecture | Realisation
        </div>
      </div>
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
      <div className="mx-auto grid min-h-[120px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-6 py-5 md:px-12 lg:px-16">
        {/* LEFT */}
        <Link href="/" className="justify-self-start">
          <PremiumLogo />
        </Link>

        {/* CENTER NAV */}
        <nav className="hidden items-center justify-center gap-9 lg:flex">
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
            className={`text-[10px] uppercase tracking-[0.18em] transition ${
              darkHeader
                ? "text-white/68 hover:text-white"
                : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
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
        >
          <span className="h-px w-7 bg-current" />
          <span className="h-px w-7 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--bg-main)] px-6 py-7 text-[var(--text-main)] lg:hidden">
          <nav className="flex flex-col gap-5">
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
        </div>
      )}
    </header>
  );
}
