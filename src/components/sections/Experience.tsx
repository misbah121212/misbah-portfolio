"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparkleIcon } from "../ui/SparkleIcon";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

interface Milestone {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  details: string[];
  tags: string[];
  x: string; // horizontal percentage position for nodes
  y: string; // vertical percentage offset for floating nodes
}

const milestones: Milestone[] = [
  {
    id: 1,
    role: "AI/ML Research Engineer",
    company: "Samsung Solve For Tomorrow (NeuroBuddy)",
    period: "2025 - Present",
    location: "Bengaluru, India",
    details: [
      "Architected a gamified screening application leveraging custom ML models for early detection of learning differences in children.",
      "Optimized inference pipelines for edge deployment, achieving sub-100ms response times."
    ],
    tags: ["TensorFlow", "React Native", "Python", "Edge AI"],
    x: "15%",
    y: "35%"
  },
  {
    id: 2,
    role: "Full-Stack AI Developer",
    company: "AWS Track / HackOn Amazon 6.0",
    period: "2025",
    location: "Bengaluru, India",
    details: [
      "Engineered NutriSense AI and MedOrchestra multi-agent support pipelines using LangGraph and AWS cloud utilities.",
      "Integrated secure OCR extraction tools processing medical files with 98% semantic accuracy."
    ],
    tags: ["LangGraph", "AWS", "FastAPI", "OCR"],
    x: "50%",
    y: "55%"
  },
  {
    id: 3,
    role: "Lead Prompt Engineer & Architect",
    company: "Hack2Skill Promptwars (Winner)",
    period: "2025",
    location: "Bengaluru, India",
    details: [
      "Created CodeBeast, an autonomous 7-agent evaluation framework compiling Git repos using Claude API.",
      "Secured 1st Place out of 200+ competing AI engineering teams."
    ],
    tags: ["Claude API", "Multi-Agent Systems", "Node.js", "XAI"],
    x: "85%",
    y: "40%"
  }
];

export const Experience = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <SectionWrapper id="experience" className="py-12 md:py-16 h-full flex flex-col relative overflow-hidden">
      
      {/* Title */}
      <div className="flex items-center gap-4 mb-20 -mt-12 px-6">
        <h2 
          className="text-4xl md:text-6xl text-white drop-shadow-sm font-serif"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Milestones & Journey
        </h2>
        <SparkleIcon className="w-4 h-4 text-peach animate-pulse" />
      </div>

      {/* Spatial Timeline Map Container */}
      <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center p-6 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md">
        
        {/* SVG Connecting Glowing Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "drop-shadow(0 0 12px rgba(194, 173, 217, 0.4))" }}>
          {/* Base Wire */}
          <path 
            d="M 50 150 C 300 350, 600 50, 1100 200" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.2)" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          {/* Glowing Lilac Animated Over-wire */}
          <motion.path 
            d="M 50 150 C 300 350, 600 50, 1100 200" 
            fill="none" 
            stroke="var(--color-lavender)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            initial={{ strokeDasharray: "1000", strokeDashoffset: "1000" }}
            animate={{ strokeDashoffset: activeNode !== null ? "0" : "200" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Floating milestone nodes */}
        {milestones.map((m) => {
          const isActive = activeNode === m.id;
          
          return (
            <div 
              key={m.id} 
              className="absolute cursor-pointer select-none"
              style={{ left: m.x, top: m.y }}
              onMouseEnter={() => setActiveNode(m.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Suspended Sphere (Outer Glow Ring) */}
              <motion.div 
                className="relative w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
                animate={{
                  y: [0, -6, 0],
                  boxShadow: isActive 
                    ? "0 0 30px rgba(226, 213, 239, 0.8)" 
                    : "0 0 15px rgba(255, 255, 255, 0.1)"
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.25 }}
              >
                {/* Inner glass circle sphere */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 border ${
                  isActive 
                    ? "bg-lavender text-navy border-lavender" 
                    : "bg-white/10 text-white border-white/20 backdrop-blur-md"
                }`}>
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Pulse wave when active */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full border border-lavender animate-ping opacity-60" />
                )}
              </motion.div>

              {/* Float-up glass info window */}
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-[290px] md:w-[350px] bg-navy/90 backdrop-blur-3xl border border-white/20 p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] z-50 pointer-events-none"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Glass sheen overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none rounded-2xl" />

                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-lavender">{m.company}</span>
                      <span className="text-[10px] font-sans text-white/50 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {m.period}
                      </span>
                    </div>

                    <h4 className="text-white font-serif text-lg font-bold mb-1 leading-tight">{m.role}</h4>
                    
                    <div className="flex items-center gap-1 text-[10px] text-white/60 font-sans mb-3">
                      <MapPin className="w-3 h-3" /> {m.location}
                    </div>

                    <ul className="space-y-1.5 text-white/80 font-sans text-[11px] leading-relaxed mb-4 list-disc pl-3">
                      {m.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>

                    <div className="flex gap-1.5 flex-wrap">
                      {m.tags.map((tag) => (
                        <span key={tag} className="text-[9px] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full text-white/80 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
