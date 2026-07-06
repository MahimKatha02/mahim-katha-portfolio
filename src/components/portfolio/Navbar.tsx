import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (const s of sections) {
        if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--pearl)]/85 backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => go("home")} className="font-display text-lg md:text-xl text-[var(--burgundy)] tracking-tight">
          Mahim Chowdhury Katha
        </button>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                active === l.id
                  ? "text-[var(--burgundy)] bg-[var(--platinum)]"
                  : "text-[var(--eerie)]/70 hover:text-[var(--burgundy)]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <button className="lg:hidden text-[var(--burgundy)]" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-[var(--pearl)] border-t border-[var(--border)]">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-left py-3 border-b border-[var(--border)] text-[var(--eerie)]/80 hover:text-[var(--burgundy)]"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}