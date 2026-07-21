"use client";

import Image from "next/image";
import { SparkleIcon } from "../ui/SparkleIcon";
import { Globe, Hash, Mail, FileText, Award, Trophy, ShieldCheck, Briefcase } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { motion } from "framer-motion";

export const LeftProfilePanel = () => {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }} // Vertical idle drift of 4-6px over 8 seconds
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="w-[300px] h-[720px] flex-shrink-0 relative z-30"
    >
      <TiltCard className="w-full h-full">
        <div 
          className="w-full h-full flex flex-col items-center rounded-[38px] p-6 relative overflow-hidden border border-white/22"
          style={{
            background: "rgba(42, 35, 65, 0.45)",
            backdropFilter: "blur(60px)",
            WebkitBackdropFilter: "blur(60px)",
            boxShadow: "0 45px 120px rgba(28, 24, 48, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
          }}
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-lavender/10 to-transparent pointer-events-none" />

          {/* Top Left Sparkle Logo */}
          <div className="w-full flex items-center gap-2 mb-4 relative z-10 select-none">
            <SparkleIcon className="w-4 h-4 text-white/90 animate-spin-slow" />
            <span className="font-serif text-lg font-bold tracking-tight text-white/90">Misbah.</span>
          </div>

          {/* Profile Image with glowing ring (Large circle, border E7D8FF, soft glow) */}
          <motion.div 
            className="relative w-[130px] h-[130px] rounded-full p-1 mb-5 relative z-10 border-[6px] border-[#E7D8FF]"
            style={{
              boxShadow: "0 0 45px rgba(216, 200, 255, 0.3)"
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

          <h2 className="font-sans text-[26px] font-bold text-white text-center leading-none mb-1.5 relative z-10 select-none">
            Umme Misbah
          </h2>
          <p className="font-sans text-[15px] font-medium text-[#DCC8FF] mb-5 text-center leading-tight relative z-10 select-none">
            AI/ML Engineer
          </p>

          {/* Stats List (Spacing 18px, Card height 82px to fit inside 720px, bg-white/5, radius 24px) */}
          <div className="w-full flex flex-col gap-[14px] mb-5 relative z-10">
            <StatCard icon={<Award className="w-4.5 h-4.5" />} value="8.00" label="Current CGPA" index={0} />
            <StatCard icon={<Trophy className="w-4.5 h-4.5" />} value="4+" label="Hackathons Won" index={1} />
            <StatCard icon={<ShieldCheck className="w-4.5 h-4.5" />} value="1" label="Registered Patent" index={2} />
            <StatCard icon={<Briefcase className="w-4.5 h-4.5" />} value="10+" label="Projects Completed" index={3} />
          </div>

          {/* Social Icons Bottom (54px glass circles, rotate 5° and glow on hover) */}
          <div className="mt-auto w-full flex justify-between items-center px-1 relative z-10">
            <SocialIcon href="https://github.com/misbah121212" icon={<Globe className="w-4.5 h-4.5" />} />
            <SocialIcon href="https://linkedin.com/in/umme-misbah-sikandar" icon={<Hash className="w-4.5 h-4.5" />} />
            <SocialIcon href="mailto:misbasikandar7@gmail.com" icon={<Mail className="w-4.5 h-4.5" />} />
            <SocialIcon href="/resume.pdf" icon={<FileText className="w-4.5 h-4.5" />} />
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

const StatCard = ({ icon, value, label, index }: { icon: React.ReactNode, value: string, label: string, index: number }) => (
  <motion.div 
    className="w-full h-[78px] bg-white/5 backdrop-blur-md rounded-[20px] px-4 py-2 border border-white/10 flex items-center gap-3.5 cursor-pointer overflow-hidden relative group"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ 
      scale: 1.03, 
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      borderColor: "rgba(255, 255, 255, 0.3)",
      boxShadow: "0 8px 20px -4px rgba(216, 200, 255, 0.2)"
    }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Shine overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#DCC8FF] shadow-inner relative z-10 transition-transform duration-500 group-hover:rotate-12">
      {icon}
    </div>
    <div className="flex flex-col justify-center relative z-10">
      <span className="font-sans font-bold text-white text-[14px] leading-tight select-none">{value}</span>
      <span className="font-sans text-[10px] text-[#A8A2B8] leading-tight mt-0.5">{label}</span>
    </div>
  </motion.div>
);

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[50px] h-[50px] rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 shadow-sm relative overflow-hidden"
    whileHover={{ 
      scale: 1.12, 
      rotate: 5,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.4)",
      boxShadow: "0 0 15px rgba(216, 200, 255, 0.5)"
    }}
    whileTap={{ scale: 0.92 }}
    transition={{ type: "spring", stiffness: 350, damping: 12 }}
  >
    {icon}
  </motion.a>
);
