"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { SparkleIcon } from "../ui/SparkleIcon";

const experiences = [
  {
    role: "AI/ML Intern",
    company: "ShadowFox",
    date: "Oct 2025",
    bullets: [
      "Built end-to-end ML pipelines covering data preprocessing, feature engineering, model training, and evaluation using Python and scikit-learn.",
      "Improved model accuracy by 12% through iterative hyperparameter tuning and cross-validation on real-world datasets.",
      "Applied secure coding best practices and Git version control; collaborated in agile sprints to deliver features on schedule."
    ]
  },
  {
    role: "ML Intern",
    company: "SkillCraft Technology",
    date: "Nov 2025",
    bullets: [
      "Designed and deployed AI/ML classification models for applied business problems using Python, pandas, and scikit-learn.",
      "Wrote comprehensive unit tests (pytest) to ensure correctness across edge cases; maintained clean, well-documented code.",
      "Participated in code reviews, addressed feedback, and ensured compliance with software quality standards."
    ]
  }
];

export const Experience = () => {
  return (
    <SectionWrapper id="experience" className="py-8 md:py-12 relative">
      
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        
        {/* Left Side: Title */}
        <div className="w-full lg:w-1/3 flex flex-col pt-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-5xl font-serif text-navy">Experience</h2>
            <SparkleIcon className="w-5 h-5 text-peach" />
          </div>
          <p className="text-navy/60 font-sans mb-12 max-w-sm">
            Applying machine learning and data science methodologies to solve complex real-world problems.
          </p>

          {/* Decorative element to fill space */}
          <div className="hidden lg:flex flex-col gap-6 mt-4">
            <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lavender rounded-full blur-3xl opacity-60 -mr-12 -mt-12" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-peach/20 rounded-full blur-2xl opacity-60 -ml-10 -mb-10" />
              
              <h4 className="font-serif text-2xl text-navy mb-6 relative z-10">Core Focus</h4>
              <ul className="space-y-4 font-sans text-navy/80 relative z-10">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-peach shadow-[0_0_8px_rgba(240,179,166,0.6)]" /> 
                  <span className="tracking-wide">Predictive Modeling</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-lavender-dark shadow-[0_0_8px_rgba(194,173,217,0.6)]" /> 
                  <span className="tracking-wide">Data Engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-navy/40 shadow-[0_0_8px_rgba(42,37,68,0.2)]" /> 
                  <span className="tracking-wide">Cloud Deployments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Timeline */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-sm border border-navy/5 relative overflow-hidden group"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-peach transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-serif text-navy mb-1">{exp.role}</h3>
                  <p className="text-navy/60 font-sans font-bold tracking-widest uppercase text-xs">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-lavender text-navy px-4 py-2 rounded-full font-sans text-xs font-bold tracking-widest uppercase">
                    {exp.date}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4 text-navy/70 font-sans leading-relaxed">
                    <span className="text-peach mt-1">✦</span>
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
