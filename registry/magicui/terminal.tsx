"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

export const Terminal = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  let currentDelay = 0;
  const childrenWithDelays = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const isTyping = child.type === TypingAnimation;
      const delay = currentDelay;
      
      if (isTyping) {
        const element = child as React.ReactElement<any>;
        const text = typeof element.props.children === 'string' ? element.props.children : '';
        currentDelay += text.length * 40 + 500; 
      } else {
        currentDelay += 200; 
      }
      
      return React.cloneElement(child as React.ReactElement<any>, { delay });
    }
    return child;
  });

  return (
    <div className={cn("relative z-0 w-full rounded-xl border border-border bg-card text-foreground shadow-lg", className)} {...props}>
      <div className="flex h-10 items-center justify-start border-b border-border bg-foreground/5 px-4 space-x-2 rounded-t-xl">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="relative p-4 font-mono text-xs sm:text-sm overflow-hidden min-h-[150px]">
        {childrenWithDelays}
      </div>
    </div>
  );
};

export const TypingAnimation = ({ children, delay = 0, className, ...props }: any) => {
  const [text, setText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const fullText = typeof children === 'string' ? children : '';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 40);
      timeout = interval;
    }, delay);
    return () => {
      clearTimeout(startTimeout);
      if (timeout) clearInterval(timeout);
    };
  }, [fullText, delay]);

  if (!isStarted) return null;

  return (
    <div className={cn("mb-2 flex items-center", className)} {...props}>
      {text}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className={cn("inline-block w-1.5 h-4 bg-foreground ml-1 align-middle", !isTyping && text.length > 0 ? "hidden" : "")}
      />
    </div>
  );
};

export const AnimatedSpan = ({ children, delay = 0, className, ...props }: any) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className={cn("mb-2", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
