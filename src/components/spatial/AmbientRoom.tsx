"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const AmbientRoom = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create exactly specified 2px to 4px dust particles at 15% opacity
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 2, // 2px to 4px
        speedY: -(Math.random() * 0.08 + 0.02), // Very slow vertical drift
        speedX: (Math.random() - 0.5) * 0.05, // Very slow horizontal sway
        opacity: 0.15, // Fixed 15% opacity
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Beautiful soft lavender particles
        ctx.fillStyle = `rgba(155, 114, 255, ${p.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(155, 114, 255, 0.2)";
        ctx.fill();

        // Update positions (gently drift up and sway)
        p.y += p.speedY;
        p.x += p.speedX;

        // Reset particle if it drifts off top or sides
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Blurred room background base (Very soft suggested room blur) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: "url('/spatial-bg.png')",
          filter: "blur(60px) brightness(1.05) contrast(0.95)" 
        }}
      />

      {/* 98% Opacity Apple Gradient Overlays (#FDFBFF Top-Left to #ECE3FA Bottom-Right) */}
      <div 
        className="absolute inset-0 opacity-[0.98] transition-opacity duration-1000"
        style={{
          background: "linear-gradient(135deg, #FDFBFF 0%, #ECE3FA 100%)"
        }}
      />
      
      {/* Soft Ambient volumetric lighting (Lavender & Peach glows) */}
      <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] rounded-full bg-lavender/30 blur-[130px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full bg-peach/20 blur-[110px] pointer-events-none mix-blend-multiply" />
      
      {/* Dynamic glow spotlight behind center panel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] rounded-full bg-gradient-to-r from-purple-300/10 to-indigo-300/10 blur-[120px]" />

      {/* Canvas for fine floating dust particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
