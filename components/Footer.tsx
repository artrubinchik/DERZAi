import { content } from "@/data/content";

        <path
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
