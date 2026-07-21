import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen selection:bg-lavender/30 selection:text-navy pt-12 relative z-10 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <Contact />
      </div>
    </main>
  );
}
