"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Code2, Briefcase, Award, ShieldCheck, Mail } from "lucide-react";
import { motion } from "framer-motion";

const dockItems = [
  { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "/about", icon: <User className="w-5 h-5" /> },
  { name: "Skills", href: "/skills", icon: <Code2 className="w-5 h-5" /> },
  { name: "Projects", href: "/projects", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Achievements", href: "/achievements", icon: <TrophyIcon /> },
  { name: "Certificates", href: "/certifications", icon: <Award className="w-5 h-5" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
];

function TrophyIcon() {
  return <Award className="w-5 h-5" />; // Replace with a better trophy if needed
}

export const BottomDock = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-3xl border border-white/20 p-2 rounded-full shadow-[0_10px_40px_rgba(31,38,135,0.2)]">
        {dockItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              href={item.href} 
              key={item.name}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                isActive 
                  ? "bg-white/20 text-white shadow-inner" 
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.icon}
              <span className="font-sans text-xs font-medium">{item.name}</span>
              {isActive && (
                <motion.div 
                  layoutId="dock-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lavender shadow-[0_0_8px_rgba(194,173,217,0.8)]"
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
