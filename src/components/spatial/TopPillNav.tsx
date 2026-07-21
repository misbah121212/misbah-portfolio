"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Certificates", href: "/certifications" },
];

export const TopPillNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center pt-2 relative z-50">
      <div 
        className="flex items-center justify-center md:w-[58%] w-[92%] h-[74px] mt-[34px] px-6 rounded-full bg-white/18 backdrop-blur-[40px] border border-white/25 shadow-[0_30px_80px_rgba(30,25,55,0.12)]"
      >
        <div className="flex items-center justify-between w-full md:gap-[40px] gap-2 lg:gap-[52px] px-2 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative flex items-center justify-center py-2 shrink-0"
              >
                <motion.span
                  className={`font-sans text-[13px] lg:text-[15px] font-medium tracking-[2px] uppercase transition-colors duration-300 relative z-10 ${
                    isActive ? "text-[#34274F] font-bold" : "text-[#5F5970] hover:text-[#221B39]"
                  }`}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.name}
                </motion.span>

                {/* Underline or Capsule styling for Active / Hover states */}
                {isActive && (
                  <motion.div 
                    layoutId="activePillNav"
                    className="absolute inset-0 -mx-3 px-3 py-1.5 rounded-full bg-lavender/40 border border-lavender/50 -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 25 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
