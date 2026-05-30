import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");
  const { theme, toggleTheme }  = useTheme();

  /* scroll shadow + active section tracker */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-size: 0.8125rem;
          font-family: 'Syne', sans-serif;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transition: color 0.22s;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #22d3ee, #a78bfa);
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(.22,1,.36,1);
        }
        .nav-link:hover::after,
        .nav-link.active::after { width: 100%; }
        .nav-link.active { color: #22d3ee; }

        .nav-logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #22d3ee 0%, #a78bfa 50%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .theme-btn {
          border-radius: 8px;
          padding: 6px;
          transition: background 0.2s, transform 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .theme-btn:hover { transform: rotate(20deg); }
        .dark .theme-btn:hover { background: rgba(255,255,255,0.08); }
        .theme-btn:hover { background: rgba(0,0,0,0.06); }

        .hamburger-btn {
          border-radius: 8px; padding: 6px;
          transition: background 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "border-b border-cyan-500/10 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:bg-slate-950/85 dark:shadow-black/30"
            : "border-b border-transparent bg-white/60 backdrop-blur-md dark:bg-slate-950/60"
          }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#home" className="nav-logo-text">
            H.M. Faizan
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${
                    active === link.href.slice(1) ? "active" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="theme-btn text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Sun size={17} strokeWidth={1.8} />
                : <Moon size={17} strokeWidth={1.8} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="hamburger-btn text-slate-600 md:hidden dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden
            ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="border-t border-slate-200/40 bg-white/90 px-6 py-5 dark:border-white/10 dark:bg-slate-950/90">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`nav-link block ${
                      active === link.href.slice(1)
                        ? "active"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}