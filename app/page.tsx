import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import Lanyard from "@/components/Lanyard";
import Image from "next/image";
import { Tree } from "@/components/ui/file-tree";
import type { TreeViewElement } from "@/components/ui/file-tree";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      {/* ABOUT SECTION */}
      <section id="about" className="mb-24 scroll-mt-24 relative">
        {/* Lanyard Animation - Responsive */}
        <div className="relative xl:absolute -mt-52 lg:-mt-64 xl:mt-0 xl:right-full xl:-mr-[120px] xl:-top-64 w-full xl:w-[500px] shrink-0 z-0 pointer-events-auto flex justify-center xl:block">
          <div className="xl:sticky xl:top-0 w-full">
            <Lanyard position={[0, 1.8, 25]} gravity={[0, -40, 0]} transparent={true} frontImage="/real-profile.jpg" />
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
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-border bg-background/50 md:shadow-xl">
            <Tree
              className="p-4 bg-background/30 rounded-lg overflow-hidden"
              initialSelectedId="1"
              initialExpandedItems={["1", "2", "3", "4", "5", "6"]}
              elements={[
                {
                  id: "1",
                  isSelectable: true,
                  name: "Tech Stack",
                  children: [
                    {
                      id: "2",
                      isSelectable: true,
                      name: "Frontend",
                      children: [
                        { id: "2-1", isSelectable: true, name: "React.tsx" },
                        { id: "2-2", isSelectable: true, name: "Next.js" },
                        { id: "2-3", isSelectable: true, name: "Tailwind.css" },
                        { id: "2-4", isSelectable: true, name: "TypeScript.ts" },
                        { id: "2-5", isSelectable: true, name: "JavaScript.js" },
                        { id: "2-6", isSelectable: true, name: "HTML_CSS" },
                      ],
                    },
                    {
                      id: "3",
                      isSelectable: true,
                      name: "Backend",
                      children: [
                        { id: "3-1", isSelectable: true, name: "Node.js" },
                        { id: "3-2", isSelectable: true, name: "Laravel.php" },
                        { id: "3-3", isSelectable: true, name: "Java.java" },
                        { id: "3-4", isSelectable: true, name: "Express.js" },
                        { id: "3-5", isSelectable: true, name: "PHP.php" },
                      ],
                    },
                    {
                      id: "4",
                      isSelectable: true,
                      name: "Database & Cloud",
                      children: [
                        { id: "4-1", isSelectable: true, name: "MySQL.sql" },
                        { id: "4-2", isSelectable: true, name: "PostgreSQL.sql" },
                        { id: "4-3", isSelectable: true, name: "Prisma.prisma" },
                        { id: "4-4", isSelectable: true, name: "Firebase" },
                        { id: "4-5", isSelectable: true, name: "AWS.config" },
                        { id: "4-6", isSelectable: true, name: "Vercel.json" },
                      ],
                    },
                    {
                      id: "5",
                      isSelectable: true,
                      name: "Mobile",
                      children: [
                        { id: "5-1", isSelectable: true, name: "Flutter.dart" },
                        { id: "5-2", isSelectable: true, name: "Dart.dart" },
                        { id: "5-3", isSelectable: true, name: "AndroidSDK" },
                      ],
                    },
                    {
                      id: "6",
                      isSelectable: true,
                      name: "Tools",
                      children: [
                        { id: "6-1", isSelectable: true, name: "Git.gitignore" },
                        { id: "6-2", isSelectable: true, name: "Docker.yml" },
                        { id: "6-3", isSelectable: true, name: "Nginx.conf" },
                        { id: "6-4", isSelectable: true, name: "Jest_Cypress.test" },
                        { id: "6-5", isSelectable: true, name: "Figma_Jira" },
                      ],
                    },
                  ],
                },
              ]}
            />
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
