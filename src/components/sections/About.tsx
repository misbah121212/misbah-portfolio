"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";
import { TiltCard } from "../spatial/TiltCard";

export const About = () => {
  const containerRef = useRef(null);

  // Animation constants for line-by-line reveal
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative w-full overflow-hidden py-12">
      <div ref={containerRef} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-16 px-6">
        
        {/* Professional Summary Section (Floating Glass Card) */}
        <div className="relative w-full">
          {/* Floating 3D Elements */}
          <motion.img 
            src="/3d-star.png" 
            alt="3D Star" 
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 -left-12 md:-top-4 md:-left-20 w-28 h-28 md:w-36 md:h-36 z-30 drop-shadow-2xl object-contain pointer-events-none" 
          />
          <motion.img 
            src="/3d-flower.png" 
            alt="3D Flower" 
            animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-4 -right-12 md:bottom-8 md:-right-20 w-24 h-24 md:w-32 md:h-32 z-30 drop-shadow-2xl object-contain pointer-events-none" 
          />

          <TiltCard className="w-full">
            <div className="w-full bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-white/10 group">
              {/* Glass Sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[3rem]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
              
              <SparkleIcon className="absolute top-10 left-10 w-8 h-8 text-lavender/40 animate-pulse" />
              <SparkleIcon className="absolute bottom-10 right-10 w-12 h-12 text-peach/40 animate-bounce-slow" />

              <div className="relative z-10 flex flex-col items-center">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl text-white mb-8 text-center drop-shadow-sm font-serif"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Professional Summary
                </motion.h2>

                {/* Line-by-line fade in paragraph */}
                <motion.div 
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-white/80 text-sm md:text-base font-sans leading-relaxed text-justify max-w-3xl mx-auto space-y-4"
                >
                  <motion.p variants={lineVariants}>
                    As a final-year B.E. student specializing in Artificial Intelligence and Machine Learning, I bring hands-on experience in architecting and deploying production-grade, multi-agent AI systems on cloud infrastructure. I am highly proficient in Python, full-stack web development (React, Node.js, FastAPI), and cloud deployment platforms (GCP, Docker, Firebase).
                  </motion.p>
                  <motion.p variants={lineVariants}>
                    With a strong commitment to secure coding practices, agile workflows, and rigorous unit testing, I have successfully delivered high-quality solutions that have won multiple national hackathons and led to a registered patent. I am actively seeking a Software Engineering role where I can leverage my expertise to build scalable, high-impact application software.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Education Section Wrapper */}
        <div className="relative w-full">
          {/* Floating 3D Notebook */}
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -left-6 md:-left-20 w-36 h-36 md:w-48 md:h-48 z-20 pointer-events-none"
          >
            <img src="/3d-notebook.png" alt="3D Notebook" className="w-full h-full object-contain drop-shadow-2xl" />
          </motion.div>

          <TiltCard className="w-full">
            <div className="w-full bg-white/5 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-white/10 group">
              {/* Glass Sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[3rem]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

              <div className="relative z-10 flex flex-col">
                <h2 
                  className="text-4xl md:text-5xl font-serif text-white mb-10 text-center drop-shadow-sm"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  Education
                </h2>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-8 mb-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-2 tracking-tight">HKBK College of Engineering (VTU)</h3>
                    <p className="text-white/70 font-sans text-sm md:text-base">B.E. in Artificial Intelligence & Machine Learning</p>
                  </div>
                  <div className="text-left md:text-right mt-6 md:mt-0 bg-white/5 px-6 py-4 rounded-3xl border border-white/10 backdrop-blur-md">
                    <p className="text-lavender font-sans font-bold uppercase tracking-widest text-[10px] mb-1">2023 - 2027</p>
                    <p className="text-peach font-sans font-bold text-lg">CGPA: 8.0 / 10</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white/50 font-sans font-bold uppercase tracking-widest text-[10px] mb-6">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {["Machine Learning", "Natural Language Processing", "Cloud Computing & Security", "Data Structures & Algorithms", "Operating Systems", "Computer Networks (TCP/IP)"].map((course, idx) => (
                      <motion.span 
                        key={idx} 
                        whileHover={{ 
                          scale: 1.05, 
                          y: -3, 
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          borderColor: "rgba(255, 255, 255, 0.3)" 
                        }}
                        className="bg-white/5 text-white/90 px-5 py-2.5 rounded-full font-sans text-xs border border-white/10 cursor-default transition-all duration-300 shadow-sm"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
};
