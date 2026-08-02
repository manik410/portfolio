import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavigationProps {
  onContactClick: () => void;
  onAboutClick: () => void;
  onWorkClick: () => void;
  onHomeClick?: () => void;
  activePage?: "first-impression" | "about-me";
}

export default function Navigation({ onContactClick, onAboutClick, onWorkClick, onHomeClick, activePage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, callback?: () => void) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (callback) callback();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#141414]/5 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
      id="nav-header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          aria-label="Home"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            if (onHomeClick) {
              onHomeClick();
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex items-center text-[22px] font-display font-black tracking-tight select-none text-[#1C1C1C] cursor-pointer"
          id="logo-brand"
        >
          <span className="font-display font-black">n</span>
          <span className="text-[#10B981] font-display font-black">e</span>
          <span className="font-display font-black">ha</span>
        </a>

        {/* Center Navigation links - Desktop */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-menu">
          <button
            onClick={() => scrollToSection("work-section", onWorkClick)}
            className={`font-display text-[15px] font-medium transition-colors relative group py-2 ${
              activePage === "first-impression" ? "text-[#10B981]" : "text-[#1C1C1C]/75 hover:text-[#10B981]"
            }`}
          >
            Work
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#10B981] transition-all duration-300 ${
              activePage === "first-impression" ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </button>
          <button
            onClick={() => scrollToSection("about-section", onAboutClick)}
            className={`font-display text-[15px] font-medium transition-colors relative group py-2 ${
              activePage === "about-me" ? "text-[#10B981]" : "text-[#1C1C1C]/75 hover:text-[#10B981]"
            }`}
          >
            About
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#10B981] transition-all duration-300 ${
              activePage === "about-me" ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </button>
          <button
            onClick={() => scrollToSection("contact-section", onContactClick)}
            className="font-display text-[15px] font-medium text-[#1C1C1C]/75 hover:text-[#10B981] transition-colors relative group py-2"
          >
            Let's Talk
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#10B981] transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Right CTA - Desktop */}
        <div className="hidden md:flex items-center" id="desktop-cta">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1C1C1C] text-white font-display text-[14px] font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-all shadow-sm flex items-center justify-center cursor-pointer tracking-tight"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center" id="mobile-menu-trigger">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-[#141414]/10 py-6 px-8 flex flex-col gap-6 shadow-xl md:hidden"
          id="mobile-menu-panel"
        >
          <button
            onClick={() => scrollToSection("work-section", onWorkClick)}
            className="font-display text-[16px] font-bold text-left text-[#1C1C1C]/80 py-2 border-b border-[#1C1C1C]/5"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("about-section", onAboutClick)}
            className="font-display text-[16px] font-bold text-left text-[#1C1C1C]/80 py-2 border-b border-[#1C1C1C]/5"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact-section", onContactClick)}
            className="font-display text-[16px] font-bold text-left text-[#1C1C1C]/80 py-2 border-b border-[#1C1C1C]/5"
          >
            Let's Talk
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#1C1C1C] text-white font-display text-[16px] font-bold px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors shadow-md flex items-center justify-center cursor-pointer mt-2 block text-center"
          >
            Resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
