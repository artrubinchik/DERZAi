"use client";

import { content } from "@/data/content";

interface StickyBarProps {
  onQuizOpen: () => void;
}

export default function StickyBar({ onQuizOpen }: StickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-off-white border-t border-line safe-area-pb">
      <div className="flex">
        <button
          onClick={onQuizOpen}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-black hover:bg-warm/30 transition-colors border-r border-line"
        >
          <span className="text-lg leading-none">◈</span>
          <span className="text-xs font-medium">Просчёт</span>
        </button>

        <a
          href={content.company.briefFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-black hover:bg-warm/30 transition-colors border-r border-line"
        >
          <span className="text-lg leading-none">○</span>
          <span className="text-xs font-medium">Бриф</span>
        </a>

        <a
          href={`tel:${content.company.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-black hover:bg-warm/30 transition-colors"
        >
          <span className="text-lg leading-none">☎</span>
          <span className="text-xs font-medium">Звонок</span>
        </a>
      </div>

      <style jsx>{`
        .safe-area-pb {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </div>
  );
}
