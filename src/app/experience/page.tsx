import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen selection:bg-lavender/30 selection:text-navy pt-12 relative z-10 flex flex-col items-center p-6">
      <div className="w-full max-w-5xl flex-1 flex flex-col justify-center">
        <Experience />
      </div>
      <div className="w-full max-w-4xl mt-12">
        <Contact />
      </div>
    </main>
  );
}
