import { Hero } from "@/components/sections/Hero";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-lavender/30 selection:text-navy">
      {/* Background is handled globally in layout.tsx & globals.css */}
      <Hero />
      <Contact />
    </main>
  );
}
