import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ButterfliesBackground from "./components/ButterfliesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mellsan_12",
  description: "Portfolio Mellsan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden bg-[#F6F7F2]`}>
      <ButterfliesBackground />
      <div className="relative z-20">{children}</div>
    </body>
    </html>
  );
}
