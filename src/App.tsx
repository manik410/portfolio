import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, BookOpen, ChevronRight } from "lucide-react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Work from "./components/Work";
import Process from "./components/Process";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"first-impression" | "about-me">("first-impression");

  // Keep scroll position clean when switching chapters
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [currentPage]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWorkNav = () => {
    if (currentPage !== "first-impression") {
      setCurrentPage("first-impression");
      // Short delay to allow DOM to render on page switch
      setTimeout(() => handleScrollTo("work-section"), 150);
    } else {
      handleScrollTo("work-section");
    }
  };

  const handleAboutNav = () => {
    if (currentPage !== "about-me") {
      setCurrentPage("about-me");
      setTimeout(() => handleScrollTo("about-section"), 150);
    } else {
      handleScrollTo("about-section");
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-accent-orange selection:text-white relative" id="portfolio-root">
      
      {/* SaaS subtle dot grid overlay persistent across root */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      {/* Top sticky blur navigation with dynamic page-aware click handlers */}
      <Navigation
        onWorkClick={handleWorkNav}
        onAboutClick={handleAboutNav}
        onContactClick={() => handleScrollTo("contact-section")}
        activePage={currentPage}
      />

      {/* Main Chapter Content */}
      <main id="main-content" className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === "first-impression" ? (
            <motion.div
              key="first-impression-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* PAGE 1: First Impression Hero & Portfolio Highlights */}
              <Hero
                onExploreWork={handleWorkNav}
                onAboutMe={handleAboutNav}
              />

              <MarqueeStrip />
              <Work />
              <Process />
              <Skills />
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="about-me-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* PAGE 2: Deep Storytelling, Journey & Achievements */}
              <About />
              <Achievements />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>



    </div>
  );
}
