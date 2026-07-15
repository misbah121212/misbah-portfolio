"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";

export const About = () => {
  return (
    <SectionWrapper id="about" className="pt-2 pb-8 md:pt-4 md:pb-12 relative">
      
      {/* Professional Summary Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-white/70 backdrop-blur-xl rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-xl shadow-navy/5 border border-white/50 mb-12"
      >
        <SparkleIcon className="absolute top-12 left-12 w-6 h-6 text-lavender-dark" />
        <SparkleIcon className="absolute bottom-12 right-12 w-8 h-8 text-peach" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 
            className="text-3xl md:text-5xl font-serif text-navy mb-8"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Professional Summary
          </h2>
          <div className="text-navy/80 text-lg md:text-xl font-sans leading-relaxed text-justify mb-8 max-w-5xl mx-auto">
            <p>
              As a final-year B.E. student specializing in Artificial Intelligence and Machine Learning, I bring hands-on experience in architecting and deploying production-grade, multi-agent AI systems on cloud infrastructure. I am highly proficient in Python, full-stack web development (React, Node.js, FastAPI), and cloud deployment platforms (GCP, Docker, Firebase). With a strong commitment to secure coding practices, agile workflows, and rigorous unit testing, I have successfully delivered high-quality solutions that have won multiple national hackathons and led to a registered patent. I am actively seeking a Software Engineering role where I can leverage my expertise to build scalable, high-impact application software.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full bg-white/70 backdrop-blur-xl rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-xl shadow-navy/5 border border-white/50"
      >
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col">
          <h2 
            className="text-3xl md:text-5xl font-serif text-navy mb-12 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Education
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-navy/10 pb-8 mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-navy mb-2">HKBK College of Engineering (VTU)</h3>
              <p className="text-navy/70 font-sans text-lg">B.E. in Artificial Intelligence & Machine Learning</p>
            </div>
            <div className="text-left md:text-right mt-4 md:mt-0">
              <p className="text-navy font-sans font-bold uppercase tracking-widest text-sm mb-2">2023 - 2027</p>
              <p className="text-peach font-sans font-bold">CGPA: 8.0 / 10</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-navy font-sans font-bold uppercase tracking-widest text-sm mb-4">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-3 mt-2">
              {["Machine Learning", "Natural Language Processing", "Cloud Computing & Security", "Data Structures & Algorithms", "Operating Systems", "Computer Networks (TCP/IP)"].map((course, idx) => (
                <span key={idx} className="bg-lavender/50 text-navy px-5 py-2.5 rounded-full font-sans text-sm font-semibold border border-lavender/80 shadow-sm">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </SectionWrapper>
  );
};
