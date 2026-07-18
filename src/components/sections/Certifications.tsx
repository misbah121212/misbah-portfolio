"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";

const certifications = [
  {
    issuer: "Google / Coursera",
    title: "AI & Generative AI",
    bullets: [
      "Engineer AI Agents with ADK",
      "Google AI Essentials & Prompting Essentials",
      "Introduction to Generative AI & AI Tools",
    ]
  },
  {
    issuer: "NVIDIA",
    title: "Edge AI & Embedded Systems",
    bullets: [
      "Getting Started with AI on Jetson Nano",
      "AI model deployment on NVIDIA Jetson Nano",
    ]
  },
  {
    issuer: "Forage Job Simulations",
    title: "Software Engineering & Data Science",
    bullets: [
      "J.P. Morgan Software Engineering",
      "BCG GenAI & Tata GenAI Powered Data Analytics",
      "Commonwealth Bank Data Science",
    ]
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Introduction to Cybersecurity",
    bullets: [
      "Cyber threats & network security",
      "Data protection & security best practices",
    ]
  }
];

export const Certifications = () => {
  return (
    <SectionWrapper id="certifications" className="py-8 md:py-12 relative">
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        
        {/* Left Side: Title */}
        <div className="w-full lg:w-1/3 flex flex-col pt-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-5xl text-[#613B22] drop-shadow-md" style={{ fontFamily: 'var(--font-berkshire), serif', letterSpacing: '0.02em' }}>Certifications</h2>
            <SparkleIcon className="w-5 h-5 text-peach" />
          </div>
          <p className="text-navy/60 font-sans mb-12 max-w-sm">
            Continuous learning and professional development across AI, Software Engineering, and Cybersecurity.
          </p>

          <div className="hidden lg:flex flex-col gap-6 mt-4">
            <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lavender rounded-full blur-3xl opacity-60 -mr-12 -mt-12" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-peach/20 rounded-full blur-2xl opacity-60 -ml-10 -mb-10" />
              
              <h4 className="font-serif text-2xl text-navy mb-6 relative z-10">Domains</h4>
              <ul className="space-y-4 font-sans text-navy/80 relative z-10">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-peach shadow-[0_0_8px_rgba(240,179,166,0.6)]" /> 
                  <span className="tracking-wide">Artificial Intelligence</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-lavender-dark shadow-[0_0_8px_rgba(194,173,217,0.6)]" /> 
                  <span className="tracking-wide">Software Engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-navy/40 shadow-[0_0_8px_rgba(42,37,68,0.2)]" /> 
                  <span className="tracking-wide">Cybersecurity & Networks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Timeline */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-sm border border-navy/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-peach transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              
              <div className="flex flex-col mb-4">
                <h3 className="text-2xl font-serif text-navy mb-1">{cert.title}</h3>
                <p className="text-navy/60 font-sans font-bold tracking-widest uppercase text-xs">{cert.issuer}</p>
              </div>
              
              <ul className="space-y-3">
                {cert.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4 text-navy/70 font-sans leading-relaxed text-sm">
                    <span className="text-peach mt-[2px]">✦</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
