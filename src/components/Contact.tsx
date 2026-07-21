import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, FileText, Send, CheckCircle2, MapPin, Globe, Sparkles, X, Briefcase, GraduationCap, Award } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate real high-end transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset fields
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <section
      className="py-24 px-6 md:px-12 bg-bg-cream grid-pattern relative overflow-hidden"
      id="contact-section"
    >
      {/* Background Watermark decoration */}
      <div className="absolute left-[-50px] top-[-50px] font-serif italic text-[180px] text-black/[0.01] select-none pointer-events-none font-black leading-none">
        hello
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Headings & Direct Social Anchors */}
          <div className="lg:col-span-6 text-left flex flex-col justify-start" id="contact-left">
            <div className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-black/40 uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-black/20 inline-block" />
              06 / SAY HELLO
            </div>

            <h2 className="font-display text-[44px] sm:text-[64px] md:text-[76px] font-black tracking-[-0.04em] leading-[0.95] text-black mb-6">
              Let's build something meaningful{" "}
              <span className="italic font-medium text-accent-orange relative inline-block">
                together
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-accent-yellow/85 -z-10"
                  viewBox="0 0 100 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 7C35 3 68 2.5 97 5.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h2>

            <p className="font-sans text-[17px] sm:text-[19px] text-neutral-800 font-normal leading-[1.7] max-w-[680px] mb-10">
              I'm always open to discussing new opportunities, SaaS system consulting, UX strategy workshops, or simply chatting about design systems and AI experiences.
            </p>

            {/* Quick Stats Grid / Metadata */}
            <div className="grid grid-cols-2 gap-6 mb-10 max-w-sm" id="contact-stats">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-orange mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-mono text-[10px] font-bold text-black/40 uppercase tracking-[0.15em] block mb-1">
                    LOCATION
                  </span>
                  <span className="font-display text-[15px] font-bold text-black/85">
                    Gurgaon, India
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-accent-orange mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-mono text-[10px] font-bold text-black/40 uppercase tracking-[0.15em] block mb-1">
                    TIMEZONE
                  </span>
                  <span className="font-display text-[15px] font-bold text-black/85">
                    GMT +5:30 (IST)
                  </span>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons Group */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4" id="contact-pills">
              {/* Email CTA */}
              <a
                href="mailto:guleriasushma0@gmail.com"
                className="flex items-center gap-2.5 px-6 py-3.5 bg-black text-white hover:bg-neutral-800 rounded-full font-display text-[14px] font-semibold shadow-md hover:shadow-lg transition-all tracking-tight"
              >
                <Mail className="w-4 h-4 text-white/80" />
                <span>guleriasushma0@gmail.com</span>
              </a>

              {/* LinkedIn CTA */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 bg-white border border-black/10 hover:border-black/25 text-black rounded-full font-display text-[14px] font-semibold shadow-2xs hover:shadow-xs transition-all tracking-tight"
              >
                <Linkedin className="w-4 h-4 text-accent-blue" />
                <span>LinkedIn Profile</span>
              </a>

              {/* Resume Download/Preview CTA */}
              <button
                id="resume-section"
                onClick={(e) => {
                  e.preventDefault();
                  setShowResume(true);
                }}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-white border border-black/10 hover:border-black/25 text-black rounded-full font-display text-[14px] font-semibold shadow-2xs hover:shadow-xs transition-all tracking-tight cursor-pointer"
              >
                <FileText className="w-4 h-4 text-accent-pink" />
                <span>View Resume</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Client-Side Inquiry Form */}
          <div className="lg:col-span-6 w-full" id="contact-right">
            <div className="p-8 md:p-10 bg-white border border-black/10 rounded-2xl shadow-lg relative bg-radial-at-t">
              
              {/* Interactive Form States */}
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div>
                      <label htmlFor="user-name" className="font-sans text-[12px] font-semibold tracking-[0.12em] text-black/50 uppercase block mb-2">
                        YOUR NAME
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. David Miller"
                        className="w-full bg-bg-cream border border-black/5 focus:border-accent-orange rounded-lg px-4 py-3 font-sans text-[16px] text-black focus:outline-hidden transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="user-email" className="font-sans text-[12px] font-semibold tracking-[0.12em] text-black/50 uppercase block mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="david@enterprise.com"
                        className="w-full bg-bg-cream border border-black/5 focus:border-accent-orange rounded-lg px-4 py-3 font-sans text-[16px] text-black focus:outline-hidden transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="user-message" className="font-sans text-[12px] font-semibold tracking-[0.12em] text-black/50 uppercase block mb-2">
                        WHAT SHALL WE TALK ABOUT?
                      </label>
                      <textarea
                        id="user-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your enterprise workflow problems or SaaS project scope..."
                        className="w-full bg-bg-cream border border-black/5 focus:border-accent-orange rounded-lg px-4 py-3 font-sans text-[16px] text-black focus:outline-hidden transition-colors resize-none shadow-2xs"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black hover:bg-neutral-800 disabled:bg-neutral-400 text-white py-4 px-6 rounded-lg font-sans font-semibold text-[16px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-black/5"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                    id="contact-success-state"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent-yellow border border-yellow-300 flex items-center justify-center mb-6 shadow-md shadow-yellow-100 animate-bounce">
                      <CheckCircle2 className="w-8 h-8 text-amber-950" />
                    </div>

                    {/* Handwritten Style Thank You Card */}
                    <div className="paper-texture bg-accent-yellow border border-yellow-300 rounded-[2px] p-6 shadow-lg max-w-sm rotate-2">
                      <h3 className="font-sans text-[22px] text-amber-950 font-bold mb-2">
                        Thank you, {name || "friend"}!
                      </h3>
                      <p className="font-sans text-[16px] text-amber-900/80 leading-relaxed font-normal mb-4">
                        Your message has been safely received. I'll review your project details and get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="font-sans text-[12px] font-semibold tracking-[0.12em] uppercase text-amber-950/60 hover:text-amber-950 transition-colors"
                      >
                        [ Send another message ]
                      </button>
                    </div>

                    <div className="absolute top-4 right-4 animate-pulse">
                      <Sparkles className="w-5 h-5 text-accent-orange/40" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Footer line */}
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4 text-left select-none" id="footer-row">
          <p className="font-sans text-[13px] text-black/50 font-normal">
            &copy; {new Date().getFullYear()} Neha Sharma. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-sans text-[12px] font-semibold tracking-[0.12em] text-black/40">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
              AVAILABLE FOR SELECT PROJECTS
            </span>
            <span>•</span>
            <span>GURGAON, INDIA</span>
          </div>
        </div>

      </div>

      {/* Interactive Custom Resume Modal Overlay */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white border border-black/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Close button */}
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-12">
                {/* Header Profile Info */}
                <div className="border-b border-neutral-100 pb-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-accent-orange uppercase tracking-widest block mb-2">
                      SENIOR PRODUCT DESIGNER
                    </span>
                    <h1 className="font-display text-[32px] sm:text-[40px] font-black text-neutral-900 tracking-tight leading-none">
                      Neha Sharma
                    </h1>
                    <p className="font-sans text-neutral-500 text-sm mt-2 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      Gurgaon, India &bull; GMT +5:30 (IST)
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-1 font-mono text-[11px] text-neutral-500">
                    <p>guleriasushma0@gmail.com</p>
                    <p>linkedin.com/in/neha-sharma</p>
                  </div>
                </div>

                {/* Main Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                  {/* Left column (Experience) */}
                  <div className="md:col-span-8 space-y-8">
                    <div>
                      <h2 className="font-display text-[18px] sm:text-[20px] font-bold text-neutral-900 tracking-tight mb-5 flex items-center gap-2">
                        <Briefcase className="w-4.5 h-4.5 text-accent-orange shrink-0" />
                        Professional Experience
                      </h2>

                      <div className="space-y-6 relative pl-4 border-l border-neutral-100">
                        {/* Credgenics */}
                        <div className="relative">
                          <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-orange ring-4 ring-white" />
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h3 className="font-display text-[15px] font-bold text-neutral-900">
                              Senior Product Designer
                            </h3>
                            <span className="font-mono text-[10px] font-bold text-accent-orange bg-accent-orange/5 border border-accent-orange/15 px-2 py-0.5 rounded uppercase">
                              June 2024 &ndash; Present
                            </span>
                          </div>
                          <p className="font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-wide mb-2.5">
                            Credgenics &bull; Enterprise Recovery SaaS
                          </p>
                          <ul className="list-disc pl-4 text-xs sm:text-[13px] text-neutral-600 space-y-1.5">
                            <li>Leading end-to-end design strategy for complex corporate recoveries and workflow automation portals.</li>
                            <li>Orchestrating design alignment with PM, QA, Engineers, and Legal subject matter experts to optimize contextual layouts.</li>
                            <li>Secured <strong>1st Place</strong> at the CredGenius Corporate Hackathon and received the Outstanding Team Player award.</li>
                          </ul>
                        </div>

                        {/* Mid Level */}
                        <div className="relative">
                          <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 ring-4 ring-white" />
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h3 className="font-display text-[15px] font-bold text-neutral-900">
                              Product Designer
                            </h3>
                            <span className="font-mono text-[10px] font-bold text-neutral-400 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded uppercase">
                              Jan 2022 &ndash; May 2024
                            </span>
                          </div>
                          <p className="font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-wide mb-2.5">
                            Enterprise SaaS Solutions
                          </p>
                          <ul className="list-disc pl-4 text-xs sm:text-[13px] text-neutral-600 space-y-1.5">
                            <li>Re-architected dense data tables, resulting in <strong>40%+ faster case reviews</strong> and <strong>70% less navigation</strong>.</li>
                            <li>Formulated unified dashboard systems and standardized pattern libraries that accelerated engineering build cycles.</li>
                            <li>Spearheaded quantitative and qualitative research studies, translating insights into actionable system requirements.</li>
                          </ul>
                        </div>

                        {/* Associate */}
                        <div className="relative">
                          <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 ring-4 ring-white" />
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h3 className="font-display text-[15px] font-bold text-neutral-900">
                              UX / UI Designer
                            </h3>
                            <span className="font-mono text-[10px] font-bold text-neutral-400 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded uppercase">
                              June 2019 &ndash; Dec 2021
                            </span>
                          </div>
                          <p className="font-mono text-[11px] font-bold text-neutral-400 uppercase tracking-wide mb-2.5">
                            B2B &amp; FinTech Design Agency
                          </p>
                          <ul className="list-disc pl-4 text-xs sm:text-[13px] text-neutral-600 space-y-1.5">
                            <li>Designed high-fidelity mockups, wireframes, and prototypes for diverse recovery and customer communication startups.</li>
                            <li>Maintained robust specifications and visual asset handoffs, ensuring seamless design-to-code integrity.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right column (Education & Expertise) */}
                  <div className="md:col-span-4 space-y-8">
                    {/* Education */}
                    <div>
                      <h2 className="font-display text-[16px] sm:text-[18px] font-bold text-neutral-900 tracking-tight mb-4 flex items-center gap-2">
                        <GraduationCap className="w-4.5 h-4.5 text-accent-orange shrink-0" />
                        Education
                      </h2>
                      <div className="border border-neutral-100 rounded-xl p-4 bg-neutral-50/50">
                        <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                          BACHELOR OF DESIGN
                        </span>
                        <h4 className="font-display text-[13px] font-bold text-neutral-900 leading-snug">
                          Communication Design
                        </h4>
                        <p className="font-sans text-[12px] text-neutral-500 leading-relaxed mt-1">
                          Specialization in Interaction &amp; UX Design
                        </p>
                      </div>
                    </div>

                    {/* Key Core Competencies */}
                    <div>
                      <h2 className="font-display text-[16px] sm:text-[18px] font-bold text-neutral-900 tracking-tight mb-4 flex items-center gap-2">
                        <Award className="w-4.5 h-4.5 text-accent-orange shrink-0" />
                        Core Expertise
                      </h2>
                      <div className="flex flex-wrap gap-1.5">
                        {["Enterprise UX", "SaaS Dashboards", "Information Architecture", "Workflow Design", "Design Systems", "User Research", "Interaction Prototyping", "Data Density", "AI Workflow Integration"].map((core) => (
                          <span
                            key={core}
                            className="font-mono text-[10px] font-semibold bg-white border border-neutral-200/80 text-neutral-700 px-2.5 py-1 rounded"
                          >
                            {core}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Awards & Hackathons */}
                    <div>
                      <h2 className="font-display text-[16px] sm:text-[18px] font-bold text-neutral-900 tracking-tight mb-4 flex items-center gap-2">
                        <Sparkles className="w-4.5 h-4.5 text-accent-orange shrink-0" />
                        Key Awards
                      </h2>
                      <div className="space-y-3 font-sans text-xs text-neutral-600">
                        <p className="leading-relaxed">
                          🏆 <strong>1st Place Winner</strong> &ndash; CredGenius Hackathon
                        </p>
                        <p className="leading-relaxed">
                          ⭐ <strong>Outstanding Team Player Award</strong> &ndash; Credgenics Corporate Recognition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Print/Download */}
                <div className="border-t border-neutral-100 pt-8 mt-10 flex items-center justify-between text-neutral-400">
                  <p className="font-sans text-[11px]">&copy; Neha Sharma &bull; Confidential portfolio summary</p>
                  <button
                    onClick={() => window.print()}
                    className="font-display text-[12px] font-bold text-neutral-700 hover:text-accent-orange transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Print Resume
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
