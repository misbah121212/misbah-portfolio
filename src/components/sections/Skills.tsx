"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";
import { TiltCard } from "../spatial/TiltCard";

interface SkillsCategory {
  title: string;
  items: string[];
  dotColor: string; // Dynamic glowing dot color inside the glass pill
}

const skillsCategories: SkillsCategory[] = [
  {
    title: "AI & Machine Learning",
    items: ["scikit-learn", "OpenCV", "YOLO", "Transformers", "BioBERT", "Gemini API", "Claude API", "LLaMA-3", "RAG pipelines", "LLM fine-tuning", "Multi-agent systems"],
    dotColor: "bg-lavender shadow-[0_0_8px_rgba(226,213,239,0.8)]"
  },
  {
    title: "Languages & Databases",
    items: ["C", "Python", "JavaScript (ES6+)", "SQL", "SQLite", "Vector DBs", "ChromaDB"],
    dotColor: "bg-lavender-dark shadow-[0_0_8px_rgba(194,173,217,0.8)]"
  },
  {
    title: "Frameworks & Libraries",
    items: ["Flask", "Express", "Node.js", "React", "TailwindCSS", "FastAPI", "pytest", "Next.js", "LangGraph"],
    dotColor: "bg-peach shadow-[0_0_8px_rgba(240,179,166,0.8)]"
  },
  {
    title: "Cloud & DevOps",
    items: ["Linux/Bash", "Git", "GitHub", "Docker", "Firebase", "Google Cloud Run"],
    dotColor: "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
  },
  {
    title: "Networking & Security",
    items: ["TCP/IP stack", "DNS", "HTTP/HTTPS", "REST API design", "Code reviews", "Agile/Scrum", "SOLID principles", "Secure coding (OWASP basics)"],
    dotColor: "bg-peach shadow-[0_0_8px_rgba(240,179,166,0.8)]"
  }
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-12 md:py-16 relative">
      
      {/* Title */}
      <div className="flex items-center gap-4 mb-16 -mt-12 px-6">
        <h2 
          className="text-4xl md:text-6xl text-white drop-shadow-sm font-serif"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Technical Arsenal
        </h2>
        <SparkleIcon className="w-4 h-4 text-peach animate-pulse" />
      </div>

      {/* Grid of Tilt Cards */}
      <div className="flex flex-col gap-10 px-6">
        {skillsCategories.map((cat, index) => (
          <TiltCard key={index} className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-6 bg-white/5 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl transition-all duration-700 w-full relative overflow-hidden group"
            >
              {/* Glass Sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[2.5rem]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-lavender-dark tracking-widest">{cat.title}</h3>
                
                <div className="flex flex-wrap items-center gap-y-6 gap-x-2 md:gap-x-3">
                  {cat.items.map((item, i) => {
                    const isLast = i === cat.items.length - 1;
                    return (
                      <div key={i} className="relative flex items-center group/skill">
                        {/* The 3D Wire (Shiny Lilac) */}
                        <div className={`absolute top-1/2 left-0 h-[4px] bg-gradient-to-r from-lavender/60 via-lavender-dark/80 to-lavender/60 backdrop-blur-md border-y border-lavender/50 shadow-[0_0_12px_rgba(194,173,217,0.8)] z-0 ${isLast ? 'w-full' : 'w-[calc(100%+0.5rem)] md:w-[calc(100%+0.75rem)]'}`} />
                        
                        {/* The Shiny Data Packet (Dot) */}
                        <motion.div 
                          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_6px_rgba(226,213,239,1)] z-0"
                          animate={{ 
                            left: ["0%", isLast ? "100%" : "calc(100% + 0.75rem)", "0%", "0%"],
                            opacity: [1, 1, 0, 0]
                          }}
                          transition={{ 
                            duration: 1.5, 
                            times: [0, 0.99, 0.991, 1],
                            repeat: Infinity, 
                            ease: "linear", 
                            delay: i * 1.5,
                            repeatDelay: (cat.items.length - 1) * 1.5
                          }}
                        />
                        
                        {/* The Glass Pill */}
                        <motion.span 
                          whileHover={{ y: -3, scale: 1.03, borderColor: "rgba(255, 255, 255, 0.35)" }}
                          className="relative z-10 px-5 py-2.5 rounded-full font-sans text-xs md:text-sm font-bold border border-white/15 bg-white/5 backdrop-blur-md text-white/90 shadow-sm flex items-center gap-2 cursor-default transition-all duration-300"
                        >
                          {/* Glowing category dot */}
                          <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                          {item}
                        </motion.span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>

    </SectionWrapper>
  );
};
