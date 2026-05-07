import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-[#030304]/90 backdrop-blur-md shadow-lg shadow-black/25" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-[4.25rem]"
        aria-label="Primary"
      >
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="font-semibold text-white tracking-tight font-[family-name:Outfit] text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg px-1"
        >
          PSB<span className="text-violet-400">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollTo(id)}
                className="px-3 py-2 text-sm rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent hover:from-violet-200 hover:to-cyan-200 hover:bg-white/5"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-[#030304]/98 backdrop-blur-xl"
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent hover:bg-violet-600/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
