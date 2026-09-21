export default function Footer() {
  return (
    <>
      {/* Footer minimal */}
      <footer className="mt-32 pt-8 border-t border-border text-center text-base font-mono text-foreground/50">
        <p>Built with Next.js & Tailwind CSS. &copy; {new Date().getFullYear()} Radith Akram.</p>
      </footer>
    </>
  );
}
