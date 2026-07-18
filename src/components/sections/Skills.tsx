"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";

const skillsCategories = [
  {
    title: "AI & Machine Learning",
    items: ["Multi-agent systems", "LLM fine-tuning", "RAG pipelines", "BioBERT", "LLaMA-3", "Gemini API", "Claude API", "YOLO", "Transformers", "scikit-learn", "OpenCV"],
    color: "bg-lavender text-navy border-lavender"
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "TailwindCSS", "Node.js", "Express", "FastAPI", "Flask", "LangGraph", "pytest"],
    color: "bg-peach text-navy border-peach"
  },
  {
    title: "Cloud & DevOps",
    items: ["Google Cloud Run", "Firebase", "Docker", "Git", "GitHub", "Linux/Bash"],
    color: "bg-navy text-white border-navy"
  },
  {
    title: "Languages & Databases",
    items: ["Python", "JavaScript (ES6+)", "C", "SQL", "SQLite", "ChromaDB", "Vector DBs"],
    color: "bg-lavender-dark text-navy border-lavender-dark"
  },
  {
    title: "Networking & Security",
    items: ["TCP/IP stack", "HTTP/HTTPS", "DNS", "REST API design", "Secure coding (OWASP basics)", "Code reviews", "Agile/Scrum", "SOLID principles"],
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skillsCategories.map((cat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col gap-4 bg-white/50 backdrop-blur-md p-8 rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all"
          >
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-navy/70">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, i) => (
                <span key={i} className={`px-4 py-2 rounded-full font-sans text-xs border border-navy/10 ${cat.color} ${cat.color.includes('bg-navy') ? '' : 'bg-opacity-30'}`}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
  );
};
