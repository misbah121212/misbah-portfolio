import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { LeftProfilePanel } from "@/components/spatial/LeftProfilePanel";
import { RightSkillsPanel } from "@/components/spatial/RightSkillsPanel";
import { BottomDock } from "@/components/spatial/BottomDock";
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
  title: "Misbah | Spatial Computing Portfolio",
  description: "Apple Human Interface inspired 3D spatial computing portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark-theme">
      <body className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} antialiased h-screen w-screen overflow-hidden text-[#2B2345]`}>
        <AmbientRoom />
        <CursorTracker />
        
        {/* Core Layout centering the entire spatial OS desktop on the screen */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 select-none overflow-hidden">
          
          <div className="w-full max-w-[1580px] flex flex-col lg:flex-row gap-8 items-center justify-center h-full lg:h-[820px] relative">
            
            {/* Left Profile Panel (300px wide, 720px high) */}
            <LeftProfilePanel />

            {/* Center Column Wrapper (Center Main Window shifted up) */}
            <div className="flex flex-col relative w-full lg:w-[920px] h-[700px]">
              
              {/* Center Main Window (920px wide, 700px high, Main Glass rgba(255,255,255,0.12)) */}
              <main 
                className="w-full h-full rounded-[40px] overflow-y-auto overflow-x-hidden custom-scrollbar relative border"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(55px)",
                  WebkitBackdropFilter: "blur(55px)",
                  borderColor: "rgba(255, 255, 255, 0.22)",
                  boxShadow: "0 60px 120px rgba(20, 20, 40, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
                }}
              >
                {children}
                
                {/* 3D Wireframe Grid Floor (visionOS Aesthetic) */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(181, 139, 255, 0.22) 1.5px, transparent 1.5px),
                                      linear-gradient(to bottom, rgba(181, 139, 255, 0.22) 1.5px, transparent 1.5px)`,
                    backgroundSize: "45px 45px",
                    transform: "perspective(400px) rotateX(60deg) translateY(20px)",
                    transformOrigin: "bottom center",
                    maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
                  }}
                />
              </main>
            </div>

            {/* Right Skills Panel (300px wide, 720px high) */}
            <RightSkillsPanel />
            
          </div>
        </div>

        {/* macOS Bottom Dock */}
        <BottomDock />
      </body>
    </html>
  );
}
