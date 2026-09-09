import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const chillax = localFont({
  src: "../public/chillax/Chillax-Regular.otf", // Verify this matches your exact filename inside public/
  variable: "--font-chillax",
});

export const metadata: Metadata = {
  title: "OAK Partner Convening 2026",
  description: "Partner convening registration and digital access portal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${chillax.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}