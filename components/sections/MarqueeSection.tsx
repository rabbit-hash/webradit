import { Marquee } from "@/components/ui/marquee";

const items = [
  "SOFTWARE ENGINEERING",
  "FULL-STACK DEVELOPMENT",
  "UI/UX DESIGN",
  "WEB APPLICATIONS",
  "SYSTEM ARCHITECTURE",
];

export default function MarqueeSection() {
  return (
    <section className="py-8 bg-accent overflow-hidden border-y border-border flex items-center">
      <Marquee className="flex items-center" pauseOnHover={false} repeat={4} style={{ '--duration': '25s' } as React.CSSProperties}>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-8 mx-4">
            <span className="text-4xl md:text-6xl font-black tracking-tighter uppercase whitespace-nowrap text-background">
              {item}
            </span>
            <span className="text-3xl md:text-5xl font-black text-background/30">
              ✦
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
