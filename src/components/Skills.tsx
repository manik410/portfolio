import { motion } from "motion/react";
import { Hammer, Sparkles, BookOpen } from "lucide-react";
import { skillsCategories } from "../data";

// Icon mapping helper
const getCategoryIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Sparkles className="w-5 h-5 text-accent-orange" />;
    case 1:
      return <Hammer className="w-5 h-5 text-accent-orange" />;
    case 2:
      return <BookOpen className="w-5 h-5 text-accent-orange" />;
    default:
      return <Sparkles className="w-5 h-5 text-accent-orange" />;
  }
};

export default function Skills() {
  return (
    <section
      className="py-24 px-6 md:px-12 bg-white border-b border-black/5 relative overflow-hidden"
      id="skills-section"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block with Handwritten Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 relative" id="skills-header">
          <div>
            <div className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-black/40 uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-black/20 inline-block" />
              05 / CORE CAPABILITIES
            </div>
            <h2 className="font-display text-[44px] sm:text-[64px] md:text-[80px] font-black tracking-[-0.04em] leading-none text-black">
              Skills &amp; <span className="font-serif italic font-light text-accent-orange">Expertise</span>
            </h2>
          </div>
          
          {/* Subtle handwritten annotation */}
          <div className="absolute right-0 top-0 rotate-[4deg] hidden lg:block select-none pointer-events-none">
            <span className="font-hand text-[22px] text-accent-orange font-bold">
              AI + SaaS specialist! ✨
            </span>
          </div>

          <p className="font-sans text-[17px] sm:text-[19px] text-neutral-500 font-normal leading-[1.7] max-w-[680px]">
            Bridging complex product workflows with simple design systems, customized for high-growth enterprise domains.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="skills-bento-grid">
          {skillsCategories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              key={category.title}
              className="p-8 bg-bg-cream border border-black/5 hover:border-black/15 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-start text-left relative"
            >
              {/* Category Icon & Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white rounded-lg border border-black/5 shadow-xs">
                  {getCategoryIcon(index)}
                </div>
                <h3 className="font-display text-[22px] sm:text-[26px] font-bold text-black">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills List */}
              <div className="flex flex-wrap gap-2.5 w-full">
                {category.skills.map((skill) => (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    key={skill}
                    className="font-mono text-[10px] sm:text-[11px] font-semibold px-3 py-1 rounded-full bg-white border border-black/5 hover:border-accent-orange hover:bg-white text-black transition-all cursor-default shadow-2xs hover:shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
