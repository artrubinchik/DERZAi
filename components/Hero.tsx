"use client";

import { content } from "@/data/content";
import Image from "next/image";

interface HeroProps {
  onQuizOpen: () => void;
}

export default function Hero({ onQuizOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-off-white">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, #D8D0C4 0%, transparent 50%), 
                            radial-gradient(circle at 20% 80%, #E3DED6 0%, transparent 40%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 opacity-0-init animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xs font-medium tracking-widest uppercase text-gray">
                {content.company.city}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-black mb-6 opacity-0-init animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              {content.hero.heading}
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-gray leading-relaxed mb-10 whitespace-pre-line opacity-0-init animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              {content.hero.subheading}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 mb-8 opacity-0-init animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <button
                onClick={onQuizOpen}
                className="btn-primary"
              >
                {content.hero.ctaPrimary}
              </button>
              <a
                href={content.company.briefFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {content.hero.ctaSecondary}
              </a>
            </div>

            {/* Reply time */}
            <div
              className="flex items-center gap-2 opacity-0-init animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex gap-0.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-black/20"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <span className="text-sm text-gray">{content.company.replyTime}</span>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="relative opacity-0-init animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative h-[520px] md:h-[620px] rounded-2xl overflow-hidden bg-warm">
              {/* Placeholder when no image */}
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/40 to-transparent">
                <div className="text-white">
                  <p className="text-sm opacity-70 mb-1">Реализованный проект</p>
                  <p className="text-xl font-semibold">Квартира 82 м²</p>
                  <p className="text-sm opacity-70">Набережные Челны, 2024</p>
                </div>
              </div>
              {/* Real image (uncomment when added) */}
              <Image
                src="/images/hero.jpg"
                alt="Интерьер от DERZAi Group"
                fill
                className="object-cover"
                priority
              /> 
            </div>

            {/* Floating stat */}
            <div className="absolute -left-6 top-1/3 bg-off-white border border-line rounded-xl p-4 shadow-sm">
              <p className="text-2xl font-bold text-black">120+</p>
              <p className="text-xs text-gray">проектов</p>
            </div>
            <div className="absolute -right-4 bottom-16 bg-black rounded-xl p-4 shadow-sm">
              <p className="text-2xl font-bold text-off-white">8</p>
              <p className="text-xs text-gray">лет опыта</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-gray tracking-widest uppercase">Листайте</span>
        <div className="w-px h-8 bg-gray animate-pulse" />
      </div>

      <style jsx>{`
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          background: #111111;
          color: #F8F7F4;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border-radius: 6px;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
          text-align: center;
        }
        .btn-primary:hover {
          background: #1A1A1A;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(17, 17, 17, 0.15);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          background: transparent;
          color: #111111;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border-radius: 6px;
          border: 1.5px solid #E3DED6;
          transition: all 0.2s ease;
          cursor: pointer;
          text-align: center;
        }
        .btn-secondary:hover {
          border-color: #111111;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
