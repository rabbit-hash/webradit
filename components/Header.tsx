// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background text-foreground shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="font-sans text-2xl font-bold">Radith Akram</h1>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-accent">Home</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/portfolio" className="hover:text-accent">Portfolio</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
