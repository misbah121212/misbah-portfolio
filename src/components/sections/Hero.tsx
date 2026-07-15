"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";
import { MapPin, Send, Mail, Code2, GraduationCap, Sparkles } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <SectionWrapper className="pt-8 md:pt-12 pb-8 flex flex-col" id="hero">
      <div className="flex flex-col md:flex-row justify-between w-full relative z-10 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Typography */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <SparkleIcon className="w-5 h-5 text-navy" />
            <span className="text-xs font-sans tracking-[0.2em] uppercase font-bold text-navy/60 pt-1">Software Engineering</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-[100px] font-serif text-navy leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Umme Misbah <br />
            <span className="text-peach italic">Sikandar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-lg md:text-xl font-sans text-navy/80 tracking-[0.1em] font-semibold uppercase max-w-lg leading-relaxed mb-4">
              AI/ML Engineer & <br/> Full-Stack Developer
            </h2>
            <p className="text-navy/60 text-base md:text-lg max-w-md leading-relaxed font-sans mb-8">
              Final year computer science student specializing in artificial intelligence and scalable web architectures. Passionate about building intelligent, data-driven solutions that solve real-world problems.
            </p>
            
            {/* Professional Small Blocks */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/40 border border-white/60 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                 <GraduationCap className="w-4 h-4 text-peach" />
                 <span className="text-[10px] font-sans tracking-widest uppercase font-bold text-navy/80">B.E. AI/ML '27</span>
              </div>
              <div className="bg-white/40 border border-white/60 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                 <Code2 className="w-4 h-4 text-peach" />
                 <span className="text-[10px] font-sans tracking-widest uppercase font-bold text-navy/80">AI & Web Dev</span>
              </div>
              <div className="bg-white/40 border border-white/60 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                 <Sparkles className="w-4 h-4 text-peach" />
                 <span className="text-[10px] font-sans tracking-widest uppercase font-bold text-navy/80">Available</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image & Stats */}
        <div className="w-full lg:w-[45%] relative flex justify-end items-start h-[500px] lg:h-[600px] mt-8 lg:-mt-4">
          {/* Lavender Arched Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full max-w-[380px] h-full bg-gradient-to-t from-lavender to-cream rounded-t-full rounded-b-[2rem] relative overflow-hidden flex flex-col justify-end items-center pb-12 shadow-sm border border-white/60 mx-auto lg:mr-0"
          >
             {/* User Image */}
             <Image 
               src="/profile-v2.jpg"
               alt="Misbah - Software Engineer"
               fill
               className="object-cover object-center"
               priority
             />
             
             {/* Decorative Sparkles */}
             <SparkleIcon className="absolute top-32 right-12 w-8 h-8 text-white/80 z-10 drop-shadow-md" />
             <SparkleIcon className="absolute top-1/2 left-12 w-6 h-6 text-white/60 z-10 drop-shadow-md" />
          </motion.div>

          {/* Floating Stats Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-1/2 -left-4 lg:-left-16 transform -translate-y-1/2 bg-navy text-white rounded-[2rem] p-8 shadow-2xl w-[220px] flex flex-col gap-6"
          >
            <div className="flex justify-between items-center mb-2">
              <SparkleIcon className="w-4 h-4 text-peach" />
            </div>
            
            <div>
              <h4 className="font-sans font-bold text-lg text-white">8.00</h4>
              <p className="text-xs text-white/60 tracking-widest uppercase font-sans mt-1">Current CGPA</p>
            </div>
            
            <div>
              <h4 className="font-sans font-bold text-lg text-white">4+</h4>
              <p className="text-xs text-white/60 tracking-widest uppercase font-sans mt-1">Hackathons Won</p>
            </div>
            
            <div>
              <h4 className="font-sans font-bold text-lg text-white">1</h4>
              <p className="text-xs text-white/60 tracking-widest uppercase font-sans mt-1">Registered Patent</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full flex flex-col md:flex-row justify-between items-center border-t border-navy/10 pt-8 mt-12 md:mt-16 pb-8"
      >
        <div className="flex items-center gap-3 text-navy/70 text-sm font-sans tracking-widest uppercase mb-4 md:mb-0">
          <MapPin className="w-4 h-4 text-peach" /> Based in Bengaluru, India
        </div>
        <div className="flex items-center gap-3 text-navy/70 text-sm font-sans tracking-widest uppercase mb-4 md:mb-0">
          <Send className="w-4 h-4 text-peach" /> Available for Freelance
        </div>
        <div className="flex items-center gap-3 text-navy/70 text-sm font-sans tracking-widest uppercase">
          <Mail className="w-4 h-4 text-peach" /> misbasikandar7@gmail.com
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
