import { content } from "@/data/content";

function FooterLogo() {
  return (
    <div className="relative h-[122px] w-[122px] shrink-0">
      {/* Верхняя форма */}
      <div className="absolute left-0 top-[8px] h-[56px] w-[92px] rounded-r-full border border-current bg-current" />

      {/* Квадрат */}
      <div className="absolute bottom-0 left-0 h-[50px] w-[50px] border border-current bg-current" />

      {/* Треугольник */}
      <svg
        className="absolute bottom-[1px] left-[54px]"
        width="50"
        height="49"
        viewBox="0 0 50 49"
        fill="currentColor"
      >
        <path
          d="M1 48V1L49 48H1Z"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[var(--bg-main)] text-[var(--text-main)] border-t border-[var(--line)]">
      <div className="mx-auto flex min-h-[240px] max-w-[1920px] flex-col items-center justify-center px-8 py-16 text-center md:px-24">
        <FooterLogo />

        <div className="mt-8 text-[26px] font-light uppercase tracking-[0.45em]">
          Rubik ART
        </div>

        <div className="mt-4 text-[14px] font-light text-[var(--text-muted)]">
          design is not what you do, it's a way of life
        </div>

        <div className="mt-10 text-[12px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          © 2013 Rubik ART
        </div>
      </div>
    </footer>
  );
}
