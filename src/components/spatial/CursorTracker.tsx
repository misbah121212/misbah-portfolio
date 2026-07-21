"use client";

import { useEffect } from "react";

export const CursorTracker = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pctX = e.clientX / window.innerWidth;
      const pctY = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty("--mouse-pct-x", pctX.toFixed(3));
      document.documentElement.style.setProperty("--mouse-pct-y", pctY.toFixed(3));
      document.documentElement.style.setProperty("--mouse-px-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-px-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};
