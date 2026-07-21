import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function MarqueeStrip() {
  const marqueeItems = [
    "ENTERPRISE SAAS",
    "PRODUCT DESIGN",
    "AI UX",
    "DESIGN SYSTEMS",
    "USER RESEARCH",
    "WORKFLOW AUTOMATION",
    "LEGALTECH",
    "FINTECH",
    "PRODUCT STRATEGY",
    "DATA VISUALIZATION",
  ];

  // Duplicate items to ensure continuous infinite scroll
  const repeatedMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full bg-white flex flex-col items-center border-b border-[#141414]/5" id="marquee-container">
      {/* Marquee Bar */}
      <div className="w-full bg-[#141414] py-4 overflow-hidden select-none relative">
        <div className="flex w-max" id="marquee-scroller">
          <div className="animate-marquee flex items-center whitespace-nowrap gap-8 text-white/90 text-sm font-bold uppercase tracking-[0.3em]">
            {repeatedMarquee.map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-white/90">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Down arrow scroll helper */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="py-4 flex flex-col items-center bg-white cursor-pointer group"
        onClick={() => {
          document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
        }}
        id="scroll-helper"
      >
        <div className="text-[20px] mb-1 leading-none animate-bounce text-[#141414]">
          ↓
        </div>
        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#141414]/40 select-none">
          Scroll to explore
        </div>
      </motion.div>
    </div>
  );
}
