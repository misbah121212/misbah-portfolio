"use client";

import Image from "next/image";
import { SparkleIcon } from "@/components/ui/SparkleIcon";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/spatial/TiltCard";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col p-8 md:p-12 relative overflow-hidden">
      
      {/* ========================================================================= */}
      {/* FLOATING DECORATIONS (EXACTLY FOUR)                                       */}
      {/* ========================================================================= */}
      
      {/* Decoration One: Top Right, large glass flower (150px, pink -> purple gradient, slow rotation) */}
      <motion.div 
        className="absolute -top-6 -right-6 w-[150px] h-[150px] drop-shadow-[0_20px_45px_rgba(0,0,0,0.12)] z-0 pointer-events-none"
        animate={{ 
          rotate: 360,
          y: [0, -10, 0]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Image src="/3d-flower.png" alt="Glass Flower" fill className="object-contain select-none" />
      </motion.div>

      {/* Decoration Two: Bottom Right, pastel daisy (110px, 3D, moves) */}
      <motion.div 
        className="absolute bottom-28 -right-4 w-[110px] h-[110px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] z-10 pointer-events-none"
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image src="/3d-flower.png" alt="Pastel Daisy" fill className="object-contain select-none hue-rotate-[60deg]" />
      </motion.div>

      {/* Decoration Three: Top Left, tiny sparkle (opacity 35%, pulse) */}
      <motion.div 
        className="absolute top-10 left-12 z-20 pointer-events-none"
        animate={{ 
          opacity: [0.15, 0.35, 0.15],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <SparkleIcon className="w-6 h-6 text-[#9B72FF]" />
      </motion.div>

      {/* Decoration Four: Center Background, tiny floating star (glass) */}
      <motion.div 
        className="absolute top-[28%] right-[30%] w-10 h-10 drop-shadow-[0_8px_20px_rgba(155,114,255,0.15)] z-0 pointer-events-none"
        animate={{ 
          y: [0, -14, 0],
          rotate: [0, 15, -15, 0],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image src="/3d-star.png" alt="Floating Star" fill className="object-contain select-none opacity-80" />
      </motion.div>

      {/* ========================================================================= */}
      {/* MAIN CONTENT                                                              */}
      {/* ========================================================================= */}

      <div className="flex-1 flex flex-col justify-center max-w-2xl relative z-10 mt-6">
        {/* Greeting (Top Left, Small, Uppercase, Lavender) */}
        <motion.div 
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SparkleIcon className="w-3.5 h-3.5 text-[#9B72FF] animate-pulse" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#9B72FF] font-bold">
            Software Engineering
          </span>
        </motion.div>

        {/* Heading (Canela/Playfair, 84px, gradient white-to-lavender) */}
        <h1 
          className="text-5xl md:text-[84px] font-serif leading-none mb-6 select-none text-white tracking-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block"
          >
            Hi, I'm{" "}
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.4 }}
            className="inline-block bg-gradient-to-b from-white to-[#DCC7FF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(216,200,255,0.25)]" 
          >
            Misbah.
          </motion.span>
        </h1>

        {/* Paragraph (max width 520px, line height 2, Inter, #5C5772) */}
        <motion.p 
          className="text-[#5F5970] font-sans text-xs md:text-[14px] mb-8 max-w-[520px] leading-[2] select-none text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Final year B.E. student specializing in Artificial Intelligence and Machine Learning. I build intelligent, scalable, and impactful solutions that solve real-world problems.
        </motion.p>

        {/* Buttons (Height 62px, rounded-full) */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Primary Button (Background #E9D9FF, Text #34274F, Glow, Lift, Reflection) */}
          <motion.button 
            className="bg-[#E9D9FF] text-[#34274F] px-8 rounded-full h-[62px] font-sans font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 relative overflow-hidden group shadow-[0_0_25px_rgba(215,185,255,0.4)]"
            whileHover={{ 
              scale: 1.04,
              y: -2,
              boxShadow: "0 0 35px rgba(215,185,255,0.8)"
            }}
            whileTap={{ scale: 0.96 }}
          >
            {/* Glossy Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.button>
          
          {/* Secondary Button (Transparent, Glass border, height 62px) */}
          <motion.button 
            className="bg-transparent hover:bg-white/10 text-[#221B39] backdrop-blur-md border border-[#221B39]/25 px-8 rounded-full h-[62px] font-sans font-bold text-xs tracking-widest uppercase flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.04, y: -2, borderColor: "rgba(34,27,57,0.5)" }}
            whileTap={{ scale: 0.96 }}
          >
            About Me
          </motion.button>
        </motion.div>
      </div>

      {/* Featured Projects Bottom Row (Horizontal layout, 190px height, 26px radius) */}
      <motion.div 
        className="w-full mt-auto relative z-10 pt-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div 
          className="rounded-[32px] p-5 w-full flex flex-col border border-white/20"
          style={{
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 20px 50px rgba(32, 28, 52, 0.05)"
          }}
        >
          <div className="flex items-center gap-2 mb-4 px-2 select-none">
            <h3 className="font-sans text-[10px] uppercase tracking-widest text-[#221B39] font-bold flex items-center gap-2">
              Featured Projects <SparkleIcon className="w-3.5 h-3.5 text-[#9B72FF] animate-pulse" />
            </h3>
          </div>

          {/* Projects Row */}
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
            <ProjectCard 
              title="HydroHack"
              desc="AI-powered platform for oceanographic & biodiversity research."
              tags={["AI", "Gemini", "Python"]}
              index={0}
            />
            <ProjectCard 
              title="Credence AI"
              desc="AI Loan Risk Intelligence Platform for Predicting Customer Defaults."
              tags={["AI", "ML", "FastAPI"]}
              index={1}
            />
            <ProjectCard 
              title="VISO SONIC AI"
              desc="Assistive tool for visually impaired using AI, OCR, TTS & Navigation."
              tags={["AI", "IoT", "OCR"]}
              index={2}
            />
            <ProjectCard 
              title="MedOrchestra"
              desc="Multi-agent clinical decision support system using LangGraph."
              tags={["AI", "Healthcare"]}
              index={3}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const ProjectCard = ({ title, desc, tags, index }: { title: string, desc: string, tags: string[], index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
    className="min-w-[320px] h-[190px]"
  >
    <TiltCard className="h-full w-full">
      <div 
        className="h-full w-full flex flex-col justify-between rounded-[26px] p-5 transition-all duration-750 cursor-pointer relative overflow-hidden group border border-white/15 hover:border-white/30 shadow-[0_8px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(155,114,255,0.12)]"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      >
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-lavender/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Sheen effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-2xl overflow-hidden relative flex-shrink-0 border border-white/20 shadow-inner bg-[#221B39]/5">
             <div className="absolute inset-0 bg-gradient-to-br from-lavender/40 to-lavender-dark/20 group-hover:scale-110 transition-transform duration-700" />
             <SparkleIcon className="w-5 h-5 text-[#9B72FF]/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-90 transition-transform duration-500" />
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-[#221B39] font-bold text-sm mb-0.5 group-hover:text-[#9B72FF] transition-colors">{title}</h4>
            <p className="text-[#5F5970] text-[10px] leading-relaxed line-clamp-2">{desc}</p>
          </div>
        </div>
        
        <div className="flex gap-1.5 flex-wrap pt-2 border-t border-white/10">
          {tags.map(tag => (
            <span key={tag} className="text-[8px] uppercase tracking-widest font-bold bg-[#9B72FF]/10 px-2.5 py-0.5 rounded-full text-[#9B72FF] border border-[#9B72FF]/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  </motion.div>
);
