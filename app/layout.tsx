import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { content } from "@/data/content";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${content.company.name} — ${content.company.tagline} в ${content.company.city}`,
  description: `${content.company.tagline} в ${content.company.city}. Дизайн-проект от 2 500 ₽/м², ремонт от 15 000 ₽/м². Фиксируем бюджет. Без срывов и переделок.`,
  keywords: "дизайн интерьера Набережные Челны, ремонт под ключ, DERZAi Group, Артем Рубинчик",
  openGraph: {
    title: `${content.company.name} — Дизайн и ремонт под ключ`,
    description: "Создаём интерьеры для жизни. Реализуем без срывов и переделок.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="bg-off-white text-black font-sans">
        {children}
      </body>
    </html>
  );
}
