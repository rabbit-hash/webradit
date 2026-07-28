// components/Header.tsx
import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="bg-background text-foreground shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="font-sans text-2xl font-bold">Radith Akram</h1>
        <nav className="flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
