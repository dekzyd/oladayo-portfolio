import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oladayo Adekoya | Frontend Engineer",
  description:
    "I build digital products that make complicated workflows feel simple. Explore Oladayo Adekoya's frontend engineering work and selected projects.",
  openGraph: {
    title: "Oladayo Adekoya | Frontend Engineer",
    description:
      "I build digital products that make complicated workflows feel simple.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${plusJakartaSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
