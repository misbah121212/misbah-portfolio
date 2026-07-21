"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";
import { ShieldCheck, Trophy, Target, Star, LucideIcon } from "lucide-react";
import { TiltCard } from "../spatial/TiltCard";

interface Achievement {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [
  {
    num: "01",
    title: "Registered Design Patent",
    desc: "Smart Spectacle for Blind People, Government of India (Design No. 477817-001)",
    icon: <ShieldCheck className="w-6 h-6 text-lavender" />,
    color: "bg-lavender text-navy"
  },
  {
    num: "02",
    title: "Winner",
    desc: "Hack2Skill Promptwars 2025 (CodeBeast, 200+ teams)",
    icon: <Trophy className="w-6 h-6 text-peach" />,
    color: "bg-peach text-navy"
  },
  {
    num: "03",
    title: "Top 10",
    desc: "Internal Smart India Hackathon 2025 (HydroHack, AI chatbot)",
    icon: <Target className="w-6 h-6 text-white" />,
    color: "bg-white/20 text-white"
  },
  {
    num: "04",
    title: "Selected Applicant",
    desc: "Samsung Solve for Tomorrow 2026 (NeuroBuddy screening app)",
    icon: <Star className="w-6 h-6 text-lavender" />,
    color: "bg-lavender-dark text-navy"
  },
  {
    num: "05",
    title: "HackOn Amazon 6.0",
    desc: "Participant – NutriSense AI and MedOrchestra under AWS track",
    icon: <Star className="w-6 h-6 text-peach" />,
    color: "bg-peach text-navy"
  }
];

export const Achievements = () => {
  return (
    <SectionWrapper id="achievements" className="py-12 md:py-16 relative overflow-visible">
      
      {/* Title */}
      <div className="flex items-center gap-4 mb-20 -mt-12 px-6">
        <h2 
          className="text-4xl md:text-6xl text-white drop-shadow-sm font-serif"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Achievements & Patents
        </h2>
        <SparkleIcon className="w-4 h-4 text-peach animate-pulse" />
      </div>

      {/* Grid */}
      <div className="relative flex flex-col md:flex-row flex-wrap justify-center gap-y-16 gap-x-8 w-full px-6">
        {achievements.map((item, index) => (
          <AchievementCard key={index} item={item} index={index} />
        ))}
      </div>

    </SectionWrapper>
  );
};

const AchievementCard = ({ item, index }: { item: Achievement; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full md:w-[45%] lg:w-[30%]">
      <TiltCard className="w-full h-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-col items-center text-center w-full gap-6 p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/25 shadow-lg relative overflow-hidden transition-all duration-500 h-full min-h-[320px] justify-between group"
        >
          {/* Sheen Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

          {/* 3D Glass Medal Container */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Ambient medal glow */}
            <div className="absolute inset-0 rounded-full bg-lavender/5 blur-md scale-110 pointer-events-none" />
            
            {/* Spinning/lifting glass medal */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-white/25 flex items-center justify-center bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] relative z-10"
              animate={{ 
                rotateY: hovered ? 360 : 0,
                y: hovered ? -8 : 0,
                scale: hovered ? 1.05 : 1,
                boxShadow: hovered 
                  ? "0 10px 25px rgba(226, 213, 239, 0.4), inset 0 2px 8px rgba(255,255,255,0.3)" 
                  : "0 4px 12px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.1)"
              }}
              transition={{ 
                rotateY: { duration: 1.2, ease: "easeInOut" },
                default: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              {item.icon}
              
              {/* Highlight Sparkle on hover */}
              {hovered && (
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>

            {/* Float-up numeric badge */}
            <div className={`absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center font-bold font-sans text-[10px] shadow-md border border-white/20 z-20 ${item.color}`}>
              {item.num}
            </div>

            {/* Sparkle Particles Emitter */}
            <AnimatePresence>
              {hovered && (
                <>
                  <SparkleParticle x={-25} y={-25} delay={0} />
                  <SparkleParticle x={25} y={-20} delay={0.2} />
                  <SparkleParticle x={-15} y={30} delay={0.4} />
                  <SparkleParticle x={30} y={25} delay={0.1} />
                </>
              )}
            </AnimatePresence>
          </div>
          
          {/* Content */}
          <div className="flex flex-col flex-1 items-center justify-center mt-2 relative z-10">
            <h4 className="font-sans font-bold text-white tracking-widest text-xs uppercase mb-3 text-balance leading-relaxed group-hover:text-lavender transition-colors">
              {item.title}
            </h4>
            <p className="text-white/70 font-sans text-[11px] leading-relaxed max-w-[240px]">
              {item.desc}
            </p>
          </div>
        </motion.div>
      </TiltCard>
    </div>
  );
};

const SparkleParticle = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute pointer-events-none z-0"
    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0.2], x, y }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.2, delay, ease: "easeOut" }}
  >
    <SparkleIcon className="w-3.5 h-3.5 text-lavender" />
  </motion.div>
);
