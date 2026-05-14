"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function PremiumLogo() {
  return (
    <div className="relative h-[48px] w-[48px] shrink-0">
      <div className="absolute left-0 top-[3px] h-[22px] w-[38px] rounded-r-full border border-current bg-current" />
      <div className="absolute bottom-0 left-0 h-[20px] w-[20px] border border-current bg-current" />

      <svg
        className="absolute bottom-[1px] left-[22px]"
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="currentColor"
      >
        <path d="M1 18V1L19 18H1Z" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const projects = document.getElementById("projects");
      if (!projects) {
        setFilled(window.scrollY > window.innerHeight * 0.75);
        return;
      }

      const projectsTop = projects.offsetTop;
      setFilled(window.scrollY >= projectsTop - 90);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = content.nav.filter((item) => !item.isDzen);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${
        filled || menuOpen
          ? "border-b border-[var(--line)] bg-[var(--bg-main)] text-[var(--text-main)]"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto grid h-[76px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center gap-4 justify-self-start">
          <PremiumLogo />

          <div className="whitespace-nowrap text-[18px] font-light uppercase leading-none tracking-[0.4em]">
            Rubik ART
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.22em] transition hover:font-bold hover:underline hover:underline-offset-8"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <button
            onClick={onQuizOpen}
            className="text-[11px] uppercase tracking-[0.22em] transition hover:font-bold hover:underline hover:underline-offset-8"
          >
            Обсудить проект
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2 justify-self-end lg:hidden"
          aria-label="Меню"
        >
          <span className="h-px w-7 bg-current" />
          <span className="h-px w-7 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--bg-main)] px-6 py-7 text-[var(--text-main)] lg:hidden">
          <nav className="mb-8 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.22em]"
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
            className="text-[11px] uppercase tracking-[0.22em]"
          >
            Обсудить проект
          </button>
        </div>
      )}
    </header>
  );
}
