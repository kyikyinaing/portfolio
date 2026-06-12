"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Skills",      href: "#skills" },
  { label: "Experience",  href: "#experience" },
  { label: "Projects",    href: "#projects" },
  { label: "Education",   href: "#education" },
  { label: "Contact",     href: "#contact" },
];

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/90 dark:bg-[#050d1a]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#1e2d45]"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-mono text-sky-500 dark:text-sky-400 font-medium tracking-tight hover:opacity-80 transition-opacity">
          &lt;crystal /&gt;
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-[#1e2d45] text-slate-500 dark:text-slate-400 hover:border-sky-400/50 hover:text-sky-500 dark:hover:text-sky-400 transition-colors bg-white dark:bg-transparent"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hire me CTA */}
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-sky-400/40 text-sky-500 dark:text-sky-400 text-sm font-medium hover:bg-sky-400/10 transition-colors">
            Hire me
          </a>

          {/* Mobile burger */}
          <button className="md:hidden text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#0a1628] border-b border-slate-200 dark:border-[#1e2d45] px-6 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 border-b border-slate-100 dark:border-[#1e2d45] last:border-0 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
