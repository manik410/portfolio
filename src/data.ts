import { Project, TimelineItem, ProcessStep, SkillCategory } from "./types";

export const projectsData: Project[] = [
  {
    id: "legal-portfolio",
    title: "🏛️ Legal Portfolio Management Platform",
    role: "Senior Product Designer",
    problem: "Legal departments in enterprise environments struggle with fragmented platforms, opaque case progressions, and manual billing audits, leading to high operational friction and cost overruns.",
    solution: "Designed a consolidated legal workspace featuring AI-assisted contract summaries, interactive timeline visualizers, and an automated invoice compliance checking module.",
    impact: "Cut average case life cycles by 40%, accelerated billing audits by 25%, and achieved a 92% user satisfaction score from corporate general counsels.",
    image: "/src/assets/images/legal_portfolio_mockup_1783335879310.jpg",
    video: "/src/assets/images/legal_portfolio_demo.mp4",
    tags: ["Enterprise SaaS", "LegalTech", "Data Visualization", "AI Summary"],
    accentColor: "bg-accent-yellow",
    borderColor: "border-amber-300",
    textColor: "text-amber-950"
  },
  {
    id: "ai-workflow",
    title: "⚙️ Workflow Automation",
    role: "Lead Designer",
    problem: "Non-technical operations teams waste hundreds of hours manually copying data, formatting reports, and resolving cross-app sync conflicts without a scalable way to automate tasks.",
    solution: "Created an intuitive, conversational drag-and-drop workflow builder that allows users to express logic in plain English and debug live execution paths in real time.",
    impact: "Enabled users to automate 200k+ monthly processes, reduced manual errors by 98%, and cut down automated flow construction time by 75%.",
    image: "/src/assets/images/ai_workflow_1783261556265.jpg",
    tags: ["Enterprise SaaS", "Low-Code", "Interaction Design", "Workflow Builder"],
    accentColor: "bg-accent-orange",
    borderColor: "border-orange-300",
    textColor: "text-orange-950",
    comingSoon: true
  },
  {
    id: "collection-recovery",
    title: "AI Collection Intelligence",
    role: "Product Designer",
    problem: "Debt recovery systems are notorious for rigid agent interfaces, high compliance breach risks, and lack of customer-centric context, resulting in high agent stress and low resolution rates.",
    solution: "Designed an empathetic, conversational workspace featuring a contextual single-view debtor timeline, automated real-time compliance prompts, and interactive compromise suggestions.",
    impact: "Boosted debt recovery success by 18%, reduced compliance violations to absolute zero, and trimmed agent ramp-up time from weeks to 3 days.",
    image: "/src/assets/images/collection_recovery_1783261590466.jpg",
    tags: ["FinTech", "Empathetic Design", "Compliance Systems", "B2B Workspaces"],
    accentColor: "bg-accent-pink",
    borderColor: "border-pink-300",
    textColor: "text-pink-950"
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: "2022 - Present",
    role: "Senior Product Designer",
    company: "LegalTech & Enterprise SaaS",
    description: "Lead product designer for core enterprise legal platforms. Leading UX strategy for AI-assisted products, workflow automations, and intelligent docket parsing. Designed, built, and standardizing our cross-platform design system, improving frontend delivery times by 30%. Conducting regular user research with attorneys and general counsels to drive data-informed product decisions.",
    tags: ["LegalTech", "Design Systems", "AI UX", "User Research", "Enterprise SaaS"]
  },
  {
    year: "2020 - 2022",
    role: "Product Designer",
    company: "FinTech & Collection Workspaces",
    description: "Owned end-to-end design for dynamic collection and recovery platforms. Designed multi-tenant dashboards, customer portals, and rule-based workflow configurations. Conducted global user studies, lowering system training time from 3 weeks to 3 days. Collaborated directly with cross-functional PMs and engineers to deploy accessible, high-performance interfaces.",
    tags: ["FinTech", "Dashboards", "B2B Software", "Information Architecture"]
  },
  {
    year: "2018 - 2020",
    role: "Associate UX Designer",
    company: "Digital Product & Design Agency",
    description: "Designed responsive SaaS web apps and digital experiences for high-growth startups and global brands. Conducted heuristic audits, wireframed complex information architectures, and built high-fidelity interactive prototypes. Formulated client design tokens, standardizing UI patterns for production teams.",
    tags: ["UX Audit", "Rapid Prototyping", "Client Projects", "SaaS Platforms"]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Research & Empathize",
    description: "Conducting user interviews, workflow shadowing, and heuristic analyses. I deep-dive into the complex, often messy, processes enterprise users navigate daily to expose underlying pain points.",
    icon: "Search"
  },
  {
    number: "02",
    title: "Define & Strategize",
    description: "Mapping complex user journeys, defining explicit system guardrails, and aligning business requirements. I synthesize ambiguous findings into a focused product strategy and clear scope of action.",
    icon: "Compass"
  },
  {
    number: "03",
    title: "Ideate & Wireframe",
    description: "Generating layout variations, organizing dense information architectures, and co-creating with stakeholders. I draft multiple low-fidelity options to find the most efficient user flow.",
    icon: "Sparkles"
  },
  {
    number: "04",
    title: "Prototype & Refine",
    description: "Building high-fidelity interactive screens, refining responsive grid spacing, and drafting realistic data states. Every component is designed to accommodate extreme and variable data densities.",
    icon: "Layers"
  },
  {
    number: "05",
    title: "Test & Validate",
    description: "Conducting usability testing, measuring tasks-to-completion, and collecting engineering feedback. I validate that complex interactions feel natural and that edge cases are completely solved.",
    icon: "CheckCircle"
  },
  {
    number: "06",
    title: "Deliver & Document",
    description: "Providing redlines, documenting states, and polishing our design system tokens. I partner closely with frontend engineers, reviewing builds to guarantee award-winning execution.",
    icon: "Send"
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Design Focus",
    skills: ["Enterprise SaaS", "UX Strategy", "Interaction Design", "User Research", "Design Systems", "AI Experiences", "Product Thinking", "Information Architecture"]
  },
  {
    title: "Tools & Tech",
    skills: ["Figma", "Framer", "Prototyping", "Wireframing", "Tailwind CSS", "HTML/CSS", "React & TypeScript", "GSAP / Motion"]
  },
  {
    title: "Domain Knowledge",
    skills: ["LegalTech", "FinTech", "Workflow Automation", "Collections Platforms", "Dashboards & Analytics", "Internal Tools", "Data Visualization", "Compliance Guardrails"]
  }
];
