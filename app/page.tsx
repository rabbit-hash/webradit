import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import Lanyard from "@/components/Lanyard";
import Image from "next/image";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/registry/magicui/terminal";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      {/* ABOUT SECTION */}
      <section id="about" className="mb-24 scroll-mt-24 relative">
        {/* Lanyard Animation - Absolute positioned in the left margin */}
        <div className="hidden xl:block absolute right-full -mr-[59px] -top-32 w-[500px] shrink-0 z-0 pointer-events-auto">
          <div className="sticky top-0">
            <Lanyard position={[0, -0.5, 25]} gravity={[0, -40, 0]} transparent={true} />
          </div>
        </div>

        <h2 className="text-base font-mono text-accent font-bold uppercase tracking-widest mb-6 relative z-10">About</h2>
        <div className="text-foreground text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            I am a full-stack engineer, currently studying Computer Science - Software Engineering at Binus University. 
            My work exists at the intersection of rigorous backend architecture and refined user experience.
          </p>
          <p>
            Currently, I specialize in constructing high-performance, accessible, and scalable web applications. 
            I have extensive experience building robust backend systems with <strong>Laravel</strong> and crafting 
            dynamic, interactive front-ends with <strong>React</strong> and <strong>Next.js</strong>. I believe in writing code 
            that is as legible as it is efficient, prioritizing maintainability and a deep understanding of core web technologies.
          </p>
          <p>
            When I'm not pushing pixels or optimizing database queries, I enjoy exploring new architectural patterns 
            and seeking inspiration outside the traditional bounds of software engineering.
          </p>
        </div>

        {/* TECH STACK */}
        <section id="tech-stack" className="mt-24 mb-24 scroll-mt-24">
          <h2 className="text-base font-mono text-accent font-bold uppercase tracking-widest mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Terminal>
              <TypingAnimation>&gt; pnpm install @stack/frontend</TypingAnimation>
              <AnimatedSpan className="text-accent">✔ Installing JavaScript</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing TypeScript</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing React</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing Next.js</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing Tailwind CSS</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing HTML5 & CSS3</AnimatedSpan>
              <TypingAnimation className="text-foreground/50 mt-2">Success! Frontend stack initialized.</TypingAnimation>
            </Terminal>

            <Terminal>
              <TypingAnimation>&gt; pnpm install @stack/backend</TypingAnimation>
              <AnimatedSpan className="text-accent">✔ Installing Node.js</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing Express</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing PHP</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing Laravel</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing Java</AnimatedSpan>
              <TypingAnimation className="text-foreground/50 mt-2">Success! Backend stack initialized.</TypingAnimation>
            </Terminal>

            <Terminal>
              <TypingAnimation>&gt; pnpm install @stack/database-cloud</TypingAnimation>
              <AnimatedSpan className="text-accent">✔ Connecting to MySQL</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Connecting to PostgreSQL</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Setup Prisma ORM</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Setup Firebase</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Provisioning AWS</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Provisioning Vercel</AnimatedSpan>
              <TypingAnimation className="text-foreground/50 mt-2">Success! Database & Cloud ready.</TypingAnimation>
            </Terminal>

            <Terminal>
              <TypingAnimation>&gt; pnpm install @stack/mobile</TypingAnimation>
              <AnimatedSpan className="text-accent">✔ Installing Flutter</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Installing Dart</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Setup Android SDK</AnimatedSpan>
              <TypingAnimation className="text-foreground/50 mt-2">Success! Mobile stack initialized.</TypingAnimation>
            </Terminal>

            <Terminal className="md:col-span-2">
              <TypingAnimation>&gt; pnpm install @stack/tools</TypingAnimation>
              <AnimatedSpan className="text-accent">✔ Configuring Git</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Starting Docker daemon</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Starting Nginx server</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Setup Jest & Cypress</AnimatedSpan>
              <AnimatedSpan className="text-accent">✔ Integrating Figma & Jira</AnimatedSpan>
              <TypingAnimation className="text-foreground/50 mt-2">Success! Tools & Testing ready.</TypingAnimation>
            </Terminal>

          </div>
        </section>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="mb-24 scroll-mt-24">
        <h2 className="text-base font-mono text-accent font-bold uppercase tracking-widest mb-10">Experience</h2>
        <div className="space-y-6">
          <ExperienceItem 
            title="Software Engineering Intern"
            company="PTPN IV"
            date="2023 — Present"
            description="Developing and maintaining internal enterprise tools. Spearheaded the architectural design of feedback and evaluation systems using Laravel and React, improving processing times and establishing a unified design system adopted by multiple departments."
            isLatest={true}
          />
          <ExperienceItem 
            title="Full Stack Developer (Freelance)"
            company="Various Clients"
            date="2022 — 2023"
            description="Developed and maintained real-time collaboration tools and e-commerce platforms. Implemented complex state management solutions on the frontend and optimized RESTful APIs on the backend for low-latency interactions."
            isLatest={false}
          />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-24">
        <h2 className="text-base font-mono text-accent font-bold uppercase tracking-widest mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Safe SAPA"
            description="A comprehensive feedback and evaluation dashboard designed for real-time data ingestion. Built to scale across multiple departments with sub-second latency."
            tags={["Laravel", "React", "MySQL", "Tailwind"]}
            imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
          />
          <ProjectCard 
            title="Sinergi"
            description="Enterprise portal application deployed for PTPN. Features secure login and internal services integration."
            tags={["Laravel", "React", "Tailwind"]}
            link="https://1tep.ptpn3.co.id/sinergi/login"
            imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800"
          />
          <ProjectCard 
            title="Clash of BaNG"
            description="A community website for the Clash of BaNG gaming clan. Features troop statistic comparisons, community updates, and member registration built with responsive design."
            tags={["HTML", "CSS", "JavaScript"]}
            link="https://clash-of-bang-jade.vercel.app/"
            imageUrl="https://s0.wp.com/mshots/v1/https%3A%2F%2Fclash-of-bang-jade.vercel.app?w=800"
          />
          <ProjectCard 
            title="E-Commerce API Engine"
            description="A high-concurrency microservices orchestrator designed for a scalable e-commerce backend. Features custom query pipelines and memory management."
            tags={["Laravel", "REST API", "Redis"]}
            imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800"
          />
          <ProjectCard 
            title="Sentience ML"
            description="An experimental natural language processor focused on sentiment nuance and semantic mapping. Utilized for deep analysis of large-scale text data."
            tags={["Python", "React"]}
            imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800"
          />
        </div>
      </section>



      {/* Footer minimal */}
      <footer className="mt-32 pt-8 border-t border-border text-center text-base font-mono text-foreground/50">
        <p>Built with Next.js & Tailwind CSS. © {new Date().getFullYear()} Radith Akram.</p>
      </footer>
    </div>
  );
}
