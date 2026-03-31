import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "MindAxis | Scientific Career Guidance Powered by AI",
  description: "Stop guessing your career. Start knowing it—with MindAxis. AI-powered scientific career guidance platform for students and professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased text-brand-text bg-brand-bg`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
