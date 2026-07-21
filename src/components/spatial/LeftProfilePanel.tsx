"use client";

import Image from "next/image";
import { SparkleIcon } from "../ui/SparkleIcon";
import { Globe, Hash, Mail, FileText, Award, Trophy, ShieldCheck, Briefcase } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { motion } from "framer-motion";

export const LeftProfilePanel = () => {
  return (
    <TiltCard className="w-[300px] h-full flex-shrink-0">
      <div className="w-full h-full flex flex-col items-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-6 shadow-[0_8px_32px_rgba(31,38,135,0.15)] relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-lavender/10 to-transparent pointer-events-none" />

        {/* Top Left Sparkle Logo */}
        <div className="w-full flex items-center gap-2 mb-6 relative z-10">
          <SparkleIcon className="w-5 h-5 text-white/90 animate-spin-slow" />
          <span className="font-serif text-xl font-bold tracking-tight text-white/90">Misbah.</span>
        </div>

        {/* Profile Image with glowing ring */}
        <motion.div 
          className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-lavender/40 via-peach/30 to-transparent mb-6 shadow-[0_0_30px_rgba(194,173,217,0.3)] relative z-10"
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 relative">
            <Image 
              src="/profile.png"
              alt="Misbah"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <h2 className="font-sans text-xl font-bold text-white mb-1 relative z-10">Umme Misbah Sikandar</h2>
        <p className="font-sans text-sm text-white/70 mb-8 text-center px-4 relative z-10">
          AI/ML Engineer &<br/>Full-Stack Developer
        </p>

        {/* Stats List */}
        <div className="w-full flex flex-col gap-3 mb-8 relative z-10">
          <StatCard icon={<Award className="w-5 h-5" />} value="8.00" label="Current CGPA" index={0} />
          <StatCard icon={<Trophy className="w-5 h-5" />} value="4+" label="Hackathons Won" index={1} />
          <StatCard icon={<ShieldCheck className="w-5 h-5" />} value="1" label="Registered Patent" index={2} />
          <StatCard icon={<Briefcase className="w-5 h-5" />} value="10+" label="Projects Completed" index={3} />
        </div>

        {/* Social Icons Bottom */}
        <div className="mt-auto w-full flex justify-between items-center px-2 relative z-10">
          <SocialIcon href="https://github.com/misbah121212" icon={<Globe className="w-5 h-5" />} />
          <SocialIcon href="https://linkedin.com/in/umme-misbah-sikandar" icon={<Hash className="w-5 h-5" />} />
          <SocialIcon href="mailto:misbasikandar7@gmail.com" icon={<Mail className="w-5 h-5" />} />
          <SocialIcon href="/resume.pdf" icon={<FileText className="w-5 h-5" />} />
        </div>
      </div>
    </TiltCard>
  );
};

const StatCard = ({ icon, value, label, index }: { icon: React.ReactNode, value: string, label: string, index: number }) => (
  <motion.div 
    className="w-full bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-4 cursor-pointer overflow-hidden relative group"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ 
      scale: 1.03, 
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      borderColor: "rgba(255, 255, 255, 0.3)",
      boxShadow: "0 10px 25px -5px rgba(194, 173, 217, 0.15)"
    }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Shine overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lavender shadow-inner relative z-10 transition-transform duration-500 group-hover:rotate-12">
      {icon}
    </div>
    <div className="flex flex-col relative z-10">
      <span className="font-sans font-bold text-white text-base leading-tight">{value}</span>
      <span className="font-sans text-xs text-white/60">{label}</span>
    </div>
  </motion.div>
);

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 shadow-sm relative overflow-hidden"
    whileHover={{ 
      scale: 1.15, 
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.4)",
      boxShadow: "0 0 15px rgba(226, 213, 239, 0.4)"
    }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {icon}
  </motion.a>
);
