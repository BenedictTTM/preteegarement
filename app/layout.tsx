import type { Metadata } from "next";
import { Manrope, Playfair_Display, Lavishly_Yours } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

import Navbar from "@/components/Navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const lavishly = Lavishly_Yours({
  variable: "--font-lavishly",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pretee | The Quiet Violence of Perfect Taste",
  description: "Visual brutalism and raw luxury. A study in silence and texture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${playfair.variable} ${lavishly.variable} antialiased bg-background text-text selection:bg-accent selection:text-black`}
      >

        <SmoothScroll>
          <CustomCursor />
          <GrainOverlay />
          <Navbar />
          {children}
        </SmoothScroll>

      </body>
    </html>
  );
}
