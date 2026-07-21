import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function WorkspaceBackground() {
  // Parallax mouse tracker
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor parallax
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  // Different parallax depths to create a rich 3D layer feeling
  const layer1X = useTransform(springX, [-1, 1], [-12, 12]);
  const layer1Y = useTransform(springY, [-1, 1], [-12, 12]);

  const layer2X = useTransform(springX, [-1, 1], [18, -18]);
  const layer2Y = useTransform(springY, [-1, 1], [18, -18]);

  const layer3X = useTransform(springX, [-1, 1], [-25, 25]);
  const layer3Y = useTransform(springY, [-1, 1], [-25, 25]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1; // Range: -1 to 1
      const y = (e.clientY / window.innerHeight) * 2 - 1; // Range: -1 to 1
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-[0.15]"
      id="workspace-illustrated-bg"
    >
      {/* 
        High-fidelity organic drawing paper fiber texture overlay
      */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 
        Slightly organic dot grid overlay 
        This is a designer's dot-grid notebook page texture.
      */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#141414 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ==========================================
          LAYER 1: Softest, furthest background elements
          ========================================== */}
      <motion.div 
        style={{ x: layer1X, y: layer1Y }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Figma Outline Logo - Top Left */}
        <motion.div 
          animate={{ y: [0, -6, 0], rotate: [-10, -11, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] left-[8%] w-16 h-24 hover:rotate-[-5deg] transition-transform duration-300 origin-center"
        >
          <svg viewBox="0 0 100 150" fill="none" className="w-full h-full stroke-neutral-400 stroke-[1.5]">
            {/* Outline Figma letters/shapes */}
            <path d="M 25,25 A 25,25 0 0,1 75,25 A 25,25 0 0,1 25,25" />
            <path d="M 25,75 A 25,25 0 0,1 75,75 A 25,25 0 0,1 25,75" />
            <path d="M 25,125 A 25,25 0 0,1 75,125 A 25,25 0 0,1 25,125" />
            <path d="M 25,75 A 25,25 0 0,1 25,25 Z" />
            <path d="M 75,75 A 25,25 0 0,1 75,25 Z" />
            <circle cx="25" cy="75" r="25" strokeDasharray="3 3" />
            <path d="M 25,125 A 25,25 0 0,1 25,75 Z" />
          </svg>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-[7px] text-neutral-400">FIGMA.SPEC</span>
        </motion.div>

        {/* Enterprise Dashboard Outline Wireframe - Left Edge Clipping */}
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [-3, -4, -3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[35%] -left-[5%] w-[280px] bg-white/40 border border-neutral-300 rounded-lg p-3 shadow-xs"
        >
          {/* Top header */}
          <div className="flex items-center justify-between border-b border-neutral-300 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full border border-neutral-400" />
              <div className="w-16 h-2 bg-neutral-200 rounded" />
            </div>
            <div className="w-8 h-2.5 border border-neutral-300 rounded-sm" />
          </div>
          {/* Main layout */}
          <div className="grid grid-cols-12 gap-2">
            {/* Sidebar outline */}
            <div className="col-span-3 border-r border-neutral-300 pr-1.5 space-y-1.5">
              <div className="w-full h-2 bg-neutral-300 rounded-xs" />
              <div className="w-3/4 h-1.5 bg-neutral-200 rounded-xs" />
              <div className="w-5/6 h-1.5 bg-neutral-200 rounded-xs" />
              <div className="w-2/3 h-1.5 bg-neutral-200 rounded-xs" />
            </div>
            {/* Dashboard content */}
            <div className="col-span-9 space-y-2">
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-8 border border-neutral-300 rounded-sm flex flex-col justify-center p-1">
                  <div className="w-4 h-1.5 bg-neutral-200 mb-1" />
                  <div className="w-8 h-2.5 bg-neutral-300 rounded-xs" />
                </div>
                <div className="h-8 border border-neutral-300 rounded-sm flex flex-col justify-center p-1">
                  <div className="w-5 h-1.5 bg-neutral-200 mb-1" />
                  <div className="w-6 h-2.5 bg-neutral-300 rounded-xs" />
                </div>
                <div className="h-8 border border-neutral-300 rounded-sm flex flex-col justify-center p-1">
                  <div className="w-3 h-1.5 bg-neutral-200 mb-1" />
                  <div className="w-7 h-2.5 bg-neutral-300 rounded-xs" />
                </div>
              </div>
              {/* Wireframe Line Graph */}
              <div className="h-16 border border-neutral-300 rounded-sm relative p-1">
                <div className="absolute top-1 left-1 w-12 h-1.5 bg-neutral-200" />
                <svg viewBox="0 0 100 40" className="w-full h-full stroke-neutral-400 stroke-[1.5] fill-none mt-1">
                  <path d="M 0,35 L 20,25 L 40,30 L 60,15 L 80,20 L 100,5" />
                  <line x1="0" y1="35" x2="100" y2="35" stroke="#ccc" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="20" cy="25" r="1.5" className="fill-neutral-400" />
                  <circle cx="60" cy="15" r="1.5" className="fill-neutral-400" />
                </svg>
              </div>
            </div>
          </div>
          <span className="absolute -bottom-4 right-2 font-mono text-[6px] text-neutral-400">[ ENT_DSB_V04 ]</span>
        </motion.div>

        {/* Dynamic Legal Document Outline & AI Spark Icon - Top Right */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [10, 8, 10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[10%] right-[12%] w-[180px] bg-white/30 border border-neutral-300 rounded-lg p-3"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[7px] text-neutral-400">COMPLIANCE.DOC</span>
            {/* AI Spark icon outline */}
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 stroke-neutral-400 stroke-2">
              <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828M5.636 18.364l2.828-2.828M15.536 8.464l2.828-2.828" strokeLinecap="round" />
            </svg>
          </div>
          {/* Mock lines of code / document structure with highlighted block */}
          <div className="space-y-1.5">
            <div className="w-full h-1 bg-neutral-300 rounded" />
            <div className="w-5/6 h-1 bg-neutral-200 rounded" />
            <div className="w-11/12 h-3 border border-dashed border-neutral-300 rounded flex items-center justify-between px-1 bg-neutral-100/30">
              <div className="w-12 h-1 bg-neutral-400 rounded" />
              <div className="w-4 h-2 bg-neutral-300 rounded-xs" />
            </div>
            <div className="w-3/4 h-1 bg-neutral-200 rounded" />
            <div className="w-4/5 h-1 bg-neutral-200 rounded" />
          </div>
        </motion.div>

        {/* Workflow Nodes & Automations flowchart - Middle Left */}
        <div className="absolute top-[65%] left-[6%] w-[220px]">
          <svg viewBox="0 0 200 120" className="w-full h-full fill-none stroke-neutral-300 stroke-[1.5]">
            {/* Node 1 */}
            <rect x="10" y="45" width="40" height="25" rx="4" className="fill-white stroke-neutral-400" />
            <line x1="18" y1="53" x2="35" y2="53" className="stroke-neutral-300" strokeWidth="2" />
            <line x1="18" y1="60" x2="28" y2="60" className="stroke-neutral-300" strokeWidth="1.5" />
            
            {/* Curved Connector */}
            <path d="M 50,57 C 80,57 70,25 100,25" strokeDasharray="3 3" className="stroke-neutral-400" />
            <polygon points="100,25 96,22 96,28" className="fill-neutral-400 stroke-none" />

            {/* Curved Connector 2 */}
            <path d="M 50,57 C 80,57 70,90 100,90" strokeDasharray="3 3" className="stroke-neutral-400" />
            <polygon points="100,90 96,87 96,93" className="fill-neutral-400 stroke-none" />

            {/* Node 2 (top) */}
            <rect x="100" y="10" width="45" height="30" rx="4" className="fill-white stroke-neutral-400" />
            <circle cx="112" cy="25" r="3" className="stroke-neutral-400" />
            <line x1="120" y1="25" x2="135" y2="25" className="stroke-neutral-300" />

            {/* Node 3 (bottom) */}
            <rect x="100" y="75" width="45" height="30" rx="4" className="fill-white stroke-neutral-400" />
            {/* Miniature list inside */}
            <line x1="108" y1="85" x2="132" y2="85" className="stroke-neutral-300" />
            <line x1="108" y1="92" x2="124" y2="92" className="stroke-neutral-300" />
          </svg>
          <span className="absolute bottom-2 left-4 font-mono text-[6px] text-neutral-400">WORKFLOW_ENGINE_MAP</span>
        </div>

        {/* Analytics Charts & Bar graphs - Bottom Right */}
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [-4, -3, -4] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute bottom-[8%] right-[5%] w-[250px] bg-white/40 border border-neutral-300 rounded-lg p-3 shadow-xs"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="w-14 h-2 bg-neutral-300 rounded" />
            <div className="w-8 h-2 bg-neutral-200 rounded" />
          </div>
          <div className="grid grid-cols-12 gap-3 items-end h-20 pt-2 border-b border-neutral-200">
            {/* Bar charts outline */}
            {[20, 45, 30, 60, 40, 75, 50, 90, 65, 80].map((h, i) => (
              <div 
                key={i} 
                className="bg-neutral-300/60 border border-neutral-400/80 rounded-t-sm"
                style={{ height: `${h}%`, width: "100%", gridColumn: `span 1` }}
              />
            ))}
            {/* Overlay target indicator line */}
            <div className="absolute left-0 right-0 top-[45%] h-[1px] border-t border-dashed border-neutral-400 opacity-60 pointer-events-none" />
          </div>
          <div className="flex items-center justify-between mt-1.5 font-mono text-[6px] text-neutral-400">
            <span>[ SYSTEM_IO_LOAD ]</span>
            <span>98.4% EFFICIENCY</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ==========================================
          LAYER 2: Mid-ground floating artifacts
          ========================================== */}
      <motion.div 
        style={{ x: layer2X, y: layer2Y }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Wireframe Mobile Screen - Right Edge Clipping */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [8, 10, 8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[32%] -right-[3%] w-[210px] bg-white/50 border-[2.5px] border-neutral-400/80 rounded-[24px] p-3 shadow-sm h-[380px] flex flex-col justify-between"
        >
          {/* Phone speaker & camera notch */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-neutral-400 rounded-full" />
          </div>

          {/* Wireframe Mobile UI Content */}
          <div className="flex-1 space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-300 pb-2">
              <div className="w-3 h-3 rounded-full bg-neutral-300" />
              <div className="w-16 h-2.5 bg-neutral-300 rounded" />
              <div className="w-4 h-4 rounded border border-neutral-300" />
            </div>

            {/* Card block with layout guide lines */}
            <div className="border border-neutral-300 rounded-lg p-2 bg-neutral-50/50">
              <div className="w-12 h-2 bg-neutral-300 rounded mb-1.5" />
              <div className="w-full h-1 bg-neutral-200 rounded mb-1" />
              <div className="w-5/6 h-1 bg-neutral-200 rounded mb-3" />
              
              {/* Crossed Image Placeholder wireframe */}
              <div className="h-16 border border-neutral-300 rounded bg-white relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full stroke-neutral-200" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" />
                  <line x1="100" y1="0" x2="0" y2="100" />
                </svg>
                <div className="w-4 h-4 rounded-full border border-neutral-400 bg-white z-10" />
              </div>
            </div>

            {/* Inputs & form wireframe elements */}
            <div className="space-y-1.5">
              <div className="h-5 border border-neutral-300 rounded px-1.5 flex items-center bg-white justify-between">
                <div className="w-16 h-1.5 bg-neutral-200 rounded" />
                <div className="w-2.5 h-1.5 bg-neutral-300 rounded" />
              </div>
              <div className="h-5 bg-neutral-400 rounded flex items-center justify-center">
                <div className="w-10 h-1.5 bg-white rounded" />
              </div>
            </div>
          </div>

          {/* Home indicator button bar */}
          <div className="flex justify-center mt-3">
            <div className="w-16 h-1 bg-neutral-400 rounded-full" />
          </div>
        </motion.div>

        {/* Color Palette Cards / Design Tokens - Bottom Left */}
        <motion.div
          animate={{ y: [0, 6, 0], rotate: [-6, -4, -6] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-[16%] left-[12%] flex items-center gap-2 bg-white/50 border border-neutral-300 p-2.5 rounded-lg shadow-xs"
        >
          <div className="text-left">
            <div className="font-mono text-[6px] text-neutral-400 mb-1.5">TOKENS / PALETTE</div>
            <div className="flex gap-1.5">
              {[
                { hex: "#FAF9F5", border: "border-neutral-400" },
                { hex: "#E5E5E5", border: "border-neutral-400" },
                { hex: "#A3A3A3", border: "border-neutral-400" },
                { hex: "#404040", border: "border-neutral-500" }
              ].map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded ${c.border} border bg-white`} style={{ backgroundColor: c.hex }} />
                  <span className="font-mono text-[5px] text-neutral-400 mt-1">{c.hex}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* User Persona Stack & Journey Snippet - Left Edge/Upper middle */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[26%] left-[22%] w-[150px]"
        >
          {/* Avatar bubbles connected */}
          <div className="flex items-center -space-x-1.5 mb-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full border border-neutral-400 bg-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 stroke-neutral-400">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                </svg>
              </div>
            ))}
            <div className="w-4 h-4 rounded-full border border-dashed border-neutral-400 bg-neutral-50 flex items-center justify-center">
              <span className="text-[6px] font-mono text-neutral-400">+</span>
            </div>
          </div>
          <div className="h-[1px] w-16 bg-neutral-300 border-t border-dashed" />
          <span className="font-mono text-[6px] text-neutral-400 block mt-1">COHORT_SEGMENT_A</span>
        </motion.div>

        {/* Interactive Checkbox & Radio Buttons Block - Bottom Left */}
        <div className="absolute bottom-[28%] left-[20%] space-y-1.5">
          <div className="flex items-center gap-1.5">
            {/* Outline checked box */}
            <div className="w-3.5 h-3.5 border border-neutral-400 rounded-sm flex items-center justify-center bg-white">
              <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5 stroke-neutral-600 stroke-[3]">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="w-14 h-1.5 bg-neutral-300 rounded" />
          </div>
          <div className="flex items-center gap-1.5">
            {/* Outline radio button */}
            <div className="w-3.5 h-3.5 border border-neutral-400 rounded-full flex items-center justify-center bg-white">
              <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />
            </div>
            <div className="w-10 h-1.5 bg-neutral-200 rounded" />
          </div>
        </div>
      </motion.div>

      {/* ==========================================
          LAYER 3: Nearest foreground decorative nodes (very subtle)
          ========================================== */}
      <motion.div 
        style={{ x: layer3X, y: layer3Y }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Calendar Widget Wireframe - Middle Right */}
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [-2, 0, -2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[52%] right-[22%] w-[160px] bg-white/40 border border-neutral-300 rounded-lg p-2.5 shadow-xs"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-1.5 bg-neutral-300 rounded" />
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full border border-neutral-400" />
              <div className="w-2 h-2 rounded-full border border-neutral-400" />
            </div>
          </div>
          {/* Dot grid calendar representation */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 28 }).map((_, i) => {
              const isActive = i === 13;
              return (
                <div 
                  key={i} 
                  className={`aspect-square rounded-xs border flex items-center justify-center text-[5px] ${
                    isActive 
                      ? "bg-neutral-600 text-white border-neutral-600" 
                      : "bg-white/80 border-neutral-200 text-neutral-400"
                  }`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Cursor pointer outline with dynamic prototype connection line - Bottom Right */}
        <div className="absolute bottom-[28%] right-[16%]">
          <svg viewBox="0 0 140 100" fill="none" className="w-32 h-24 stroke-neutral-400 stroke-[1.5]">
            {/* Cursor symbol */}
            <path d="M10,10 L22,35 L17,25 L32,25 Z" className="fill-white stroke-neutral-500" />
            
            {/* Target Card Outline */}
            <rect x="70" y="35" width="55" height="30" rx="4" className="fill-white/80 stroke-neutral-400" />
            <line x1="78" y1="45" x2="105" y2="45" className="stroke-neutral-300" />
            <line x1="78" y1="52" x2="95" y2="52" className="stroke-neutral-300" />

            {/* Dotted Prototype Connector Arrow */}
            <path d="M 18,22 C 35,40 50,50 65,50" strokeDasharray="3 3" className="stroke-neutral-400" />
            <polygon points="68,50 62,47 62,53" className="fill-neutral-400 stroke-none" />
          </svg>
          <span className="absolute top-1/2 left-3 font-mono text-[5px] text-neutral-400">PROTOTYPE_LINK</span>
        </div>

        {/* Auto Layout Indicator & Component library Specs - Top Center/Right */}
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [2, 3, 2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[14%] right-[32%] w-[140px] bg-white/50 border border-dashed border-neutral-300 rounded p-2 text-left"
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            {/* Custom auto layout icon */}
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-neutral-500">
              <rect x="2" y="2" width="12" height="12" rx="1" />
              <path d="M5 2v12M11 2v12M2 8h12" strokeDasharray="2 2" />
            </svg>
            <span className="font-mono text-[6px] text-neutral-400">AUTO-LAYOUT</span>
          </div>
          <div className="w-full h-1 bg-neutral-300 rounded mb-1" />
          <div className="w-5/6 h-1 bg-neutral-200 rounded" />
        </motion.div>

        {/* Filter Chips / Search Chips - Bottom Right Edge */}
        <div className="absolute bottom-[36%] right-[8%] flex gap-1.5">
          <div className="px-2 py-0.5 border border-neutral-400 rounded-full bg-white/60 text-[6px] font-mono text-neutral-500 flex items-center gap-1 shadow-xs">
            <span>Filter: Active</span>
            <span className="text-[5px]">×</span>
          </div>
          <div className="px-2 py-0.5 border border-dashed border-neutral-300 rounded-full bg-white/30 text-[6px] font-mono text-neutral-400">
            <span>+ Add Rule</span>
          </div>
        </div>

        {/* Kanban Board / Pipeline Cards Snippet - Left Edge/Lower middle */}
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [-2, -3, -2] }}
          transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
          className="absolute top-[48%] left-[10%] w-[190px] bg-white/40 border border-neutral-300 rounded-lg p-2.5 shadow-xs text-left"
        >
          <div className="grid grid-cols-2 gap-2 h-20">
            {/* Column 1 */}
            <div className="border-r border-neutral-200 pr-1.5">
              <div className="w-12 h-1.5 bg-neutral-300 rounded mb-2" />
              {/* Kanban card 1 */}
              <div className="border border-neutral-300 rounded p-1 bg-white mb-1.5">
                <div className="w-full h-1 bg-neutral-300 rounded mb-1" />
                <div className="w-4/5 h-1 bg-neutral-200 rounded" />
              </div>
              {/* Kanban card 2 */}
              <div className="border border-neutral-300 rounded p-1 bg-white">
                <div className="w-3/4 h-1 bg-neutral-200 rounded" />
              </div>
            </div>
            {/* Column 2 */}
            <div className="pl-1.5">
              <div className="w-10 h-1.5 bg-neutral-300 rounded mb-2" />
              {/* Kanban card 3 */}
              <div className="border border-neutral-300 rounded p-1 bg-white">
                <div className="w-full h-1 bg-neutral-300 rounded mb-1" />
                <div className="w-5/6 h-1 bg-neutral-200 rounded" />
              </div>
            </div>
          </div>
          <span className="absolute bottom-1 right-2 font-mono text-[5px] text-neutral-400">KANBAN_GRID</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
