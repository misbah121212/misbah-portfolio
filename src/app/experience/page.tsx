import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen selection:bg-lavender/30 selection:text-navy pt-12 relative z-10">
      {/* Background shade override for this page (Soft Lavender) */}
      <div className="absolute inset-0 bg-[#F5EFFF] -z-10" />
      <Experience />
      <Contact />
    </main>
  );
}
