"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";
import { ShieldCheck, Trophy, Target, Star, Cloud } from "lucide-react";

const achievements = [
  {
    num: "01",
    title: "Registered Design Patent",
    desc: "Smart Spectacle for Blind People, Government of India (Design No. 477817-001, Serial No. 219846)",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    color: "bg-lavender text-navy",
    border: "border-lavender"
  },
  {
    num: "02",
    title: "Winner",
    desc: "Hack2Skill Promptwars 2025 (VoteWise, 200+ teams)",
    icon: <Trophy className="w-5 h-5 text-white" />,
    color: "bg-peach text-navy",
    border: "border-peach"
  },
  {
    num: "03",
    title: "Top 10",
    desc: "Internal Smart India Hackathon 2025 (HydroHack, AI chatbot + Next.js backend)",
    icon: <Target className="w-5 h-5 text-white" />,
    color: "bg-cream text-navy",
    border: "border-cream"
  },
  {
    num: "04",
    title: "Selected Applicant",
    desc: "Samsung Solve for Tomorrow 2026 (NeuroBuddy, gamified learning-difference screening app for children)",
    icon: <Star className="w-5 h-5 text-white" />,
    color: "bg-lavender-dark text-navy",
    border: "border-lavender-dark"
  },
  {
    num: "05",
    title: "HackOn with Amazon 6.0",
    desc: "Participant – NutriSense AI and MedOrchestra under AWS track",
    icon: <Star className="w-5 h-5 text-white" />,
    color: "bg-peach text-navy",
    border: "border-peach"
  }
];

export const Achievements = () => {
  return (
    <SectionWrapper id="achievements" className="py-8 md:py-12 relative overflow-visible">
      
      <div className="flex items-center gap-4 mb-20">
        <h2 className="text-4xl md:text-5xl text-[#D4AF37] drop-shadow-md" style={{ fontFamily: 'var(--font-berkshire), serif', letterSpacing: '0.02em' }}>Achievements & Patents</h2>
        <SparkleIcon className="w-5 h-5 text-peach" />
      </div>

      <div className="relative flex flex-col md:flex-row flex-wrap justify-center gap-y-16 gap-x-8 w-full">
        {achievements.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col items-center text-center w-full md:w-[45%] lg:w-[30%] gap-6"
          >
            {/* Icon & Number Badge */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                {item.icon}
              </div>
              <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold font-sans text-xs shadow-md ${item.color}`}>
                {item.num}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-col flex-1 items-center">
              <h4 className="font-sans font-bold text-white tracking-widest text-sm uppercase mb-3 text-balance leading-relaxed">
                {item.title}
              </h4>
              <p className="text-white/60 font-sans text-sm leading-relaxed max-w-[280px]">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
  );
};
