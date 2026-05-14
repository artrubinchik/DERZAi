"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content } from "@/data/content";

interface HeaderProps {
  onQuizOpen: () => void;
}

function PremiumLogo() {
  return (
    <div className="relative h-[50px] w-[52px] shrink-0">
      <div className="absolute left-0 top-[4px] h-[24px] w-[41px] rounded-r-full bg-current" />

      <div className="absolute bottom-0 left-0 h-[20px] w-[20px] bg-current" />

      <svg
        className="absolute bottom-0 left-[24px]"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M0 20V0L20 20H0Z" />
      </svg>
    </div>
  );
}

export default function Header({ onQuizOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const onScroll = () => {
      const current = window.scrollY;
      const projects = document.getElementById("projects");
      const projectsTop = projects ? projects.offsetTop : window.innerHeight * 2;

      setFilled(current >= projectsTop - 90);

      if (current < 120) {
        setVisible(true);
      } else if (current >= projectsTop - 120) {
        setVisible(true);
      } else if (current > lastScroll && current > 220) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = content.nav.filter((item) => !item.isDzen);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        filled || menuOpen
          ? "border-b border-[var(--line)] bg-[var(--bg-main)] text-[var(--text-main)]"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto grid h-[72px] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center gap-4 justify-self-start">
          <PremiumLogo />

          <div className="whitespace-nowrap text-[17px] font-light uppercase leading-none tracking-[0.38em]">
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
            Просчёт
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
            Просчёт
          </button>
        </div>
      )}
    </header>
  );
}
