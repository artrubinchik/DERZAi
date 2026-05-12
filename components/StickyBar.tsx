"use client";

interface StickyBarProps {
  onQuizOpen: () => void;
}

export default function StickyBar({ onQuizOpen }: StickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--line)] bg-[var(--bg-main)]/92 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-3">
        <button
          onClick={onQuizOpen}
          className="border-r border-[var(--line)] py-4 text-[10px] uppercase tracking-[0.22em] text-main"
        >
          Просчёт
        </button>

        <a
          href="#contact"
          className="border-r border-[var(--line)] py-4 text-center text-[10px] uppercase tracking-[0.22em] text-main"
        >
          Контакты
        </a>

        <a
          href="tel:+79171234567"
          className="py-4 text-center text-[10px] uppercase tracking-[0.22em] text-main"
        >
          Звонок
        </a>
      </div>
    </div>
  );
}
