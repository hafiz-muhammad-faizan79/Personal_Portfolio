import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/40 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-slate-900 dark:text-white">
          Hafiz Muhammad Faizan
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm text-slate-700 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-slate-700 md:hidden dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200/40 bg-white/85 px-6 py-4 md:hidden dark:border-white/10 dark:bg-slate-950/85">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}