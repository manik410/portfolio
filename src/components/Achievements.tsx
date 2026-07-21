import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Award, ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}

function ImageWithFallback({ src, fallback, alt, className }: ImageWithFallbackProps) {
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
    />
  );
}

export default function Achievements() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Secured 1st Place",
      badge: "CredGenius Hackathon",
      caption: "Secured 1st place with Team Tech Titans",
      src: "/src/assets/images/hackathon_cheque.jpg",
      fallback: "/src/assets/images/designer_sketching_1783340098648.jpg"
    },
    {
      title: "Team Celebration",
      badge: "Titans Victory",
      caption: "Cross-functional collaboration and teamwork",
      src: "/src/assets/images/hackathon_team.jpg",
      fallback: "/src/assets/images/neha_saree_portrait_1783342595759.jpg"
    },
    {
      title: "Award Certificate",
      badge: "Credgenics Award",
      caption: "Award recognition certificate",
      src: "/src/assets/images/outstanding_award.jpg",
      fallback: "/src/assets/images/designer_portrait_1783340014240.jpg"
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="py-24 px-6 md:px-12 bg-white border-b border-black/5 relative overflow-hidden"
      id="achievements-section"
    >
      {/* SaaS subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE: TEXT CONTENT & DETAILS */}
          <div className="lg:col-span-5 flex flex-col items-start text-left" id="achievements-left">
            <div className="font-sans text-[12px] sm:text-[14px] font-semibold tracking-[0.12em] text-accent-orange uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-accent-orange/45 inline-block" />
              ACHIEVEMENTS
            </div>

            <h2 className="font-display text-[36px] sm:text-[52px] font-black tracking-[-0.03em] leading-[1.1] text-black mb-6">
              🏆 Hackathon <span className="font-serif italic font-light text-accent-orange">Winner</span>
            </h2>

            <p className="font-sans text-[17px] sm:text-[18px] text-neutral-600 leading-[1.65] font-normal mb-8">
              Winner of the CredGenius Hackathon at Credgenics, where our team secured 1st place by solving a real-world product challenge through research, collaboration, and rapid execution.
            </p>

            {/* Structured Team Player Recognition */}
            <div className="w-full bg-white border border-neutral-200/60 p-6 rounded-2xl shadow-xs relative overflow-hidden mb-4">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-orange/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-accent-orange">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-[15px] font-bold text-neutral-900 leading-tight">
                    Outstanding Team Player Award
                  </h4>
                  <p className="font-mono text-[9.5px] uppercase tracking-wider text-neutral-400 font-extrabold">
                    Credgenics Corporate Recognition
                  </p>
                </div>
              </div>
              
              <p className="font-sans text-[13px] text-neutral-600 leading-relaxed font-semibold pl-12">
                Honored with the Certificate of Recognition for fostering cross-functional synergy, taking complete ownership of core features, and collaborating closely across PM, Engineering, QA, and Business teams.
              </p>
            </div>

            <div className="flex items-center gap-2 pl-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="font-sans text-[12px] font-bold text-neutral-500">
                Validated end-to-end user-centric product impact
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: PREMIUM INTERACTIVE CAROUSEL */}
          <div className="lg:col-span-7 w-full flex flex-col justify-center" id="achievements-carousel-container">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200/10 shadow-xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  {/* Visual Image container */}
                  <ImageWithFallback
                    src={slides[activeSlide].src}
                    fallback={slides[activeSlide].fallback}
                    alt={slides[activeSlide].title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  
                  {/* Subtle vignette gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85 pointer-events-none" />

                  {/* Top-left decorative floating tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-[9px] text-white font-mono uppercase tracking-widest px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5 font-bold">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      {slides[activeSlide].badge}
                    </span>
                  </div>

                  {/* Bottom Text Captions */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 pt-16 text-left z-20 pointer-events-none">
                    <h3 className="text-white font-sans text-xl sm:text-2xl font-extrabold tracking-tight mb-1">
                      {slides[activeSlide].title}
                    </h3>
                    <p className="text-neutral-300 font-sans text-[13px] sm:text-sm leading-relaxed max-w-xl font-medium">
                      {slides[activeSlide].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation controls - Left/Right Buttons */}
              <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none z-30">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/95 hover:bg-white text-neutral-800 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 pointer-events-auto cursor-pointer"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/95 hover:bg-white text-neutral-800 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 pointer-events-auto cursor-pointer"
                  aria-label="Next image"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide Counter Indicator */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-neutral-950/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-white/90 font-mono text-[10px] font-bold">
                  {activeSlide + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* DOT INDICATORS UNDER CAROUSEL */}
            <div className="flex items-center justify-center gap-2.5 mt-5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === idx
                      ? "bg-accent-orange w-6 shadow-sm"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
