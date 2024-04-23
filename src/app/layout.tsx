import GoogleAnalytics from "@/components/GoogleAnalytics";
import { NavbarMain } from "@/components/navbarMain";
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
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-CTPR42M0PN" />
      <body
        className={`${inter.className} 'scroll-smooth transition duration-75 ease-in-out'`}
      >
        <div className="sr-only">
        <NavbarMain />
        </div>
        {children}
        
      </body>
    </html>
  );
}
