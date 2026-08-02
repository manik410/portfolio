import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Eye, Clock, Sparkles } from "lucide-react";
import { Project } from "../types";
import { projectsData } from "../data";
import CaseStudyViewer from "./CaseStudyViewer";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      className="py-24 px-6 md:px-12 bg-white border-b border-black/5 relative"
      id="work-section"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4" id="work-header">
          <div>
            <div className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-black/40 uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-black/20 inline-block" />
              03 / CASE STUDIES
            </div>
            <h2 className="font-display text-[44px] sm:text-[64px] md:text-[80px] font-black tracking-[-0.04em] leading-none text-black">
              Selected <span className="font-serif italic font-light text-accent-orange">work</span>
            </h2>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-28" id="projects-stack">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Visual Column - Alternating desktop layout */}
                <div
                  className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"} group`}
                  id={`project-visual-${project.id}`}
                >
                  <div className="relative overflow-hidden rounded-xl border border-black/10 shadow-lg cursor-pointer bg-neutral-100" onClick={() => setSelectedProject(project)}>
                    {/* Color Accent Bar on Left */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${project.accentColor} z-10`} />

                    {/* Coming Soon Badge Overlay */}
                    {project.comingSoon && (
                      <div className="absolute top-3 right-3 bg-neutral-900/90 backdrop-blur-md text-amber-300 font-mono text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-amber-500/30 z-20 tracking-wider uppercase">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        Coming Soon
                      </div>
                    )}

                    {/* Highly polished image or video overlay */}
                    {project.video ? (
                      <video
                        src={project.video}
                        poster={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    )}

                    {/* View overlay trigger */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <div className="bg-white text-black px-5 py-2.5 rounded-full font-sans text-xs font-semibold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4 text-[#10B981]" />
                        {project.comingSoon ? "Preview Design Work" : "Examine Design Work"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col items-start`}
                  id={`project-info-${project.id}`}
                >
                  {/* Category and Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-accent-orange bg-accent-orange/5 px-2.5 py-1 rounded border border-accent-orange/15 uppercase">
                      {project.tags[0]}
                    </span>
                    <span className="text-black/30 font-light select-none">•</span>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-black/40 tracking-wider uppercase">
                      {project.role}
                    </span>
                    {project.comingSoon && (
                      <>
                        <span className="text-black/30 font-light select-none">•</span>
                        <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-amber-800 bg-amber-100/90 border border-amber-300/80 px-2.5 py-0.5 rounded uppercase flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-600" />
                          Coming Soon
                        </span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[26px] sm:text-[32px] md:text-[38px] font-black text-black leading-tight tracking-tight mb-5">
                    {project.title}
                  </h3>

                  {/* Problem & Solution Block */}
                  <div className="space-y-4 mb-6 text-left w-full">
                    <div>
                      <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-black/35 block mb-1">
                        PROBLEM
                      </span>
                      <p className="font-sans text-[15px] text-neutral-700 leading-relaxed font-normal">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-black/35 block mb-1">
                        SOLUTION
                      </span>
                      <p className="font-sans text-[15px] text-neutral-700 leading-relaxed font-normal">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Highlight */}
                  <div className={`w-full ${project.accentColor} border-l-4 ${project.borderColor} p-4 rounded-r-md mb-8 shadow-xs`}>
                    <span className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-black/35 block mb-1.5">
                      BUSINESS IMPACT
                    </span>
                    <p className={`font-sans text-[15px] font-semibold ${project.textColor} leading-normal`}>
                      {project.impact}
                    </p>
                  </div>

                  {/* Interactive Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-display text-[15px] font-bold text-black hover:text-accent-orange transition-colors flex items-center gap-1.5 group cursor-pointer relative py-1"
                  >
                    {project.comingSoon ? "Case Study Coming Soon" : "Read Case Study"}
                    {project.comingSoon ? (
                      <span className="font-mono text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 border border-amber-300/80 px-2 py-0.5 rounded ml-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        Upcoming
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black group-hover:bg-accent-orange transition-colors" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FULL CASE STUDY OVERLAY DRAWER */}
        <AnimatePresence>
          {selectedProject && (
            <CaseStudyViewer 
              projectId={selectedProject.id} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
