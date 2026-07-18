import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes, Berkshire_Swash } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const berkshire = Berkshire_Swash({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-berkshire",
});

export const metadata: Metadata = {
  title: "Misbah | AI&ML Engineer",
  description: "Portfolio of Umme Misbah Sikandar, specializing in AI, Machine Learning, Full-Stack Development, and Cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} ${berkshire.variable} antialiased pt-24`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
