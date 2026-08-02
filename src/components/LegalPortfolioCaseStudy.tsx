import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, Check, AlertCircle, Play, RefreshCw, 
  Layers, Search, Activity, Users, Clock, Cpu, 
  Settings, Sparkles, ChevronRight, Compass, 
  AlertTriangle, ArrowUpRight, FileText, Shield, X, Eye,
  Briefcase, Monitor, Globe, Upload, Scale, TrendingUp, Building, Pin, Laptop, Database, Paperclip,
  Download, Bell, Target, Lightbulb, ArrowRight, Filter, Quote, Zap, BarChart3, Columns, CheckSquare, History, ArrowDown,
  Pause, Maximize2, Volume2, VolumeX, Video, RotateCcw, LayoutGrid, FileSpreadsheet
} from "lucide-react";

interface LegalPortfolioCaseStudyProps {
  onClose: () => void;
}

// Interactive technical blueprint diagrams detailing the redesign architectural improvements
function BlueprintDiagram({ pose }: { pose: string }) {
  return (
    <svg 
      viewBox="0 0 220 220" 
      className="w-full max-w-[180px] sm:max-w-[200px] h-auto select-none"
    >
      <defs>
        {/* Sleek engineering grid paper pattern */}
        <pattern id="blueprintGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#f1f5f9" strokeWidth="1" />
        </pattern>
        
        {/* Gradients */}
        <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fee2e2" />
          <stop offset="100%" stopColor="#fca5a5" />
        </linearGradient>
        <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        
        {/* Glow Filters */}
        <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glowRed" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Grid Background */}
      <rect x="0" y="0" width="220" height="220" fill="url(#blueprintGrid)" rx="16" />
      
      {/* Outer subtle boundary */}
      <rect x="2" y="2" width="216" height="216" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" rx="14" />

      {/* --- DIAGRAM STATES --- */}
      {pose === "card1-problem" && (
        <g id="diag-1-problem">
          {/* Unordered messy files representing legacy manual lookup */}
          <g opacity="0.85">
            <rect x="25" y="30" width="170" height="150" rx="8" fill="url(#panelGrad)" stroke="#ef4444" strokeWidth="1.5" />
            
            {/* Chaotic overlapping red highlight bars */}
            <rect x="35" y="45" width="150" height="18" rx="4" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
            <circle cx="45" cy="54" r="4" fill="#ef4444" />
            <line x1="60" y1="54" x2="120" y2="54" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" />
            
            <rect x="35" y="70" width="150" height="18" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="45" cy="79" r="4" fill="#94a3b8" />
            <line x1="60" y1="79" x2="100" y2="79" stroke="#475569" strokeWidth="1.5" />
            
            <rect x="35" y="95" width="150" height="18" rx="4" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
            <circle cx="45" cy="104" r="4" fill="#ef4444" />
            <line x1="60" y1="104" x2="150" y2="104" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" />

            <rect x="35" y="120" width="150" height="18" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            <circle cx="45" cy="129" r="4" fill="#94a3b8" />
            <line x1="60" y1="129" x2="110" y2="129" stroke="#475569" strokeWidth="1.5" />
            
            <rect x="35" y="145" width="150" height="18" rx="4" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
            <circle cx="45" cy="154" r="4" fill="#ef4444" />
            <line x1="60" y1="154" x2="135" y2="154" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Attention indicator / Alarm */}
          <g transform="translate(170, 20)" filter="url(#glowRed)">
            <circle cx="0" cy="0" r="14" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
            <path d="M 0 -6 L 0 2 M 0 6 L 0 6.5" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      )}

      {pose === "card1-solution" && (
        <g id="diag-1-solution">
          {/* Organized, neat tabular row with high-value SLA target prioritized */}
          <rect x="25" y="30" width="170" height="150" rx="8" fill="url(#panelGrad)" stroke="#10b981" strokeWidth="1.5" />
          
          {/* Pristine highlight row representing prioritized task */}
          <rect x="32" y="42" width="156" height="36" rx="6" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />
          
          {/* Glowing Green Signal */}
          <circle cx="48" cy="60" r="5" fill="#10b981" filter="url(#glowGreen)" />
          
          {/* Organized clean layout lines */}
          <line x1="62" y1="54" x2="120" y2="54" stroke="#065f46" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="62" y1="64" x2="105" y2="64" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Mini Checkmark badge on the right */}
          <rect x="145" y="50" width="30" height="20" rx="4" fill="#10b981" />
          <path d="M 152 60 L 157 65 L 167 55" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Regular neat rows below */}
          <line x1="35" y1="95" x2="185" y2="95" stroke="#f1f5f9" strokeWidth="2" />
          <circle cx="48" cy="110" r="3" fill="#cbd5e1" />
          <line x1="62" y1="110" x2="140" y2="110" stroke="#94a3b8" strokeWidth="1.5" />

          <line x1="35" y1="130" x2="185" y2="130" stroke="#f1f5f9" strokeWidth="2" />
          <circle cx="48" cy="145" r="3" fill="#cbd5e1" />
          <line x1="62" y1="145" x2="130" y2="145" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Interactive target laser line indicating fast focus */}
          <path d="M 12 60 L 28 60" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="28,57 33,60 28,63" fill="#10b981" />
        </g>
      )}

      {pose === "card2-problem" && (
        <g id="diag-2-problem">
          {/* Scattered, unlinked databases and queries */}
          <g stroke="#94a3b8" strokeWidth="1.5" fill="none">
            <circle cx="60" cy="60" r="16" strokeDasharray="4 3" />
            <circle cx="160" cy="70" r="20" strokeDasharray="4 3" />
            <circle cx="100" cy="150" r="18" strokeDasharray="4 3" />
            
            {/* Fragmented, broken query paths */}
            <path d="M 60 76 Q 80 110 82 134" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 160 90 L 118 136" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
          </g>

          {/* Question marks indicating failed search */}
          <text x="56" y="65" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#ef4444">?</text>
          <text x="155" y="76" fontFamily="monospace" fontSize="18" fontWeight="bold" fill="#ef4444">?</text>
          <text x="96" y="155" fontFamily="monospace" fontSize="15" fontWeight="bold" fill="#94a3b8">?</text>

          {/* Red indicator badge showing search block */}
          <rect x="75" y="100" width="70" height="22" rx="6" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
          <text x="83" y="114" fontFamily="monospace" fontSize="9" fill="#991b1b" fontWeight="bold">NO_RESULTS</text>
        </g>
      )}

      {pose === "card2-solution" && (
        <g id="diag-2-solution">
          {/* Beautifully unified query router and clean concentric circles */}
          <circle cx="110" cy="110" r="55" fill="none" stroke="#a7f3d0" strokeWidth="1" />
          <circle cx="110" cy="110" r="35" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="110" cy="110" r="15" fill="none" stroke="#059669" strokeWidth="2" />
          
          {/* Laser sharp targeted query path */}
          <g filter="url(#glowGreen)">
            <line x1="40" y1="40" x2="95" y2="95" stroke="#10b981" strokeWidth="2.5" />
            <circle cx="40" cy="40" r="5" fill="#10b981" />
            <circle cx="110" cy="110" r="6" fill="#047857" />
          </g>

          {/* Perfect classification tags */}
          <rect x="135" y="45" width="55" height="18" rx="9" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
          <text x="141" y="57" fontFamily="monospace" fontSize="8" fill="#065f46" fontWeight="bold">CASE_ID</text>

          <rect x="25" y="155" width="58" height="18" rx="9" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
          <text x="32" y="167" fontFamily="monospace" fontSize="8" fill="#065f46" fontWeight="bold">COURT_ID</text>

          <rect x="130" y="155" width="60" height="18" rx="9" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
          <text x="137" y="167" fontFamily="monospace" fontSize="8" fill="#065f46" fontWeight="bold">PORTFOLIO</text>
        </g>
      )}

      {pose === "card3-problem" && (
        <g id="diag-3-problem">
          {/* Multi-screen scatter chaos */}
          <g stroke="#cbd5e1" strokeWidth="1" fill="url(#panelGrad)">
            {/* Screen 1 */}
            <rect x="20" y="35" width="90" height="70" rx="6" stroke="#94a3b8" />
            <rect x="25" y="45" width="80" height="6" rx="1" fill="#fee2e2" />
            <line x1="25" y1="60" x2="80" y2="60" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="25" y1="70" x2="90" y2="70" stroke="#cbd5e1" strokeWidth="2" />

            {/* Screen 2 overlapping and fragmented */}
            <rect x="70" y="70" width="100" height="75" rx="6" stroke="#ef4444" strokeWidth="1.5" />
            <rect x="75" y="80" width="90" height="6" rx="1" fill="#ef4444" />
            <line x1="75" y1="95" x2="150" y2="95" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="150" cy="115" r="8" fill="#fee2e2" stroke="#ef4444" />

            {/* Screen 3 */}
            <rect x="115" y="115" width="80" height="60" rx="6" stroke="#94a3b8" />
            <rect x="120" y="125" width="70" height="6" rx="1" fill="#cbd5e1" />
          </g>

          {/* Back and forth redundant arrows representing repetitive clicks */}
          <path d="M 115 55 Q 140 45 150 70" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 130 145 Q 95 160 85 145" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>
      )}

      {pose === "card3-solution" && (
        <g id="diag-3-solution">
          {/* Pristine Master-Split-View Dashboard container */}
          <rect x="20" y="30" width="180" height="150" rx="8" fill="url(#panelGrad)" stroke="#10b981" strokeWidth="1.5" />
          
          {/* Left panel: Case lists */}
          <rect x="28" y="45" width="64" height="120" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="34" y1="58" x2="80" y2="58" stroke="#10b981" strokeWidth="3" />
          <line x1="34" y1="70" x2="74" y2="70" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="34" y1="80" x2="82" y2="80" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="34" y1="90" x2="68" y2="90" stroke="#e2e8f0" strokeWidth="2" />
          
          {/* Left row action active point */}
          <circle cx="80" cy="58" r="4" fill="#10b981" />

          {/* Right panel: Side Drawer Split View action workspace */}
          <rect x="98" y="45" width="94" height="120" rx="4" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />
          <rect x="104" y="52" width="82" height="10" rx="2" fill="#ecfdf5" />
          <line x1="108" y1="57" x2="160" y2="57" stroke="#059669" strokeWidth="2.5" />

          {/* Beautiful input mock fields */}
          <rect x="104" y="72" width="82" height="12" rx="2" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="108" y1="78" x2="140" y2="78" stroke="#94a3b8" strokeWidth="1.5" />

          <rect x="104" y="90" width="82" height="12" rx="2" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="108" y1="96" x2="130" y2="96" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Unified Direct Action button */}
          <rect x="104" y="112" width="82" height="20" rx="4" fill="#10b981" filter="url(#glowGreen)" />
          <text x="120" y="125" fontFamily="sans-serif" fontSize="8" fill="#ffffff" fontWeight="bold">SAVE ACTION</text>
          
          <path d="M 82 58 Q 98 58 102 58" fill="none" stroke="#10b981" strokeWidth="1.5" />
        </g>
      )}

      {pose === "card4-problem" && (
        <g id="diag-4-problem">
          {/* Decaying unmonitored portfolio trend curve */}
          <rect x="25" y="30" width="170" height="150" rx="8" fill="url(#panelGrad)" stroke="#ef4444" strokeWidth="1" />
          
          {/* Static gray grid lines */}
          <line x1="35" y1="60" x2="185" y2="60" stroke="#f1f5f9" strokeWidth="1.5" />
          <line x1="35" y1="100" x2="185" y2="100" stroke="#f1f5f9" strokeWidth="1.5" />
          <line x1="35" y1="140" x2="185" y2="140" stroke="#f1f5f9" strokeWidth="1.5" />

          {/* Descending red portfolio curve */}
          <path d="M 35 50 Q 80 80 120 135 T 185 165" fill="none" stroke="#ef4444" strokeWidth="3" />
          
          <circle cx="35" cy="50" r="4.5" fill="#ef4444" />
          <circle cx="120" cy="135" r="4.5" fill="#ef4444" />
          <circle cx="185" cy="165" r="4.5" fill="#ef4444" />

          {/* Risk highlight zones */}
          <rect x="100" y="70" width="75" height="18" rx="4" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
          <text x="106" y="82" fontFamily="monospace" fontSize="8" fill="#ef4444" fontWeight="bold">SLA_EXPIRED</text>
        </g>
      )}

      {pose === "card4-solution" && (
        <g id="diag-4-solution">
          {/* Beautiful eCourt automated healthy monitoring trend */}
          <rect x="25" y="30" width="170" height="150" rx="8" fill="url(#panelGrad)" stroke="#10b981" strokeWidth="1.5" />

          {/* Perfect grid lines */}
          <line x1="35" y1="60" x2="185" y2="60" stroke="#f1f5f9" strokeWidth="1.5" />
          <line x1="35" y1="100" x2="185" y2="100" stroke="#f1f5f9" strokeWidth="1.5" />
          <line x1="35" y1="140" x2="185" y2="140" stroke="#f1f5f9" strokeWidth="1.5" />

          {/* Ascending healthy portfolio curve */}
          <path d="M 35 150 Q 80 130 115 75 T 185 45" fill="none" stroke="#10b981" strokeWidth="3.5" />
          
          {/* Active monitoring pulses */}
          <circle cx="35" cy="150" r="4" fill="#10b981" />
          <circle cx="115" cy="75" r="6" fill="#10b981" filter="url(#glowGreen)" />
          <circle cx="185" cy="45" r="4" fill="#10b981" />

          {/* Real-time sync signals / Radar */}
          <circle cx="115" cy="75" r="14" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
          <circle cx="115" cy="75" r="22" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />

          {/* Secure / Compliant shield badge */}
          <g transform="translate(145, 120)">
            <rect x="0" y="0" width="38" height="20" rx="5" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
            <text x="6" y="13" fontFamily="sans-serif" fontSize="8" fill="#047857" fontWeight="bold">EC-SYNC</text>
          </g>
        </g>
      )}
    </svg>
  );
}

