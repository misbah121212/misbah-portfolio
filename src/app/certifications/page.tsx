import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen selection:bg-peach/30 selection:text-navy pt-12 relative z-10">
      <Certifications />
      <Contact />
    </main>
  );
}
