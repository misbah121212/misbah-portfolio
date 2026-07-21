"use client";

import React from "react";
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
    <motion.div
      animate={{ y: [-5, 0, -5] }} // Opposite Y drift of Left Panel to create balance
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="w-[300px] h-[720px] flex-shrink-0 relative z-30"
    >
      <TiltCard className="w-full h-full">
        <div 
          className="w-full h-full flex flex-col rounded-[38px] p-6 relative overflow-hidden border border-white/22"
          style={{
            background: "rgba(42, 35, 65, 0.45)",
            backdropFilter: "blur(60px)",
            WebkitBackdropFilter: "blur(60px)",
            boxShadow: "0 45px 120px rgba(28, 24, 48, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
          }}
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-lavender/10 to-transparent pointer-events-none" />

          {/* View Resume Button (Apple Style, Top Right Capsule) */}
          <div className="w-full flex justify-end mb-6 relative z-10">
            <motion.a 
              href="/resume.pdf"
              target="_blank"
              className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#2B2345] bg-[#CFAEFF] hover:bg-[#E5D5FF] px-5 py-2.5 rounded-full border border-white/30 transition-all shadow-sm flex items-center gap-1.5"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(216, 200, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume <SparkleIcon className="w-3 h-3 text-[#2B2345] animate-pulse" />
            </motion.a>
          </div>

          <h3 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-8 flex items-center gap-2 relative z-10 select-none">
            Skills <SparkleIcon className="w-4 h-4 text-[#DCC8FF]" />
          </h3>

          {/* Progress Bars (Tracks at rgba(255,255,255,0.08), progress fill #D7C4FF, rounded progress bars) */}
          <div className="flex flex-col gap-[20px] flex-1 overflow-y-auto pr-1 custom-scrollbar relative z-10">
            {topSkills.map((skill, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col gap-2 cursor-pointer group"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex justify-between items-center text-white/80 font-sans text-xs select-none">
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-white/10 flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:rotate-45">
                       <span className="w-1.5 h-1.5 rounded-sm bg-[#DCC8FF]" />
                    </span>
                    {skill.name}
                  </span>
                  <span className="font-bold text-white group-hover:text-[#DCC8FF] transition-colors">{skill.percent}%</span>
                </div>
                
                {/* Progress bar container (rounded ends) */}
                <div 
                  className="w-full h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                >
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ 
                      backgroundColor: "#DCC8FF",
                      boxShadow: "0 0 10px rgba(220, 200, 255, 0.4)"
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Skills Button */}
          <div className="mt-8 w-full flex justify-center pb-2 relative z-10">
            <motion.button 
              className="w-full py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl text-white font-sans font-bold text-[10px] uppercase tracking-widest transition-all"
              whileHover={{ 
                scale: 1.03,
                borderColor: "rgba(255, 255, 255, 0.4)",
                boxShadow: "0 0 20px rgba(216, 200, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              View All Skills
            </motion.button>
          </div>

        </div>
      </TiltCard>
    </motion.div>
  );
};
