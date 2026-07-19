import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen selection:bg-peach/30 selection:text-navy pt-12 relative z-10">
      <Projects />
      <Contact />
    </main>
  );
}
