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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-off-white/95 backdrop-blur-sm border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg md:text-xl font-bold tracking-tight text-black">
            DERZA<span className="text-gray">i</span> Group
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {content.nav.map((item) =>
            item.isDzen ? (
              <a
                key={item.label}
                href={content.company.dzenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray hover:text-black transition-colors hover-underline"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray hover:text-black transition-colors hover-underline"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${content.company.phone}`}
            className="text-sm font-medium text-black hover:text-gray transition-colors"
          >
            {content.company.phoneDisplay}
          </a>
          <button
            onClick={onQuizOpen}
            className="btn-primary"
          >
            Просчёт за 2 минуты
          </button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Меню"
        >
          <span
            className={`block w-6 h-px bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-off-white border-t border-line px-5 py-6 animate-fade-in">
          <nav className="flex flex-col gap-5 mb-6">
            {content.nav.map((item) =>
              item.isDzen ? (
                <a
                  key={item.label}
                  href={content.company.dzenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base text-gray"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
          <a
            href={`tel:${content.company.phone}`}
            className="block text-base font-medium text-black mb-4"
          >
            {content.company.phoneDisplay}
          </a>
          <button
            onClick={() => {
              onQuizOpen();
              setMenuOpen(false);
            }}
            className="btn-primary w-full"
          >
            Просчёт за 2 минуты
          </button>
        </div>
      )}

      <style jsx>{`
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 22px;
          background: #111111;
          color: #F8F7F4;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border-radius: 4px;
          transition: background 0.2s ease, transform 0.1s ease;
          cursor: pointer;
          border: none;
        }
        .btn-primary:hover {
          background: #1A1A1A;
          transform: translateY(-1px);
        }
        .btn-primary:active {
          transform: translateY(0);
        }
      `}</style>
    </header>
  );
}
