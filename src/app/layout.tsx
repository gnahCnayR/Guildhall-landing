import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/LenisScroll";
import { Tinos } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Guildhall",
  description: "Build your habits. Slay your vices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className} ${tinos.variable} antialiased`}>
        <SmoothScrollProvider>
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
