"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
  tiltFactor?: number;
}

export function TiltCard({ children, className, glowClassName, tiltFactor = 15 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltFactor, -tiltFactor]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltFactor, tiltFactor]);

  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const backgroundGlow = useTransform(
    () => `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(37,99,235,0.1), transparent 40%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative group w-full h-full rounded-xl transition-all duration-300 ease-out", className)}
    >
      {/* Subtle background glow effect that follows mouse */}
      <motion.div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          glowClassName || "bg-primary/10"
        )}
        style={{
          background: backgroundGlow,
        }}
      />
      
      {/* Content wrapper to preserve 3D space */}
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="h-full w-full rounded-xl"
      >
        {children}
      </div>
    </motion.div>
  );
}
