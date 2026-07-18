"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <SectionWrapper id="about" className="pt-2 pb-8 md:pt-4 md:pb-24 relative overflow-hidden">
      
      {/* 3D / Liquid Organic Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        {/* Giant typography */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-0 w-full flex flex-col items-center justify-center opacity-30 mix-blend-overlay"
        >
          <h1 className="text-[15vw] font-serif font-black text-lavender-dark leading-none tracking-tighter whitespace-nowrap drop-shadow-2xl">
            MISBAH
          </h1>
          <h1 className="text-[18vw] font-serif font-black text-peach leading-none tracking-tighter whitespace-nowrap -mt-[8vw] drop-shadow-2xl">
            ENGINEER
          </h1>
        </motion.div>

        {/* Liquid 3D Blob 1 */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            rotate: [0, 45, 0],
            scale: [1, 1.2, 1],
            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-72 h-72 bg-gradient-to-tr from-peach via-white to-lavender blur-md mix-blend-multiply shadow-[inset_20px_20px_40px_rgba(255,255,255,0.9),0_20px_40px_rgba(0,0,0,0.1)]"
        />

        {/* Liquid 3D Blob 2 */}
        <motion.div
          animate={{
            y: [0, 60, 0],
            rotate: [0, -45, 0],
            scale: [1, 1.3, 1],
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[2%] w-96 h-96 bg-gradient-to-bl from-lavender-dark via-white to-peach blur-lg mix-blend-multiply shadow-[inset_-20px_-20px_50px_rgba(255,255,255,0.9),0_20px_40px_rgba(0,0,0,0.1)]"
        />
      </div>

      <div ref={containerRef} className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Professional Summary Section (Floating Glass Card) */}
        <motion.div 
          style={{ scale }}
          className="w-full bg-white/40 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-white/80 group"
        >
          {/* Glass reflections */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-white/60 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-white rounded-full blur-3xl opacity-60 group-hover:scale-150 transition-transform duration-1000" />
          
          <SparkleIcon className="absolute top-10 left-10 w-8 h-8 text-lavender-dark animate-pulse" />
          <SparkleIcon className="absolute bottom-10 right-10 w-12 h-12 text-peach animate-bounce" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-navy mb-8 text-center drop-shadow-sm"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Professional Summary
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-navy/80 text-lg md:text-2xl font-sans leading-relaxed text-justify max-w-4xl mx-auto font-medium"
            >
              <p>
                As a final-year B.E. student specializing in Artificial Intelligence and Machine Learning, I bring hands-on experience in architecting and deploying production-grade, multi-agent AI systems on cloud infrastructure. I am highly proficient in Python, full-stack web development (React, Node.js, FastAPI), and cloud deployment platforms (GCP, Docker, Firebase). 
              </p>
              <br />
              <p>
                With a strong commitment to secure coding practices, agile workflows, and rigorous unit testing, I have successfully delivered high-quality solutions that have won multiple national hackathons and led to a registered patent. I am actively seeking a Software Engineering role where I can leverage my expertise to build scalable, high-impact application software.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section Wrapper */}
        <motion.div style={{ y: y2 }} className="relative w-full lg:w-4/5 self-end">
          
          {/* 3D Element: Notebook Planner (Near Education) */}
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -left-6 md:-left-24 w-40 h-40 md:w-64 md:h-64 z-20 pointer-events-none"
          >
            <img src="/3d-notebook.png" alt="3D Notebook" className="w-full h-full object-contain drop-shadow-2xl" />
          </motion.div>

          {/* Education Section (Offset 3D Card) */}
          <div
            className="w-full bg-navy/5 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.5)] border border-white/60 hover:shadow-[30px_30px_80px_rgba(0,0,0,0.1),-30px_-30px_80px_rgba(255,255,255,0.8)] transition-shadow duration-700"
          >
          <div className="relative z-10 flex flex-col">
            <h2 
              className="text-3xl md:text-5xl font-serif text-navy mb-10 text-right drop-shadow-sm"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Education
            </h2>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-navy/10 pb-8 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-sans font-black text-navy mb-2 tracking-tight">HKBK College of Engineering (VTU)</h3>
                <p className="text-navy/80 font-sans text-xl font-medium">B.E. in Artificial Intelligence & Machine Learning</p>
              </div>
              <div className="text-left md:text-right mt-6 md:mt-0 bg-white/60 px-6 py-4 rounded-3xl shadow-sm border border-white">
                <p className="text-navy font-sans font-black uppercase tracking-widest text-sm mb-1">2023 - 2027</p>
                <p className="text-peach font-sans font-black text-xl">CGPA: 8.0 / 10</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-navy font-sans font-bold uppercase tracking-widest text-sm mb-6 opacity-60">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-4 mt-2">
                {["Machine Learning", "Natural Language Processing", "Cloud Computing & Security", "Data Structures & Algorithms", "Operating Systems", "Computer Networks (TCP/IP)"].map((course, idx) => (
                  <motion.span 
                    key={idx} 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/80 text-navy px-6 py-3 rounded-full font-sans text-sm font-bold shadow-[0_8px_16px_rgba(0,0,0,0.03)] border border-lavender hover:bg-lavender transition-colors cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};
