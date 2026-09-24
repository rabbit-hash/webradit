import { Monitor, Server, Database, Wrench, LayoutTemplate, Layers, GitBranch, Cloud } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const badgeClass = "px-3 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm border border-neutral-200/50 dark:border-neutral-800/80";

const horizontalMask = "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]";
const verticalMask = "[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]";

export const techStackFeatures = [
  {
    Icon: Monitor,
    name: "Frontend",
    description: "Building interactive & responsive user interfaces.",
    href: "#projects",
    cta: "View Projects",
    className: "lg:col-span-1 lg:row-span-2",
    background: (
      <>
        <LayoutTemplate className="absolute -right-6 -top-6 w-48 h-48 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
        <div className={`absolute inset-x-0 top-8 bottom-1/2 flex flex-col justify-start p-0 overflow-hidden ${horizontalMask} pointer-events-none`}>
           <Marquee reverse pauseOnHover className="[--duration:20s] mb-4 pointer-events-auto">
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>React</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></span>Next.js</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>Tailwind CSS</span>
           </Marquee>
           <Marquee pauseOnHover className="[--duration:25s] pointer-events-auto">
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>JavaScript</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>TypeScript</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>HTML5</span>
           </Marquee>
        </div>
      </>
    ),
  },
  {
    Icon: Server,
    name: "Backend & APIs",
    description: "Architecting robust and secure server-side systems.",
    href: "#projects",
    cta: "View Projects",
    className: "lg:col-span-2 lg:row-span-1",
    background: (
      <>
        <Layers className="absolute -right-10 -top-10 w-64 h-64 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3" />
        <div className={`absolute top-4 right-4 left-1/3 bottom-16 flex flex-col items-end justify-start p-0 overflow-hidden ${horizontalMask} pointer-events-none`}>
           <Marquee pauseOnHover className="[--duration:20s] pointer-events-auto">
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>PHP</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>Laravel</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Node.js</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>REST APIs</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>GraphQL</span>
           </Marquee>
        </div>
      </>
    ),
  },
  {
    Icon: Database,
    name: "Database & Cloud",
    description: "Managing data persistence and deployment.",
    href: "#projects",
    cta: "View Projects",
    className: "lg:col-span-1 lg:row-span-1",
    background: (
      <>
        <Cloud className="absolute -right-4 -top-4 w-32 h-32 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6" />
        <div className={`absolute top-4 right-4 bottom-1/2 w-3/4 flex flex-row items-start justify-end p-0 overflow-hidden ${verticalMask} pointer-events-none`}>
           <Marquee vertical pauseOnHover className="[--duration:15s] w-full items-end h-[100px] pointer-events-auto">
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>MySQL</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>PostgreSQL</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></span>Vercel</span>
           </Marquee>
        </div>
      </>
    ),
  },
  {
    Icon: Wrench,
    name: "Tools",
    description: "Streamlining the development workflow.",
    href: "#projects",
    cta: "View Projects",
    className: "lg:col-span-1 lg:row-span-1",
    background: (
      <>
        <GitBranch className="absolute -right-4 -top-4 w-32 h-32 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
        <div className={`absolute top-4 right-4 bottom-1/2 w-3/4 flex flex-row items-start justify-end p-0 overflow-hidden ${verticalMask} pointer-events-none`}>
           <Marquee vertical reverse pauseOnHover className="[--duration:15s] w-full items-end h-[100px] pointer-events-auto">
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>Git</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></span>GitHub</span>
              <span className={badgeClass}><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Figma</span>
           </Marquee>
        </div>
      </>
    ),
  },
];
