import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MOHAMED NOUAIM EL AAKIL | Full-Stack & Mobile Engineer",
  description:
    "Portfolio of NOUAIM — Full-Stack & Mobile Engineer building scalable apps, AI systems, and healthcare platforms.",
  keywords: [
    "Full-Stack Engineer",
    "Mobile Developer",
    "React Native",
    "Next.js",
    "AI Systems",
    "Healthcare Tech",
  ],
};

import { LanguageProvider } from "@/components/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
