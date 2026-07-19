"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";

const projects = [
  {
    title: "CodeBeast",
    subtitle: "AI Hackathon Evaluation Platform",
    desc: "Architected a 7-agent system using Claude API to autonomously evaluate GitHub repositories for code quality and social impact. Features anti-vibe-coding detection.",
    stack: "Node.js, React, TailwindCSS, SQLite, Claude API, Python",
    color: "bg-lavender",
    year: "2026"
  },
  {
    title: "CREDENCE AI",
    subtitle: "AI Banking Risk Management Platform",
    desc: "Engineered an AI-powered banking decision support system to predict credit risk and detect fraud. Integrated an Explainable AI (XAI) engine using SHAP and an interactive AI Copilot.",
    stack: "React.js, Node.js, Python, XGBoost, SHAP, Supabase, Gemini API",
    color: "bg-navy text-white",
    year: "2026",
    isDark: true
  },
  {
    title: "LexiRAG",
    subtitle: "Legal Contract Analysis Pipeline",
    desc: "Built a Retrieval-Augmented Generation (RAG) pipeline for unstructured legal contracts. Trained custom embedding models using PyTorch for highly accurate semantic search over 100,000+ documents.",
    stack: "Python, PyTorch, LangChain, Hugging Face, Pinecone, FastAPI",
    color: "bg-peach",
    year: "2026"
  },
  {
    title: "AeroGuard Vision",
    subtitle: "Aerial Object Detection System",
    desc: "Trained a custom YOLOv8 object detection model on a curated dataset of 50,000+ aerial images to identify wildlife poaching activity. Deployed the optimized inference pipeline on edge devices.",
    stack: "Python, PyTorch, YOLOv8, OpenCV, TensorRT, Docker",
    color: "bg-cream",
    year: "2025"
  },
  {
    title: "Viso Sonic AI",
    subtitle: "Assistive Vision System",
    desc: "Built real-time object detection and scene-to-speech pipeline using YOLO and OpenCV for visually impaired users. Extended into a registered design patent.",
    stack: "Python, YOLO, OpenCV, OCR, Text-to-Speech",
    color: "bg-lavender-dark",
    year: "2025"
  }
];

export const Projects = () => {
  return (
    <SectionWrapper id="projects" className="py-8 md:py-12 relative">
      
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 -mt-12">
        <SectionHeading 
          title="Selected Work" 
          subtitle="Featured Projects" 
          theme="navy"
          className="mb-0"
        />
        <button className="hidden md:flex items-center gap-2 text-navy font-sans tracking-widest text-xs font-bold uppercase hover:opacity-70 transition-opacity">
          View All Projects <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group rounded-[2rem] p-8 md:p-10 flex flex-col justify-between min-h-[400px] transition-transform hover:-translate-y-2 cursor-pointer ${project.color} ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''} ${index === 1 ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className={`text-xs font-sans tracking-widest uppercase font-bold ${project.isDark ? 'text-white/60' : 'text-navy/50'}`}>
                  {project.year}
                </span>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300 ${project.isDark ? 'border-white/20 text-white' : 'border-navy/10 text-navy'}`}>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <h3 className={`text-3xl font-serif mb-2 ${project.isDark ? 'text-white' : 'text-navy'}`}>
                {project.title}
              </h3>
              <p className={`font-sans text-sm tracking-widest uppercase font-bold mb-4 ${project.isDark ? 'text-white/80' : 'text-navy/80'}`}>
                {project.subtitle}
              </p>
              <p className={`font-sans leading-relaxed text-sm ${project.isDark ? 'text-white/70' : 'text-navy/70'}`}>
                {project.desc}
              </p>
            </div>
            
            <div className={`mt-8 pt-6 border-t font-sans text-xs tracking-wider uppercase font-bold ${project.isDark ? 'border-white/20 text-white/60' : 'border-navy/10 text-navy/60'}`}>
              {project.stack}
            </div>
          </motion.div>
        ))}
      </div>

      <button className="md:hidden mt-12 w-full flex justify-center items-center gap-2 text-navy font-sans tracking-widest text-xs font-bold uppercase hover:opacity-70 transition-opacity">
        View All Projects <ArrowUpRight className="w-4 h-4" />
      </button>

    </SectionWrapper>
  );
};
