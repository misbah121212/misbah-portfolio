"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";
import { Award, Calendar, X, FileText, ChevronRight } from "lucide-react";
import { TiltCard } from "../spatial/TiltCard";

interface Certification {
  id: number;
  issuer: string;
  title: string;
  bullets: string[];
  date: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    issuer: "Google / Coursera",
    title: "AI & Generative AI",
    date: "2025",
    bullets: [
      "Engineer AI Agents with ADK",
      "Google AI Essentials & Prompting Essentials",
      "Introduction to Generative AI & AI Tools",
    ]
  },
  {
    id: 2,
    issuer: "NVIDIA",
    title: "Edge AI & Embedded Systems",
    date: "2025",
    bullets: [
      "Getting Started with AI on Jetson Nano",
      "AI model deployment on NVIDIA Jetson Nano",
    ]
  },
  {
    id: 3,
    issuer: "Forage Job Simulations",
    title: "Software Engineering & Data Science",
    date: "2025",
    bullets: [
      "J.P. Morgan Software Engineering Simulation",
      "BCG GenAI & Tata GenAI Powered Data Analytics",
      "Commonwealth Bank Data Science Simulation",
    ]
  },
  {
    id: 4,
    issuer: "Cisco Networking Academy",
    title: "Introduction to Cybersecurity",
    date: "2024",
    bullets: [
      "Cyber threats & network security models",
      "Data protection & security best practices",
    ]
  }
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <SectionWrapper id="certifications" className="py-12 md:py-16 relative">
      <div className="flex flex-col lg:flex-row gap-12 w-full px-6">
        
        {/* Left Side: Title */}
        <div className="w-full lg:w-1/3 flex flex-col pt-8">
          <div className="flex items-center gap-4 mb-4 -mt-12">
            <h2 
              className="text-4xl md:text-6xl text-white drop-shadow-sm font-serif"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Certifications
            </h2>
            <SparkleIcon className="w-5 h-5 text-peach animate-pulse" />
          </div>
          <p className="text-white/60 font-sans mb-12 max-w-sm">
            Continuous learning and professional development across AI, Software Engineering, and Cybersecurity.
          </p>

          {/* Glass Domains Capsule */}
          <div className="hidden lg:flex flex-col gap-6 mt-4">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lavender/10 rounded-full blur-3xl opacity-60 -mr-12 -mt-12" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-peach/10 rounded-full blur-2xl opacity-60 -ml-10 -mb-10" />
              
              <h4 className="font-serif text-2xl text-white mb-6 relative z-10">Domains</h4>
              <ul className="space-y-4 font-sans text-white/80 relative z-10 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-peach shadow-[0_0_8px_rgba(240,179,166,0.6)]" /> 
                  <span className="tracking-wide">Artificial Intelligence</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-lavender shadow-[0_0_8px_rgba(194,173,217,0.6)]" /> 
                  <span className="tracking-wide">Software Engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.2)]" /> 
                  <span className="tracking-wide">Cybersecurity & Networks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Document Capsules */}
        <div className="w-full lg:w-2/3 flex flex-col gap-5">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
            >
              <TiltCard className="w-full">
                <div className="bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md border border-white/10 hover:border-white/25 flex items-center justify-between transition-colors duration-500 cursor-pointer relative overflow-hidden group">
                  {/* Sheen reflection */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lavender shadow-inner transition-transform group-hover:scale-110">
                      <Award className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-white font-bold leading-tight group-hover:text-lavender transition-colors">{cert.title}</h3>
                      <p className="text-[10px] font-sans font-bold tracking-widest uppercase text-white/50">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-sans text-white/40 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {cert.date}
                    </span>
                    <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Document Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              className="absolute inset-0 bg-navy/60 backdrop-blur-md pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            />

            {/* Floating Glass frame */}
            <motion.div 
              className="w-full max-w-lg bg-navy/90 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] pointer-events-auto"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Close Button */}
              <motion.button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/15 transition-colors z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-4 h-4" />
              </motion.button>

              {/* 3D Paper document lifting out of glass */}
              <motion.div 
                className="bg-white text-navy p-8 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.2)] relative overflow-hidden flex flex-col items-center justify-center border-t-8 border-lavender min-h-[300px]"
                initial={{ transform: "translateZ(10px) rotateX(15deg)", opacity: 0 }}
                animate={{ transform: "translateZ(50px) rotateX(0deg)", opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              >
                {/* Certificate Border Watermark */}
                <div className="absolute inset-4 border-2 border-lavender/40 pointer-events-none" />
                <SparkleIcon className="absolute top-8 left-8 w-6 h-6 text-lavender/30" />
                <SparkleIcon className="absolute bottom-8 right-8 w-6 h-6 text-lavender/30" />

                <FileText className="w-12 h-12 text-lavender mb-4 opacity-70" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-navy/40 mb-1">CERTIFICATE OF COMPLETION</span>
                <h3 className="text-xl md:text-2xl font-serif text-navy mb-1 text-center" style={{ fontFamily: 'var(--font-playfair), serif' }}>{selectedCert.title}</h3>
                <p className="text-xs font-sans uppercase font-bold tracking-widest text-peach mb-6">{selectedCert.issuer}</p>

                <div className="w-full max-w-sm border-t border-navy/5 pt-4 text-left">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wide text-navy/60 mb-2 block">Acquired Knowledge</span>
                  <ul className="space-y-1.5 text-navy/85 font-sans text-xs pl-2">
                    {selectedCert.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-peach">✦</span> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <div className="mt-6 flex justify-end">
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-white/40">Verified Completed in {selectedCert.date}</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};
