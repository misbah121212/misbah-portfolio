import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen selection:bg-lavender/30 selection:text-navy pt-12 relative z-10">
      <Achievements />
      <Contact />
    </main>
  );
}
