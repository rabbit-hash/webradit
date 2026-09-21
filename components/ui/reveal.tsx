"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function Reveal({ children, delay = 0, direction = "up", className = "" }: RevealProps) {
  const directions = {
    up: { y: 100, x: 0 },
    down: { y: -100, x: 0 },
    left: { x: 100, y: 0 },
    right: { x: -100, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.95,
        filter: "blur(10px)",
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        filter: "blur(0px)",
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.0,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
