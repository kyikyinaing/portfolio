import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Kyi Kyi Naing (Crystal) — Software Engineer",
  description:
    "Software Engineer with 12 years of experience in .NET, C#, REST APIs, full-stack development, and AI/ML. Based in London, Ontario, Canada.",
  keywords: [
    "Software Engineer", ".NET Developer", "C#", "Full Stack", "REST APIs",
    "London Ontario", "AI Machine Learning",
  ],
  openGraph: {
    title: "Kyi Kyi Naing (Crystal) — Software Engineer",
    description: "12 years building enterprise applications. Now expanding into AI & ML.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-white dark:bg-[#050d1a] text-slate-800 dark:text-slate-200 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
