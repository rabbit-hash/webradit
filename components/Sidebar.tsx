"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Briefcase, Code, Mail, Download, Menu, X, ArrowDown } from "lucide-react";
import { useState } from "react";
import LineSidebar from "./LineSidebar";
import TextType from "./TextType";
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border p-4 flex items-center justify-between">
        <div className="flex items-center">
          <TextType
            as="span"
            className="font-mono text-accent font-bold whitespace-nowrap"
            text={["Radith Akram"]}
            typingSpeed={120}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
          />
        </div>
        <div className="flex items-center space-x-3">
          <AnimatedThemeToggler />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Main Sidebar */}
      <aside className={`w-full lg:w-72 lg:fixed lg:top-0 lg:left-0 lg:h-screen bg-background border-r border-border p-8 flex-col justify-between z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'fixed inset-0 pt-20 flex overflow-y-auto' : 'hidden lg:flex'}`}>
        <div>


        {/* Profile */}
        <div className="mb-10 flex flex-col items-center text-center w-full">
          <TextType
            as="h1"
            className="text-foreground-heading text-2xl font-bold font-sans tracking-tight mb-2 whitespace-nowrap"
            text={["Radith Akram"]}
            typingSpeed={120}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
          />
          <p className="text-accent font-mono text-base">Full-stack Engineer</p>
        </div>

        {/* Navigation */}
        <div className="w-full mt-2 font-mono uppercase tracking-wider font-semibold">
          <LineSidebar 
            items={['About', 'Experience', 'Projects']}
            accentColor="var(--accent)"
            textColor="var(--foreground)"
            markerColor="var(--border)"
            showIndex={false}
            showMarker={true}
            onItemClick={(index: number, label: string) => {
              const targetId = label.toLowerCase();
              const element = document.getElementById(targetId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }
            }}
          />
        </div>

        </div>

      {/* Bottom Section: CV & Social Links */}
      <div className="flex flex-col items-center w-full pb-10 lg:pb-0">
        {/* Contact Pointer */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 border border-accent/20 text-accent/70 font-mono text-xs uppercase tracking-wider rounded-full cursor-default">
            <span>Contact Me Below</span>
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-5 text-foreground w-full">
          <Link href="mailto:radithaja45@gmail.com" className="hover:text-accent transition-all duration-300 hover:scale-125">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </Link>
          <Link href="https://github.com/rabbit-hash" target="_blank" className="hover:text-accent transition-all duration-300 hover:scale-125">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </Link>
          <Link href="https://instagram.com/radithakram" target="_blank" className="hover:text-accent transition-all duration-300 hover:scale-125">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.66v.01"/><path d="M15.536 15.536a5 5 0 1 1-7.072-7.072 5 5 0 0 1 7.072 7.072z"/></svg>
          </Link>
          <Link href="https://linkedin.com/in/radith-akram" target="_blank" className="hover:text-accent transition-all duration-300 hover:scale-125">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </Link>
        </div>
      </div>
    </aside>
    </>
  );
}
