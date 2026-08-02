import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  ArrowRight,
  Search,
  Layers,
  CheckCircle2,
  Cpu,
  Zap,
  Award,
  Pin,
  Sparkles,
  Compass,
  Palette
} from "lucide-react";

interface HeroProps {
  onExploreWork: () => void;
  onAboutMe: () => void;
}

// Custom 3D Pin Component
function StickPin({ color }: { color: "red" | "blue" | "pink" | "green" }) {
  const pinColors = {
    red: "bg-red-500 border-red-600 shadow-red-500/30",
    blue: "bg-blue-500 border-blue-600 shadow-blue-500/30",
    pink: "bg-pink-500 border-pink-600 shadow-pink-500/30",
    green: "bg-emerald-500 border-emerald-600 shadow-emerald-500/30"
  };

  return (
    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 select-none pointer-events-none">
      {/* 3D Pin Spherical Head */}
      <div className={`w-3.5 h-3.5 rounded-full ${pinColors[color]} shadow-md border relative`}>
        {/* Reflection Highlight */}
        <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-white/70" />
      </div>
      {/* Shadow & Needle stem */}
      <div className="w-[1.5px] h-3.5 bg-neutral-400/80 -mt-0.5 transform rotate-[12deg] origin-top shadow-xs" />
    </div>
  );
}

