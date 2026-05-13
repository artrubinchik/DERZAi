import { content } from "@/data/content";

function FooterLogo() {
  return (
    <div className="relative h-[110px] w-[110px] shrink-0">
      <div className="absolute left-0 top-0 h-[54px] w-[88px] rounded-r-full border border-current" />
      <div className="absolute bottom-0 left-0 h-[48px] w-[40px] border border-current" />

      <svg
        className="absolute bottom-0 right-0"
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
      >
        <path d="M1 51V1L51 51H1Z" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="mx-auto grid min-h-[260px] max-w-[1920px] grid-cols-3 items-center px-8 md:px-24">
        <div className="text-[14px] leading-8 text-[var(--text-main)]">
          <p>© 2024 Rubik ART</p>
          <p>Все права защищены</p>
        </div>

        <div className="flex flex-col items-center">
          <FooterLogo />

          <div className="mt-8 text-[26px] font-light uppercase tracking-[0.45em]">
            Rubik ART
          </div>

          <div className="mt-4 text-[14px] font-light text-[var(--text-muted)]">
            дизайн, реализация
          </div>
        </div>

        <div className="justify-self-end text-[14px] leading-8">
          <p>Политика конфиденциальности</p>
          <p>Пользовательское соглашение</p>
        </div>
      </div>
    </footer>
  );
}
