import GoogleAnalytics from "@/components/GoogleAnalytics";
import { NavbarMain } from "@/components/navbarMain";
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SB2 - Você em forma naturalmente - Monetizze - SB2 Turbo - Emagreça de forma Prática e natural ",
  description:
    "Mais do que um potente emagrecedor, SB2 é o auxiliador da sua saúde.",
  verification: {
    google: "psTI9M2KFhTJ2Yghx7YsQOQHx1tjLH-pSnqXDpibn8M",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <GoogleTagManager gtmId="AW-16540321538" />
      <head>
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-CTPR42M0PN" />
      </head>
      <body
        className={`${inter.className} 'scroll-smooth ease-in-out' transition duration-75`}
      >
        <div className="sr-only">
          <NavbarMain />
        </div>
        {children}
      </body>
    </html>
  );
}
