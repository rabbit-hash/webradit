import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

const figtree = Figtree({
  variable: "--font-geist-sans", // keeping the variable name to avoid breaking css that might use it
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radith Akram — Full-stack Engineer",
  description: "Portfolio of Radith Akram, a Software Engineering student and Full-stack Engineer building modern web applications.",
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
      className={`${figtree.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full bg-background bg-noise text-foreground selection:bg-accent selection:text-background transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange={false}>
        <div className="relative z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <Navbar />
          </div>

          {/* Main Content Area */}
          <main className="min-h-screen pb-24 pointer-events-auto">
            {children}
          </main>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

