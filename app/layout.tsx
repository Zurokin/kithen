// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marti Мебель | Кухни и мебель на заказ в Воронеже",
  description:
    "Изготовление корпусной мебели на заказ: кухни, гостиные, шкафы, гардеробные. Дизайн-проект и замер бесплатно!",
  keywords:
    "кухни на заказ воронеж, мебель на заказ, гардеробные воронеж, корпусная мебель, marti мебель",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
