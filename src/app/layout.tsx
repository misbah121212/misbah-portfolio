import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { LeftProfilePanel } from "@/components/spatial/LeftProfilePanel";
import { RightSkillsPanel } from "@/components/spatial/RightSkillsPanel";
import { BottomDock } from "@/components/spatial/BottomDock";
import { TopPillNav } from "@/components/spatial/TopPillNav";
import { AmbientRoom } from "@/components/spatial/AmbientRoom";
import { CursorTracker } from "@/components/spatial/CursorTracker";

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
            <main className="flex-1 w-full bg-navy/35 backdrop-blur-3xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)] rounded-[2.5rem] overflow-y-auto overflow-x-hidden custom-scrollbar relative">
              {children}
              {/* 3D Wireframe Grid Floor (visionOS Aesthetic) */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0 opacity-15"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(226, 213, 239, 0.12) 1.5px, transparent 1.5px),
                                    linear-gradient(to bottom, rgba(226, 213, 239, 0.12) 1.5px, transparent 1.5px)`,
                  backgroundSize: "45px 45px",
                  transform: "perspective(400px) rotateX(60deg) translateY(20px)",
                  transformOrigin: "bottom center",
                  maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                  WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
                }}
              />
            </main>
          </div>

          <RightSkillsPanel />
        </div>

        <BottomDock />
      </body>
    </html>
  );
}
