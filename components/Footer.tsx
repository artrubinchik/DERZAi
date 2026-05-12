import { content } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray border-t border-off-white/5 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <div>
            <span className="text-base font-bold text-off-white tracking-tight">
              Rubi<span className="text-gray">K</span> ART
            </span>
            <p className="text-xs text-gray/60 mt-1">{content.company.tagline}</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-5">
            {content.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray/70 hover:text-off-white transition-colors hover-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href={content.company.dzenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray/70 hover:text-off-white transition-colors hover-underline"
            >
              Блог на Дзене
            </a>
          </nav>

          {/* Phone */}
          <a
            href={`tel:${content.company.phone}`}
            className="text-sm font-medium text-off-white/80 hover:text-off-white transition-colors"
          >
            {content.company.phoneDisplay}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-off-white/5">
          <p className="text-xs text-gray/40">{content.footer.copy}</p>
        </div>
      </div>
    </footer>
  );
}
