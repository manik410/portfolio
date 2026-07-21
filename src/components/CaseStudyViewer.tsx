import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, Check, AlertCircle, Play, RefreshCw, 
  Layers, Search, Activity, Users, Clock, Cpu, 
  Settings, ZoomIn, ZoomOut, Sparkles, ChevronRight, 
  Compass, AlertTriangle, ArrowUpRight, HelpCircle, FileText, BarChart2
} from "lucide-react";
import { caseStudiesData, CaseStudyData, FindingNote } from "../caseStudiesData";
import LegalPortfolioCaseStudy from "./LegalPortfolioCaseStudy";

interface CaseStudyViewerProps {
  projectId: string;
  onClose: () => void;
}

export default function CaseStudyViewer({ projectId, onClose }: CaseStudyViewerProps) {
  if (projectId === "legal-portfolio") {
    return <LegalPortfolioCaseStudy onClose={onClose} />;
  }
  const data: CaseStudyData = caseStudiesData[projectId] || caseStudiesData["ai-workflow"];
  
  // Navigation & Active Section tracking
  const [activeSectionId, setActiveSectionId] = useState("section-overview");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const chapters = [
    { num: "01", name: "Project Overview", id: "section-overview" },
    { num: "02", name: "The Challenge", id: "section-challenge" },
    { num: "03", name: "Understanding Users", id: "section-research" },
    { num: "04", name: "Key Insights", id: "section-findings" },
    { num: "05", name: "Meet the Users", id: "section-meet-the-users" },
    { num: "06", name: "Defining the Solution", id: "section-opportunity" },
    { num: "07", name: "How It Works", id: "section-how-it-works" },
    { num: "08", name: "Final Solution", id: "section-solutions" },
    { num: "09", name: "Results & Impact", id: "section-results" },
    { num: "10", name: "What I Learned", id: "section-reflections" }
  ];

  // Intersection Observer to highlight active sidebar chapter on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -55% 0px" }
    );

    chapters.forEach((chap) => {
      const el = document.getElementById(chap.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [projectId]);

  // Handle container scroll for progress bar
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const progress = (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
    setScrollProgress(progress);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic Interactive Simulator State
  const simConfig = data.solutions.simulator;
  const [nodes, setNodes] = useState(simConfig.initialNodes);
  const [isRunning, setIsRunning] = useState(false);
  const [runProgress, setRunProgress] = useState(0);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);

  // Reset simulator when projectId changes
  useEffect(() => {
    setNodes(simConfig.initialNodes);
    setIsRunning(false);
    setRunProgress(0);
    setSimulationLogs([]);
  }, [projectId]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setRunProgress(0);
    setSimulationLogs([simConfig.logs.start, "Initializing system diagnostic parameters... 100% stable."]);

    // Reset status to idle first
    setNodes(prev => prev.map(n => ({ ...n, status: "idle" })));

    // Sequential setTimeout queue to process each node
    const steps = simConfig.logs.steps;
    
    // Step 0: Set first node to running
    setNodes(prev => prev.map((n, idx) => idx === 0 ? { ...n, status: "running" } : n));

    steps.forEach((step, index) => {
      setTimeout(() => {
        // Resolve current node
        setNodes(prev => prev.map((n, idx) => idx === step.nodeIndex - 1 ? { ...n, status: "success" } : n));
        
        // Start next node if not the last one
        if (step.nodeIndex < nodes.length) {
          setNodes(prev => prev.map((n, idx) => idx === step.nodeIndex ? { ...n, status: "running" } : n));
        }

        // Add log
        setSimulationLogs(prev => [...prev, step.log]);
        setRunProgress(step.progress);

        // Final completion callback on last step
        if (index === steps.length - 1) {
          setTimeout(() => {
            setNodes(prev => prev.map((n, idx) => idx === nodes.length - 1 ? { ...n, status: "success" } : n));
            setSimulationLogs(prev => [...prev, simConfig.logs.end]);
            setIsRunning(false);
            setRunProgress(100);
          }, 1500);
        }
      }, (index + 1) * 1600);
    });
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setRunProgress(0);
    setSimulationLogs([]);
    setNodes(simConfig.initialNodes.map(n => ({ ...n, status: "idle" })));
  };

  // Interactive state for findings details
  const [hoveredFinding, setHoveredFinding] = useState<string | null>(null);

  // Quick helper to choose random rotatings for sticky notes to make it feel organic
  const getRotationClass = (idx: number) => {
    const classes = ["rotate-1", "-rotate-1", "rotate-[1.5deg]", "-rotate-[1.5deg]", "rotate-[2deg]", "-rotate-[2deg]"];
    return classes[idx % classes.length];
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto font-sans text-[#141414] scroll-smooth"
      ref={scrollContainerRef}
      onScroll={handleScroll}
      id="editorial-case-study"
    >
      {/* Subtle paper-like texture and light coordinate grid layout */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #141414 1px, transparent 1px),
            linear-gradient(to bottom, #141414 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Absolute faint accent background gradients */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#FFE66D]/3 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#A7D8FF]/3 blur-[150px] pointer-events-none z-0" />

      {/* TOP HEADER STATUS / PROGRESS BAR */}
      <nav className="sticky top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#141414]/5 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141414]/60 hover:text-[#141414] transition-colors cursor-pointer group"
          id="btn-back-portfolio"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>
        <div className="flex items-center gap-3">
          <span className={`font-mono text-[9px] font-extrabold tracking-widest uppercase bg-[#141414]/5 px-2.5 py-1 rounded border border-black/5`}>
            {data.category}
          </span>
          <span className="font-mono text-[10px] text-neutral-400 font-bold hidden sm:inline">
            NEHA SHARMA / CASE STUDY
          </span>
        </div>

        {/* Scroll Progress Indicator Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-[#FF6B35] transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </nav>

      {/* MAIN DUAL-COLUMN LAYOUT: Sticky Chapters on Left, Rich Scrollable Content on Right */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10" id="main-editorial-grid">
        
        {/* LEFT COLUMN: Sticky Chapters Sidebar (Desktop only) */}
        <aside className="hidden lg:block lg:col-span-3 h-fit sticky top-28 text-left" id="sidebar-chapters">
          <div className="border-l border-[#141414]/10 pl-6 space-y-4">
            <div className="font-mono text-[10px] font-black text-neutral-400 tracking-[0.2em] uppercase mb-6">
              Story Chapters
            </div>
            {chapters.map((chap) => {
              const isActive = activeSectionId === chap.id;
              return (
                <button
                  key={chap.id}
                  onClick={() => scrollToSection(chap.id)}
                  className={`flex items-center gap-3 text-left w-full transition-all duration-300 group py-1 cursor-pointer`}
                  id={`nav-link-${chap.id}`}
                >
                  <span className={`font-mono text-xs font-black transition-colors ${
                    isActive ? "text-[#FF6B35]" : "text-[#141414]/35 group-hover:text-[#141414]/65"
                  }`}>
                    {chap.num}
                  </span>
                  <span className={`text-xs font-medium tracking-tight transition-all duration-300 ${
                    isActive 
                      ? "text-[#141414] translate-x-1.5 font-bold" 
                      : "text-[#141414]/50 group-hover:text-[#141414]/80 group-hover:translate-x-1"
                  }`}>
                    {chap.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sticky Hand Written Annotation Badge */}
          <div className="mt-12 bg-amber-50/75 border border-amber-200/60 p-4 rounded-xl rotate-[-2deg] shadow-xs relative">
            <div className="absolute -top-2.5 left-6 w-5 h-5 rounded-full bg-red-400/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            </div>
            <span className="font-serif italic font-semibold text-xs text-amber-900 block mb-1">
              Editorial Note
            </span>
            <p className="text-[10px] text-amber-800/80 font-light leading-relaxed">
              Every chapter in this review traces Neha's exact design parameters, user shadow studies, and technical compliance boundaries.
            </p>
          </div>
        </aside>

        {/* RIGHT COLUMN: The High-Fidelity Scrolling Case Study Details (9 Columns) */}
        <div className="lg:col-span-9 space-y-28 md:space-y-36" id="right-scrollable-content">
          
          {/* ====================================================
              01 PROJECT OVERVIEW SECTION
              ==================================================== */}
          <section id="section-overview" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              01 / Project Overview
            </span>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="font-mono text-[9px] font-black tracking-widest text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded uppercase">
                {data.category}
              </span>
              <span className="font-mono text-[9px] font-bold text-neutral-500 bg-neutral-100 border border-black/5 px-2.5 py-1 rounded uppercase">
                {data.role}
              </span>
              <span className="font-mono text-[9px] font-bold text-neutral-500 bg-neutral-100 border border-black/5 px-2.5 py-1 rounded uppercase">
                {data.duration}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-[#141414] tracking-tight leading-tight mb-6">
              {data.title}
            </h1>

            <p className="font-serif italic text-lg sm:text-2xl text-neutral-600 font-light leading-relaxed max-w-3xl mb-8">
              "{data.oneLiner}"
            </p>

            {/* Hero Image Frame with coordinates metadata */}
            <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-lg bg-neutral-50 p-1 mb-12 group" id="hero-image-frame">
              {/* Technical crop marks on corner */}
              <div className="absolute top-2 left-2 font-mono text-[8px] text-neutral-400 tracking-widest select-none">[ VISUAL_PREVIEW ]</div>
              <div className="absolute bottom-2 right-2 font-mono text-[8px] text-neutral-400 tracking-widest select-none">[ SCREEN_GRID ]</div>
              
              <img
                src={data.image}
                alt={data.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-video md:aspect-[21/9] object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Tag Badges list */}
            <div className="flex flex-wrap gap-2.5 mb-12">
              {data.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] font-extrabold tracking-wider uppercase bg-white border border-black/5 px-3 py-1.5 rounded-lg shadow-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-8">
              A quick introduction to the project
            </h2>

            {/* Information Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="overview-info-grid">
              {[
                { label: "INDUSTRY / DOMAIN", value: data.overview.industry, icon: <Layers className="w-4 h-4 text-[#FF6B35]" /> },
                { label: "TARGET USERS", value: data.overview.users, icon: <Users className="w-4 h-4 text-blue-500" /> },
                { label: "TEAM CONTEXT", value: data.overview.team, icon: <Users className="w-4 h-4 text-green-500" /> },
                { label: "MY OWNED ROLE", value: data.overview.role, icon: <Compass className="w-4 h-4 text-purple-500" /> },
                { label: "TIMELINE CYCLE", value: data.overview.timeline, icon: <Clock className="w-4 h-4 text-indigo-500" /> },
                { label: "TARGET PLATFORM", value: data.overview.platform, icon: <Settings className="w-4 h-4 text-amber-500" /> }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-black/5 shadow-xs hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    {card.icon}
                    <span className="font-mono text-[8px] font-bold text-neutral-400 tracking-widest uppercase">
                      {card.label}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Deliverables List Card */}
            <div className="mt-6 bg-white p-6 rounded-xl border border-black/5 shadow-xs text-left">
              <span className="font-mono text-[9px] font-black text-neutral-400 tracking-widest uppercase block mb-4">
                CORE SYSTEM DELIVERABLES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.overview.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#FAF9F5] p-3 rounded-lg border border-black/5">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-[11px] font-medium text-neutral-700 leading-relaxed">{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ====================================================
              02 THE CHALLENGE SECTION
              ==================================================== */}
          <section id="section-challenge" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              02 / The Challenge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-8">
              What problem were we trying to solve?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Problem Detail */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-red-50/50 border border-red-200/60 p-6 rounded-2xl relative">
                  <div className="absolute top-4 right-4 text-red-500/20 font-mono text-2xl font-black">X</div>
                  <h4 className="font-mono text-[9px] font-black text-red-600 tracking-widest uppercase mb-2">
                    BUSINESS PROBLEM
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                    {data.challenge.businessProblem}
                  </p>
                </div>

                <div className="bg-amber-50/40 border border-amber-200/50 p-6 rounded-2xl relative">
                  <div className="absolute top-4 right-4 text-amber-500/20 font-mono text-2xl font-black">!</div>
                  <h4 className="font-mono text-[9px] font-black text-amber-800 tracking-widest uppercase mb-2">
                    USER PROBLEM
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                    {data.challenge.userProblem}
                  </p>
                </div>

                <div className="p-2 border-l-2 border-[#FF6B35] pl-4">
                  <h4 className="font-mono text-[9px] font-black text-neutral-400 tracking-widest uppercase mb-1">
                    WHY THIS PROJECT MATTERED
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {data.challenge.whyItMatters}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Targets (Sticky Style) */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white p-6 rounded-2xl border border-black/5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFE66D]/5 rounded-full blur-xl pointer-events-none" />
                <div>
                  <h4 className="font-mono text-[9px] font-black text-neutral-400 tracking-widest uppercase mb-4">
                    KEY SUCCESS KPI TARGETS
                  </h4>
                  <div className="space-y-4">
                    {data.challenge.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                        <span className="text-[11px] font-semibold text-neutral-700 leading-normal">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#141414]/5 pt-4 mt-6 text-[10px] font-mono text-neutral-400 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>TARGETS APPROVED BY STAKEHOLDERS</span>
                </div>
              </div>
            </div>
          </section>

          {/* ====================================================
              03 UNDERSTANDING USERS SECTION
              ==================================================== */}
          <section id="section-research" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              03 / Understanding Users
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
              How I learned about the users and their needs
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-10 text-xs sm:text-sm">
              {data.research.intro}
            </p>

            {/* Methods Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10" id="research-methods-grid">
              {data.research.methods.map((method, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-black/5 text-left">
                  <div className="w-7 h-7 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center mb-3">
                    <Search className="w-4 h-4 text-[#FF6B35]" />
                  </div>
                  <h4 className="font-bold text-xs text-neutral-900 mb-1.5">{method.name}</h4>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>

            {/* Interactive User Shadowing Journey Steps */}
            <div className="bg-[#FAF9F5] border border-black/5 rounded-2xl p-6 relative">
              <span className="font-mono text-[8px] font-extrabold text-neutral-400 tracking-wider block mb-4">
                OBSERVED SHADOW STAGES &amp; PAIN PATH
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {data.research.steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col justify-between bg-white p-4 rounded-xl border border-black/5 shadow-xs relative">
                    <div className="absolute top-2 right-2 font-mono text-[9px] text-[#141414]/25">STAGE 0{idx + 1}</div>
                    <div>
                      <span className="font-mono text-[8px] font-black text-[#FF6B35] uppercase block mb-1">
                        {step.stage}
                      </span>
                      <h4 className="font-bold text-xs text-neutral-800 mb-2 leading-tight">
                        {step.action}
                      </h4>
                      <p className="text-[10px] text-neutral-500 font-light leading-relaxed">
                        <strong>Friction:</strong> {step.pain}
                      </p>
                    </div>
                    
                    <div className="border-t border-[#141414]/5 pt-3 mt-4 flex justify-between items-center text-[9px]">
                      <span className="font-mono font-bold text-neutral-400 uppercase">Emotion Score</span>
                      <span className={`font-semibold uppercase px-1.5 py-0.5 rounded ${
                        step.feeling === "Exhausted" || step.feeling === "Anxious" || step.feeling === "Overwhelmed" || step.feeling === "Frenzied"
                          ? "bg-red-50 text-red-600 border border-red-100" 
                          : "bg-amber-50 text-amber-600 border border-amber-100"
                      }`}>
                        {step.feeling}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Quote Frame */}
            <div className="mt-8 bg-amber-50/20 border border-amber-200/30 rounded-2xl p-6 relative text-left">
              <span className="absolute -top-3 left-6 font-mono text-[8px] font-black bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded">
                Direct User Quote
              </span>
              <p className="font-serif italic text-sm md:text-base text-neutral-700 leading-relaxed mb-3">
                "{data.research.quote}"
              </p>
              <p className="font-mono text-[9px] font-bold text-neutral-400">
                — {data.research.quoteAuthor}
              </p>
            </div>
          </section>

          {/* ====================================================
              04 KEY INSIGHTS SECTION
              ==================================================== */}
          <section id="section-findings" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              04 / Key Insights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              The most important findings from the research
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-10 text-xs sm:text-sm">
              We parsed our user feedback and observation notes into three core insight cards.
            </p>

            {/* Sticky Notes Grid with random organic rotations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative" id="sticky-notes-grid">
              {data.findings.map((finding, idx) => (
                <div
                  key={finding.id}
                  className={`p-6 rounded-xl shadow-md border border-black/5 flex flex-col justify-between transition-all duration-300 min-h-[220px] relative ${finding.color} ${getRotationClass(idx)} hover:rotate-0 hover:scale-[1.02] hover:shadow-lg cursor-default`}
                  onMouseEnter={() => setHoveredFinding(finding.id)}
                  onMouseLeave={() => setHoveredFinding(null)}
                >
                  {/* Subtle Red/Grey Pushpin Icon */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-xs" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3 font-mono text-[8px] font-black text-[#141414]/40">
                      <span>INSIGHT 0{idx + 1}</span>
                      <span>[ PINNED ]</span>
                    </div>
                    <h4 className={`font-bold text-xs mb-2 leading-snug ${finding.textColors.title}`}>
                      {finding.title}
                    </h4>
                    <p className={`text-[10px] font-light leading-relaxed ${finding.textColors.desc}`}>
                      {finding.desc}
                    </p>
                  </div>

                  <div className="border-t border-[#141414]/10 pt-3 mt-4">
                    <span className={`font-mono text-[8px] font-black uppercase tracking-wider block mb-1 ${finding.textColors.imp}`}>
                      IMPLICATION
                    </span>
                    <p className={`text-[10px] font-medium leading-normal ${finding.textColors.title}`}>
                      {finding.implication}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ====================================================
              05 MEET THE USERS SECTION
              ==================================================== */}
          <section id="section-meet-the-users" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              05 / Meet the Users
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              Who are the primary people using this product?
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-10 text-xs sm:text-sm">
              We identified three key user profiles with distinct workloads, goals, and frustrations. Understanding their daily operations allowed us to design workflows that support their specific needs.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="meet-the-users-grid">
              {data.meetTheUsers?.map((user, idx) => (
                <div key={idx} className="bg-white border border-black/5 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 rounded-full pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center font-bold text-sm text-[#FF6B35]">
                        {user.avatarName.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-neutral-900 leading-tight">
                          {user.avatarName}
                        </h4>
                        <span className="font-mono text-[8px] font-bold text-neutral-400 tracking-wider uppercase block">
                          {user.roleName} • {user.avatarTitle}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-neutral-600 font-light leading-relaxed mb-6 border-b border-neutral-100 pb-4">
                      {user.description}
                    </p>

                    <div className="mb-5">
                      <h5 className="font-mono text-[8px] font-black text-green-600 tracking-wider uppercase mb-2">
                        Primary Goals
                      </h5>
                      <div className="space-y-2">
                        {user.goals.map((goal, gIdx) => (
                          <div key={gIdx} className="flex items-start gap-2 text-[10px] text-neutral-700">
                            <Check className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                            <span className="font-light leading-snug">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-mono text-[8px] font-black text-red-600 tracking-wider uppercase mb-2">
                        Key Frustrations
                      </h5>
                      <div className="space-y-2">
                        {user.frustrations.map((frust, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-[10px] text-neutral-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                            <span className="font-light leading-snug">{frust}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-neutral-100 pt-4 mt-6 font-mono text-[7px] text-neutral-400 tracking-widest uppercase flex items-center justify-between">
                    <span>USER PROFILE {idx + 1}</span>
                    <span className="text-green-600">● MAPPED</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ====================================================
              06 DEFINING THE SOLUTION SECTION
              ==================================================== */}
          <section id="section-opportunity" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              06 / Defining the Solution
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
              How I decided what to build and why
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-10 text-xs sm:text-sm">
              We mapped user frictions directly to strategic opportunities, established core design principles, and evaluated alternatives to guide our system build.
            </p>

            {/* Problem -> Insight -> Opportunity -> Outcome Diagram */}
            <h3 className="font-mono text-[10px] font-black text-[#141414]/50 tracking-wider uppercase mb-4">Opportunity Translation Paths</h3>
            <div className="space-y-6 mb-12" id="opportunities-chain">
              {data.opportunities.map((opp, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-black/5 shadow-xs text-left relative overflow-hidden">
                  <div className="absolute top-2 right-2 font-mono text-[9px] text-neutral-300">OPPORTUNITY 0{idx + 1}</div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    
                    {/* Step 1: Problem */}
                    <div>
                      <span className="font-mono text-[8px] font-black text-red-600 uppercase block mb-1">THE FRICTION</span>
                      <p className="text-[11px] text-neutral-700 leading-relaxed font-light">{opp.problem}</p>
                    </div>

                    {/* Arrow / Chevron */}
                    <div className="hidden md:flex justify-center text-neutral-300">
                      <ChevronRight className="w-5 h-5 shrink-0" />
                    </div>

                    {/* Step 2: Insight / Design Opportunity */}
                    <div>
                      <span className="font-mono text-[8px] font-black text-[#FF6B35] uppercase block mb-1">DESIGN OPPORTUNITY</span>
                      <p className="text-[11px] text-neutral-800 leading-relaxed font-semibold">{opp.opportunity}</p>
                    </div>

                    {/* Step 3: Expected Outcome */}
                    <div className="bg-[#FAF9F5] p-3.5 rounded-xl border border-black/5">
                      <span className="font-mono text-[8px] font-black text-green-700 uppercase block mb-1">EXPECTED OUTCOME</span>
                      <p className="text-[11px] text-green-950 leading-relaxed font-medium">{opp.outcome}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Design Principles */}
            <h3 className="font-mono text-[10px] font-black text-[#141414]/50 tracking-wider uppercase mb-4">Product Design Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12" id="design-principles-grid">
              {data.strategy.principles.map((princ, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-black/5 text-left">
                  <div className="font-mono text-xs font-black text-[#FF6B35] mb-2">0{idx + 1}</div>
                  <h4 className="font-bold text-xs text-[#141414] mb-1.5">{princ.title}</h4>
                  <p className="text-[10px] text-neutral-500 font-light leading-relaxed">{princ.desc}</p>
                </div>
              ))}
            </div>

            {/* Prioritization Table */}
            <h3 className="font-mono text-[10px] font-black text-[#141414]/50 tracking-wider uppercase mb-4">Decision Trade-Off Framework</h3>
            <div className="bg-white border border-black/5 rounded-xl overflow-hidden shadow-xs text-left">
              <div className="bg-[#FAF9F5] px-4 py-3 border-b border-black/5 font-mono text-[9px] font-black text-neutral-400">
                FRAMEWORK PRIORITIZATION MATRIX
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-black/5 font-mono text-[9px] text-neutral-400">
                      <th className="px-4 py-3 font-semibold text-left">CRITERIA</th>
                      <th className="px-4 py-3 font-semibold text-left">LEGACY FLOW</th>
                      <th className="px-4 py-3 font-semibold text-left">ALTERNATIVE ACTION</th>
                      <th className="px-4 py-3 font-semibold text-left text-green-700 bg-green-50/40">DESIGNED WINNER</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.strategy.comparison.map((row, idx) => (
                      <tr key={idx} className="border-b border-black/5">
                        <td className="px-4 py-3 font-bold text-neutral-800">{row.criteria}</td>
                        <td className="px-4 py-3 text-neutral-500 font-light">{row.legacy}</td>
                        <td className="px-4 py-3 text-neutral-500 font-light">{row.alternative}</td>
                        <td className="px-4 py-3 font-semibold text-green-950 bg-green-50/25">{row.winner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Wireframe blueprints spec card */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 mt-10 text-left relative overflow-hidden" id="blueprints-card">
              <div className="absolute top-2 right-2 font-mono text-[8px] text-neutral-300">[ SYSTEM_LAYOUT_SPECS ]</div>
              <span className="font-mono text-[8px] font-black text-[#FF6B35] uppercase block mb-4">IN-APP WIREFRAME DESIGN SPECIFICATIONS</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[10px]">
                <div className="p-3 bg-[#FAF9F5] rounded border border-dashed border-black/10">
                  <span className="font-bold block mb-1">LEFT SIDEBAR</span>
                  <p className="text-neutral-500 font-light">{data.solutions.wireframesSpec.left}</p>
                </div>
                <div className="p-3 bg-[#FAF9F5] rounded border border-dashed border-black/10">
                  <span className="font-bold block mb-1">CENTRE GRID</span>
                  <p className="text-neutral-500 font-light">{data.solutions.wireframesSpec.center}</p>
                </div>
                <div className="p-3 bg-[#FAF9F5] rounded border border-dashed border-black/10">
                  <span className="font-bold block mb-1">RIGHT INSPECTOR</span>
                  <p className="text-neutral-500 font-light">{data.solutions.wireframesSpec.right}</p>
                </div>
              </div>
            </div>
          </section>

          {/* ====================================================
              07 HOW IT WORKS SECTION
              ==================================================== */}
          <section id="section-how-it-works" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              07 / How It Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
              Show the workflow, process, and system in a simple visual way
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-8 text-xs sm:text-sm">
              We mapped the complete system architecture, clarifying how system nodes coordinate data inputs to auto-generate actions.
            </p>

            {/* Ecosystem flowchart */}
            <h3 className="font-mono text-[10px] font-black text-[#141414]/50 tracking-wider uppercase mb-4">System Entity Architecture</h3>
            <div className="bg-[#FAF9F5] border border-black/10 rounded-2xl p-6 md:p-8 relative mb-12">
              <div className="absolute top-2 left-2 font-mono text-[8px] text-neutral-400 select-none">[ ENGINE_RELATION_MAP ]</div>
              
              <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 relative z-10">
                {/* Inputs Column */}
                <div className="flex-1 space-y-3 flex flex-col justify-center">
                  <span className="font-mono text-[8px] font-black text-neutral-400 block mb-1 uppercase text-center md:text-left">INPUT LOGS Feed</span>
                  {data.ecosystem.nodes.filter(n => n.type === "input").map((node, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border border-black/5 shadow-xs">
                      <h4 className="font-bold text-[10px] text-neutral-800 mb-0.5">{node.title}</h4>
                      <p className="text-[9px] text-neutral-500 leading-relaxed font-light">{node.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center text-neutral-300">
                  <ChevronRight className="w-5 h-5 rotate-90 md:rotate-0" />
                </div>

                {/* Core Engine Node */}
                <div className="flex-1 flex flex-col justify-center items-center bg-white p-5 rounded-xl border border-[#FF6B35]/30 shadow-md relative">
                  <div className="absolute top-1.5 right-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping inline-block" />
                  </div>
                  <Cpu className="w-6 h-6 text-[#FF6B35] mb-2" />
                  <span className="font-mono text-[8px] font-black text-[#FF6B35] uppercase block mb-1">CORE AUTOMATION SYSTEM</span>
                  <h4 className="font-bold text-xs text-neutral-900 mb-1">{data.ecosystem.engineName}</h4>
                  <p className="text-[9px] text-neutral-500 text-center font-light leading-relaxed max-w-[160px]">
                    Autonomously processes rules and triggers.
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center text-neutral-300">
                  <ChevronRight className="w-5 h-5 rotate-90 md:rotate-0" />
                </div>

                {/* Outputs Column */}
                <div className="flex-1 space-y-3 flex flex-col justify-center">
                  <span className="font-mono text-[8px] font-black text-neutral-400 block mb-1 uppercase text-center md:text-left">SYSTEM DISPATCHES</span>
                  {data.ecosystem.nodes.filter(n => n.type === "output").map((node, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border border-black/5 shadow-xs">
                      <h4 className="font-bold text-[10px] text-neutral-800 mb-0.5">{node.title}</h4>
                      <p className="text-[9px] text-neutral-500 leading-relaxed font-light">{node.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Workflow comparative sequences */}
            <h3 className="font-mono text-[10px] font-black text-[#141414]/50 tracking-wider uppercase mb-4">Manual legacy processes vs. Designed sequences</h3>
            <div className="space-y-6" id="workflow-comparison-cards">
              {data.workflow.steps.map((step, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                  
                  {/* Legacy Card */}
                  <div className="bg-red-50/20 border border-red-200/40 p-5 rounded-xl text-left flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-[8px] font-black text-red-500 uppercase">LEGACY FLOW 0{idx + 1}</span>
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase bg-red-100 text-red-700">Friction</span>
                      </div>
                      <h4 className="font-bold text-xs text-neutral-800 mb-1.5">{step.legacy.title}</h4>
                      <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{step.legacy.desc}</p>
                    </div>
                    <p className="text-[10px] font-semibold text-red-800 italic mt-4">
                      ⚠ {step.legacy.friction}
                    </p>
                  </div>

                  {/* Improved Card */}
                  <div className="bg-green-50/20 border border-green-200/40 p-5 rounded-xl text-left flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-[8px] font-black text-green-700 uppercase">IMPROVED FLOW 0{idx + 1}</span>
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase bg-green-100 text-green-700">Designed</span>
                      </div>
                      <h4 className="font-bold text-xs text-neutral-800 mb-1.5">{step.improved.title}</h4>
                      <p className="text-[10px] text-neutral-500 leading-relaxed font-light">{step.improved.desc}</p>
                    </div>
                    <p className="text-[10px] font-semibold text-green-800 italic mt-4">
                      ✓ {step.improved.benefit}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* ====================================================
              08 FINAL SOLUTION SECTION & INTERACTIVE SIMULATOR
              ==================================================== */}
          <section id="section-solutions" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              08 / Final Solution
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
              The completed product and its main features
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-10 text-xs sm:text-sm">
              {data.solutions.intro}
            </p>

            {/* Core System Modules */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10" id="solutions-features-grid">
              {data.solutions.features.map((feature, idx) => (
                <div key={idx} className="bg-white border border-black/5 p-5 rounded-xl text-left shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-6 h-6 rounded bg-[#FF6B35]/10 flex items-center justify-center font-mono text-[9px] font-bold text-[#FF6B35] mb-3">
                      M0{idx + 1}
                    </div>
                    <h4 className="font-bold text-xs text-neutral-900 mb-1.5 leading-snug">{feature.title}</h4>
                    <p className="text-[10px] text-neutral-500 font-light leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="border-t border-neutral-100 pt-3 mt-4 flex items-center justify-between text-[8px] font-mono text-neutral-400">
                    <span>MODULE READY</span>
                    <span className="text-green-600">● 100% PROTOTYPED</span>
                  </div>
                </div>
              ))}
            </div>

            {/* High-Fidelity Annotated Screens Walkthrough */}
            <h3 className="font-mono text-[10px] font-black text-[#141414]/50 tracking-wider uppercase mb-4">Annotated Product Interface Mockups</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12" id="solution-screens-walkthrough">
              {data.solutions.screens.map((screen, idx) => (
                <div key={idx} className="bg-white border border-black/5 p-5 rounded-2xl text-left shadow-xs hover:shadow-sm transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="font-mono text-xs font-bold text-[#FF6B35]">FRAME 0{idx + 1}</div>
                    <span className="text-neutral-300">•</span>
                    <span className="font-mono text-[9px] text-neutral-400 uppercase">HIGH FIDELITY SPEC</span>
                  </div>
                  <h4 className="font-bold text-xs text-neutral-900 mb-2">{screen.title}</h4>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed mb-4">{screen.desc}</p>
                  <div className="bg-[#FAF9F5] aspect-video rounded-lg border border-black/5 flex items-center justify-center p-2 relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-[0.02]"
                      style={{
                        backgroundImage: "radial-gradient(#141414 0.5px, transparent 0.5px)",
                        backgroundSize: "12px 12px",
                      }}
                    />
                    <div className="absolute top-2 left-2 font-mono text-[7px] text-neutral-400 select-none">[ PREVIEW_SCREEN_MOCKUP ]</div>
                    
                    <div className="w-full h-full flex flex-col justify-between p-4 relative z-10">
                      <div className="flex justify-between items-center bg-white/85 border border-black/5 rounded px-2 py-1 text-[8px] font-mono shadow-xs">
                        <span className="truncate max-w-[120px] font-bold">{screen.title}</span>
                        <span className="text-green-600">● Live Preview</span>
                      </div>
                      
                      <div className="space-y-1.5 my-auto">
                        <div className="h-1 bg-neutral-200/50 rounded w-2/3" />
                        <div className="h-1 bg-neutral-200/30 rounded w-1/2" />
                        <div className="h-1 bg-neutral-200/40 rounded w-3/4" />
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <div className="px-1.5 py-0.5 rounded bg-[#FF6B35]/15 border border-[#FF6B35]/25 text-[#FF6B35] font-mono text-[6px]">
                          Interactive State
                        </div>
                        <div className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-500 font-mono text-[6px]">
                          Figma Linked
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-mono text-[10px] font-black text-[#141414]/50 tracking-wider uppercase mb-4">Interactive Process Simulation</h3>

            {/* THE AWESOME INTERACTIVE SIMULATOR (THE WOW EXPERIENCE!) */}
            <div className="bg-white rounded-2xl border border-black/10 shadow-lg p-6 mb-10 overflow-hidden relative">
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-[#141414]/5 pb-4 mb-6">
                <div>
                  <div className="font-mono text-[9px] font-extrabold tracking-widest text-[#FF6B35] uppercase mb-1">
                    Live System Simulator
                  </div>
                  <h3 className="font-bold text-sm text-neutral-900 leading-tight">
                    {simConfig.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={runSimulation}
                    disabled={isRunning}
                    className={`px-3 py-1.5 rounded-lg font-mono text-[10px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isRunning 
                        ? "bg-neutral-100 text-neutral-400 border border-neutral-200 cursor-not-allowed" 
                        : "bg-[#FF6B35] text-white hover:bg-[#E55B2B]"
                    }`}
                    id="btn-run-simulation"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    {simConfig.buttonLabel}
                  </button>
                  <button 
                    onClick={resetSimulation}
                    className="p-1.5 rounded-lg border border-black/10 bg-white hover:bg-neutral-50 cursor-pointer"
                    title="Reset Simulator"
                    id="btn-reset-simulation"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-neutral-600" />
                  </button>
                </div>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Left side: Node visualizer */}
                <div className="lg:col-span-8 bg-[#FAF9F5] rounded-xl border border-black/5 p-4 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
                  
                  {/* Light grid background */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                      backgroundImage: "radial-gradient(#141414 0.5px, transparent 0.5px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* Flow items */}
                  <div className="flex flex-col items-center gap-4 relative z-10 my-auto py-2">
                    {nodes.map((node, index) => {
                      let statusBg = "bg-white border-black/10 text-neutral-500";
                      if (node.status === "running") statusBg = "bg-blue-50 border-blue-400 text-blue-950 shadow-xs animate-pulse";
                      if (node.status === "success") statusBg = "bg-green-50 border-green-500 text-green-950";

                      return (
                        <div key={node.id} className="flex flex-col items-center w-full max-w-[300px]">
                          {index > 0 && (
                            <div className="h-4 w-[1px] bg-[#141414]/15 relative">
                              {isRunning && nodes[index - 1].status === "success" && node.status !== "idle" && (
                                <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                              )}
                            </div>
                          )}
                          
                          <div className={`w-full p-3 rounded-lg border text-left transition-all duration-300 ${statusBg}`}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-mono text-[7px] uppercase tracking-widest text-[#141414]/40">
                                {node.type}
                              </span>
                              {node.status === "running" && (
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                              )}
                              {node.status === "success" && (
                                <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                              )}
                            </div>
                            <h4 className="font-bold text-[10px] leading-tight text-neutral-900">{node.title}</h4>
                            <p className="text-[9px] opacity-80 font-light mt-0.5 leading-normal">{node.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Flow completion slider */}
                  <div className="bg-white/95 backdrop-blur p-3 border border-black/5 rounded-lg z-10 shadow-xs mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-semibold text-neutral-700">Audit Process Execution</span>
                      <span className="font-mono text-[9px] font-bold">{runProgress}%</span>
                    </div>
                    <div className="w-full bg-[#141414]/10 h-1 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-300"
                        style={{ width: `${runProgress}%` }}
                      />
                    </div>
                  </div>

                </div>

                {/* Right side: Console log terminal */}
                <div className="lg:col-span-4 bg-[#141414] text-white rounded-xl p-4 flex flex-col justify-between min-h-[380px] text-left">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#FF6B35]" />
                        <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-white/70">
                          RUN LOGGER
                        </span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    </div>

                    <div className="space-y-2 font-mono text-[9px] text-white/80 overflow-y-auto max-h-[220px]">
                      {simulationLogs.length === 0 ? (
                        <p className="text-white/40 italic">Waiting for simulation launch... Click the run button.</p>
                      ) : (
                        simulationLogs.map((log, idx) => (
                          <div key={idx} className="leading-relaxed border-l border-white/10 pl-2">
                            {log}
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3 mt-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                      <h4 className="font-mono text-[8px] font-extrabold uppercase text-[#FF6B35] mb-1 tracking-wider">
                        STATUS CODE
                      </h4>
                      <p className="text-[9px] text-white/70 leading-normal">
                        {isRunning 
                          ? "Flow actively executing algorithms and rules." 
                          : runProgress === 100 
                            ? "Complete: 100% checks completed successfully." 
                            : "System idle. Guardrails locked."
                        }
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* ====================================================
              09 RESULTS & IMPACT SECTION
              ==================================================== */}
          <section id="section-results" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              09 / Results &amp; Impact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
              The business value, user impact, and measurable outcomes
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-10 text-xs sm:text-sm">
              {data.results.intro}
            </p>

            {/* Metrics cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="results-metrics-grid">
              {data.results.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white border border-black/5 p-6 rounded-2xl text-left shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="font-serif text-5xl font-black text-[#FF6B35] block mb-2">{metric.value}</span>
                    <span className="font-mono text-[8px] font-bold tracking-widest text-neutral-400 block mb-3 uppercase">
                      {metric.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ====================================================
              10 WHAT I LEARNED SECTION
              ==================================================== */}
          <section id="section-reflections" className="scroll-mt-28 text-left pb-12">
            <span className="font-mono text-[9px] font-extrabold uppercase text-[#FF6B35] bg-[#FF6B35]/10 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              10 / What I Learned
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
              My reflections, challenges, and key takeaways
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-8 text-xs sm:text-sm">
              {data.reflections.intro}
            </p>

            <div className="bg-[#FAF9F5] border border-black/5 rounded-2xl p-6 mb-8 text-left">
              <h4 className="font-mono text-[8px] font-black text-neutral-400 tracking-widest uppercase mb-4">CORE ACCOMPLISHMENT LESSONS</h4>
              <div className="space-y-4">
                {data.reflections.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-xs text-neutral-700 font-light leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Concluding Thought Blockquote */}
            <div className="border-l-4 border-[#FF6B35] pl-6 py-2 bg-white rounded-r-xl border-y border-r border-black/5">
              <span className="font-mono text-[8px] font-black text-[#FF6B35] uppercase block mb-1">CONCLUDING TAKEAWAY</span>
              <p className="font-serif italic text-sm md:text-base text-neutral-800 leading-relaxed font-light">
                "{data.reflections.takeaway}"
              </p>
            </div>
          </section>

        </div> {/* Close Right Column (9 cols) */}
      </div> {/* Close Main Dual-Column grid */}

      {/* FOOTER: CHOOSE NEXT ADJACENT PROJECT TO KEEP READING */}
      <footer className="py-24 px-6 md:px-12 bg-[#141414] text-white text-center z-10 relative overflow-hidden w-full mt-24">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B35] mb-4">
            Next Story Chapter
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            Explore more of Neha's enterprise creations.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#FF6B35] hover:bg-[#E55B2B] text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer shadow-md"
              id="btn-footer-back"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </footer>

    </motion.div>
  );
}
