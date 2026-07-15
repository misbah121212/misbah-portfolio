import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen selection:bg-lavender/30 selection:text-white pt-12 relative z-10">
      {/* Background shade override for this page (Dark Navy) */}
      <div className="absolute inset-0 bg-navy -z-10" />
      <Achievements />
      <Contact />
    </main>
  );
}
