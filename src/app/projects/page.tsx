import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen selection:bg-peach/30 selection:text-navy pt-12 relative z-10">
      {/* Background shade override for this page (Soft Peach) */}
      <div className="absolute inset-0 bg-[#FFF0ED] -z-10" />
      <Projects />
      <Contact />
    </main>
  );
}
