"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, SparkleIcon, Globe, FolderGit } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SectionHeading } from "../ui/SectionHeading";
import { TiltCard } from "../spatial/TiltCard";

interface Project {
  title: string;
  subtitle: string;
  desc: string;
  stack: string;
  year: string;
  longDesc: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "CodeBeast",
    subtitle: "AI Hackathon Evaluation Platform",
    desc: "Architected a 7-agent system using Claude API to autonomously evaluate GitHub repositories for code quality and social impact.",
    stack: "Node.js, React, TailwindCSS, SQLite, Claude API, Python",
    year: "2026",
    longDesc: "CodeBeast is a cutting-edge platform designed to streamline hackathon submissions. By employing a multi-agent AI pipeline, it automatically checks out submitted GitHub repositories, compiles the code, performs static analysis, runs unit tests, and scores the repository on quality, security, and potential social impact. Its standout feature is 'anti-vibe-coding detection', checking if the code was actually structured or merely prompt-generated.",
    features: [
      "Multi-Agent coordination using stateful message pipelines.",
      "Real-time logging of repository inspection and code execution.",
      "Intelligent scoring algorithms backed by LLM evaluations.",
      "Custom anti-cheat triggers analyzing git history and commits."
    ]
  },
  {
    title: "CREDENCE AI",
    subtitle: "AI Banking Risk Management Platform",
    desc: "Engineered an AI-powered banking decision support system to predict credit risk and detect fraud. Integrated SHAP XAI engine.",
    stack: "React.js, Node.js, Python, XGBoost, SHAP, Supabase, Gemini API",
    year: "2026",
    longDesc: "CREDENCE AI is a banking intelligence suite helping loan officers determine risk and creditworthiness. It combines classic gradient boosting models (XGBoost) with Explainable AI interfaces (SHAP) so bank staff can inspect exactly which factors (e.g. debt-to-income ratio, history) drove the risk assessment. The copilot side-panel lets users query financial data using natural language.",
    features: [
      "Credit risk scoring with 94.2% accuracy.",
      "SHAP feature importance charts rendered dynamically in-browser.",
      "Natural language financial analysis using Google Gemini models.",
      "Fraud pattern detection analyzing historical transaction logs."
    ]
  },
  {
    title: "LexiRAG",
    subtitle: "Legal Contract Analysis Pipeline",
    desc: "Built a Retrieval-Augmented Generation (RAG) pipeline for unstructured legal contracts. Trained custom embeddings for semantic search.",
    stack: "Python, PyTorch, LangChain, Hugging Face, Pinecone, FastAPI",
    year: "2026",
    longDesc: "LexiRAG is a secure, private document search pipeline tailored for complex legal documents. It breaks down legal briefs, NDAs, and agreements, creates high-density embeddings using custom fine-tuned PyTorch transformers, and indexes them into Pinecone. Lawyers can ask complex questions and get instantly sourced clauses, saving hundreds of hours of manual review.",
    features: [
      "Hierarchical text splitting designed for legal clauses.",
      "Fine-tuned embedding models maximizing retrieval accuracy by 25%.",
      "Interactive source links pointing to original PDF lines.",
      "FastAPI endpoint serving requests with sub-150ms latencies."
    ]
  },
  {
    title: "AeroGuard Vision",
    subtitle: "Aerial Object Detection System",
    desc: "Trained a custom YOLOv8 model on aerial datasets to identify poaching activity. Deployed optimized inference pipelines on edge hardware.",
    stack: "Python, PyTorch, YOLOv8, OpenCV, TensorRT, Docker",
    year: "2025",
    longDesc: "AeroGuard Vision is a conservation tech suite designed to spot poaching activity in game reserves using drone thermal feeds. By optimizing the YOLOv8 model and compiling with NVIDIA TensorRT, we achieved real-time 30 FPS inference on NVIDIA Jetson edge nodes, transmitting alerts over low-bandwidth cellular lines.",
    features: [
      "Trained on a specialized dataset of 50,000+ aerial thermal images.",
      "Optimized model size and weights for hardware-constrained systems.",
      "Integrated real-time POI alerts highlighting suspicious night activities.",
      "Zero-downtime offline caching mechanism during transmission drops."
    ]
  },
  {
    title: "Viso Sonic AI",
    subtitle: "Assistive Vision System",
    desc: "Built real-time object detection and scene-to-speech pipelines using YOLO and OpenCV. Extended into a registered design patent.",
    stack: "Python, YOLO, OpenCV, OCR, Text-to-Speech",
    year: "2025",
    longDesc: "Viso Sonic AI translates visual environments into auditory spatial descriptions. Primarily designed as smart glasses for the blind, it detects obstacles, reads text signs using OCR, and converts them to natural-sounding spatialized audio feedback. This engineering research led to a successfully registered design patent with the Government of India.",
    features: [
      "Smart spectacle design registered under Indian Patent law.",
      "Fast, low-compute object detection running locally on Raspberry Pi.",
      "Intuitive auditory feedback with spatial stereophonic mapping.",
      "Adaptive text-to-speech module processing signs, labels, and books."
    ]
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects" className="py-12 md:py-16 relative">
      
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 -mt-12 px-6">
        <SectionHeading 
          title="Selected Work" 
          subtitle="Featured Projects" 
          theme="navy"
          className="mb-0"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`${
              index === 0 || index === 3 ? "md:col-span-2 lg:col-span-1" : ""
            } ${index === 1 ? "md:col-span-2 lg:col-span-2" : ""}`}
            onClick={() => setSelectedProject(project)}
          >
            <TiltCard className="h-full w-full">
              <div className="group rounded-[2.5rem] bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/25 p-8 md:p-10 flex flex-col justify-between min-h-[380px] transition-colors duration-500 cursor-pointer relative overflow-hidden shadow-lg hover:shadow-2xl">
                
                {/* Glossy Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-sans tracking-widest uppercase font-bold text-white/50">
                      {project.year}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 text-white flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 group-hover:border-white/30 group-hover:bg-white/5">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-lavender transition-colors" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-xs tracking-widest uppercase font-bold mb-4 text-lavender-dark">
                    {project.subtitle}
                  </p>
                  
                  <p className="font-sans leading-relaxed text-xs text-white/70">
                    {project.desc}
                  </p>
                </div>
                
                {/* Tech stack block */}
                <div className="mt-8 pt-6 border-t border-white/10 font-sans text-[10px] tracking-wider uppercase font-bold text-white/50 group-hover:text-white/80 transition-colors">
                  {project.stack}
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>

      {/* Floating Spatial Modal (Vision Pro App Style) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div 
              className="absolute inset-0 bg-navy/60 backdrop-blur-md pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Floating Glass Modal Container */}
            <motion.div 
              className="w-full max-w-2xl bg-navy/85 backdrop-blur-3xl border border-white/20 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] pointer-events-auto max-h-[90vh] overflow-y-auto custom-scrollbar"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glossy sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-[3rem]" />
              
              {/* Close Button */}
              <motion.button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/15 transition-colors z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Title & Metadata */}
              <div className="relative z-10 mb-8 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <SparkleIcon className="w-4 h-4 text-lavender animate-pulse" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-lavender-dark">{selectedProject.subtitle}</span>
                </div>
                <h2 className="text-4xl font-serif text-white leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {selectedProject.title}
                </h2>
                <span className="inline-block mt-3 text-[10px] font-sans font-bold tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/5 text-white/70">
                  {selectedProject.year} PROJECT
                </span>
              </div>

              {/* Body Content */}
              <div className="relative z-10 space-y-6 text-white/80 font-sans text-xs md:text-sm leading-relaxed mb-8">
                <p className="text-justify">{selectedProject.longDesc}</p>
                
                <div>
                  <h4 className="text-white font-bold tracking-wide uppercase text-xs mb-3 flex items-center gap-2">
                    Key Implementations <SparkleIcon className="w-3 h-3 text-peach" />
                  </h4>
                  <ul className="space-y-2 list-disc pl-4 text-white/75">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-bold tracking-wide uppercase text-xs mb-2">Technologies Used</h4>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-lavender font-semibold">
                    {selectedProject.stack}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="relative z-10 flex gap-4 pt-6 border-t border-white/15">
                <motion.a
                  href="https://github.com/misbah121212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lavender hover:bg-lavender/90 text-navy px-6 py-3 rounded-xl font-sans font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(194,173,217,0.4)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FolderGit className="w-4 h-4" /> Github Repository
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-xl font-sans font-bold text-[10px] tracking-widest uppercase flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" /> Live Demo
                </motion.a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </SectionWrapper>
  );
};
