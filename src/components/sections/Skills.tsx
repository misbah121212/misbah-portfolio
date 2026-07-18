"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";
import { Animated3DArrow } from "../ui/Animated3DArrow";

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
      
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-navy">Technical Arsenal</h2>
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
            className="flex flex-col gap-6 bg-white/10 backdrop-blur-3xl p-8 md:p-10 rounded-[2rem] border border-white/50 shadow-[0_8px_32px_rgba(165,152,243,0.15)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(165,152,243,0.25)] transition-all duration-500 w-full relative overflow-hidden group"
          >
            {/* Iridescent Glass Reflections */}
            <div className="absolute inset-0 bg-gradient-to-tr from-lavender/30 via-white/5 to-peach/30 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_30px_rgba(255,255,255,0.7)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-6">
            <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-navy mb-2">{cat.title}</h3>
            <div className="flex flex-wrap items-center gap-y-6 gap-x-2 md:gap-x-3">
              {cat.items.map((item, i) => (
                <Fragment key={i}>
                  <span className={`px-5 py-2.5 rounded-full font-sans text-sm md:text-base font-medium border border-navy/10 shadow-sm ${cat.color} ${cat.color.includes('bg-navy') ? '' : 'bg-opacity-40'}`}>
                    {item}
                  </span>
                  {i < cat.items.length - 1 && (
                    <Animated3DArrow />
                  )}
                </Fragment>
              ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
  );
};
