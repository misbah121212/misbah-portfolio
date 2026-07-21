"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Code2, Briefcase, Calendar, Award, Mail, Trophy } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const mouseX = useMotionValue(Infinity); // Initial value outside window bounds

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div 
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-4 p-2.5 pb-3.5 rounded-full relative overflow-visible border border-white/15"
        style={{
          background: "rgba(42, 35, 65, 0.45)",
          backdropFilter: "blur(60px)",
          WebkitBackdropFilter: "blur(60px)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)"
        }}
      >
        {dockItems.map((item) => (
          <DockIcon 
            key={item.name} 
            item={item} 
            isActive={pathname === item.href} 
            mouseX={mouseX} 
          />
        ))}
      </div>
    </div>
  );
};

const DockIcon = ({ 
  item, 
  isActive, 
  mouseX 
}: { 
  item: typeof dockItems[number]; 
  isActive: boolean; 
  mouseX: any 
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  // Compute distance from mouse X coordinate to this icon's center position
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Scale map: within 150px proximity, scale up to 1.4x (140%)
  const scaleTransform = useTransform(distance, [-150, 0, 150], [1, 1.4, 1]);
  // Y translation map: within 150px proximity, lift up to 10px
  const yTransform = useTransform(distance, [-150, 0, 150], [0, -10, 0]);

  // Apply smooth springs to eliminate stuttering
  const scale = useSpring(scaleTransform, { stiffness: 350, damping: 25 });
  const y = useSpring(yTransform, { stiffness: 350, damping: 25 });

  return (
    <Link 
      href={item.href} 
      ref={ref}
      className="relative group flex flex-col items-center justify-end"
    >
      <motion.div 
        style={{ scale, y }}
        className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors relative z-10 ${
          isActive 
            ? "bg-white/25 text-white shadow-[inset_0_2px_8px_rgba(255,255,255,0.2)] border border-white/20" 
            : "text-white/60 hover:text-white hover:bg-white/10"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {item.icon}
      </motion.div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-navy/95 border border-white/10 rounded-lg text-[9px] font-sans font-bold tracking-widest text-white uppercase opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap z-50">
        {item.name}
      </div>

      {/* Active Indicator Dot */}
      {isActive && (
        <motion.div 
          layoutId="dock-indicator"
          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-lavender shadow-[0_0_10px_rgba(216,200,255,0.9)]"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}
    </Link>
  );
};
