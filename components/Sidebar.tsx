"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Briefcase, Code, Mail, Download, Menu, X, ArrowDown } from "lucide-react";
import { useState } from "react";
import LineSidebar from "./LineSidebar";
import TextType from "./TextType";
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";
import { socials } from "@/data/socials";

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
          {socials.map((social) => (
            <Link key={social.name} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} className="hover:text-accent transition-all duration-300 hover:scale-125">
              {social.svg}
            </Link>
          ))}
        </div>
      </div>
    </aside>
    </>
  );
}
