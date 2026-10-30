import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
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

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      const theme =
        savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : prefersDark
            ? "dark"
            : "light";

      document.documentElement.dataset.theme = theme;
    } catch {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
