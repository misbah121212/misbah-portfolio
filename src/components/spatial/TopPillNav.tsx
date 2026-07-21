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
        className="flex items-center justify-between w-[640px] h-[70px] mt-[10px] px-6 rounded-full border border-white/22 relative overflow-visible"
        style={{
          background: "rgba(255, 255, 255, 0.14)",
          backdropFilter: "blur(55px)",
          WebkitBackdropFilter: "blur(55px)",
          boxShadow: "0 30px 80px rgba(30, 25, 55, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
        }}
      >
        <div className="flex items-center justify-between w-full gap-2 overflow-x-auto no-scrollbar relative z-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative flex items-center justify-center px-3 py-1.5 shrink-0"
              >
                <motion.span
                  className={`font-sans text-[11px] font-bold tracking-[2px] uppercase transition-colors duration-300 relative z-10 ${
                    isActive ? "text-[#2B2345]" : "text-[#635B78] hover:text-[#2B2345]"
                  }`}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.name}
                </motion.span>

                {/* Sliding active glowing lavender capsule */}
                {isActive && (
                  <motion.div 
                    layoutId="activePillNav"
                    className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(216,200,255,0.4)] -z-0"
                    style={{
                      background: "rgba(207, 174, 255, 0.45)",
                      border: "1px solid rgba(255, 255, 255, 0.3)"
                    }}
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
