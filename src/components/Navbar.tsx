
"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Ana Sayfa", href: "#home" },
  { name: "Hakkımda", href: "#about" },
  { name: "Projeler", href: "#projects" },
  { name: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled || isOpen
          ? "border-white/10 bg-[#080808]/95 shadow-lg backdrop-blur-xl"
          : "border-transparent bg-[#080808]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-extrabold tracking-tighter text-white"
          aria-label="Abdülbaki Yıldız - Ana Sayfa"
        >
          AY<span className="text-blue-500">.</span>
        </a>

        {/* Masaüstü menü */}
        <nav
          aria-label="Ana navigasyon"
          className="hidden items-center gap-9 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Masaüstü iletişim butonu */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 md:inline-flex"
        >
          İletişime Geç
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        {/* Mobil menü butonu */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg border border-white/10 p-2.5 text-white transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobil navigasyon */}
      <div
        id="mobile-navigation"
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <nav
          aria-label="Mobil navigasyon"
          className="overflow-hidden"
        >
          <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-zinc-300 transition hover:bg-white/5 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              İletişime Geç
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