export default function LegalPortfolioCaseStudy({ onClose }: LegalPortfolioCaseStudyProps) {
  // Interactive solution card states: problem vs solution (Before/After)
  const [cardStates, setCardStates] = useState<{ [key: number]: "problem" | "solution" }>({
    1: "solution",
    2: "solution",
    3: "solution",
    4: "solution"
  });

  // Navigation tracking
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeJourneyStage, setActiveJourneyStage] = useState(0);
  const [oldUiSrc, setOldUiSrc] = useState("/src/assets/images/old.png");
  const [imageFailed, setImageFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Media prototype demo states
  const [customMediaUrl, setCustomMediaUrl] = useState<string>("");
  const [isMediaTypeVideo, setIsMediaTypeVideo] = useState<boolean>(false);
  const [activeImpactTab, setActiveImpactTab] = useState<"metrics" | "workflow" | "highlights">("metrics");
  const [hoveredHeroCallout, setHoveredHeroCallout] = useState<number | null>(null);
  const [activeDecisionId, setActiveDecisionId] = useState<number>(1);
  const [activeSolutionTab, setActiveSolutionTab] = useState<number>(1);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Solution Section Real Video Player states & refs
  const solutionVideoRef = useRef<HTMLVideoElement>(null);
  const solutionVideoContainerRef = useRef<HTMLDivElement>(null);
  const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const togglePlayVideo = () => {
    if (solutionVideoRef.current) {
      if (isPlayingVideo) {
        solutionVideoRef.current.pause();
        setIsPlayingVideo(false);
      } else {
        solutionVideoRef.current.play().then(() => {
          setIsPlayingVideo(true);
        }).catch((err) => {
          console.log("Video play error:", err);
        });
      }
    } else {
      setIsPlayingVideo(!isPlayingVideo);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const targetDuration = videoDuration || (solutionVideoRef.current?.duration || 0);
    if (targetDuration > 0) {
      const newTime = (clickX / width) * targetDuration;
      if (solutionVideoRef.current) {
        solutionVideoRef.current.currentTime = newTime;
        setVideoCurrentTime(newTime);
      }
    }
  };

  const toggleMute = () => {
    if (solutionVideoRef.current) {
      solutionVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    } else {
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (solutionVideoContainerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else {
        solutionVideoContainerRef.current.requestFullscreen().catch(() => {});
      }
    }
  };

  const formatVideoTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        const url = URL.createObjectURL(file);
        setCustomMediaUrl(url);
        setIsMediaTypeVideo(file.type.startsWith("video/"));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        const url = URL.createObjectURL(file);
        setCustomMediaUrl(url);
        setIsMediaTypeVideo(file.type.startsWith("video/"));
      }
    }
  };

  const sections = [
    { id: "hero", label: "01 / Hero" },
    { id: "overview", label: "02 / Product Overview" },
    { id: "problem-statement", label: "03 / Problem Statement" },
    { id: "challenge", label: "04 / Business Challenge" },
    { id: "solution", label: "05 / Design Decisions" },
    { id: "walkthrough", label: "06 / Product Walkthrough" },
    { id: "impact", label: "07 / Impact" },
    { id: "whats-next", label: "08 / What's Next" }
  ];

  // Set up intersection observer to highlight sidebar on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  // Interactive finding state
  const [selectedFinding, setSelectedFinding] = useState<number | null>(null);

  // Decision Matrix active criteria
  const [activeCriteria, setActiveCriteria] = useState<string>("context");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto font-sans text-[#141414] scroll-smooth"
      ref={containerRef}
      onScroll={handleScroll}
      id="legal-portfolio-case-study"
    >
      {/* Background elegant dot overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #141414 1px, transparent 1px),
            linear-gradient(to bottom, #141414 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Dynamic Faint Ambient Gradients */}
      <div className="absolute top-[5%] left-[10%] w-[400px] h-[400px] rounded-full bg-emerald-100/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-amber-100/15 blur-[120px] pointer-events-none z-0" />

      {/* STICKY TOP NAVIGATION BAR */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#141414]/5 px-6 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141414]/60 hover:text-[#141414] transition-colors cursor-pointer group"
          id="btn-back-portfolio"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] font-extrabold tracking-widest uppercase bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded">
            CASE STUDY 01
          </span>
          <span className="font-mono text-[10px] text-neutral-400 font-bold hidden sm:inline uppercase tracking-wider">
            LEGAL PORTFOLIO MANAGEMENT
          </span>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[3px] bg-emerald-600 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </nav>

      {/* MAIN LAYOUT (Centered single column for pristine readability) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-12 relative z-10" id="case-study-main-grid">
        
        {/* RIGHT COLUMN: Scrolling Case Study Narrative */}
        <div className="space-y-24 md:space-y-32" id="case-study-scroller">
          
          {/* ====================================================
              1. HERO SECTION
              ==================================================== */}
          <section id="hero" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-16 relative">
            {/* Elegant visual line accent */}
            <div className="w-16 h-[2.5px] bg-emerald-600 mb-8 rounded-full" />
            
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="font-mono text-[9px] font-black tracking-[0.25em] uppercase text-emerald-800 bg-emerald-50 border border-emerald-200/50 px-3 py-1 rounded-md shadow-2xs">
                CASE STUDY 01
              </span>
              <span className="text-neutral-300 font-light select-none">&bull;</span>
              <span className="font-mono text-[10px] font-bold tracking-wider text-neutral-400 uppercase">
                Enterprise FinTech SaaS Platform
              </span>
            </div>

            <div className="relative mb-6">
              {/* Massive Display Title with premium typography mix */}
              <h1 className="font-display text-[42px] sm:text-[56px] md:text-[72px] font-black text-[#141414] tracking-[-0.04em] leading-[0.95]">
                LEGAL PORTFOLIO <br className="hidden md:block" />
                <span className="font-serif italic font-light text-emerald-800 pr-1">Management</span>
              </h1>
              
              {/* Handwritten small arrow annotation */}
              <div className="absolute right-4 bottom-0 rotate-[4deg] hidden xl:block pointer-events-none select-none">
                <span className="font-hand text-[22px] text-emerald-600 font-bold block mb-1">
                  Recent Project ✦
                </span>
                <svg className="w-12 h-6 text-emerald-400 ml-4" viewBox="0 0 50 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M 5 15 Q 25 5, 45 10" />
                  <path d="M 38 4 L 46 10 L 40 18" fill="none" />
                </svg>
              </div>
            </div>

            <p className="font-sans text-lg sm:text-xl md:text-[21px] text-neutral-600 font-light leading-relaxed max-w-4xl mb-10">
              Transforming Enterprise Legal Operations Through Better Visibility, Workflow Efficiency, and Accountability. A high-density dashboard and workflow automation portal designed to translate raw, fragmented litigation data into predictable business outcomes.
            </p>

            {/* Micro Stats Banner / Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 border-t border-neutral-100 pt-8">
              <div className="bg-neutral-50/40 p-4 rounded-xl border border-neutral-100/75 shadow-3xs">
                <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">LITIGATION SPEED</span>
                <p className="font-display text-xl sm:text-2xl font-black text-neutral-900 leading-tight">40% Faster</p>
                <p className="text-[11px] text-neutral-500 font-medium">In case tracking &amp; flow</p>
              </div>
              <div className="bg-neutral-50/40 p-4 rounded-xl border border-neutral-100/75 shadow-3xs">
                <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">COGNITIVE LOAD</span>
                <p className="font-display text-xl sm:text-2xl font-black text-neutral-900 leading-tight">70% Fewer</p>
                <p className="text-[11px] text-neutral-500 font-medium">Steps in bulk workflow</p>
              </div>
              <div className="bg-neutral-50/40 p-4 rounded-xl border border-neutral-100/75 shadow-3xs">
                <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">ADOPTION RATE</span>
                <p className="font-display text-xl sm:text-2xl font-black text-neutral-900 leading-tight">96% Active</p>
                <p className="text-[11px] text-neutral-500 font-medium">With integrated SaaS systems</p>
              </div>
            </div>

            {/* Centered Laptop Mockup component with blurred workspace background */}
            <div 
              className="relative rounded-2xl border border-neutral-200/60 shadow-xl overflow-hidden mb-12 bg-neutral-900/5 group"
              id="hero-banner-image"
            >
              {/* Blurred Workspace Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter blur-xl scale-105 opacity-40 z-0 pointer-events-none"
                style={{
                  backgroundImage: `url("/src/assets/images/legal_portfolio_1783261537202.jpg")`
                }}
              />
              
              {/* Overlay with subtle grid and light gradient */}
              <div className="absolute inset-0 bg-radial-at-t from-white/30 via-transparent to-neutral-900/10 mix-blend-overlay z-0 pointer-events-none" />
              
              {/* Responsive Container for Centering Laptop */}
              <div className="relative z-10 px-4 py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center">
                
                {/* Visual Label Tags */}
                <div className="absolute top-4 left-4 font-mono text-[8px] text-neutral-500 bg-white/80 backdrop-blur-xs border border-neutral-200/60 px-2.5 py-0.5 rounded tracking-widest uppercase shadow-2xs">
                  Interactive Prototype Demo
                </div>
                
                <div className="absolute top-4 right-4 font-mono text-[8px] text-emerald-700 bg-emerald-50/90 backdrop-blur-xs border border-emerald-200/50 px-2.5 py-0.5 rounded tracking-widest uppercase shadow-2xs flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Live Preview Mode
                </div>

                {/* MacBook Pro Styled Laptop Mockup */}
                <div className="w-full max-w-4xl mx-auto mt-6">
                  {/* Laptop Screen Frame */}
                  <div 
                    className={`relative mx-auto w-[90%] aspect-[16/10] border-[10px] border-neutral-900 bg-black rounded-t-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
                      isDragging ? "ring-4 ring-emerald-500 scale-[1.01]" : ""
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {/* Screen Glass reflection & shadow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />
                    
                    {/* Camera indicator */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-neutral-900 flex items-center justify-center z-30">
                      <div className="w-1 h-1 rounded-full bg-blue-900/80" />
                    </div>

                    {/* Display Screen */}
                    <div className="w-full h-full relative bg-neutral-950 flex items-center justify-center select-none group/screen overflow-hidden">
                      
                      {/* High-Fidelity UI Image */}
                      {isMediaTypeVideo && customMediaUrl ? (
                        <video
                          src={customMediaUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover z-0"
                        />
                      ) : (
                        <img
                          src={customMediaUrl || "/src/assets/images/legal_portfolio_mockup_1783335879310.jpg"}
                          alt="Legal Portfolio High-Fidelity Enterprise Dashboard Interface"
                          className="w-full h-full object-cover object-top z-0 transition-transform duration-500 group-hover/screen:scale-[1.01]"
                        />
                      )}

                      {/* Hover Interaction Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 z-20">
                        <Upload className="w-10 h-10 mb-3 text-emerald-400 stroke-[1.5] animate-bounce" />
                        <h4 className="font-serif text-lg font-bold mb-1 tracking-tight">Upload Custom UI Screenshot</h4>
                        <p className="text-xs text-neutral-300 text-center max-w-xs font-light mb-4">
                          Drop any local image or screenshot to instantly preview it live inside the laptop frame
                        </p>
                        
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-md flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          Choose Image File
                        </button>
                      </div>

                      {/* Active Custom Media Indicator when uploaded */}
                      {customMediaUrl && (
                        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md text-[9px] font-mono text-emerald-400 font-bold z-20 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                          <span>DISPLAYING CUSTOM SCREENSHOT</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Laptop Hinge & Base */}
                  <div className="relative mx-auto bg-neutral-800 h-3 w-full rounded-b-xl shadow-xl border-t border-neutral-700/60 z-20">
                    {/* Screen opener notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-neutral-900 rounded-b" />
                  </div>
                  
                  {/* Laptop shadow on background */}
                  <div className="mx-auto w-[94%] h-4 bg-black/25 blur-md rounded-full -mt-1.5" />
                </div>
                
                {/* File input for manual selection */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*,video/*"
                  className="hidden"
                />

                <p className="text-[10px] text-neutral-500 font-mono text-center mt-6 uppercase tracking-wider">
                  * High-Fidelity Enterprise System Interface • Drag & drop any screenshot to customize preview
                </p>
              </div>
            </div>

            {/* CASE STUDY METADATA ROW */}
            <div className="border-t border-neutral-100 pt-8 mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-left">
              {/* Timeline */}
              <div>
                <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-1.5">
                  Timeline
                </span>
                <p className="text-xs sm:text-sm text-neutral-800 font-semibold leading-snug">
                  May – June 2026
                </p>
              </div>

              {/* Role */}
              <div>
                <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-1.5">
                  Role
                </span>
                <p className="text-xs sm:text-sm text-neutral-800 font-semibold leading-snug">
                  Senior Product Designer
                </p>
              </div>

              {/* Platform */}
              <div>
                <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-1.5">
                  Platform
                </span>
                <p className="text-xs sm:text-sm text-neutral-800 font-semibold leading-snug">
                  Enterprise Web App
                </p>
              </div>

              {/* Domain */}
              <div>
                <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-1.5">
                  Domain
                </span>
                <p className="text-xs sm:text-sm text-neutral-800 font-semibold leading-snug">
                  FinTech • B2B SaaS
                </p>
              </div>

              {/* Team */}
              <div>
                <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-1.5">
                  Team
                </span>
                <ul className="space-y-0.5 text-xs text-neutral-800 font-medium">
                  <li>1 PM • 1 Designer</li>
                  <li>3 Devs • Legal SMEs</li>
                </ul>
              </div>


            </div>
          </section>

          {/* ====================================================
              2. PROJECT OVERVIEW SECTION
              ==================================================== */}
          <section id="overview" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <div className="relative w-full" id="overview-card-container">

              {/* Content of the overview section */}
              <div className="relative z-10">
                
                {/* Small Section Label and technical info */}
                <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200/40 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] font-extrabold uppercase text-[#10B981] bg-[#10B981]/8 border border-[#10B981]/15 px-3 py-1.5 rounded-md tracking-[0.2em] inline-block shadow-3xs">
                      02 / PRODUCT OVERVIEW
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider hidden sm:inline-block">• ENTERPRISE SYSTEM SPECIFICATION</span>
                  </div>
                </div>

                {/* Main Overview Content */}
                <div className="max-w-4xl mx-auto space-y-6 mb-14 mt-6">
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight block mb-3">
                    What is Legal Portfolio Management?
                  </h2>
                  <p className="font-serif text-xl sm:text-2xl text-neutral-900 font-medium leading-relaxed tracking-tight relative pl-4 sm:pl-6">
                    <span className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#10B981] rounded-full" />
                    Legal Portfolio Management is an enterprise <strong className="text-neutral-950 font-black underline decoration-[#10B981]/40 decoration-2 underline-offset-4">Case Management System</strong> used by banks, NBFCs, and financial institutions to manage thousands of litigation cases across the recovery lifecycle.
                  </p>
                  <p className="font-sans text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                    It brings together <strong className="text-neutral-900 font-semibold">portfolio tracking</strong>, <strong className="text-neutral-900 font-semibold">legal workflows</strong>, <strong className="text-neutral-900 font-semibold">case history</strong>, <strong className="text-neutral-900 font-semibold">compliance records</strong>, <strong className="text-neutral-900 font-semibold">document management</strong>, and <strong className="text-neutral-900 font-semibold">recovery operations</strong> into one centralized platform.
                  </p>
                </div>

                {/* Bottom Section: Legal Recovery Lifecycle */}
                <div className="border-t border-neutral-200/60 pt-12 mt-12 text-left" id="lifecycle-section">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-normal text-neutral-950 tracking-tight flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-[#10B981] rounded-full inline-block animate-pulse" />
                        Legal Recovery Case Journey Map
                      </h3>
                      <p className="text-xs text-neutral-500 font-mono mt-1 uppercase tracking-wider">The end-to-end litigation workflow of enterprise portfolios</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-hand text-lg text-[#10B981] tracking-wide rotate-[-2deg] select-none">
                        Interactive Case Journey
                      </span>
                    </div>
                  </div>

                  {/* --- Journey Stepper Map --- */}
                  <div className="relative mb-10 mt-6" id="journey-stepper-container">
                    
                    {/* Desktop continuous path line */}
                    <div className="absolute top-[24px] left-[6%] right-[6%] h-[3px] bg-neutral-200/80 hidden md:block z-0">
                      {/* Active green filled segment */}
                      <motion.div 
                        className="h-full bg-gradient-to-r from-emerald-400 to-[#10B981]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(activeJourneyStage / 6) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </div>

                    {/* Nodes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-4 relative z-10">
                      {[
                        { title: "Allocation", icon: Users },
                        { title: "Notice", icon: Bell },
                        { title: "Filing", icon: Upload },
                        { title: "Hearing", icon: Scale },
                        { title: "Judgment", icon: Shield },
                        { title: "Recovery", icon: TrendingUp },
                        { title: "Closure", icon: Database }
                      ].map((stage, idx) => {
                        const IconComponent = stage.icon;
                        const isCompleted = idx < activeJourneyStage;
                        const isActive = idx === activeJourneyStage;
                        return (
                          <div key={idx} className="flex flex-col">
                            <button
                              onClick={() => setActiveJourneyStage(idx)}
                              className="flex flex-row md:flex-col items-center gap-4 md:gap-0 focus:outline-none group text-left md:text-center transition-all duration-300 w-full"
                              id={`journey-node-${idx}`}
                            >
                              {/* Circle Node container */}
                              <div className="relative flex items-center justify-center shrink-0 md:mb-3">
                                {/* Glowing target behind active node */}
                                {isActive && (
                                  <span className="absolute -inset-2 bg-emerald-100 rounded-full animate-pulse opacity-75 z-0" />
                                )}
                                
                                <motion.div
                                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 ${
                                    isActive
                                      ? "bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-200"
                                      : isCompleted
                                      ? "bg-emerald-50 border-emerald-500 text-emerald-600"
                                      : "bg-white border-neutral-200 text-neutral-400 group-hover:border-neutral-400 group-hover:text-neutral-600"
                                  }`}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {isCompleted ? (
                                    <Check className="w-5 h-5 stroke-[2.5]" />
                                  ) : (
                                    <IconComponent className="w-5 h-5" />
                                  )}
                                </motion.div>

                                {/* Tiny index tag */}
                                <span className={`absolute -bottom-1 -right-1 font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-md z-20 ${
                                  isActive ? "bg-white text-emerald-700 shadow-xs border border-emerald-100" : "bg-neutral-100 text-neutral-500"
                                }`}>
                                  0{idx + 1}
                                </span>
                              </div>

                              {/* Node Title and Brief description */}
                              <div className="md:px-2 text-left md:text-center">
                                <h4 className={`font-display text-sm font-bold tracking-tight transition-colors duration-300 ${
                                  isActive ? "text-emerald-700 md:text-neutral-950 font-black" : "text-neutral-500 group-hover:text-neutral-800"
                                }`}>
                                  {stage.title}
                                </h4>
                                <p className="text-[10px] text-neutral-400 font-mono mt-0.5 hidden md:block leading-tight">
                                  Stage 0{idx + 1}
                                </p>
                              </div>
                            </button>

                            {/* Vertical connector path line for mobile view */}
                            {idx < 6 && (
                              <div className="w-[2px] h-6 bg-neutral-200 md:hidden ml-6 my-1 block">
                                <div className={`w-full h-full bg-emerald-500 transition-all duration-300 ${isCompleted ? "scale-y-100" : "scale-y-0"} origin-top`} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>



              </div>
            </div>
          </section>

          {/* ====================================================
              3. PROBLEM STATEMENT SECTION
              ==================================================== */}
          <section id="problem-statement" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-16">
            <span className="font-mono text-[9px] font-extrabold uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded tracking-widest inline-block mb-6">
              03 / PROBLEM STATEMENT
            </span>
            <div className="text-left space-y-6">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
                  Problem Statement
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-serif text-neutral-800 tracking-tight leading-relaxed max-w-4xl italic border-l-4 border-emerald-500/40 pl-6 py-1 mt-6">
                  "How might we transform a report-driven legal portfolio into an <strong className="font-extrabold text-emerald-700 not-italic">action-oriented workspace</strong> that enables legal teams to <strong className="font-extrabold text-emerald-700 not-italic">identify priorities</strong>, <strong className="font-extrabold text-emerald-700 not-italic">reduce operational effort</strong>, and confidently manage thousands of cases from a <strong className="font-extrabold text-emerald-700 not-italic">single interface</strong>?"
                </p>
              </div>
            </div>
          </section>

          {/* ====================================================
              04. BUSINESS CHALLENGE SECTION
              ==================================================== */}
          <section id="challenge" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-16">
            <span className="font-mono text-[9px] font-bold uppercase text-amber-800 bg-amber-50/80 border border-amber-200/80 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              04 / BUSINESS CHALLENGE
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight mb-4">
              The Business Challenge
            </h2>

            <p className="text-neutral-600 font-normal leading-relaxed text-sm sm:text-base max-w-3xl mb-8">
              As litigation portfolios grew, legal teams struggled to access, interpret, and act on case data efficiently — even though all information already existed within the platform.
            </p>

            {/* Challenges 4-Card Grid (Unified, Clean Visual Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10" id="business-challenges-cards">
              {[
                { 
                  title: "Manual CSV Exports", 
                  desc: "Daily spreadsheet exports required just to check case updates and verify statuses.", 
                  impact: "High Manual Overhead",
                  icon: Download
                },
                { 
                  title: "No Global Search", 
                  desc: "Digging manually through static, multi-page lists to locate specific case files.", 
                  impact: "Search Friction",
                  icon: Search
                },
                { 
                  title: "Untracked Inactive Cases", 
                  desc: "No automated alerts, causing stalled cases to linger undetected.", 
                  impact: "Operational Blind Spots",
                  icon: AlertCircle
                },
                { 
                  title: "Manual Hearing Logs", 
                  desc: "Relying on memory and notebook notes without automated reminder alerts.", 
                  impact: "Memory Dependency",
                  icon: Bell
                }
              ].map((c, idx) => {
                const CardIcon = c.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 bg-white border border-neutral-200/80 rounded-xl transition-all duration-200 hover:border-neutral-300 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200/60 text-neutral-700">
                          <CardIcon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[10px] text-neutral-400 font-medium">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-sans text-sm font-semibold text-neutral-900 mb-1.5">
                        {c.title}
                      </h3>

                      <p className="text-xs text-neutral-600 font-normal leading-relaxed mb-4">
                        {c.desc}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">FRICTION</span>
                      <span className="font-mono text-[10px] text-neutral-700 bg-neutral-100/80 border border-neutral-200/70 px-2 py-0.5 rounded font-medium">
                        {c.impact}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Insight Callout */}
            <div className="bg-amber-50/60 border-l-2 border-amber-500 rounded-r-xl p-4 mb-10 max-w-3xl">
              <p className="text-sm sm:text-base text-neutral-800 font-serif italic leading-relaxed">
                "The product provided data, but it didn't help users make decisions."
              </p>
            </div>

            {/* Legacy Interface Showcase Frame */}
            <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-5 shadow-2xs mb-10" id="old-ui-frame">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="font-mono text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                    Legacy Experience (Prior to Redesign)
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setImageFailed(false)}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono border transition-all cursor-pointer ${
                      !imageFailed 
                        ? "bg-neutral-900 border-neutral-900 text-white font-medium" 
                        : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    Image View
                  </button>
                  <button
                    onClick={() => setImageFailed(true)}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono border transition-all cursor-pointer ${
                      imageFailed 
                        ? "bg-neutral-900 border-neutral-900 text-white font-medium" 
                        : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                    }`}
                  >
                    Interactive Mockup
                  </button>
                </div>
              </div>
              
              {!imageFailed ? (
                /* Real Image of Old UI Screenshot */
                <div className="relative overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-2xs">
                  <img 
                    src={oldUiSrc} 
                    onError={() => {
                      if (oldUiSrc === "/src/assets/images/old.png") {
                        setOldUiSrc("/old.png");
                      } else if (oldUiSrc === "/old.png") {
                        setOldUiSrc("/assets/old.png");
                      } else {
                        setImageFailed(true);
                      }
                    }}
                    alt="Legacy ERP System (Legal Portfolio Beta)" 
                    className="w-full h-auto object-cover max-h-[440px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                /* High-Fidelity CSS Reconstruction of Legacy UI */
                <div className="relative overflow-hidden rounded-xl border border-neutral-200/80 bg-white font-sans shadow-2xs select-none">
                  {/* Header breadcrumb */}
                  <div className="bg-neutral-50 border-b border-neutral-200/60 px-4 py-2 flex items-center gap-1.5 text-[10px] text-neutral-500 font-medium">
                    <Briefcase className="w-3 h-3 text-neutral-400" />
                    <span>testing</span>
                    <span>/</span>
                    <span>Legal</span>
                    <span>/</span>
                    <span className="text-neutral-800 font-semibold">Legal Portfolio</span>
                  </div>

                  {/* App Title & Tabs */}
                  <div className="bg-white border-b border-neutral-200/60 px-4 pt-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-neutral-900 text-sm font-bold tracking-tight">Legal Portfolio Beta</h3>
                    </div>
                    
                    <div className="flex">
                      <div className="border-b-2 border-neutral-900 px-3 pb-1 text-[10px] font-bold text-neutral-900 uppercase tracking-wider">
                        Case View
                      </div>
                    </div>
                  </div>

                  {/* Filter & Search Bar */}
                  <div className="p-3 bg-neutral-50/50 border-b border-neutral-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2 max-w-md w-full">
                      <div className="border border-neutral-200 rounded-lg px-2.5 py-1 bg-white text-[10px] font-medium text-neutral-700 flex items-center gap-1 shrink-0">
                        <span>Loan ID</span>
                        <span className="text-neutral-400 text-[8px]">▼</span>
                      </div>
                      <div className="border border-neutral-200 rounded-lg px-2.5 py-1 bg-white text-[10px] text-neutral-400 flex items-center justify-between w-full">
                        <span>Search...</span>
                        <Search className="w-3 h-3 text-neutral-400" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="border border-neutral-200 rounded-lg px-2.5 py-1 bg-white text-[10px] text-neutral-600">
                        02 Feb 2026 - 16 Feb 2026 📅
                      </div>
                    </div>
                  </div>

                  {/* Dense Table View */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[10px] text-neutral-700 bg-white">
                      <thead>
                        <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-500 font-semibold uppercase tracking-wider">
                          <th className="px-3 py-2 border-r border-neutral-200/50">Loan ID / Applicant Name</th>
                          <th className="px-3 py-2 border-r border-neutral-200/50">Case ID</th>
                          <th className="px-3 py-2 border-r border-neutral-200/50">Matter Type</th>
                          <th className="px-3 py-2 border-r border-neutral-200/50">Proceeding</th>
                          <th className="px-3 py-2 border-r border-neutral-200/50">Current Step</th>
                          <th className="px-3 py-2 border-r border-neutral-200/50">Filing Date</th>
                          <th className="px-3 py-2 border-r border-neutral-200/50">Last Hearing</th>
                          <th className="px-3 py-2">Next Hearing</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        <tr className="hover:bg-neutral-50/50">
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono font-medium">keda1772</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono font-semibold text-neutral-900 underline">08U7Y</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40">Criminal Proceeding</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40">Cheque Bounce u/s 138 (NI...)</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono text-neutral-500">104 - Cases Dispatch</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono text-neutral-500">Feb 02, 2022</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono text-neutral-500">Feb 04, 2026</td>
                          <td className="px-3 py-2.5 font-mono text-neutral-500">Mar 28, 2022</td>
                        </tr>
                        <tr className="hover:bg-neutral-50/50">
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono font-medium">keda1890</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono font-semibold text-neutral-900 underline">KIM</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40">Criminal Proceeding</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40">Cheque Bounce u/s 138 (NI...)</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono text-neutral-500">104 - Cases Dispatch</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono text-neutral-500">Sep 08, 2021</td>
                          <td className="px-3 py-2.5 border-r border-neutral-200/40 font-mono text-neutral-500">Feb 06, 2026</td>
                          <td className="px-3 py-2.5 font-mono text-neutral-500">Dec 10, 2021</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              <p className="font-mono text-[10px] text-neutral-400 font-normal leading-relaxed mt-3 text-center">
                Dense table format required navigating multiple tabs to review details for a single case.
              </p>
            </div>

            {/* Business Risk Impact Cards */}
            <div className="pt-6 border-t border-neutral-200/60 text-left">
              <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
                <div className="max-w-xs shrink-0">
                  <span className="font-mono text-[9px] font-bold uppercase text-neutral-500 bg-neutral-100 border border-neutral-200/80 px-2 py-0.5 rounded tracking-wider block w-fit mb-2">
                    BUSINESS RISKS
                  </span>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 tracking-tight leading-tight mb-1.5">
                    Why This Matters
                  </h3>
                  <p className="text-neutral-500 text-xs font-normal leading-relaxed">
                    Slow or missed case triage directly escalated into operational bottlenecks and compliance risks.
                  </p>
                </div>

                <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    {
                      label: "Missed Hearings",
                      desc: "Failure to attend critical court sessions, resulting in ex-parte defaults.",
                      icon: AlertTriangle
                    },
                    {
                      label: "Filing Delays",
                      desc: "Missed statutory timelines triggering administrative penalties.",
                      icon: Clock
                    },
                    {
                      label: "TAT Breaches",
                      desc: "Delayed turnaround times violating enterprise SLA agreements.",
                      icon: AlertCircle
                    },
                    {
                      label: "Limited Visibility",
                      desc: "Managers operating without clear line-of-sight on team efficiency.",
                      icon: Eye
                    },
                    {
                      label: "Manual Overhead",
                      desc: "Frictional administrative labor scaling up with total caseloads.",
                      icon: Scale
                    },
                    {
                      label: "Platform Bypass",
                      desc: "Teams abandoning the portal in favor of offline spreadsheet trackers.",
                      icon: Shield
                    }
                  ].map((item, index) => {
                    const RiskIcon = item.icon;
                    return (
                      <div 
                        key={index} 
                        className="p-3 rounded-xl border border-neutral-200/70 bg-white flex items-start gap-2.5 transition-all duration-200 shadow-2xs"
                      >
                        <div className="p-1.5 rounded-lg bg-neutral-50 border border-neutral-200/60 shrink-0 mt-0.5 text-neutral-600">
                          <RiskIcon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-neutral-900 mb-0.5">{item.label}</h4>
                          <p className="text-[11px] text-neutral-500 font-normal leading-snug">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>



          {/* ====================================================
              05. BUSINESS GOALS SECTION
              ==================================================== */}
          <section id="goals" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-16">
            <span className="font-mono text-[9px] font-extrabold uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded tracking-widest inline-block mb-6">
              05 / Business Goals
            </span>
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
                Business Goals
              </h2>
              <p className="text-neutral-500 font-light leading-relaxed mb-6 text-xs sm:text-sm max-w-3xl">
                To bridge the gap between user friction and business outcomes, we defined three core pillars of success. Each target aligns operational efficiencies with long-term enterprise growth.
              </p>
            </div>

            {/* Pinned Sticky-Note Board Container */}
            <div className="relative flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-8 justify-center items-stretch pt-12 pb-6 max-w-5xl mx-auto" id="business-goals-sticky-board">
              {/* NOTE 1 (Yellow) */}
              <div className="flex-1 min-w-[250px] bg-[#FFFDE6] border border-[#FEF08A] rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:z-20 transform md:-rotate-3" style={{ transformOrigin: 'top center' }}>
                {/* Pushpin & thread */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 select-none pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shadow-md">
                    <Pin className="w-3.5 h-3.5 text-red-600 rotate-45 transform fill-red-600" />
                  </div>
                  <div className="w-[1px] h-7 bg-red-400/40" />
                </div>

                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-black tracking-widest text-amber-800/60 uppercase block mb-2">
                      FOCUS
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-4 leading-tight">
                      Reduce Manual Effort
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Reduce dependency on manually downloaded reports",
                        "Minimize repetitive navigation",
                        "Enable faster case discovery"
                      ].map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* NOTE 2 (Pink) */}
              <div className="flex-1 min-w-[250px] bg-[#FFF0F6] border border-[#FBCFE8] rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:z-20 transform md:rotate-2" style={{ transformOrigin: 'top center' }}>
                {/* Pushpin & thread */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 select-none pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center shadow-md">
                    <Pin className="w-3.5 h-3.5 text-pink-600 rotate-45 transform fill-pink-600" />
                  </div>
                  <div className="w-[1px] h-7 bg-pink-400/40" />
                </div>

                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-black tracking-widest text-pink-800/60 uppercase block mb-2">
                      PRIORITY
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-4 leading-tight">
                      Improve Visibility
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Improve visibility into urgent and overdue cases",
                        "Support high-volume case management"
                      ].map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* NOTE 3 (Green) */}
              <div className="flex-1 min-w-[250px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:z-20 transform md:-rotate-2" style={{ transformOrigin: 'top center' }}>
                {/* Pushpin & thread */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 select-none pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-md">
                    <Pin className="w-3.5 h-3.5 text-emerald-600 rotate-45 transform fill-emerald-600" />
                  </div>
                  <div className="w-[1px] h-7 bg-emerald-400/40" />
                </div>

                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="font-mono text-[9px] font-black tracking-widest text-emerald-800/60 uppercase block mb-2">
                      OUTCOME
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-4 leading-tight">
                      Drive Adoption & Growth
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Improve operational efficiency for legal teams",
                        "Increase adoption of the new Legal Portfolio experience",
                        "Create a scalable foundation for future enhancements"
                      ].map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0 font-bold" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* ====================================================
              06. RESEARCH & INSIGHTS SECTION
              ==================================================== */}
          <section id="research" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-16">
            <span className="font-mono text-[9px] font-extrabold uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              06 / Research
            </span>
            <div className="mb-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-2">
                Research
              </h2>
              <h3 className="font-sans text-lg sm:text-xl font-semibold text-neutral-700 mb-4">
                Understanding User Workflows & Business Needs
              </h3>
              <p className="text-neutral-500 font-light leading-relaxed text-xs sm:text-sm max-w-3xl">
                To understand operational challenges, I collaborated with stakeholders, analyzed the existing platform, and studied how legal and recovery teams managed high-volume litigation cases. This research uncovered workflow bottlenecks, usability issues, and opportunities to improve efficiency, visibility, and compliance.
              </p>
            </div>

            {/* Research Methods */}
            <div className="mt-8 mb-10" id="research-methods-block">
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
                Research Methods
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Stakeholder Discussions",
                    emoji: "🧑💼",
                    desc: "Collaborated with Product Managers, Legal SMEs, and Engineering teams to understand business goals, operational challenges, and compliance requirements."
                  },
                  {
                    title: "UX Audit",
                    emoji: "🔍",
                    desc: "Reviewed the existing platform to identify usability issues, navigation friction, and information overload."
                  },
                  {
                    title: "Workflow Mapping",
                    emoji: "🗺️",
                    desc: "Mapped the end-to-end legal lifecycle to understand user journeys, dependencies, and operational bottlenecks."
                  },
                  {
                    title: "Competitive Analysis",
                    emoji: "🏆",
                    desc: "Benchmarked enterprise workflow and legal platforms to identify best practices for dashboards, filtering, workflow management, and audit history."
                  }
                ].map((method, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-neutral-200/60 bg-white shadow-2xs hover:shadow-xs transition-all duration-300 flex items-start gap-4">
                    <span className="text-2xl shrink-0 select-none">{method.emoji}</span>
                    <div>
                      <h5 className="font-bold text-sm text-neutral-900 mb-1.5">{method.title}</h5>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* ====================================================
              07. ECOSYSTEM SECTION (Hanging Clipboards Style)
              ==================================================== */}
          <section id="ecosystem" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="font-mono text-[10px] font-black uppercase text-amber-900 bg-amber-100/80 border border-amber-300/80 px-3 py-1 rounded-md tracking-widest inline-block shadow-3xs">
                02 / USER ECOSYSTEM
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                  3 KEY OPERATIONAL PERSONAS
                </span>
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-8">
              Enterprise Legal Ecosystem
            </h2>

            {/* Minimal User Ecosystem Board Wrapper */}
            <div className="mt-8">
              {/* Personas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="ecosystem-users">
                
                {/* CARD 1: Recovery Managers */}
                <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div>
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-5 h-5 text-amber-700" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-xl text-neutral-900 leading-tight">
                          Recovery Managers
                        </h3>
                      </div>
                    </div>

                    {/* Operational Focus */}
                    <div className="mb-5">
                      <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-2.5">
                        KEY RESPONSIBILITIES
                      </span>
                      <ul className="space-y-2 text-xs text-neutral-600 leading-relaxed font-light">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold shrink-0">•</span>
                          <span><strong className="font-semibold text-neutral-900">Portfolio Health:</strong> Monitors overall recovery metrics and agency performance.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold shrink-0">•</span>
                          <span><strong className="font-semibold text-neutral-900">Pipeline Delays:</strong> Identifies systemic bottlenecks across recovery stages.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold shrink-0">•</span>
                          <span><strong className="font-semibold text-neutral-900">SLA Audits:</strong> Reviews monthly agency conversion rates and performance.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Primary Pain Point */}
                    <div className="bg-neutral-50 border border-neutral-200/70 rounded-xl p-3">
                      <span className="font-mono text-[9px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                        PAIN POINT
                      </span>
                      <p className="text-xs text-neutral-700 font-light leading-relaxed">
                        Fragmented manual spreadsheet reports and delayed multi-agency feedback loops.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CARD 2: Legal Managers */}
                <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div>
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center shrink-0">
                        <Scale className="w-5 h-5 text-rose-700" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-xl text-neutral-900 leading-tight">
                          Legal Managers
                        </h3>
                      </div>
                    </div>

                    {/* Operational Focus */}
                    <div className="mb-5">
                      <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-2.5">
                        KEY RESPONSIBILITIES
                      </span>
                      <ul className="space-y-2 text-xs text-neutral-600 leading-relaxed font-light">
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold shrink-0">•</span>
                          <span><strong className="font-semibold text-neutral-900">Court Calendars:</strong> Tracks critical hearing dates and notice deadlines.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold shrink-0">•</span>
                          <span><strong className="font-semibold text-neutral-900">Compliance Audits:</strong> Ensures alignment with statutory regulatory standards.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold shrink-0">•</span>
                          <span><strong className="font-semibold text-neutral-900">Advocate Oversight:</strong> Monitors external counsel filing timeliness.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Primary Pain Point */}
                    <div className="bg-neutral-50 border border-neutral-200/70 rounded-xl p-3">
                      <span className="font-mono text-[9px] font-bold text-rose-800 uppercase tracking-wider block mb-1">
                        PAIN POINT
                      </span>
                      <p className="text-xs text-neutral-700 font-light leading-relaxed">
                        Risk of missed court dates or statutory deadline breaches across regional tribunals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CARD 3: Operations Teams */}
                <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div>
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-xl text-neutral-900 leading-tight">
                          Operations Teams
                        </h3>
                      </div>
                    </div>

                    {/* Operational Focus */}
                    <div className="mb-5">
                      <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-2.5">
                        KEY RESPONSIBILITIES
                      </span>
                      <ul className="space-y-2 text-xs text-neutral-600 leading-relaxed font-light">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0">•</span>
                          <span><strong className="font-semibold text-neutral-900">Bulk Data Entry:</strong> Processes daily case uploads, overrides, and status feeds.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0">•</span>
                          <span><strong className="font-semibold text-neutral-900">Notice Dispatches:</strong> Issues legal notices and syncs advocate updates.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold shrink-0">•</span>
                          <span><strong className="font-semibold text-neutral-900">Record Coordination:</strong> Coordinates physical and digital court records.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Primary Pain Point */}
                    <div className="bg-neutral-50 border border-neutral-200/70 rounded-xl p-3">
                      <span className="font-mono text-[9px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                        PAIN POINT
                      </span>
                      <p className="text-xs text-neutral-700 font-light leading-relaxed">
                        High cognitive load from repetitive single-case data entry and multi-tab context switching.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          {/* ====================================================
              05. DESIGN DECISIONS SECTION (BEST SECTION)
              ==================================================== */}
          <section id="solution" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-24 relative">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="font-mono text-[10px] font-bold uppercase text-amber-800 bg-amber-50/80 border border-amber-200/80 px-3 py-1 rounded-md tracking-widest inline-block">
                05 / DESIGN DECISIONS
              </span>
              <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest hidden sm:inline">
                APPLE-INSPIRED INTERACTIVE DECISION MATRIX
              </span>
            </div>

            {/* Headline */}
            <div className="mb-8 max-w-3xl">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-3">
                05 Design Decisions <span className="text-amber-700 italic font-normal">(Best Section)</span>
              </h2>
              <p className="text-neutral-600 font-normal leading-relaxed text-sm sm:text-base max-w-2xl">
                Explore the core architectural decisions that transformed static legal reports into a high-efficiency actionable workspace. Select any decision to inspect the detailed UX mechanics, problem analysis, and measured outcomes.
              </p>
            </div>

            {/* 2-Column Design Decision Interactive Text Matrix */}
            <div className="bg-amber-50/40 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs relative group/section">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
                
                {/* LEFT: Sticky Decision Navigation (4 Cols) */}
                <div className="lg:col-span-4 flex flex-col gap-2.5 lg:sticky lg:top-28">
                  <div className="flex items-center justify-between px-1 mb-1">
                    <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                      CORE DECISIONS
                    </span>
                    <span className="font-mono text-[10px] font-bold text-amber-800 bg-amber-100/80 border border-amber-200/80 px-2 py-0.5 rounded">
                      0{activeSolutionTab} / 06
                    </span>
                  </div>
                  
                  {[
                    { id: 1, num: "01", title: "Reports → Workspace", subtitle: "Paradigm Shift", icon: FileSpreadsheet },
                    { id: 2, num: "02", title: "Dashboard Radar", subtitle: "Executive Clarity", icon: Activity },
                    { id: 3, num: "03", title: "Split View Review", subtitle: "Zero Context Loss", icon: Columns },
                    { id: 4, num: "04", title: "Bulk Action Engine", subtitle: "Batch Processing", icon: CheckSquare },
                    { id: 5, num: "05", title: "Faceted Smart Filters", subtitle: "Sub-Second Isolation", icon: Filter },
                    { id: 6, num: "06", title: "Audit Trail Stream", subtitle: "100% Regulatory Trace", icon: Shield }
                  ].map((item) => {
                    const isActive = activeSolutionTab === item.id;
                    const ItemIcon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSolutionTab(item.id)}
                        className={`group w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                          isActive
                            ? "bg-white border-amber-400 text-neutral-900 shadow-md ring-1 ring-amber-400/40 translate-x-1"
                            : "bg-white/80 border-neutral-200/80 text-neutral-600 hover:bg-white hover:border-neutral-300 hover:text-neutral-900"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                            isActive 
                              ? "bg-amber-100 text-amber-900 font-bold shadow-2xs" 
                              : "bg-neutral-100 text-neutral-500 group-hover:text-neutral-800 group-hover:bg-neutral-200/60"
                          }`}>
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className={`font-mono text-[9px] font-bold block ${isActive ? "text-amber-800" : "text-neutral-400"}`}>
                              DECISION {item.num}
                            </span>
                            <span className="font-sans text-xs sm:text-sm font-bold block leading-tight text-neutral-900">
                              {item.title}
                            </span>
                            <span className="font-sans text-[10px] text-neutral-500 block">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>

                        {isActive ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse shrink-0 ml-2" />
                        ) : (
                          <span className="text-neutral-400 group-hover:text-neutral-600 transition-colors text-xs font-mono ml-2">
                            →
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* RIGHT: Detailed Informative Text Specification Panel (8 Cols) */}
                <div className="lg:col-span-8 flex flex-col h-full">
                  {[
                    {
                      num: "01",
                      title: "Static Reports → Actionable Workspace",
                      category: "PARADIGM SHIFT",
                      summary: "Transformed passive, static CSV spreadsheet downloads into a live, interactive workspace where legal managers perform status overrides, dispatch notices, and reassign counsel directly.",
                      problem: "Static CSV reports required manual spreadsheet manipulation just to determine basic case next steps, creating heavy operational friction and zero real-time visibility.",
                      decision: "Re-engineered static reporting into a 2-click actionable workspace with inline status overrides, dispatch triggers, and real-time backend synchronization.",
                      mechanics: "A unified grid view with embedded action menus, quick status toggles, and direct notice dispatch buttons that execute server calls without page reloads.",
                      outcome: "Reduced average case file processing time from 23 minutes to under 2 minutes per file (85% speedup across all legal teams).",
                      pillars: ["Direct Action Engine", "Zero CSV Dependence", "Real-Time State Sync", "Sub-2 Min Processing"]
                    },
                    {
                      num: "02",
                      title: "Dashboard Urgency & Risk Radar",
                      category: "EXECUTIVE CLARITY",
                      summary: "Replaced cluttered data tables with an executive-level risk radar surfacing upcoming court hearings, statutory SLA deadlines, and unassigned high-value cases.",
                      problem: "Legal heads had zero line-of-sight into upcoming court dates, statutory SLA deadlines, and unassigned high-value cases, leading to costly default judgments.",
                      decision: "Surfaced real-time risk badges, hearing calendar alerts, and SLA breakdown metrics at top-of-page view.",
                      mechanics: "Top-level KPI widgets with color-coded risk indicators (Red = Breached/Urgent, Amber = Pending, Green = On Track), combined with an interactive weekly court hearing calendar.",
                      outcome: "Zero missed court hearing dates and a 42% increase in overall portfolio SLA compliance within the first 60 days.",
                      pillars: ["Urgency Badging", "SLA Radar", "Hearing Calendar", "Executive KPI Summary"]
                    },
                    {
                      num: "03",
                      title: "Split View Context-Preserving Drawer",
                      category: "ZERO CONTEXT LOSS",
                      summary: "Introduced an inline slide-out inspector allowing counsel to review complete case documents, court filings, and advocate logs side-by-side with the master case list.",
                      problem: "Attorneys opened 8+ browser tabs simultaneously to cross-compare case filings, leading to heavy cognitive fatigue and frequent input errors.",
                      decision: "Designed a side-drawer split view allowing complete case inspection and edits without leaving or resetting the primary list state.",
                      mechanics: "A responsive slide-over panel that loads case details dynamically on click, maintaining scroll position and filter state in the background list.",
                      outcome: "Eliminated multi-tab context switching completely with 3x faster individual case file reviews.",
                      pillars: ["Contextual Drawer", "Side-by-Side Review", "Persistent List State", "Zero Tab Switching"]
                    },
                    {
                      num: "04",
                      title: "Multi-Select Bulk Action Engine",
                      category: "BATCH EFFICIENCY",
                      summary: "Built a batch processing toolbar empowering legal operations to dispatch legal notices and reassign advocates across hundreds of cases in seconds.",
                      problem: "Dispatching legal notices or updating advocate assignments required tedious, repetitive one-by-one manual record updates.",
                      decision: "Introduced multi-select batch controls to dispatch legal notices and update advocate assignments in bulk.",
                      mechanics: "Floating bottom action bar activated upon selecting grid items, offering bulk reassignment, status updates, and automated notice dispatch.",
                      outcome: "90% reduction in bulk update turnaround time for multi-borrower litigation portfolios.",
                      pillars: ["Multi-Select Checkbox Grid", "Floating Batch Toolbar", "Automated Notice Dispatch", "Bulk Reassignment"]
                    },
                    {
                      num: "05",
                      title: "Faceted Smart Filtering & Query Presets",
                      category: "INSTANT ISOLATION",
                      summary: "Implemented a sticky multi-attribute filter bar with saved query presets, active tag chips, and real-time result counters.",
                      problem: "Locating high-risk cases across thousands of active records involved rigid multi-step portal searches and slow page reloads.",
                      decision: "Built a sticky smart filter bar with saved presets, faceted multi-select, and real-time result counters.",
                      mechanics: "Collapsible drawer with accordion filter groups (Loan Level, Advocate, Case Type, E-Court Status) that filter the dataset in sub-second time.",
                      outcome: "Case isolation time dropped from 2.5 minutes to under 5 seconds across portfolios exceeding 10,000+ active case files.",
                      pillars: ["Faceted Multi-Select", "Saved Presets", "Real-Time Counters", "Sub-Second Response"]
                    },
                    {
                      num: "06",
                      title: "Immutable Chronological Audit Stream",
                      category: "REGULATORY TRANSPARENCY",
                      summary: "Created a time-stamped activity log capturing every edit, advocate reassignment, notice dispatch, and document upload with full user attribution.",
                      problem: "Manual case status overrides lacked time-stamped paper trails, triggering regulatory audit penalties and internal accountability gaps.",
                      decision: "Integrated an automated chronological audit stream logging every edit, notice dispatch, and status transition.",
                      mechanics: "A dedicated audit trail panel with filterable timeline events, user avatars, diff highlights, and regulatory export options.",
                      outcome: "Achieved 100% regulatory audit compliance and zero compliance penalty findings during statutory inspections.",
                      pillars: ["Chronological Stream", "User Attribution", "Diff Audit Log", "100% Audit Compliance"]
                    }
                  ].filter((item) => item.num === `0${activeSolutionTab}`).map((item) => (
                    <div key={item.num} className="bg-white border border-neutral-200/90 p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between shadow-xs space-y-6">
                      
                      {/* Top Header & Category */}
                      <div className="space-y-3 pb-5 border-b border-neutral-200/80">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-[10px] font-bold text-amber-900 bg-amber-100/80 border border-amber-200 px-3 py-1 rounded-md tracking-wider">
                            {item.category}
                          </span>
                          <span className="font-mono text-xs text-neutral-400 font-bold">
                            DECISION {item.num} OF 06
                          </span>
                        </div>
                        
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-neutral-600 text-sm font-normal leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      {/* 3 Core Comparison Blocks: Friction -> Solution -> Impact */}
                      <div className="grid grid-cols-1 gap-4">
                        
                        {/* 1. OPERATIONAL FRICTION */}
                        <div className="bg-rose-50/80 border border-rose-200/80 p-4 sm:p-5 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-rose-800 text-[11px] font-mono font-bold uppercase tracking-wider">
                            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                            <span>1. OPERATIONAL FRICTION (BEFORE REDESIGN)</span>
                          </div>
                          <p className="text-xs sm:text-sm text-neutral-800 font-normal leading-relaxed pl-6">
                            {item.problem}
                          </p>
                        </div>

                        {/* 2. UX INVENTIVE DECISION */}
                        <div className="bg-amber-50/80 border border-amber-300/80 p-4 sm:p-5 rounded-xl space-y-2 shadow-2xs">
                          <div className="flex items-center gap-2 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-wider">
                            <Lightbulb className="w-4 h-4 shrink-0 text-amber-700" />
                            <span>2. UX ARCHITECTURAL DECISION & MECHANICS</span>
                          </div>
                          <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed pl-6">
                            {item.decision}
                          </p>
                          <div className="mt-2 pt-2 border-t border-amber-200/80 text-xs text-amber-900 font-mono pl-6">
                            <span className="text-amber-800 font-bold">Interaction Pattern:</span> {item.mechanics}
                          </div>
                        </div>

                        {/* 3. MEASURED BUSINESS IMPACT */}
                        <div className="bg-emerald-50/80 border border-emerald-200/80 p-4 sm:p-5 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-emerald-800 text-[11px] font-mono font-bold uppercase tracking-wider">
                            <Check className="w-4 h-4 shrink-0 text-emerald-600 font-bold" />
                            <span>3. MEASURED BUSINESS & USER OUTCOMES</span>
                          </div>
                          <p className="text-xs sm:text-sm text-emerald-950 font-bold leading-relaxed pl-6">
                            {item.outcome}
                          </p>
                        </div>

                      </div>

                      {/* Key Architectural Features */}
                      <div className="pt-4 border-t border-neutral-200/80">
                        <span className="font-mono text-[10px] text-neutral-500 font-bold block mb-2 uppercase tracking-wider">
                          Key System Capabilities & Architectural Features:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.pillars.map((p, pIdx) => (
                            <span key={pIdx} className="font-mono text-[10px] text-neutral-800 bg-amber-50/90 border border-amber-200/90 px-3 py-1 rounded-lg font-medium">
                              ✓ {p}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* ====================================================
              06. PRODUCT WALKTHROUGH SECTION
              ==================================================== */}
          <section id="walkthrough" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-24">
            <span className="font-mono text-[9px] font-bold uppercase text-amber-800 bg-amber-50/80 border border-amber-200/80 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              06 / PRODUCT WALKTHROUGH
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-3">
              Product Walkthrough
            </h2>

            <p className="text-neutral-600 font-normal leading-relaxed text-base sm:text-lg max-w-2xl mb-10">
              See the redesigned Legal Portfolio experience in action.
            </p>

            {/* Ultra-Sleek MacBook Pro Mockup Container */}
            <div className="max-w-5xl mx-auto my-8 px-2 sm:px-6 relative group">
              {/* Ambient Backlight Aura Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-emerald-500/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                {/* Laptop Display Lid Frame */}
                <div className="relative bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 p-2 sm:p-3.5 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-neutral-700/60 ring-1 ring-white/10 overflow-hidden">
                  
                  {/* Subtle Top Notch with Glass Camera Eye */}
                  <div className="absolute top-0 inset-x-0 h-4 bg-neutral-900/90 flex justify-center items-center z-30">
                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-b-md bg-neutral-950 border-x border-b border-neutral-800/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-950/80 ring-1 ring-neutral-700/80 flex items-center justify-center">
                        <span className="w-0.5 h-0.5 rounded-full bg-emerald-400/90 animate-pulse" />
                      </span>
                    </div>
                  </div>

                  {/* Glass Screen Edge with Rounded Display Corners */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 pt-3">
                    
                    {/* Browser Chrome Header inside Screen */}
                    <div className="px-3.5 py-2 bg-neutral-900/95 border-b border-neutral-800/80 flex items-center justify-between text-xs select-none backdrop-blur-md">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-3xs" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-3xs" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-3xs" />
                        </div>
                        <div className="bg-neutral-800/90 px-3 py-1 rounded-lg text-neutral-300 font-mono text-[10px] flex items-center gap-2 border border-neutral-700/60 shadow-inner">
                          <span className="text-emerald-400 font-bold">🔒</span>
                          <span className="text-neutral-400">https://</span>
                          <span className="text-neutral-200 font-medium">workspace.legal-portfolio.internal</span>
                          <span className="text-neutral-500 hidden sm:inline">/v2/dashboard</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-[9px] text-emerald-400/90 font-bold uppercase tracking-wider hidden sm:inline">
                          LIVE HIGH-DEF DEMO
                        </span>
                      </div>
                    </div>

                    {/* Video Display Viewport */}
                    <div className="relative aspect-[16/10] bg-neutral-950 flex items-center justify-center overflow-hidden group/video">
                      <video
                        src="/src/assets/images/legal_portfolio_demo.mp4"
                        poster="/src/assets/images/case_management_1783261572643.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />

                      {/* Glass Sheen / Reflection Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06] pointer-events-none" />

                      {/* Subtle Bottom Floating Caption Bar */}
                      <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-white text-xs opacity-90 group-hover/video:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                          <span className="font-sans font-medium text-xs text-neutral-200">
                            Redesigned Legal Portfolio Dashboard in Action
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded border border-neutral-700">
                          1080p • 60 FPS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ====================================================
              09. BUSINESS IMPACT SECTION
              ==================================================== */}
          <section id="impact" className="scroll-mt-28 text-left border-b border-[#141414]/5 pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              09 / BUSINESS IMPACT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              Business Impact &amp; Measured Outcomes
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-8 text-xs sm:text-sm max-w-3xl">
              The true validation of any design system is its measurable success. Below is an interactive breakdown of the qualitative and quantitative impact designed to prove real business value at an executive level.
            </p>

            {/* RECRUITER INTERACTIVE SCAN HUB */}
            <div className="bg-[#FAF9F5] border border-neutral-300/80 rounded-3xl p-4 sm:p-8 mb-12 shadow-xs relative overflow-hidden" id="recruiter-scan-hub">
              {/* Subtle background blueprint grids */}
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="recGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#recGrid)" />
                </svg>
              </div>

              {/* Header block */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-300/60 pb-6 mb-8 relative z-10">
                <div>
                  <span className="font-mono text-[8px] font-black text-emerald-800 uppercase tracking-[0.2em] bg-emerald-100/50 px-2 py-0.5 rounded border border-emerald-200">
                    RECRUITER SCAN PANEL
                  </span>
                  <h3 className="font-serif italic text-xl sm:text-2xl text-neutral-900 font-extrabold mt-1">
                    Executive Impact Dashboard
                  </h3>
                </div>
                {/* Tabs */}
                <div className="flex bg-neutral-200/50 p-1 rounded-xl border border-neutral-300/40 shrink-0 self-start sm:self-auto">
                  {(["metrics", "workflow", "highlights"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveImpactTab(tab)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider font-extrabold transition-all cursor-pointer ${
                        activeImpactTab === tab
                          ? "bg-white text-emerald-800 shadow-xs"
                          : "text-neutral-500 hover:text-neutral-800"
                      }`}
                    >
                      {tab === "metrics" ? "📊 Metrics" : tab === "workflow" ? "🔄 Workflow" : "⭐️ Highlights"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Content Frame with AnimatePresence */}
              <div className="relative z-10 min-h-[300px]">
                <AnimatePresence mode="wait">
                  {activeImpactTab === "metrics" && (
                    <motion.div
                      key="metrics"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                    >
                      {/* Circular Gauge Card */}
                      <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xs">
                        <span className="font-mono text-[9px] font-extrabold text-neutral-400 uppercase tracking-widest mb-4 block">
                          SLA Compliance Goal
                        </span>
                        
                        {/* Circular Progress Gauge */}
                        <div className="relative w-36 h-36 flex items-center justify-center mb-4">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="8" fill="none" />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="#059669"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray="251.2"
                              initial={{ strokeDashoffset: 251.2 }}
                              animate={{ strokeDashoffset: 251.2 - (251.2 * 96.4) / 100 }}
                              transition={{ duration: 1, delay: 0.2 }}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute flex flex-col items-center justify-center">
                            <span className="font-serif text-3xl font-black text-neutral-900 leading-none">96.4%</span>
                            <span className="font-mono text-[8px] text-emerald-600 font-extrabold mt-1">SLA COMPLIANT</span>
                          </div>
                        </div>

                        <div className="mt-2">
                          <p className="text-xs text-neutral-500 font-light max-w-xs">
                            SLA adherence surged from <strong className="text-neutral-800 font-semibold">54.4%</strong> up to <strong className="text-emerald-700 font-semibold">96.4%</strong> following the redesign of real-time warning indicators.
                          </p>
                        </div>
                      </div>

                      {/* Metrics Stats Bento List */}
                      <div className="lg:col-span-7 flex flex-col gap-4">
                        {/* Stat 1 */}
                        <div className="bg-white border border-neutral-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-2xs group hover:border-emerald-300 transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                              <TrendingUp className="w-6 h-6 text-emerald-700" />
                            </div>
                            <div>
                              <h4 className="font-serif text-base font-extrabold text-neutral-900 leading-tight">
                                Business Throughput Velocity
                              </h4>
                              <p className="text-xs text-neutral-400 font-light">SLA Compliance &amp; Operational Output</p>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-mono text-xl sm:text-2xl font-black text-emerald-600 block leading-none">+42%</span>
                            <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">Increase</span>
                          </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white border border-neutral-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-2xs group hover:border-blue-300 transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                              <Users className="w-6 h-6 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-serif text-base font-extrabold text-neutral-900 leading-tight">
                                User Fatigue Reduction
                              </h4>
                              <p className="text-xs text-neutral-400 font-light">Daily clicks and redundant screens bypassed</p>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-mono text-xl sm:text-2xl font-black text-blue-600 block leading-none">-35%</span>
                            <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">Click Friction</span>
                          </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white border border-neutral-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-2xs group hover:border-amber-300 transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                              <Clock className="w-6 h-6 text-amber-700" />
                            </div>
                            <div>
                              <h4 className="font-serif text-base font-extrabold text-neutral-900 leading-tight">
                                Core Task Time-to-Complete
                              </h4>
                              <p className="text-xs text-neutral-400 font-light">Case discovery to audit log validation</p>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-mono text-xl sm:text-2xl font-black text-amber-600 block leading-none">15x</span>
                            <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-wider">Faster Ingestion</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeImpactTab === "workflow" && (
                    <motion.div
                      key="workflow"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-2xs">
                        <span className="font-mono text-[9px] font-extrabold text-neutral-400 uppercase tracking-widest mb-4 block">
                          Visual Comparison: Step Reduction
                        </span>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed mb-6">
                          Our user flow optimization removed deep hierarchical nested navigation in favor of immediate contextual actions.
                        </p>

                        {/* Visual steps representation */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          {/* Old Flow */}
                          <div className="bg-red-50/20 border border-red-100 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-4">
                              <span className="font-mono text-[9px] font-bold text-red-700 uppercase bg-red-100 px-2 py-0.5 rounded">
                                Legacy System Workflow
                              </span>
                              <span className="text-xs font-mono font-bold text-neutral-500">8 Steps / 12 Clicks</span>
                            </div>
                            <div className="flex items-center flex-wrap gap-2 text-[10px] text-neutral-500 font-mono">
                              <span className="px-2 py-1 bg-white border rounded">Search</span>
                              <ChevronRight className="w-3 h-3" />
                              <span className="px-2 py-1 bg-white border rounded">Click Results</span>
                              <ChevronRight className="w-3 h-3" />
                              <span className="px-2 py-1 bg-white border rounded">Open Portfolio</span>
                              <ChevronRight className="w-3 h-3" />
                              <span className="px-2 py-1 bg-white border rounded">Case Profile</span>
                              <ChevronRight className="w-3 h-3" />
                              <span className="px-2 py-1 bg-white border rounded">SLA History</span>
                              <span className="text-neutral-400">...and 3 more steps</span>
                            </div>
                          </div>

                          {/* New Redesigned Flow */}
                          <div className="bg-emerald-50/20 border border-emerald-100 rounded-xl p-4">
                            <div className="flex items-center justify-between mb-4">
                              <span className="font-mono text-[9px] font-bold text-emerald-700 uppercase bg-emerald-100 px-2 py-0.5 rounded">
                                Redesigned Workflow
                              </span>
                              <span className="text-xs font-mono font-bold text-emerald-800">2 Steps / 3 Clicks</span>
                            </div>
                            <div className="flex items-center flex-wrap gap-2 text-[10px] text-neutral-800 font-mono font-semibold">
                              <span className="px-2 py-1 bg-emerald-600 text-white rounded shadow-2xs">Universal Action Bar</span>
                              <ChevronRight className="w-3 h-3 text-emerald-600" />
                              <span className="px-2 py-1 bg-emerald-50 border border-emerald-300 rounded text-emerald-800">Context Panel Commited</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Additional mini visual checkouts */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-neutral-200 rounded-xl p-4 flex items-start gap-3 shadow-3xs">
                          <span className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5 text-xs">✓</span>
                          <div>
                            <h5 className="font-serif text-sm font-bold text-neutral-900">Zero CSV Dependence</h5>
                            <p className="text-[11px] text-neutral-500 font-light mt-0.5">Managers no longer need manual Excel sheets; everything is live, direct, and audit-ready.</p>
                          </div>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-xl p-4 flex items-start gap-3 shadow-3xs">
                          <span className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5 text-xs">✓</span>
                          <div>
                            <h5 className="font-serif text-sm font-bold text-neutral-900">Immediate Risk Escalation</h5>
                            <p className="text-[11px] text-neutral-500 font-light mt-0.5">Critical court dates bubble up to the global notices view automatically in real time.</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeImpactTab === "highlights" && (
                    <motion.div
                      key="highlights"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      {[
                        {
                          title: "Enterprise Readiness",
                          desc: "Designed to support high-volume legal actions across thousands of concurrent portfolios without slowing down performance.",
                          badge: "SCALE",
                          color: "border-purple-200 bg-purple-50/20 text-purple-700"
                        },
                        {
                          title: "Reduced Errors",
                          desc: "Explicit compliance checkpoints and immutable audit log streams ensure absolute security alignment and historical accuracy.",
                          badge: "AUDITING",
                          color: "border-rose-200 bg-rose-50/20 text-rose-700"
                        },
                        {
                          title: "Cognitive Relief",
                          desc: "Minimal visual layouts reduce information density by showing the right details only when actionable decisions are required.",
                          badge: "DESIGN",
                          color: "border-blue-200 bg-blue-50/20 text-blue-700"
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between hover:border-neutral-300 transition-all duration-300">
                          <div>
                            <span className={`font-mono text-[8px] font-black px-2 py-0.5 rounded border ${item.color} tracking-widest inline-block mb-4`}>
                              {item.badge}
                            </span>
                            <h4 className="font-serif text-base font-extrabold text-neutral-900 mb-2">
                              {item.title}
                            </h4>
                            <p className="text-xs text-neutral-500 font-light leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* ====================================================
              10. WHAT'S NEXT & FUTURE ROADMAP SECTION
              ==================================================== */}
          <section id="whats-next" className="scroll-mt-28 text-left pb-20">
            <span className="font-mono text-[9px] font-extrabold uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded tracking-widest inline-block mb-4">
              10 / WHAT'S NEXT &amp; ROADMAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
              What's Next &amp; Future Scope
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-8 text-xs sm:text-sm max-w-3xl">
              Looking ahead, the Legal Portfolio platform architecture is built for continuous evolution. Below are the key strategic roadmap features planned for subsequent releases.
            </p>

            {/* BLOCK 3 — FUTURE SCOPE (3 cards in a row with mock UI previews) */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <h3 className="font-mono text-[9px] font-black text-neutral-500 tracking-widest uppercase">
                  Future Scope &amp; Roadmap
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-3xl border border-neutral-200/60 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Visual Mock-up Header */}
                    <div className="bg-neutral-50 border border-neutral-150 rounded-2xl p-4 mb-5 relative overflow-hidden">
                      {/* Miniature Wireframe View */}
                      <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="font-mono text-[8px] font-bold text-neutral-500">CASE #1029</span>
                        </div>
                        <span className="px-1.5 py-0.5 text-[7px] font-mono rounded bg-red-50 text-red-600 font-bold uppercase">SLA Due</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 rounded-full border border-neutral-300 flex items-center justify-center shrink-0">
                            <Check className="w-2 h-2 text-neutral-400 opacity-0" />
                          </div>
                          <span className="font-mono text-[9px] text-neutral-700 leading-none truncate">Assign to Tier 1 Advocate</span>
                        </div>
                        <div className="h-1 w-2/3 bg-neutral-200 rounded-full ml-5" />
                      </div>
                    </div>

                    <h4 className="font-serif text-base font-bold text-neutral-900 mb-2 flex items-center gap-2">
                      <span>📋</span> Task Management
                    </h4>
                    <p className="text-[12px] text-neutral-500 font-light leading-relaxed mb-6">
                      Create, assign, and track tasks directly from a case
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-dashed border-neutral-100">
                    {["Assign Ownership", "Due Dates", "Status Tracking", "Reminders"].map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-[8px] font-mono tracking-wide rounded-full bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200/60 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-3xl border border-neutral-200/60 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Visual Mock-up Header */}
                    <div className="bg-emerald-50/30 border border-emerald-100 rounded-2xl p-4 mb-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-8 h-8 opacity-[0.1] text-emerald-900 pointer-events-none">
                        <Sparkles className="w-full h-full" />
                      </div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Sparkles className="w-3 h-3 text-emerald-600 animate-pulse" />
                        <span className="font-mono text-[8px] font-bold text-emerald-800 uppercase tracking-wider">AI Suggestion</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-emerald-100/60 shadow-3xs mb-1">
                        <p className="font-mono text-[8.5px] text-neutral-700 leading-normal">
                          "Advocate overburdened. Route case to Sarah Jenkins (SLA match: 98%)."
                        </p>
                      </div>
                      <div className="h-1 w-1/3 bg-emerald-200 rounded-full mt-1.5" />
                    </div>

                    <h4 className="font-serif text-base font-bold text-neutral-900 mb-2 flex items-center gap-2">
                      <span>🤖</span> AI-Powered Recommendations
                    </h4>
                    <p className="text-[12px] text-neutral-500 font-light leading-relaxed mb-6">
                      Help teams focus on what matters most
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-dashed border-neutral-100">
                    {["Daily Summaries", "Smart Prioritization", "Risk Alerts", "Next-Best-Action"].map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-[8px] font-mono tracking-wide rounded-full bg-emerald-50 text-emerald-700 font-medium group-hover:bg-emerald-100/60 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-3xl border border-neutral-200/60 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Visual Mock-up Header (Dynamic Micro SVG Chart) */}
                    <div className="bg-neutral-50 border border-neutral-150 rounded-2xl p-4 mb-5 relative overflow-hidden flex flex-col justify-between min-h-[75px]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-[8px] font-bold text-neutral-500">PORTFOLIO SLA HEALTH</span>
                        <span className="font-mono text-[8.5px] font-bold text-emerald-600">96.4%</span>
                      </div>
                      {/* Mini Sparkline graph */}
                      <svg viewBox="0 0 120 28" className="w-full h-8 mt-1 overflow-visible">
                        <defs>
                          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path d="M 0 24 Q 20 18 40 22 T 80 12 T 120 6 L 120 28 L 0 28 Z" fill="url(#chartGrad)" />
                        {/* Line */}
                        <path d="M 0 24 Q 20 18 40 22 T 80 12 T 120 6" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                        {/* Active Indicator pulse */}
                        <circle cx="120" cy="6" r="2.5" fill="#10b981" />
                      </svg>
                    </div>

                    <h4 className="font-serif text-base font-bold text-neutral-900 mb-2 flex items-center gap-2">
                      <span>📊</span> Operational Analytics
                    </h4>
                    <p className="text-[12px] text-neutral-500 font-light leading-relaxed mb-6">
                      Deeper insight into portfolio performance
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-dashed border-neutral-100">
                    {["Advocate Performance", "Ageing Trends", "SLA Analytics", "Health Score"].map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-[8px] font-mono tracking-wide rounded-full bg-blue-50 text-blue-700 font-medium group-hover:bg-blue-100/60 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div> {/* Close Right Column (9 cols) */}
      </div> {/* Close Main Dual-Column grid */}

      {/* FOOTER: CHOOSE NEXT ADJACENT PROJECT TO KEEP READING */}
      <footer className="py-24 px-6 md:px-12 bg-[#141414] text-white text-center z-10 relative overflow-hidden w-full mt-24">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-950/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 mb-4">
            Next Story Chapter
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-6 max-w-2xl">
            Explore more of Neha's enterprise creations.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer shadow-md"
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
