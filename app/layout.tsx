import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rizki Ahmad Fauzi — Fullstack Web Developer",
  description:
    "Fullstack Web Developer — React, Next.js, Laravel, Node.js. Membangun LMS untuk kampus, platform rental mobil, dan sistem admin UMKM.",
  openGraph: {
    title: "Rizki Ahmad Fauzi — Fullstack Web Developer",
    description:
      "Fullstack Web Developer — React, Next.js, Laravel, Node.js. Membangun LMS untuk kampus, platform rental mobil, dan sistem admin UMKM.",
    url: "https://rizkiahmadfauzi.vercel.app",
    siteName: "Rizki Ahmad Fauzi",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
