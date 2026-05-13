import { content } from "@/data/content";

export default function Footer() {
  return (
    <footer className="section-dark border-t border-[var(--line)] py-8">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-12 lg:px-16">
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
          {content.footer.copy}
        </p>
      </div>
    </footer>
  );
}
