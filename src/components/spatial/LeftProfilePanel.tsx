"use client";

import Image from "next/image";
import { SparkleIcon } from "../ui/SparkleIcon";
import { Globe, Hash, Mail, FileText, Award, Trophy, ShieldCheck, Briefcase } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { motion } from "framer-motion";

export const LeftProfilePanel = () => {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="w-[320px] h-[760px] flex-shrink-0 relative z-30"
    >
      <TiltCard className="w-full h-full">
        <div 
          className="w-full h-full flex flex-col items-center rounded-[38px] p-6 relative overflow-hidden border border-white/18"
          style={{
            background: "rgba(39, 31, 60, 0.62)",
            backdropFilter: "blur(60px)",
            WebkitBackdropFilter: "blur(60px)",
            boxShadow: "0 45px 120px rgba(28, 24, 48, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.18)"
          }}
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#D8C8FF]/10 to-transparent pointer-events-none" />

          {/* Top Left Sparkle Logo */}
          <div className="w-full flex items-center gap-2 mb-6 relative z-10">
            <SparkleIcon className="w-5 h-5 text-white/90 animate-spin-slow" />
            <span className="font-serif text-xl font-bold tracking-tight text-white/90">Misbah.</span>
          </div>

          {/* Profile Image with glowing ring (140px circle, 6px border in #E7D8FF, soft glow) */}
          <motion.div 
            className="relative w-[140px] h-[140px] rounded-full p-1 mb-6 relative z-10 border-[6px] border-[#E7D8FF]"
            style={{
              boxShadow: "0 0 60px rgba(215, 185, 255, 0.3)"
            }}
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image 
                src="/profile.png"
                alt="Misbah"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <h2 className="font-sans text-[32px] font-bold text-white text-center leading-none mb-2 relative z-10 select-none">
            Umme Misbah
          </h2>
          <p className="font-sans text-[18px] font-medium text-[#D7C9FF] mb-6 text-center leading-tight relative z-10">
            AI/ML Engineer
          </p>

          {/* Stats List (Spacing 18px, Card height 86px, bg-white/5, radius 24px) */}
          <div className="w-full flex flex-col gap-[18px] mb-6 relative z-10">
            <StatCard icon={<Award className="w-5 h-5" />} value="8.00" label="Current CGPA" index={0} />
            <StatCard icon={<Trophy className="w-5 h-5" />} value="4+" label="Hackathons Won" index={1} />
            <StatCard icon={<ShieldCheck className="w-5 h-5" />} value="1" label="Registered Patent" index={2} />
            <StatCard icon={<Briefcase className="w-5 h-5" />} value="10+" label="Projects Completed" index={3} />
          </div>

          {/* Social Icons Bottom (54px glass circles, rotate 5° and glow on hover) */}
          <div className="mt-auto w-full flex justify-between items-center px-1 relative z-10">
            <SocialIcon href="https://github.com/misbah121212" icon={<Globe className="w-5 h-5" />} />
            <SocialIcon href="https://linkedin.com/in/umme-misbah-sikandar" icon={<Hash className="w-5 h-5" />} />
            <SocialIcon href="mailto:misbasikandar7@gmail.com" icon={<Mail className="w-5 h-5" />} />
            <SocialIcon href="/resume.pdf" icon={<FileText className="w-5 h-5" />} />
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

const StatCard = ({ icon, value, label, index }: { icon: React.ReactNode, value: string, label: string, index: number }) => (
  <motion.div 
    className="w-full h-[86px] bg-white/5 backdrop-blur-md rounded-[24px] px-5 py-3 border border-white/10 flex items-center gap-4 cursor-pointer overflow-hidden relative group"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ 
      scale: 1.03, 
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      borderColor: "rgba(255, 255, 255, 0.3)",
      boxShadow: "0 10px 25px -5px rgba(226, 213, 239, 0.2)"
    }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Shine overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-[#D8C8FF] shadow-inner relative z-10 transition-transform duration-500 group-hover:rotate-12">
      {icon}
    </div>
    <div className="flex flex-col justify-center relative z-10">
      <span className="font-sans font-bold text-white text-[15px] leading-tight select-none">{value}</span>
      <span className="font-sans text-[11px] text-[#B2AFC2] leading-tight mt-0.5">{label}</span>
    </div>
  </motion.div>
);

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[54px] h-[54px] rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 shadow-sm relative overflow-hidden"
    whileHover={{ 
      scale: 1.12, 
      rotate: 5,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.4)",
      boxShadow: "0 0 20px rgba(226, 213, 239, 0.5)"
    }}
    whileTap={{ scale: 0.92 }}
    transition={{ type: "spring", stiffness: 350, damping: 12 }}
  >
    {icon}
  </motion.a>
);
