import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen selection:bg-peach/30 selection:text-navy pt-12 relative z-10">
      <div className="absolute inset-0 bg-[#f9f5ff] -z-10" />
      <Certifications />
      <Contact />
    </main>
  );
}
