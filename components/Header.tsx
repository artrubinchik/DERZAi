"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled || menuOpen ? "text-[#111111]" : "text-white";
  const mutedColor = scrolled || menuOpen ? "text-black/55" : "text-white/65";
  const lineColor = scrolled || menuOpen ? "bg-[#111111]" : "bg-white";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-black/10 bg-[#F5F2ED]/95 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={`text-xl font-semibold tracking-[-0.04em] transition ${textColor}`}
          >
            DERZA<span className="font-light italic">i</span>
          </span>
          <span
            className={`hidden h-px w-8 transition md:block ${
              scrolled || menuOpen ? "bg-black/25" : "bg-white/35"
            }`}
          />
          <span
            className={`hidden text-[10px] uppercase tracking-[0.28em] transition md:block ${mutedColor}`}
          >
            Design & Build
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {content.nav.map((item) =>
            item.isDzen ? (
              <a
                key={item.label}
                href={content.company.dzenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs uppercase tracking-[0.18em] transition hover:opacity-100 ${mutedColor}`}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs uppercase tracking-[0.18em] transition hover:opacity-100 ${mutedColor}`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${content.company.phone}`}
            className={`text-xs font-medium uppercase tracking-[0.16em] transition ${mutedColor}`}
          >
            {content.company.phoneDisplay}
          </a>

          <button
            onClick={onQuizOpen}
            className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition hover:-translate-y-0.5 ${
              scrolled
                ? "bg-[#111111] text-white hover:bg-black"
                : "bg-white text-black hover:bg-[#D8D0C4]"
            }`}
          >
            Просчёт
          </button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Меню"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${lineColor} ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${lineColor} ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${lineColor} ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-black/10 bg-[#F5F2ED] px-5 py-8 md:hidden">
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

          <a
            href={`tel:${content.company.phone}`}
            className="mb-4 block text-lg font-semibold text-black"
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
      )}
    </header>
  );
}
