"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";


const skillsCategories = [
  {
    title: "AI & Machine Learning",
    items: ["scikit-learn", "OpenCV", "YOLO", "Transformers", "BioBERT", "Gemini API", "Claude API", "LLaMA-3", "RAG pipelines", "LLM fine-tuning", "Multi-agent systems"],
    color: "bg-lavender text-navy border-lavender"
  },
  {
    title: "Languages & Databases",
    items: ["C", "Python", "JavaScript (ES6+)", "SQL", "SQLite", "Vector DBs", "ChromaDB"],
    color: "bg-lavender-dark text-navy border-lavender-dark"
  },
  {
    title: "Frameworks & Libraries",
    items: ["Flask", "Express", "Node.js", "React", "TailwindCSS", "FastAPI", "pytest", "Next.js", "LangGraph"],
    color: "bg-peach text-navy border-peach"
  },
  {
    title: "Cloud & DevOps",
    items: ["Linux/Bash", "Git", "GitHub", "Docker", "Firebase", "Google Cloud Run"],
    color: "bg-navy text-white border-navy"
  },
  {
    title: "Networking & Security",
    items: ["TCP/IP stack", "DNS", "HTTP/HTTPS", "REST API design", "Code reviews", "Agile/Scrum", "SOLID principles", "Secure coding (OWASP basics)"],
    color: "bg-cream text-navy border-cream"
  }
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-8 md:py-12 relative">
      
      <div className="flex items-center gap-4 mb-8 -mt-12">
        <h2 
          className="text-4xl md:text-6xl text-navy drop-shadow-sm font-serif"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Technical Arsenal
        </h2>
        <SparkleIcon className="w-4 h-4 text-peach" />
      </div>

      <div className="flex flex-col gap-10">
        {skillsCategories.map((cat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col gap-6 bg-white/5 backdrop-blur-[10px] p-8 md:p-10 rounded-[2rem] border border-white/30 border-t-white/70 border-l-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.07)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(31,38,135,0.12)] transition-all duration-700 w-full relative overflow-hidden group"
          >
            {/* Glass Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none" />
            {/* Diagonal Glass Sheen */}
            <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-45 translate-x-[-30%] pointer-events-none group-hover:translate-x-[30%] transition-transform duration-1000 ease-in-out" />
            
            <div className="relative z-10 flex flex-col gap-6">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-navy mb-2">{cat.title}</h3>
            <div className="flex flex-wrap items-center gap-y-6 gap-x-2 md:gap-x-3">
              {cat.items.map((item, i) => {
                const isLast = i === cat.items.length - 1;
                return (
                <div key={i} className="relative flex items-center group/skill">
                  {/* The 3D Wire (Shiny Lilac) */}
                  <div className={`absolute top-1/2 left-0 h-[4px] bg-gradient-to-r from-lavender/60 via-lavender-dark/80 to-lavender/60 backdrop-blur-md border-y border-lavender/50 shadow-[0_0_12px_rgba(194,173,217,0.8)] z-0 ${isLast ? 'w-full' : 'w-[calc(100%+0.5rem)] md:w-[calc(100%+0.75rem)]'}`} />
                  
                  {/* The Shiny Data Packet (Dot) */}
                  <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_6px_rgba(226,213,239,1)] z-0"
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
                  
                  {/* The Pill */}
                  <span className={`relative z-10 px-5 py-2.5 rounded-full font-sans text-sm md:text-base font-medium border shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ${cat.color} ${cat.color.includes('bg-navy') ? 'border-navy/20' : 'bg-opacity-90 border-white/60 backdrop-blur-md'}`}>
                    {item}
                  </span>
                </div>
                );
              })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
  );
};
