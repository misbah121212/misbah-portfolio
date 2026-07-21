import Image from "next/image";
import { SparkleIcon } from "@/components/ui/SparkleIcon";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col p-8 md:p-12 relative overflow-hidden">
      
      {/* 3D Decorative Elements (Floating) */}
      <div className="absolute top-20 right-20 w-40 h-40 animate-pulse drop-shadow-2xl opacity-90 z-0">
        <Image src="/3d-star.png" alt="Star" fill className="object-contain" />
      </div>
      <div className="absolute bottom-40 right-40 w-48 h-48 animate-bounce-slow drop-shadow-2xl opacity-90 z-0">
        <Image src="/3d-flower.png" alt="Flower" fill className="object-contain" />
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-2xl relative z-10">
        {/* Tag */}
        <div className="flex items-center gap-2 mb-6">
          <SparkleIcon className="w-4 h-4 text-lavender" />
          <span className="font-sans text-xs uppercase tracking-widest text-white/70 font-semibold">
            Software Engineering
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
          Hi, I'm <span className="text-lavender font-great-vibes" style={{ fontFamily: 'var(--font-great-vibes)' }}>Misbah.</span>
        </h1>

        {/* Bio */}
        <p className="text-white/80 font-sans text-base md:text-lg mb-10 max-w-lg leading-relaxed">
          Final year B.E. student specializing in Artificial Intelligence and Machine Learning. I build intelligent, scalable, and impactful solutions that solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-lavender hover:bg-lavender/90 text-navy px-8 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase transition-colors shadow-[0_0_20px_rgba(194,173,217,0.5)] flex items-center gap-2">
            Explore My Work <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-sans font-bold text-xs tracking-widest uppercase transition-colors">
            About Me
          </button>
        </div>
      </div>

      {/* Featured Projects Bottom Row */}
      <div className="w-full mt-auto relative z-10 pt-12">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-xl w-full flex flex-col">
          <div className="flex items-center gap-2 mb-6 px-2">
            <h3 className="font-sans text-xs uppercase tracking-widest text-white font-bold">Featured Projects</h3>
            <SparkleIcon className="w-3 h-3 text-lavender" />
          </div>

          {/* Projects Row */}
          <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-2">
            <ProjectCard 
              image="/project-1.jpg" // We might need a placeholder or actual image
              title="HydroHack"
              desc="AI-powered platform for oceanographic & biodiversity research."
              tags={["AI", "Gemini", "Python"]}
            />
            <ProjectCard 
              image="/project-2.jpg"
              title="Credence AI"
              desc="AI Loan Risk Intelligence Platform for Predicting Customer Defaults."
              tags={["AI", "ML", "FastAPI"]}
            />
            <ProjectCard 
              image="/project-3.jpg"
              title="VISO SONIC AI"
              desc="Assistive tool for visually impaired using AI, OCR, TTS & Navigation."
              tags={["AI", "IoT", "OCR"]}
            />
            <ProjectCard 
              image="/project-4.jpg"
              title="MedOrchestra"
              desc="Multi-agent clinical decision support system using LangGraph."
              tags={["AI", "Healthcare"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ image, title, desc, tags }: { image: string, title: string, desc: string, tags: string[] }) => (
  <div className="flex gap-4 items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 min-w-[320px] transition-colors cursor-pointer">
    <div className="w-20 h-20 rounded-xl bg-navy overflow-hidden relative flex-shrink-0">
       {/* Use a simple gradient block if image is not available */}
       <div className="absolute inset-0 bg-gradient-to-br from-lavender/40 to-navy/80" />
    </div>
    <div className="flex flex-col">
      <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
      <p className="text-white/60 text-[10px] leading-snug mb-2 line-clamp-2">{desc}</p>
      <div className="flex gap-1.5 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="text-[9px] uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full text-white/80">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);
