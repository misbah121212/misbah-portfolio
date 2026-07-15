"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Hash, Globe, Phone } from "lucide-react";
import { SparkleIcon } from "../ui/SparkleIcon";

import { SectionWrapper } from "../ui/SectionWrapper";

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="py-12 md:py-16 mb-8 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-navy text-white py-12 px-8 md:px-16 relative overflow-hidden rounded-[3rem] shadow-2xl shadow-navy/60 border border-lavender/30 flex flex-col md:flex-row justify-between items-center gap-12 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(35,31,58,0.7)]"
      >
        {/* Decorative subtle background icon */}
        <SparkleIcon className="absolute -top-8 -right-8 w-48 h-48 text-white/5" />

        {/* Left Side: Call to Action */}
        <div className="w-full lg:w-1/2 flex flex-col z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-lavender mb-4">
            Let's Create <br className="hidden md:block"/>
            <span className="text-peach">Something Beautiful</span>
          </h2>
          <p className="text-white/70 font-sans text-sm max-w-md mb-8">
            Open to new opportunities and exciting collaborations. Let's bring your ideas to life with scalable engineering.
          </p>
          
          <button className="bg-peach hover:bg-peach/90 text-navy px-6 py-3 rounded-xl w-fit font-sans font-bold text-xs tracking-widest uppercase flex items-center gap-3 group transition-colors">
            GET IN TOUCH
            <ArrowRight className="w-4 h-4 text-navy group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 z-10 md:items-end">
          
          <div className="flex items-center gap-4 text-white/80 font-sans tracking-widest uppercase text-xs">
            <MapPin className="w-4 h-4 text-lavender" />
            <span>BENGALURU, INDIA</span>
          </div>
          
          <a href="tel:+919606274094" className="flex items-center gap-4 text-white/80 font-sans tracking-widest uppercase text-xs hover:text-peach transition-colors">
            <Phone className="w-4 h-4 text-peach" />
            <span>+91 9606274094</span>
          </a>
          
          <a href="mailto:misbasikandar7@gmail.com" className="flex items-center gap-4 text-white/80 font-sans tracking-widest uppercase text-xs hover:text-peach transition-colors">
            <Mail className="w-4 h-4 text-lavender" />
            <span className="lowercase">misbasikandar7@gmail.com</span>
          </a>
          
          <a href="https://github.com/misbah121212" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 font-sans tracking-widest uppercase text-xs hover:text-peach transition-colors">
            <Globe className="w-4 h-4 text-peach" />
            <span>GITHUB</span>
          </a>
          
          <a href="https://www.linkedin.com/in/umme-misbah-sikandar-255743381/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 font-sans tracking-widest uppercase text-xs hover:text-peach transition-colors">
            <Hash className="w-4 h-4 text-lavender" />
            <span>LINKEDIN</span>
          </a>
          
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
