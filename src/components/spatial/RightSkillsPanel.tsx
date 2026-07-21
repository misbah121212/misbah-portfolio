"use client";

import { SparkleIcon } from "../ui/SparkleIcon";
import { TiltCard } from "./TiltCard";
import { motion } from "framer-motion";

const topSkills = [
  { name: "Python", percent: 95 },
  { name: "Machine Learning", percent: 90 },
  { name: "React.js", percent: 85 },
  { name: "Node.js", percent: 80 },
  { name: "FastAPI", percent: 85 },
  { name: "Cloud (GCP, AWS)", percent: 80 },
];

export const RightSkillsPanel = () => {
  return (
    <TiltCard className="w-[300px] h-full flex-shrink-0">
      <div className="w-full h-full flex flex-col bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-6 shadow-[0_8px_32px_rgba(31,38,135,0.15)] relative overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-lavender/10 to-transparent pointer-events-none" />

        <div className="w-full flex justify-end mb-6 relative z-10">
          <motion.a 
            href="/resume.pdf"
            target="_blank"
            className="text-xs font-sans font-bold uppercase tracking-widest text-white/90 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all shadow-sm flex items-center gap-2"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "rgba(255, 255, 255, 0.4)",
              boxShadow: "0 0 15px rgba(226, 213, 239, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume <SparkleIcon className="w-3 h-3 text-lavender animate-pulse" />
          </motion.a>
        </div>

        <h3 className="font-sans font-bold text-white uppercase tracking-widest text-sm mb-8 flex items-center gap-2 relative z-10">
          Skills <SparkleIcon className="w-4 h-4 text-white/50" />
        </h3>

        <div className="flex flex-col gap-6 flex-1 overflow-y-auto pr-2 custom-scrollbar relative z-10">
          {topSkills.map((skill, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col gap-2 cursor-pointer group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex justify-between items-center text-white/80 font-sans text-xs">
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                     <span className="w-2 h-2 rounded-sm bg-lavender/60" />
                  </span>
                  {skill.name}
                </span>
                <span className="font-bold text-white group-hover:text-lavender transition-colors">{skill.percent}%</span>
              </div>
              
              {/* Progress bar container */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-lavender to-lavender-dark shadow-[0_0_10px_rgba(194,173,217,0.8)] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 w-full flex justify-center pb-2 relative z-10">
          <motion.button 
            className="w-full py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl text-white/90 font-sans font-bold text-xs uppercase tracking-widest transition-all"
            whileHover={{ 
              scale: 1.03,
              borderColor: "rgba(255, 255, 255, 0.4)",
              boxShadow: "0 0 15px rgba(226, 213, 239, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Skills
          </motion.button>
        </div>

      </div>
    </TiltCard>
  );
};
