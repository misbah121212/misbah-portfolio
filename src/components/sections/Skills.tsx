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

const certifications = [
  {
    org: "NVIDIA",
    title: "Getting Started with AI on Jetson Nano",
    desc: "Edge AI, embedded AI systems, and AI model deployment."
  },
  {
    org: "Google / Coursera",
    title: "AI & Generative AI Specializations",
    desc: "Engineer AI Agents with ADK, Google AI Essentials, Intro to GenAI, Prompting Essentials."
  },
  {
    org: "Cisco Networking Academy",
    title: "Introduction to Cybersecurity",
    desc: "Cyber threats, network security, data protection, and security best practices."
  },
  {
    org: "Forage Job Simulations",
    title: "Software Engineering & GenAI",
    desc: "J.P. Morgan Software Engineering, BCG GenAI, Tata GenAI Data Analytics."
  }
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-8 md:py-12 relative">
      
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-navy">Technical Arsenal</h2>
        <SparkleIcon className="w-4 h-4 text-peach" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Column: Skills */}
        <div className="flex flex-col gap-10">
          {skillsCategories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-navy/70 mb-4">{cat.title}</h3>
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

        {/* Right Column: Certifications */}
        <div className="flex flex-col">
          <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-navy/70 mb-6">Certifications & Training</h3>
          
          <div className="flex flex-col gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 border border-white/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-peach" />
                  <span className="font-sans font-bold uppercase tracking-widest text-[10px] text-navy/60">{cert.org}</span>
                </div>
                <h4 className="font-serif text-2xl text-navy mb-2">{cert.title}</h4>
                <p className="font-sans text-sm text-navy/70 leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </SectionWrapper>
  );
};
