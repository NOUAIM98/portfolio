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
  title: "NOUAIM | Full-Stack & Mobile Engineer",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
