import { motion } from "motion/react";
import { Search, Compass, Sparkles, Layers, CheckCircle2, Send, HelpCircle } from "lucide-react";
import { processSteps } from "../data";

// Icon mapping helper
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Search":
      return <Search className="w-5 h-5 text-accent-orange" />;
    case "Compass":
      return <Compass className="w-5 h-5 text-accent-orange" />;
    case "Sparkles":
      return <Sparkles className="w-5 h-5 text-accent-orange" />;
    case "Layers":
      return <Layers className="w-5 h-5 text-accent-orange" />;
    case "CheckCircle":
      return <CheckCircle2 className="w-5 h-5 text-accent-orange" />;
    case "Send":
      return <Send className="w-5 h-5 text-accent-orange" />;
    default:
      return <HelpCircle className="w-5 h-5 text-accent-orange" />;
  }
};

export default function Process() {
  return (
    <section
      className="py-24 px-6 md:px-12 bg-bg-cream border-b border-black/5 relative overflow-hidden"
      id="process-section"
    >
      {/* Editorial aesthetic grid decoration */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-16 text-center md:text-left" id="process-header">
          <div className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-black/40 uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="w-6 h-[1px] bg-black/20 inline-block" />
            04 / THE METHODOLOGY
          </div>
          <h2 className="font-display text-[44px] sm:text-[64px] md:text-[80px] font-black tracking-[-0.04em] leading-none text-black">
            Design <span className="font-serif italic font-light text-accent-orange">Process</span>
          </h2>
          <p className="font-sans text-[17px] sm:text-[19px] text-neutral-500 font-normal leading-[1.7] max-w-[680px] mt-3">
            How I translate complex enterprise system problems into clear, functional, and predictable product experiences.
          </p>
        </div>

        {/* Desktop Connected Horizontal Timeline */}
        <div className="hidden lg:block relative" id="process-desktop-timeline">
          
          {/* Timeline Connector Line */}
          <div className="absolute top-[43px] left-10 right-10 h-[2px] bg-black/5" />

          {/* Connected Steps */}
          <div className="grid grid-cols-6 gap-6 relative">
            {processSteps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                key={step.number}
                className="flex flex-col items-start text-left"
              >
                {/* Visual Anchor Indicator */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-11 h-11 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm relative z-10 group-hover:border-accent-orange transition-colors">
                    {getIconComponent(step.icon)}
                  </div>
                  <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.15em] text-accent-orange uppercase">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="font-display text-[17px] sm:text-[19px] font-bold text-black mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-[190px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Mobile/Tablet Vertical Stack */}
        <div className="lg:hidden flex flex-col gap-8 relative" id="process-mobile-timeline">
          {/* Vertical linking line */}
          <div className="absolute top-6 bottom-6 left-[22px] w-[2px] bg-black/5" />

          {processSteps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={step.number}
              className="flex items-start gap-5 relative group"
            >
              {/* Icon Anchor */}
              <div className="w-11 h-11 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm relative z-10 flex-shrink-0">
                {getIconComponent(step.icon)}
              </div>

              {/* Step Text Details */}
              <div className="flex-1 text-left bg-white/40 border border-black/5 rounded-lg p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-[16px] sm:text-[18px] font-bold text-black">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-accent-orange bg-accent-orange/10 px-2.5 py-0.5 rounded uppercase">
                    {step.number}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
