"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SKILLS", href: "/skills" },
  { name: "EXPERIENCE", href: "/experience" },
  { name: "CERTIFICATIONS", href: "/certifications" },
  { name: "PROJECTS", href: "/projects" },
  { name: "ACHIEVEMENTS", href: "/achievements" },
];

export const TopPillNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center pt-2">
      <div className="flex items-center gap-2 bg-navy/45 backdrop-blur-3xl px-3 py-3 rounded-full border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`relative px-6 py-2 rounded-full font-sans text-xs tracking-widest font-bold transition-all duration-300 ${
                isActive ? "text-white shadow-[0_0_15px_rgba(194,173,217,0.5)] bg-lavender/30 border border-lavender/40" : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
