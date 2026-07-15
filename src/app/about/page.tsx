import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function AboutPage() {
  return (
    <main className="min-h-screen selection:bg-lavender/30 selection:text-navy pt-4 relative z-10">
      <About />
      <Contact />
    </main>
  );
}
