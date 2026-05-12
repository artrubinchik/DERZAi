import { content } from "@/data/content";

export default function Footer() {
  return (
    <footer className="section-dark border-t border-[var(--line)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
        <div>
          <div className="text-[18px] font-light uppercase tracking-[0.42em] text-main">
            Rubik ART
          </div>

          <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-muted">
            Interior | Architecture | Realisation
          </div>
        </div>

        <nav className="flex flex-wrap gap-6">
          {content.footer.links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.22em] text-muted transition hover:text-main"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="text-[10px] uppercase tracking-[0.18em] text-muted">
          {content.footer.copy}
        </div>
      </div>
    </footer>
  );
}
