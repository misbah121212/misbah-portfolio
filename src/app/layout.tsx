import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { LeftProfilePanel } from "@/components/spatial/LeftProfilePanel";
import { RightSkillsPanel } from "@/components/spatial/RightSkillsPanel";
import { BottomDock } from "@/components/spatial/BottomDock";
import { TopPillNav } from "@/components/spatial/TopPillNav";
import { AmbientRoom } from "@/components/spatial/AmbientRoom";

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
      <body className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} antialiased h-screen w-screen overflow-hidden text-white`}>
        <AmbientRoom />
        <CursorTracker />
        
        <div className="relative z-10 w-full h-full flex gap-6 p-6">
          <LeftProfilePanel />

          <div className="flex flex-col flex-1 gap-6 relative">
            <TopPillNav />
            
            {/* Center Panel (Children content) */}
            <main className="flex-1 w-full bg-white/10 backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)] rounded-[2.5rem] overflow-y-auto overflow-x-hidden custom-scrollbar">
              {children}
            </main>
          </div>

          <RightSkillsPanel />
        </div>

        <BottomDock />
      </body>
    </html>
  );
}
