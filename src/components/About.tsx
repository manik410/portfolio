import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Quote,
  Zap,
  Bookmark,
  Cpu,
  Brain,
  Layers,
  Search,
  BookOpen,
  Accessibility
} from "lucide-react";

// Image with Fallback utility component to gracefully handle missing files
interface ImageWithFallbackProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  [key: string]: any;
}

function ImageWithFallback({ src, fallback, alt, className, ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(fallback);
        }
      }}
      {...props}
    />
  );
}

export default function About() {
  // Chips/Tags for Beyond Design section
  const beyondDesignChips = [
    { text: "AI-First Product Designer", icon: Cpu, color: "text-violet-600 bg-violet-50 border-violet-100" },
    { text: "UX Research Enthusiast", icon: Search, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
    { text: "Enterprise SaaS Specialist", icon: Layers, color: "text-sky-600 bg-sky-50 border-sky-100" },
    { text: "Loves Complex Workflows", icon: Brain, color: "text-rose-600 bg-rose-50 border-rose-100" },
    { text: "Continuous Learner", icon: BookOpen, color: "text-amber-600 bg-amber-50 border-amber-100" },
    { text: "Design Systems & Accessibility", icon: Accessibility, color: "text-indigo-600 bg-indigo-50 border-indigo-100" }
  ];

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-neutral-200/50 relative overflow-hidden"
      id="about-section"
    >
      {/* SaaS Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Decorative Blur Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-amber-200/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-violet-200/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER & SUPPORTING TEXT */}
        <div className="mb-20 text-center max-w-3xl mx-auto" id="about-header-group">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 shadow-sm rounded-full mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-neutral-600">
              Who I Am
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 leading-tight"
          >
            About <span className="font-serif italic font-light text-accent-orange">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[17px] sm:text-[19px] text-neutral-600 mt-4 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            I design products that solve real business problems while creating intuitive experiences for users. 
            My approach combines user research, systems thinking, business strategy, and AI-powered workflows to build scalable digital products.
          </motion.p>
        </div>

        {/* STORY SECTION: "My Journey" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24" id="about-journey-story">
          {/* Portrait Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Card Aura Background */}
              <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-tr from-amber-500/20 to-violet-500/20 opacity-70 blur-md group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 rounded-[24px] shadow-xl overflow-hidden">
                <div className="aspect-[4/5] rounded-[18px] overflow-hidden relative">
                  <ImageWithFallback
                    src="/src/assets/images/neha_saree_portrait_1783342595759.jpg"
                    fallback="/src/assets/images/designer_portrait_1783340014240.jpg"
                    alt="Neha Sharma Product Designer Portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating SaaS-style Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 border border-neutral-100 rounded-xl shadow-lg flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-neutral-900">Neha Sharma</h4>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">Gurgaon, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight flex items-center gap-3">
              <span className="text-amber-500">✦</span> My Journey
            </h3>
            
            <div className="font-sans text-[16px] sm:text-[17px] text-neutral-600 space-y-6 leading-relaxed font-medium">
              <p>
                My journey into UX began with a curiosity about how technology can simplify people's lives. 
                Over the years, I've worked on enterprise SaaS products, legal technology, AI-powered workflows, 
                and customer communication platforms. Every project has strengthened my ability to transform 
                complex business challenges into intuitive, user-centered experiences.
              </p>
              <p>
                Winning the CredGenius Hackathon reinforced my belief that the best ideas emerge from 
                collaboration, rapid experimentation, and relentless focus on user problems. Being recognized 
                as an Outstanding Team Player further reflects how I contribute not only through design but 
                also by fostering strong cross-functional partnerships.
              </p>
              <p>
                Today, I design products that balance user needs with measurable business outcomes, creating 
                experiences that are scalable, meaningful, and impactful.
              </p>
            </div>
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="about-bento-grid">
          
          {/* CARD 3: My Design Philosophy (Spans 6 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 bg-white/75 backdrop-blur-md border border-neutral-200/60 rounded-[24px] p-6 sm:p-8 shadow-sm flex flex-col justify-between group hover:border-emerald-500/25 hover:shadow-md transition-all duration-500 relative"
            id="bento-card-philosophy"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 font-extrabold block">
                    Belief
                  </span>
                  <h3 className="font-display text-lg font-bold text-neutral-900 tracking-tight">
                    💡 My Design Philosophy
                  </h3>
                </div>
              </div>

              {/* Large quote with elegant typography */}
              <div className="relative pl-6 select-none">
                <span className="absolute left-0 top-0 text-3xl font-serif text-emerald-300 font-extrabold leading-none">“</span>
                <p className="font-sans text-base sm:text-[17px] italic font-semibold text-neutral-800 leading-relaxed tracking-tight">
                  Great products aren't built by adding more features. They're built by deeply understanding people, simplifying complexity, and creating experiences that feel effortless.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100/80 mt-8 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span className="font-mono text-[9.5px] uppercase tracking-wider font-extrabold text-neutral-500">
                CORE PRINCIPLE : SIMPLIFY & FOCUS
              </span>
            </div>
          </motion.div>

          {/* CARD 4: Beyond Design Chips (Spans 6 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 bg-white/75 backdrop-blur-md border border-neutral-200/60 rounded-[24px] p-6 sm:p-8 shadow-sm flex flex-col justify-between group hover:border-neutral-400/30 hover:shadow-md transition-all duration-500 relative"
            id="bento-card-beyond"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-sky-600 font-extrabold block">
                    Focus Areas
                  </span>
                  <h3 className="font-display text-lg font-bold text-neutral-900 tracking-tight">
                    🚀 Beyond Design
                  </h3>
                </div>
              </div>

              <p className="font-sans text-xs text-neutral-500 leading-relaxed font-semibold mb-5">
                Personal tags and specific skillsets that shape my overall perspective as an end-to-end builder:
              </p>

              {/* Tag/Chip Grid Layout */}
              <div className="flex flex-wrap gap-2.5">
                {beyondDesignChips.map((chip, idx) => {
                  const IconComponent = chip.icon;
                  return (
                    <div
                      key={idx}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full font-sans text-xs font-bold transition-all duration-300 hover:scale-102 hover:shadow-xs ${chip.color}`}
                    >
                      <IconComponent className="w-3.5 h-3.5 shrink-0" />
                      <span>{chip.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 mt-6">
              <span className="font-mono text-[9.5px] uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-1.5">
                <Bookmark className="w-3 h-3 text-sky-500" />
                CONTINUOUS GROWTH & REFINEMENT
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
