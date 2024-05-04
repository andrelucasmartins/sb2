import GoogleAnalytics from "@/components/GoogleAnalytics";
import { NavbarMain } from "@/components/navbarMain";
import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from "next";

import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "SB2 - Você em forma naturalmente - Monetizze - SB2 Turbo - Emagreça de forma Prática e natural ",
  description:
    "Mais do que um potente emagrecedor, SB2 é o auxiliador da sua saúde.",
  icons: [
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/favicon-96x96.png',
    "/android-icon-36x36.png",
    "/android-icon-48x48.png",
    "/android-icon-72x72.png",
    "/android-icon-96x96.png",
    "/android-icon-144x144.png",
    "/android-icon-192x192.png",
    "/apple-icon-57x57.png",
    "/apple-icon-60x60.png",
    "/apple-icon-72x72.png",
    "/apple-icon-76x76.png",
    "/apple-icon-114x114.png",
    "/apple-icon-120x120.png",
    "/apple-icon-144x144.png",
    "/apple-icon-152x152.png",
    "/apple-icon-180x180.png",
    "/apple-icon-precomposed.png",
    "/apple-icon.png",
  ],
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