export default function Hero({ onExploreWork, onAboutMe }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position hooks for full-page parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to avoid jerky movements
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  // Parallax translation maps for various layers to create true depth
  const boardX = useTransform(springX, [-1, 1], [-8, 8]);
  const boardY = useTransform(springY, [-1, 1], [-8, 8]);

  // Different notes float with unique parallax coefficients
  const note1X = useTransform(springX, [-1, 1], [-18, 18]);
  const note1Y = useTransform(springY, [-1, 1], [-18, 18]);

  const note2X = useTransform(springX, [-1, 1], [15, -15]);
  const note2Y = useTransform(springY, [-1, 1], [-15, 15]);

  const note3X = useTransform(springX, [-1, 1], [-22, 22]);
  const note3Y = useTransform(springY, [-1, 1], [22, -22]);

  const note4X = useTransform(springX, [-1, 1], [20, -20]);
  const note4Y = useTransform(springY, [-1, 1], [-20, 20]);

  const centerCardX = useTransform(springX, [-1, 1], [-10, 10]);
  const centerCardY = useTransform(springY, [-1, 1], [10, -10]);

  const bottomCardX = useTransform(springX, [-1, 1], [5, -5]);
  const bottomCardY = useTransform(springY, [-1, 1], [-5, 5]);

  // Handle cursor positioning mapped to range -1 to 1
  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 2 - 1;
    const y = (e.clientY / innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-white text-[#1C1C1C] bg-paper"
      id="hero-section"
    >
      {/* Tiny light dotted grid across the entire background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#1C1C1C 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Underlay Blueprint outline behind the name */}
      <div className="absolute left-[3%] top-[14%] w-[320px] h-[220px] pointer-events-none select-none opacity-[0.04] border border-[#1C1C1C] rounded-xl rotate-[-4deg] p-4 hidden xl:block">
        <div className="w-full h-full border border-dashed border-[#1C1C1C]/60 flex flex-col justify-between p-3">
          <span className="font-mono text-[9px] font-bold tracking-widest">[ SYSTEM_SPEC_V2 ]</span>
          <div className="w-16 h-2 bg-[#1C1C1C]/40 rounded" />
          <span className="font-mono text-[7px] text-right">GRID: 12-COL</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* LEFT COLUMN: Editorial Typography & Copy */}
        <div className="lg:col-span-5 flex flex-col items-start text-left relative z-20" id="hero-left">
          
          {/* Small handwritten green greeting */}
          <motion.div
            initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -5, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-1 pl-1"
          >
            <span className="font-hand text-[38px] sm:text-[44px] text-[#10B981] font-bold tracking-wide select-none">
              Hello, I'm
            </span>
          </motion.div>

          {/* Bold Name Typography */}
          <div className="relative mb-6 select-none" id="name-heading-container">
            <h1 className="font-display text-[70px] sm:text-[88px] md:text-[98px] lg:text-[104px] xl:text-[116px] tracking-[-0.04em] leading-[0.82] text-[#1C1C1C]">
              <div className="overflow-hidden h-fit inline-block">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block font-black"
                >
                  NEHA
                </motion.span>
              </div>
              <br />
              <div className="overflow-hidden h-fit inline-block relative pr-3 pb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block relative font-serif italic font-light text-neutral-800"
                >
                  Sharma
                  {/* Under the name add a green underline */}
                  <svg
                    className="absolute left-0 -bottom-2 w-[100%] h-3 text-[#10B981] pointer-events-none"
                    viewBox="0 0 320 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M 5 11 Q 160 3, 315 9"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                    />
                  </svg>
                </motion.span>
              </div>
            </h1>
          </div>

          {/* Description Paragraph with Green underlines */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-sans text-[17px] sm:text-[19px] leading-[1.65] text-[#1C1C1C]/90 max-w-[490px] mb-8 font-medium"
            id="hero-desc"
          >
            I design enterprise SaaS products that{" "}
            <span className="relative inline-block px-1 font-bold text-neutral-900">
              simplify
              <svg className="absolute left-0 -bottom-0.5 w-full h-1 text-[#10B981]/95 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                <motion.path d="M 2 5 Q 50 1, 98 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.5 }} />
              </svg>
            </span>{" "}
            complex workflows,{" "}
            <span className="relative inline-block px-1 font-bold text-neutral-900">
              transform
              <svg className="absolute left-0 -bottom-0.5 w-full h-1 text-[#10B981]/95 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                <motion.path d="M 2 4 C 35 8, 65 3, 98 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 0.5 }} />
              </svg>
            </span>{" "}
            operations, and create{" "}
            <span className="relative inline-block px-1 font-bold text-neutral-900">
              measurable
              <svg className="absolute left-0 -bottom-0.5 w-full h-1 text-[#10B981]/95 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                <motion.path d="M 3 5 Q 45 9, 97 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 0.5 }} />
              </svg>
            </span>{" "}
            business impact.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <motion.button
              onClick={onExploreWork}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#10B981] text-white rounded-full font-sans font-bold text-[16px] flex items-center gap-2 shadow-[0_4px_18px_rgba(16,185,129,0.22)] hover:bg-[#059669] transition-all group cursor-pointer border border-[#10B981]"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Layered design board with identical composition of reference image */}
        <div 
          className="lg:col-span-7 flex flex-col items-center justify-center relative w-full lg:h-[650px] min-h-[580px] mt-8 lg:mt-0 select-none" 
          id="hero-right"
        >
          {/* Main design board: translucent glass panel with rounded corners */}
          <motion.div
            style={{ x: boardX, y: boardY }}
            className="relative w-full aspect-[4/3] max-w-[780px] bg-white/40 backdrop-blur-[3px] border border-white/60 rounded-[32px] shadow-[0_15px_45px_rgba(0,0,0,0.03),_inset_0_2px_10px_rgba(255,255,255,0.8)] overflow-hidden p-6"
            id="board-container"
          >
            
            {/* Elegant curved red bezier connecting lines layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
              
              {/* String 1: Blue Sticky Note (top-left) to Yellow Sticky Note (top-right) */}
              <motion.path
                d="M 220 120 C 340 70, 480 70, 540 100"
                stroke="#EF4444"
                strokeWidth="1.5"
                fill="none"
                opacity="0.65"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />

              {/* String 2: Yellow Sticky Note to Center Venn Diagram Card */}
              <motion.path
                d="M 540 110 C 440 90, 310 200, 250 280"
                stroke="#EF4444"
                strokeWidth="1.5"
                fill="none"
                opacity="0.65"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />

              {/* String 3: Yellow Sticky Note to Pink Sticky Note */}
              <motion.path
                d="M 640 190 C 655 220, 655 250, 645 285"
                stroke="#EF4444"
                strokeWidth="1.5"
                fill="none"
                opacity="0.65"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              />

              {/* String 4: Center Venn Diagram Card to Bottom Process Card */}
              <motion.path
                d="M 180 400 C 170 440, 200 460, 240 472"
                stroke="#EF4444"
                strokeWidth="1.5"
                fill="none"
                opacity="0.65"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />

              {/* String 5: Pink Sticky Note to Green Sticky Note */}
              <motion.path
                d="M 645 385 C 650 415, 660 435, 650 470"
                stroke="#EF4444"
                strokeWidth="1.5"
                fill="none"
                opacity="0.65"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              />
            </svg>

            {/* HANDWRITTEN MARKER NOTES */}
            {/* "Empathy ✓" */}
            <div className="absolute left-[52%] top-[11%] font-hand text-[22px] font-bold text-sky-600 rotate-[-5deg] tracking-wide pointer-events-none z-15">
              Empathy ✓
            </div>

            {/* "Design is thinking made visible." */}
            <div className="absolute left-[36%] top-[34%] font-hand text-[19px] font-semibold text-[#10B981] rotate-[-3deg] tracking-wide pointer-events-none z-15">
              Design is thinking made visible.
            </div>

            {/* "Clarity ✓" */}
            <div className="absolute left-[51%] top-[48%] font-hand text-[23px] font-bold text-emerald-600 rotate-[8deg] tracking-wide pointer-events-none z-15">
              Clarity ✓
            </div>

            {/* "Systems that scale." */}
            <div className="absolute left-[44%] top-[60%] font-hand text-[17px] font-bold text-neutral-500 rotate-[3deg] tracking-wide pointer-events-none z-15">
              systems that scale.
            </div>

            {/* "Impact ✓" */}
            <div className="absolute left-[52%] top-[78%] font-hand text-[23px] font-bold text-orange-600 rotate-[-4deg] tracking-wide pointer-events-none z-15">
              Impact ✓
            </div>

            {/* CARDS & STICKY NOTES POSITIONED BASED ON THE COMPOSITION */}

            {/* 1. BLUE STICKY NOTE: EXPERIENCE (Top Left) */}
            <motion.div
              style={{ x: note1X, y: note1Y }}
              animate={{ y: [0, -4, 0], rotate: [-4, -3, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotate: "-2deg", zIndex: 40 }}
              className="absolute left-[6%] top-[12%] w-[25%] min-w-[140px] z-20"
            >
              <div className="paper-texture bg-[#D8EDFE] p-4 pb-5 shadow-[0_6px_15px_rgba(0,0,0,0.04),_0_2px_4px_rgba(0,0,0,0.02)] border border-blue-200/55 rounded-[2px] relative text-left">
                <StickPin color="blue" />
                
                <span className="text-[9px] font-mono font-black uppercase tracking-[0.14em] text-blue-900/45 block mb-1">
                  Experience
                </span>
                <h3 className="font-sans text-[22px] sm:text-[24px] font-black leading-none text-blue-950 mb-1">
                  6+ Years
                </h3>
                <p className="text-[11px] sm:text-[12px] font-bold text-blue-900/80 font-sans leading-tight">
                  UX Strategy & Product Thinking
                </p>
              </div>
            </motion.div>

            {/* 2. YELLOW STICKY NOTE: CURRENTLY (Top Right) */}
            <motion.div
              style={{ x: note2X, y: note2Y }}
              animate={{ y: [0, -5, 0], rotate: [3, 4, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.05, rotate: "1deg", zIndex: 40 }}
              className="absolute left-[66%] top-[8%] w-[26%] min-w-[150px] z-20"
            >
              <div className="paper-texture bg-[#FFF0A5] p-4 pb-5 shadow-[0_6px_15px_rgba(0,0,0,0.04),_0_2px_4px_rgba(0,0,0,0.02)] border border-yellow-200/60 rounded-[2px] relative text-left">
                <StickPin color="red" />

                <span className="text-[9px] font-mono font-black uppercase tracking-[0.14em] text-amber-950/45 block mb-1">
                  Currently
                </span>
                <h3 className="font-sans text-[17px] sm:text-[19px] font-black leading-tight text-amber-950 mb-0.5">
                  Senior Product Designer
                </h3>
                <p className="text-[11px] sm:text-[12px] font-bold text-amber-900/85 font-sans">
                  Enterprise SaaS & AI
                </p>
              </div>
            </motion.div>

            {/* 3. PINK STICKY NOTE: FOCUS AREAS (Middle Right) */}
            <motion.div
              style={{ x: note3X, y: note3Y }}
              animate={{ y: [0, -4, 0], rotate: [-2, -1, -2] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05, rotate: "-3deg", zIndex: 40 }}
              className="absolute left-[68%] top-[38%] w-[26%] min-w-[150px] z-20"
            >
              <div className="paper-texture bg-[#FCDAE5] p-4 pb-5 shadow-[0_6px_15px_rgba(0,0,0,0.04),_0_2px_4px_rgba(0,0,0,0.02)] border border-pink-200/60 rounded-[2px] relative text-left">
                <StickPin color="pink" />

                <span className="text-[9px] font-mono font-black uppercase tracking-[0.14em] text-pink-950/45 block mb-2">
                  Focus Areas
                </span>
                <div className="space-y-1">
                  {[
                    "AI Products",
                    "Enterprise SaaS",
                    "LegalTech & FinTech",
                    "Workflow Automation",
                    "Design Systems"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10.5px] font-bold text-pink-950/85">
                      <div className="w-1 h-1 rounded-full bg-pink-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 4. GREEN STICKY NOTE: IMPACT I CREATE (Bottom Right) */}
            <motion.div
              style={{ x: note4X, y: note4Y }}
              animate={{ y: [0, -5, 0], rotate: [4, 3, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ scale: 1.05, rotate: "2deg", zIndex: 40 }}
              className="absolute left-[69%] top-[68%] w-[26%] min-w-[150px] z-20"
            >
              <div className="paper-texture bg-[#D8F3DC] p-4 pb-5 shadow-[0_6px_15px_rgba(0,0,0,0.04),_0_2px_4px_rgba(0,0,0,0.02)] border border-emerald-200/60 rounded-[2px] relative text-left">
                <StickPin color="green" />

                <span className="text-[9px] font-mono font-black uppercase tracking-[0.14em] text-emerald-950/45 block mb-2">
                  Impact I Create
                </span>
                <div className="space-y-1">
                  {[
                    "Better User Experience",
                    "Faster Workflows",
                    "Operational Efficiency",
                    "Measurable Growth"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-1 text-[10.5px] font-bold text-emerald-950/85 leading-tight">
                      <span className="text-emerald-600 shrink-0">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 5. CENTER CARD: VENN DIAGRAM (Middle Left - looks like printed paper taped to board) */}
            <motion.div
              style={{ x: centerCardX, y: centerCardY }}
              animate={{ y: [0, -4, 0], rotate: [-1, -2, -1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              whileHover={{ scale: 1.03, rotate: "-1deg", zIndex: 40 }}
              className="absolute left-[5%] top-[45%] w-[32%] min-w-[180px] z-25"
            >
              <div className="bg-white border border-neutral-200/85 p-3.5 pb-4.5 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.04)] relative text-center">
                
                {/* Translucent Frosted Masking Tape Detail */}
                <div className="absolute -top-3 left-[20%] w-14 h-5.5 bg-white/40 border border-white/20 rotate-[-1deg] shadow-xs z-10 backdrop-blur-[0.5px]" />

                <h4 className="font-mono text-[8px] font-extrabold text-neutral-800 uppercase tracking-wider mb-2 pb-1 border-b border-dashed border-neutral-150">
                  DESIGNING CLARITY FROM COMPLEXITY
                </h4>

                {/* Overlapping Venn Diagram */}
                <div className="flex justify-center items-center h-20 my-1 relative">
                  <svg viewBox="0 0 120 120" className="w-20 h-20 overflow-visible">
                    {/* Circle 1: Users (Top blue) */}
                    <circle cx="60" cy="45" r="26" fill="#3B82F6" fillOpacity="0.18" stroke="#2563EB" strokeWidth="0.8" />
                    {/* Circle 2: Business (Bottom left yellow) */}
                    <circle cx="44" cy="71" r="26" fill="#FBBF24" fillOpacity="0.18" stroke="#D97706" strokeWidth="0.8" />
                    {/* Circle 3: Technology (Bottom right pink) */}
                    <circle cx="76" cy="71" r="26" fill="#EC4899" fillOpacity="0.18" stroke="#DB2777" strokeWidth="0.8" />

                    {/* Minimal labels */}
                    <text x="60" y="32" textAnchor="middle" fontSize="5.5" fontWeight="black" fill="#1E40AF" className="font-sans">User Needs</text>
                    <text x="29" y="83" textAnchor="middle" fontSize="5.5" fontWeight="black" fill="#92400E" className="font-sans">Business</text>
                    <text x="91" y="83" textAnchor="middle" fontSize="5.5" fontWeight="black" fill="#86198F" className="font-sans">Success</text>
                  </svg>
                  
                  {/* Connected green PRODUCT SUCCESS badge */}
                  <div className="absolute right-[-4px] top-[44%] transform translate-x-1/2 scale-90 sm:scale-100 z-10">
                    <span className="bg-[#10B981] text-white font-sans text-[8px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider block">
                      Product Success
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 6. BOTTOM CARD: MY DESIGN PROCESS (Bottom Left / Center) */}
            <motion.div
              style={{ x: bottomCardX, y: bottomCardY }}
              animate={{ y: [0, -3, 0], rotate: [1, 0, 1] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              whileHover={{ scale: 1.02, rotate: "0.5deg", zIndex: 40 }}
              className="absolute left-[5%] top-[77%] w-[60%] z-20"
            >
              <div className="bg-white border border-neutral-200/80 p-3 px-4 rounded-xl shadow-[0_8px_22px_rgba(0,0,0,0.03)] relative text-left">
                
                {/* Thin piece of tape holding down the bottom card */}
                <div className="absolute -top-2.5 right-[15%] w-10 h-4.5 bg-white/35 border border-white/20 rotate-[3deg] shadow-xs z-10" />

                <span className="text-[8.5px] font-mono font-black uppercase tracking-[0.14em] text-neutral-400 block mb-2">
                  My Design Process
                </span>

                {/* 6 Horizontal Steps with micro colorful icons */}
                <div className="grid grid-cols-6 gap-1.5 text-center">
                  {[
                    { label: "Research", icon: Search, color: "text-blue-500 bg-blue-50" },
                    { label: "Strategy", icon: Compass, color: "text-purple-500 bg-purple-50" },
                    { label: "Design", icon: Palette, color: "text-amber-500 bg-amber-50" },
                    { label: "Prototype", icon: Layers, color: "text-fuchsia-500 bg-fuchsia-50" },
                    { label: "Validate", icon: CheckCircle2, color: "text-emerald-500 bg-emerald-50" },
                    { label: "Impact", icon: Award, color: "text-orange-500 bg-orange-50" }
                  ].map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center relative">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${step.color} border border-neutral-100 shadow-2xs mb-1.5`}>
                          <StepIcon className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
                        </div>
                        <span className="font-sans text-[8px] font-black text-neutral-700 block">
                          {step.label}
                        </span>
                        
                        {/* Connecting little arrows between steps */}
                        {idx < 5 && (
                          <div className="absolute right-[-10px] top-[14%] text-neutral-300 font-mono text-[9px] pointer-events-none hidden md:block">
                            →
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
