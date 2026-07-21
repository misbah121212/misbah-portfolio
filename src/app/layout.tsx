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
      <body className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} antialiased h-screen w-screen overflow-hidden text-[#221B39]`}>
        <AmbientRoom />
        <CursorTracker />
        
        {/* Core Layout centering the entire spatial OS desktop on the screen */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 select-none overflow-hidden">
          
          <div className="w-full max-w-[1660px] flex flex-col lg:flex-row gap-6 items-center justify-center h-full lg:h-[820px] relative mt-[20px]">
            
            {/* Left Profile Panel (320px wide, 760px high) */}
            <LeftProfilePanel />

            {/* Center Panel Layout with Navbar inside */}
            <div className="flex flex-col flex-1 h-full lg:h-[820px] gap-6 relative lg:max-w-[960px] w-full">
              <TopPillNav />
              
              {/* Center Main Window (960px wide, 760px high, light glass) */}
              <main 
                className="flex-1 w-full rounded-[42px] overflow-y-auto overflow-x-hidden custom-scrollbar relative border"
                style={{
                  background: "rgba(255, 255, 255, 0.16)",
                  backdropFilter: "blur(55px)",
                  WebkitBackdropFilter: "blur(55px)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 60px 150px rgba(32, 28, 52, 0.18)"
                }}
              >
                {children}
                
                {/* 3D Wireframe Grid Floor (visionOS Aesthetic) */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0 opacity-[0.07]"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(155, 114, 255, 0.25) 1.5px, transparent 1.5px),
                                      linear-gradient(to bottom, rgba(155, 114, 255, 0.25) 1.5px, transparent 1.5px)`,
                    backgroundSize: "45px 45px",
                    transform: "perspective(400px) rotateX(60deg) translateY(20px)",
                    transformOrigin: "bottom center",
                    maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
                  }}
                />
              </main>
            </div>

            {/* Right Skills Panel (320px wide, 720px high) */}
            <RightSkillsPanel />
            
          </div>
        </div>

        {/* Mac-Style Bottom Dock */}
        <BottomDock />
      </body>
    </html>
  );
}
