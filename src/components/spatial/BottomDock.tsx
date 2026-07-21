"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Code2, Briefcase, Calendar, Award, ShieldCheck, Mail, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const dockItems = [
  { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "/about", icon: <User className="w-5 h-5" /> },
  { name: "Skills", href: "/skills", icon: <Code2 className="w-5 h-5" /> },
  { name: "Experience", href: "/experience", icon: <Calendar className="w-5 h-5" /> },
  { name: "Projects", href: "/projects", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Achievements", href: "/achievements", icon: <Trophy className="w-5 h-5" /> },
  { name: "Certificates", href: "/certifications", icon: <Award className="w-5 h-5" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
];

export const BottomDock = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 bg-navy/45 backdrop-blur-3xl border border-white/15 p-2.5 rounded-full shadow-[0_15px_50px_rgba(0,0,0,0.3)] relative overflow-visible">
        {dockItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              href={item.href} 
              key={item.name}
              className="relative group"
            >
              <motion.div 
                className={`flex items-center justify-center p-3 rounded-full transition-colors relative z-10 ${
                  isActive 
                    ? "bg-white/25 text-white shadow-[inset_0_2px_8px_rgba(255,255,255,0.2)] border border-white/20" 
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ 
                  scale: 1.25, 
                  y: -10,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  borderColor: "rgba(255,255,255,0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
              >
                {item.icon}
              </motion.div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-navy/95 border border-white/10 rounded-lg text-[10px] font-sans font-bold tracking-widest text-white uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap">
                {item.name}
              </div>

              {/* Active dot */}
              {isActive && (
                <motion.div 
                  layoutId="dock-indicator"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-lavender shadow-[0_0_10px_rgba(194,173,217,0.9)]"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
