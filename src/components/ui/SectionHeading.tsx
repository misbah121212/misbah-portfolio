import { ReactNode } from "react";
import { cn } from "./FloatingCard";
import { SparkleIcon } from "./SparkleIcon";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  theme?: "navy" | "lavender" | "peach";
  align?: "left" | "center" | "right";
}

export const SectionHeading = ({ 
  title, 
  subtitle, 
  className,
  theme = "navy",
  align = "left"
}: SectionHeadingProps) => {
  const colors = {
    navy: "text-navy",
    lavender: "text-lavender",
    peach: "text-peach",
  };

  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };

  return (
    <div className={cn("flex flex-col mb-12", alignments[align], className)}>
      <h2 
        className={cn("text-5xl md:text-7xl font-serif mb-4", colors[theme])}
        style={{ fontFamily: 'var(--font-playfair), serif' }}
      >
        {title}
      </h2>
      
      {subtitle && (
        <div className="flex items-center gap-4">
          {align !== "left" && <div className={cn("h-px w-12", theme === "navy" ? "bg-navy/20" : "bg-white/20")} />}
          <span className={cn("font-sans tracking-[0.2em] uppercase text-sm font-semibold flex items-center gap-2", 
            theme === "navy" ? "text-navy/60" : "text-white/60"
          )}>
            <SparkleIcon className="w-4 h-4" /> {subtitle}
          </span>
          {align !== "right" && <div className={cn("h-px w-12", theme === "navy" ? "bg-navy/20" : "bg-white/20")} />}
        </div>
      )}
    </div>
  );
};
