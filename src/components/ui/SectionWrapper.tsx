"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "./FloatingCard";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  return (
    <div id={id} className="w-full flex justify-center px-4 md:px-8">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "w-full max-w-[1400px] relative",
          className
        )}
      >
        {children}
      </motion.section>
    </div>
  );
};
