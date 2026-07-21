import Image from "next/image";
import { SparkleIcon } from "../ui/SparkleIcon";
import { Github, Linkedin, Mail, FileText, Award, Trophy, ShieldCheck, Briefcase } from "lucide-react";

export const LeftProfilePanel = () => {
  return (
    <div className="w-[300px] h-full flex flex-col items-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-6 shadow-[0_8px_32px_rgba(31,38,135,0.15)] relative overflow-hidden flex-shrink-0">
      
      {/* Top Left Sparkle Logo */}
      <div className="w-full flex items-center gap-2 mb-6">
        <SparkleIcon className="w-5 h-5 text-white/90" />
        <span className="font-serif text-xl font-bold tracking-tight text-white/90">Misbah.</span>
      </div>

      {/* Profile Image with glowing ring */}
      <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-lavender/40 via-peach/30 to-transparent mb-6 shadow-[0_0_30px_rgba(194,173,217,0.3)]">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 relative">
          <Image 
            src="/profile.png"
            alt="Misbah"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="font-sans text-xl font-bold text-white mb-1">Umme Misbah Sikandar</h2>
      <p className="font-sans text-sm text-white/70 mb-8 text-center px-4">
        AI/ML Engineer &<br/>Full-Stack Developer
      </p>

      {/* Stats List */}
      <div className="w-full flex flex-col gap-3 mb-8">
        <StatCard icon={<Award className="w-5 h-5" />} value="8.00" label="Current CGPA" />
        <StatCard icon={<Trophy className="w-5 h-5" />} value="4+" label="Hackathons Won" />
        <StatCard icon={<ShieldCheck className="w-5 h-5" />} value="1" label="Registered Patent" />
        <StatCard icon={<Briefcase className="w-5 h-5" />} value="10+" label="Projects Completed" />
      </div>

      {/* Social Icons Bottom */}
      <div className="mt-auto w-full flex justify-between items-center px-2">
        <SocialIcon href="https://github.com/misbah121212" icon={<Github className="w-5 h-5" />} />
        <SocialIcon href="https://linkedin.com/in/umme-misbah-sikandar" icon={<Linkedin className="w-5 h-5" />} />
        <SocialIcon href="mailto:misbasikandar7@gmail.com" icon={<Mail className="w-5 h-5" />} />
        <SocialIcon href="/resume.pdf" icon={<FileText className="w-5 h-5" />} />
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
  <div className="w-full bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lavender shadow-inner">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="font-sans font-bold text-white text-base leading-tight">{value}</span>
      <span className="font-sans text-xs text-white/60">{label}</span>
    </div>
  </div>
);

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
  >
    {icon}
  </a>
);
