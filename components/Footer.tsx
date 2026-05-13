import { content } from "@/data/content";

function FooterLogo() {
  return (
    <div className="relative h-[74px] w-[74px] shrink-0">
      <div className="absolute left-0 top-0 h-[38px] w-[70px] rounded-r-full border border-current" />
      <div className="absolute bottom-0 left-0 h-[32px] w-[33px] border border-current" />
      <div
        className="
          absolute bottom-0 right-0
          h-[32px] w-[34px]
          border border-current
          [clip-path:polygon(0_0,100%_100%,0_100%)]
        "
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="section-soft border-t border-[var(--line)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:px-12 lg:px-16">
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
          {content.footer.copy}
        </p>

        <div className="flex flex-col items-center gap-4 text-[var(--text-main)]">
          <FooterLogo />
          <div className="text-[14px] font-light uppercase tracking-[0.42em]">
            Rubik ART
          </div>
        </div>
      </div>
    </footer>
  );
}
