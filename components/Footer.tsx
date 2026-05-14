function FooterLogo() {
  return (
    <div className="relative h-[122px] w-[122px] shrink-0">
      <div className="absolute left-0 top-[8px] h-[56px] w-[92px] rounded-r-full border border-current bg-current" />

      <div className="absolute bottom-0 left-0 h-[50px] w-[50px] border border-current bg-current" />

      <svg
        className="absolute bottom-0 left-[50px]"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M0 50V0L50 50H0Z" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-main)] text-[var(--text-main)] border-t border-[var(--line)]">
      <div className="mx-auto flex min-h-[220px] max-w-[1920px] flex-col items-center justify-center px-8 py-14 text-center md:px-24">
        <FooterLogo />

        <div className="mt-10 text-[12px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          © 2013 Rubik ART
        </div>
      </div>
    </footer>
  );
}
