import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function SkillsPage() {
  return (
    <main className="min-h-screen selection:bg-lavender/30 selection:text-navy pt-12 relative z-10">
      <Skills />
      <Contact />
    </main>
  );
}
