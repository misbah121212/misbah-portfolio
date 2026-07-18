"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SparkleIcon } from "./SparkleIcon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Certifications", href: "/certifications" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 py-6 px-8 md:px-16 flex items-center justify-between pointer-events-none">
      
      {/* Logo / Branding */}
      <div className="pointer-events-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <SparkleIcon className="w-4 h-4 text-navy group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-serif text-xl font-bold tracking-tight text-navy">Misbah.</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/60 shadow-sm pointer-events-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`relative font-sans text-xs uppercase tracking-widest font-bold transition-colors ${
                isActive ? "text-navy" : "text-navy/50 hover:text-navy"
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-navy rounded-full"
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* CTA Button (Optional: Resume) */}
      <div className="pointer-events-auto">
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="hidden lg:flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-navy bg-white/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/60 hover:bg-white/60 transition-colors shadow-sm"
        >
          View Resume
        </a>
      </div>
      
    </nav>
  );
};
