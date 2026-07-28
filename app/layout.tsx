import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";
import Particles from "@/components/Particles";
import ClickSpark from "@/components/ClickSpark";
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radith Akram - Full-stack Engineer",
  description: "Portfolio of Radith Akram, a Full-stack Engineer specializing in Laravel and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground selection:bg-accent selection:text-background transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange={false}>
        <ClickSpark
          sparkColor="#00e5ff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div className="fixed inset-0 z-0">
          <Particles
            particleColors={["#ffffff", "#00e5ff"]}
            particleCount={250}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        <div className="lg:flex relative z-10 pointer-events-none">
          <div className="fixed top-6 right-6 z-50 pointer-events-auto">
            <AnimatedThemeToggler />
          </div>

          <div className="pointer-events-auto">
            {/* Sidebar (Fixed on Desktop, Stacked on Mobile) */}
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <main className="flex-1 lg:ml-72 min-h-screen pb-24 lg:pb-0 pointer-events-auto">
            {children}
          </main>
        </div>
        </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}

