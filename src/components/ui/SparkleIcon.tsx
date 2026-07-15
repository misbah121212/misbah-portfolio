import { motion } from "framer-motion";
import { cn } from "./FloatingCard";

interface SparkleIconProps {
  className?: string;
  delay?: number;
}

export const SparkleIcon = ({ className, delay = 0 }: SparkleIconProps) => {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current opacity-80", className)}
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.1, 0.8],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <path
        d="M12 0C12 5.5 13.5 10.5 24 12C13.5 13.5 12 18.5 12 24C12 18.5 10.5 13.5 0 12C10.5 10.5 12 5.5 12 0Z"
        fill="currentColor"
      />
    </motion.svg>
  );
};
