"use client";

import Image from "next/image";
import { SparkleIcon } from "@/components/ui/SparkleIcon";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/spatial/TiltCard";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col p-8 md:p-12 relative overflow-hidden">
      
      {/* 3D Decorative Elements (Organic Floating & 3D Interactive Spins) */}
      <motion.div 
        className="absolute top-16 right-16 w-44 h-44 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-0 cursor-grab active:cursor-grabbing"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ 
          scale: 1.15,
          rotateY: 180,
          rotateX: 15,
          filter: "brightness(1.15)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Image src="/3d-star.png" alt="Star" fill className="object-contain select-none pointer-events-none" />
      </motion.div>

      <motion.div 
        className="absolute bottom-36 right-36 w-52 h-52 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-0 cursor-grab active:cursor-grabbing"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ 
          scale: 1.15,
          rotateZ: 45,
          rotateX: 25,
          filter: "brightness(1.1)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Image src="/3d-flower.png" alt="Flower" fill className="object-contain select-none pointer-events-none" />
      </motion.div>

      <div className="flex-1 flex flex-col justify-center max-w-2xl relative z-10">
        {/* Tag */}
        <motion.div 
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SparkleIcon className="w-4 h-4 text-lavender animate-pulse" />
          <span className="font-sans text-xs uppercase tracking-widest text-white/70 font-bold">
            Software Engineering
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight select-none">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-block"
          >
            Hi, I'm{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.4 }}
            className="text-lavender font-great-vibes inline-block drop-shadow-[0_0_20px_rgba(194,173,217,0.4)]" 
            style={{ fontFamily: 'var(--font-great-vibes)' }}
          >
            Misbah.
          </motion.span>
        </h1>

        {/* Bio */}
        <motion.p 
          className="text-white/85 font-sans text-sm md:text-base mb-10 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Final year B.E. student specializing in Artificial Intelligence and Machine Learning. I build intelligent, scalable, and impactful solutions that solve real-world problems.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button 
            className="bg-lavender hover:bg-lavender/90 text-navy px-8 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase shadow-[0_0_25px_rgba(194,173,217,0.5)] flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 35px rgba(194,173,217,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Sheen Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.button>
          
          <motion.button 
            className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase transition-colors"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.button>
        </motion.div>
      </div>

      {/* Featured Projects Bottom Row */}
      <motion.div 
        className="w-full mt-auto relative z-10 pt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.15)] w-full flex flex-col">
          <div className="flex items-center gap-2 mb-6 px-2">
            <h3 className="font-sans text-xs uppercase tracking-widest text-white/90 font-bold flex items-center gap-2">
              Featured Projects <SparkleIcon className="w-3.5 h-3.5 text-lavender animate-pulse" />
            </h3>
          </div>

          {/* Projects Row */}
          <div className="flex gap-6 overflow-x-auto custom-scrollbar pb-2">
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
    className="min-w-[320px] h-28"
  >
    <TiltCard className="h-full w-full">
      <div className="h-full w-full flex gap-4 items-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/35 rounded-2xl p-3.5 transition-colors cursor-pointer relative overflow-hidden group shadow-md hover:shadow-lg">
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-lavender/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Sheen effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

        <div className="w-20 h-20 rounded-xl bg-navy overflow-hidden relative flex-shrink-0 border border-white/10 shadow-inner">
           <div className="absolute inset-0 bg-gradient-to-br from-lavender/40 to-navy/80 group-hover:scale-110 transition-transform duration-700" />
           <SparkleIcon className="w-6 h-6 text-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-90 transition-transform duration-500" />
        </div>
        
        <div className="flex flex-col flex-1">
          <h4 className="text-white font-bold text-sm mb-1 group-hover:text-lavender transition-colors">{title}</h4>
          <p className="text-white/60 text-[10px] leading-relaxed mb-2 line-clamp-2">{desc}</p>
          <div className="flex gap-1.5 flex-wrap">
            {tags.map(tag => (
              <span key={tag} className="text-[8px] uppercase tracking-widest font-bold bg-white/10 px-2.5 py-0.5 rounded-full text-white/80 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  </motion.div>
);
