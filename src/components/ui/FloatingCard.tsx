"use client";

import { motion } from "framer-motion";
import { floatingAnimation, springPhysics } from "@/lib/motion";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  draggable?: boolean;
  variant?: "solid-maroon" | "solid-blush" | "solid-cream";
  arch?: boolean;
}

export const FloatingCard = ({ 
  children, 
  className, 
  delay = 0, 
  draggable = true,
  variant = "solid-maroon",
  arch = false
}: FloatingCardProps) => {
  
  const variantStyles = {
    "solid-maroon": "bg-maroon text-blush border-gold/30",
    "solid-blush": "bg-blush text-maroon border-maroon/10",
    "solid-cream": "bg-cream text-maroon border-maroon/10",
  };

  return (
    <motion.div
      drag={draggable}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: floatingAnimation.animate.y,
        opacity: 1,
        transition: {
          y: {
            ...floatingAnimation.animate.transition,
            delay: delay,
          },
          opacity: { duration: 0.8, delay: delay },
        },
      }}
      className={cn(
        "relative p-6 border",
        arch ? "rounded-t-full rounded-b-2xl pt-16" : "rounded-2xl",
        variantStyles[variant],
        draggable ? "cursor-grab active:cursor-grabbing" : "",
        className
      )}
      style={{ touchAction: draggable ? "none" : "auto" }}
    >
      {children}
    </motion.div>
  );
};
