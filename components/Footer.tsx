function FooterLogo() {
  return (
    <div className="relative h-[64px] w-[64px] shrink-0">
      <div className="absolute left-0 top-[1px] h-[30px] w-[50px] rounded-r-full bg-current" />

      <div className="absolute bottom-0 left-0 h-[26px] w-[26px] bg-current" />

      <svg
        className="absolute bottom-0 left-[30px]"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="currentColor"
      >
        <path d="M0 26V0L26 26H0Z" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="mx-auto flex min-h-[120px] max-w-[1920px] items-center justify-between px-6 py-8 md:px-12 lg:px-16">
        <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          © 2013 Rubik ART
        </div>

        <FooterLogo />
      </div>
    </footer>
  );
}
