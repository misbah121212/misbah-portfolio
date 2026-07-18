"use client";

import { motion } from "framer-motion";

export const Animated3DArrow = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 flex-shrink-0"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        animate={{
          x: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          {/* Main 3D Gradient */}
          <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9C1F8" /> {/* lavender */}
            <stop offset="100%" stopColor="#FFC8B4" /> {/* peach */}
          </linearGradient>

          {/* Inner Highlight Gradient to give 3D gloss */}
          <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>

          {/* 3D Drop Shadow */}
          <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.15" />
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#0A1128" floodOpacity="0.1" /> {/* navy tint */}
          </filter>
        </defs>

        {/* 3D Base Arrow Path */}
        <path
          d="M30 35 L55 35 L55 20 C55 18 57 16 59 17.5 L85 48 C86 49 86 51 85 52 L59 82.5 C57 84 55 82 55 80 L55 65 L30 65 C27 65 25 63 25 60 L25 40 C25 37 27 35 30 35 Z"
          fill="url(#arrowGrad)"
          filter="url(#shadow3d)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />

        {/* Glossy Top Highlight overlay (gives the glass/plastic 3D curve look) */}
        <path
          d="M30 35 L55 35 L55 20 C55 18 57 16 59 17.5 L85 48 C85 48.5 85.5 49 85.5 49.5 L59 21.5 C57.5 20.5 56.5 21.5 56.5 22.5 L56.5 37 L30 37 C28 37 26.5 38 26.5 40 L26.5 45 C27 40 28 36 31 36 Z"
          fill="url(#highlightGrad)"
        />
      </motion.svg>
    </motion.div>
  );
};
