import { 
  FileText, Play, Cpu, Sparkles, Settings, Check, 
  Search, Users, Activity, Layers, HelpCircle
} from "lucide-react";

export interface OverviewCard {
  label: string;
  value: string;
}

export interface ResearchMethod {
  name: string;
  desc: string;
}

export interface ResearchStep {
  stage: string;
  action: string;
  pain: string;
  feeling: string;
  opp: string;
}

export interface FindingNote {
  id: string;
  num: string;
  title: string;
  desc: string;
  implication: string;
  color: string; // Tailwind bg color class
  textColors: {
    title: string;
    desc: string;
    imp: string;
  };
}

export interface OpportunityFlow {
  problem: string;
  insight: string;
  opportunity: string;
  outcome: string;
}

export interface EcosystemNode {
  title: string;
  desc: string;
  type: "input" | "core" | "output";
}

export interface WorkflowStep {
  legacy: { title: string; desc: string; friction: string };
  improved: { title: string; desc: string; benefit: string };
}

export interface StrategyPrinciple {
  title: string;
  desc: string;
}

export interface StrategyComparison {
  criteria: string;
  legacy: string;
  alternative: string;
  winner: string;
}

export interface SolutionFeature {
  title: string;
  desc: string;
}

export interface SimulatorNode {
  id: string;
  type: string;
  title: string;
  desc: string;
  status: "idle" | "running" | "success" | "failed";
}

export interface SimulatorConfig {
  type: "workflow" | "compliance" | "invoice" | "analytics" | "omnichannel";
  title: string;
  buttonLabel: string;
  initialNodes: SimulatorNode[];
  logs: {
    start: string;
    steps: {
      progress: number;
      log: string;
      nodeIndex: number;
      nodeStatus: "running" | "success" | "failed";
    }[];
    end: string;
  };
}

export interface ResultMetric {
  value: string;
  label: string;
  desc: string;
}

export interface UserProfile {
  roleName: string;
  avatarName: string;
  avatarTitle: string;
  description: string;
  goals: string[];
  frustrations: string[];
}

export interface CaseStudyData {
  id: string;
  title: string;
  category: string;
  role: string;
  duration: string;
  tags: string[];
  image: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  oneLiner: string;
  meetTheUsers?: UserProfile[];
  
  // Section 02: Overview
  overview: {
    industry: string;
    users: string;
    team: string;
    role: string;
    timeline: string;
    platform: string;
    deliverables: string[];
  };

  // Section 03: Business Challenge
  challenge: {
    businessProblem: string;
    userProblem: string;
    whyItMatters: string;
    metrics: string[];
  };

  // Section 04: Research
  research: {
    intro: string;
    methods: ResearchMethod[];
    steps: ResearchStep[];
    quote: string;
    quoteAuthor: string;
  };

  // Section 05: Findings
  findings: FindingNote[];

  // Section 06: Design Opportunity
  opportunities: OpportunityFlow[];

  // Section 07: Ecosystem
  ecosystem: {
    intro: string;
    engineName: string;
    nodes: EcosystemNode[];
  };

  // Section 08: Workflow
  workflow: {
    intro: string;
    steps: WorkflowStep[];
  };

  // Section 09: Product Strategy
  strategy: {
    intro: string;
    principles: StrategyPrinciple[];
    comparison: StrategyComparison[];
  };

  // Section 10: Solutions
  solutions: {
    intro: string;
    features: SolutionFeature[];
    wireframesSpec: {
      left: string;
      center: string;
      right: string;
    };
    screens: {
      title: string;
      desc: string;
    }[];
    simulator: SimulatorConfig;
  };

  // Section 11: Results
  results: {
    intro: string;
    metrics: ResultMetric[];
  };

  // Section 12: Reflections
  reflections: {
    intro: string;
    bullets: string[];
    takeaway: string;
  };
}

export const caseStudiesData: Record<string, CaseStudyData> = {
  "legal-portfolio": {
    id: "legal-portfolio",
    title: "Legal Portfolio Management Platform",
    category: "Enterprise SaaS • LegalTech • B2B Platform",
    role: "Senior Product Designer",
    duration: "6 Months",
    tags: ["Enterprise SaaS", "LegalTech", "B2B Platform", "Data Visualization"],
    image: "/src/assets/images/legal_portfolio_mockup_1783335879310.jpg",
    accentBg: "bg-accent-yellow",
    accentBorder: "border-amber-300",
    accentText: "text-amber-950",
    oneLiner: "Designing a centralized platform that helps legal and recovery teams manage thousands of litigation cases with better visibility, faster workflows, and complete accountability.",
    
    overview: {
      industry: "LegalTech & Enterprise SaaS",
      users: "Operations Teams, Legal Managers, Agency Partners",
      team: "1 Lead Designer, 2 PMs, 3 Frontend Engineers, 1 Legal Compliance Counsel",
      role: "Senior Product Designer (UX Strategy, Systems Thinking, Interaction Design)",
      timeline: "6 Months (Jan - Jun 2024)",
      platform: "Web Desktop SaaS (Optimized for high-density enterprise grid view)",
      deliverables: ["Legal Operations Board", "Side Split Case Reviewer Panel", "Scalable Bulk Actions Framework", "Immutable System Audit History Tracker"]
    },

    challenge: {
      businessProblem: "Enterprise recovery operations were severely bottlenecked. Legal and recovery teams had to manage thousands of active litigation cases across different recovery stages (pre-filing, summons, hearings, decrees) without a single system of record, creating operational blindness, coordination slip-ups, and massive delays.",
      userProblem: "As operations grew, existing manual Excel and email-based workflows became impossible to manage. Operators and legal managers had no proactive way to track hearing calendars, review case history, or assign agencies, forcing them to manually compile logs and click through endless isolated screens daily.",
      whyItMatters: "Centralizing case operations and enabling efficient action pathways allows enterprise firms to accelerate recovery cycles, prevent missing legal timelines, and lower operational overhead while ensuring complete compliance.",
      metrics: [
        "Monitor portfolio health in real time",
        "Prioritize urgent legal cases automatically",
        "Track hearing schedules and deadlines proactively",
        "Perform secure bulk updates and assignments",
        "Review chronological case audit history",
        "Navigate dense case details in a single view"
      ]
    },

    research: {
      intro: "To design a system that works for complex enterprise operations, Neha spent weeks shadowing legal managers and recovery operators. She deep-dived into actual recovery workflows, conducted interviews, and evaluated legacy tools to understand the day-to-day realities of high-density litigation management.",
      methods: [
        { name: "Understanding Legal Operations", desc: "Shadowed 4 recovery operators for 16 hours to document case progression patterns and spreadsheet workarounds." },
        { name: "Stakeholder Interviews", desc: "Interviewed 3 Legal Managers and General Counsels to identify compliance requirements and oversight needs." },
        { name: "Competitive Analysis", desc: "Audited traditional ERP systems, pinpointing where high-density grids fail in readability and actionability." },
        { name: "Existing Product Audit", desc: "Identified critical usability flaws, navigation dead-ends, and heavy cognitive load during multi-step updates." }
      ],
      steps: [
        { stage: "Portfolio Assessment", action: "Review overall case counts and overdue steps in spreadsheets.", pain: "No visual health score or prioritization indicators.", feeling: "Overwhelmed", opp: "Dynamic dashboard with health alerts" },
        { stage: "Case Inspection", action: "Navigate between separate tabs to check history, documents, and dates.", pain: "Constant context-switching slows reviews down to minutes per case.", feeling: "Exhausted", opp: "Interactive side-by-side split screen view" },
        { stage: "Status Updating", action: "Perform status updates and assign agencies row by row.", pain: "Repetitive, manual steps waste hours and introduce typos.", feeling: "Annoyed", opp: "Scalable multi-select bulk actions framework" }
      ],
      quote: "We aren't just processing data; we're managing legal deadlines. A single missed hearing date can cost us months of recovery progress.",
      quoteAuthor: "Anjali Roy, Director of Legal Operations"
    },

    findings: [
      {
        id: "lp-f1",
        num: "01",
        title: "Users struggled to prioritize critical cases",
        desc: "Urgent cases and upcoming hearing dates were buried inside massive data tables. Without visual alerts or priority levels, operators had to work reactively.",
        implication: "Design dynamic priority alerts and countdown signals on the dashboard.",
        color: "bg-[#FFE66D]",
        textColors: { title: "text-amber-950", desc: "text-amber-900/80", imp: "text-amber-950/70" }
      },
      {
        id: "lp-f2",
        num: "02",
        title: "Information was spread across multiple screens",
        desc: "Reviewing or updating a case required opening separate detail pages, documents folders, and history lists, breaking user context constantly.",
        implication: "Introduce a side split screen drawer to view case details instantly inline.",
        color: "bg-[#A7D8FF]",
        textColors: { title: "text-blue-950", desc: "text-blue-900/80", imp: "text-blue-950/70" }
      },
      {
        id: "lp-f3",
        num: "03",
        title: "High-volume tasks were repetitive",
        desc: "Operations teams regularly needed to update statuses or assign agencies in batches, but were forced to update each case one-by-one.",
        implication: "Build a bulk actions framework with multi-select capability and validation check.",
        color: "bg-[#F8C7D8]",
        textColors: { title: "text-pink-950", desc: "text-pink-900/80", imp: "text-pink-900/70" }
      },
      {
        id: "lp-f4",
        num: "04",
        title: "Audit history lacked transparency",
        desc: "With multiple agencies and internal teams touching cases, the lack of an immutable change log caused compliance risks and team friction.",
        implication: "Design a dedicated, chronological Audit Trail inside each case context.",
        color: "bg-[#D8F3DC]",
        textColors: { title: "text-emerald-950", desc: "text-emerald-900/80", imp: "text-emerald-950/70" }
      },
      {
        id: "lp-f5",
        num: "05",
        title: "Portfolio monitoring was reactive instead of proactive",
        desc: "Teams only realized case compliance had breached after deadlines passed. There was no real-time dashboard showing overall portfolio health.",
        implication: "Create a centralized operational dashboard summarizing key statistics and alerts.",
        color: "bg-[#E9D5FF]",
        textColors: { title: "text-purple-950", desc: "text-purple-900/80", imp: "text-purple-900/70" }
      }
    ],

    meetTheUsers: [
      {
        roleName: "Operations Team",
        avatarName: "Aditya Kulkarni",
        avatarTitle: "Operations Lead",
        description: "Manages daily case updates, documentation, and workflow execution. Aditya needs simple bulk update flows, clear validation, and a consistent interface to complete repetitive tasks efficiently.",
        goals: [
          "Complete case uploads and updates in minutes instead of hours",
          "Perform quick bulk assignments to recovery agencies",
          "Ensure zero data entry errors with immediate inline validation"
        ],
        frustrations: [
          "Spending hours copy-pasting case updates row-by-row",
          "Lack of visual flags for urgent hearing deadlines",
          "Blindly overriding statuses without seeing change history"
        ]
      },
      {
        roleName: "Legal Manager",
        avatarName: "Abhishek Verma",
        avatarTitle: "General Counsel / Legal Ops Manager",
        description: "Oversees litigation progress, compliance, and case strategy across active portfolios. Abhishek needs a clear view of case stages, priorities, and ownership to quickly review history and make accurate decisions.",
        goals: [
          "Monitor high-level portfolio health and bottleneck stages",
          "Verify exact historical actions and assignee changes on critical cases",
          "Collaborate seamlessly with external partners on disputes and hearings"
        ],
        frustrations: [
          "Fragmented communication across emails and external spreadsheets",
          "No immutable audit log to verify attorney accountability",
          "Reactive reporting after case filing deadlines are breached"
        ]
      },
      {
        roleName: "Agency Partner",
        avatarName: "Ravi Sharma",
        avatarTitle: "External Recovery & Legal Counsel Partner",
        description: "Submits case updates and performs assigned legal actions. Ravi needs a guided update process with clear deadlines, instructions, and expectations to follow workflows and communicate effectively.",
        goals: [
          "Submit hearing outcomes and documents through a simple portal",
          "Review clear instructions and requirements for assigned tasks",
          "Track pending tasks and deadlines in a structured checklist"
        ],
        frustrations: [
          "Unclear guidelines on what documentation is required at each cycle",
          "Manual email back-and-forths for single case reviews",
          "Disjointed systems causing duplicate data entry work"
        ]
      }
    ],

    opportunities: [
      {
        problem: "Users struggled to prioritize critical cases buried in massive tables.",
        insight: "Operators need instant visual cues to guide their attention rather than scanning every row.",
        opportunity: "Create prioritized dashboard widgets with real-time hearing alerts.",
        outcome: "Case prioritization time reduced by 50%."
      },
      {
        problem: "Checking a case required navigating back and forth across multiple pages.",
        insight: "Keeping user context intact during review accelerates task performance dramatically.",
        opportunity: "Introduce a side-by-side split view drawer for inline case details.",
        outcome: "Average case review cycle completed 118% faster."
      }
    ],

    ecosystem: {
      intro: "We mapped the flow of case data from initial upload through assignment, review, bulk updating, and chronological logging to ensure complete system alignment.",
      engineName: "Case Progression & Compliance Engine",
      nodes: [
        { title: "Case Files & Portfolios", desc: "Raw litigation case lists imported into the system.", type: "input" },
        { title: "Hearing Schedule Database", desc: "Chronological list of all court hearing deadlines and summons.", type: "input" },
        { title: "Case Progression Engine", desc: "Evaluates recovery stage thresholds and prioritizes SLA tasks.", type: "core" },
        { title: "Immutable Audit Logger", desc: "Chronicles every status update, assignee switch, and comment.", type: "output" },
        { title: "Operations Analytics Feed", desc: "Dynamic metrics dashboard tracking overall portfolio health.", type: "output" }
      ]
    },

    workflow: {
      intro: "Replacing slow, disconnected workflows with a unified, high-performance case management ecosystem.",
      steps: [
        {
          legacy: { title: "Disconnected Case Review", desc: "Click into a case row, wait for full page load, copy notes, go back to main grid.", friction: "Heavy cognitive load, massive context switching overhead." },
          improved: { title: "Side-by-Side Split View", desc: "Click a case row to slide open a detailed side panel. Review documents and updates immediately.", benefit: "Reviews completed instantly without losing grid position." }
        },
        {
          legacy: { title: "Repetitive Row Updates", desc: "Open case details, update recovery status, save, repeat manually for all 50 cases.", friction: "Extremely tedious, slow, and prone to administrative errors." },
          improved: { title: "Multi-Select Bulk Actions", desc: "Select multiple rows, choose action, verify with pre-flight check, apply instantly.", benefit: "Updates hundreds of active litigation cases in a single click." }
        }
      ]
    },

    strategy: {
      intro: "Our strategic design approach focused on establishing clarity, scalability, and absolute accountability within data-dense interfaces.",
      principles: [
        { title: "Context Preservation", desc: "Never force users to leave their primary workspace grid to inspect or update case details." },
        { title: "Actionability at Scale", desc: "Streamline high-volume administrative tasks through structured, bulk update interactions." },
        { title: "Transparent Audit Trails", desc: "Capture every user and system touchpoint in an unalterable, scannable history list." }
      ],
      comparison: [
        { criteria: "Case Prioritization", legacy: "Reactive manual search", alternative: "Automated random cues", winner: "Proactive Dashboard SLA Alerting" },
        { criteria: "Data Densities", legacy: "Cluttered white space", alternative: "Oversimplified sparse cards", winner: "Structured compact grid views" }
      ]
    },

    solutions: {
      intro: "We designed a robust legal management solution consisting of four key modules, each addressing a critical operational gap with high-performance UX patterns.",
      features: [
        { title: "Dashboard for Data-Dense Interfaces", desc: "A centralized workspace where teams monitor portfolio health, track upcoming hearings, and identify critical SLA breaches." },
        { title: "Side Split View Case Inspector", desc: "A side panel that slides out to present case timelines, documents, and updates while preserving main list context." },
        { title: "Bulk Actions Framework", desc: "A secure framework enabling users to select multiple cases, perform bulk updates, and review validation checks before execution." },
        { title: "Chronological Audit Trail", desc: "An unalterable record of all system events, status transitions, and user logs for complete team accountability." }
      ],
      wireframesSpec: {
        left: "PORTFOLIO SUMMARY BOARD (Metrics Cards & SLA Alert Lists)",
        center: "HIGH-DENSITY CASES GRID (Primary Litigation Ledger with Filters)",
        right: "SIDE SPLIT VIEW DRAWER (Timeline, Actions, Audit Trail)"
      },
      screens: [
        { title: "Centralized Portfolio Dashboard", desc: "Features high-level portfolio KPIs, critical case counts, hearing schedule calendars, and quick actions." },
        { title: "Active Litigation Case Grid", desc: "A dense data grid equipped with advanced column sorting, multi-select rows, and inline action status badges." }
      ],
      simulator: {
        type: "compliance",
        title: "Legal Portfolio Case Audit Simulator",
        buttonLabel: "Run Case Audit Check",
        initialNodes: [
          { id: "scan", type: "trigger", title: "Scan Portfolio Case Ledger", desc: "Evaluate 1,200 active litigation cases", status: "idle" },
          { id: "sla", type: "action", title: "Verify Hearing SLA Compliance", desc: "Check upcoming court hearing dates and deadlines", status: "idle" },
          { id: "audit", type: "channel", title: "Trace Historical Audit Trails", desc: "Verify status modification logs for transparency", status: "idle" },
          { id: "flag", type: "retry", title: "Flag At-Risk Litigation Cases", desc: "Highlight cases with overdue steps or breached SLAs", status: "idle" },
          { id: "report", type: "action", title: "Generate Operations Summary", desc: "Export portfolio health and action compliance PDF", status: "idle" }
        ],
        logs: {
          start: "[08:00 AM] Initializing Portfolio Scanning Sequence: 1,200 active cases",
          steps: [
            { progress: 20, log: "[08:05 AM] Scanning case dates. Cross-referencing hearing calendar SLA thresholds...", nodeIndex: 1, nodeStatus: "success" },
            { progress: 45, log: "[08:12 AM] Identified 14 cases with upcoming hearings within 48 hours. Tagging as 'Urgent Hearing'.", nodeIndex: 2, nodeStatus: "running" },
            { progress: 70, log: "[08:20 AM] Auditing case histories. Verified 100% of status changes have matching audit trail logs.", nodeIndex: 3, nodeStatus: "success" },
            { progress: 90, log: "[08:28 AM] Evaluation Concluded: Flagging 4 cases in breached status, 14 cases in high-priority attention list.", nodeIndex: 4, nodeStatus: "success" }
          ],
          end: "[08:35 AM] Success: Audit finished. Portfolio health score is 94.5%. Direct Dashboard alerts updated."
        }
      }
    },

    results: {
      intro: "Deploying the Legal Portfolio Management Platform completely transformed enterprise legal and recovery operations.",
      metrics: [
        { value: "118+", label: "Faster Case Reviews", desc: "Average case review cycle completed in less than half the time compared to legacy tools." },
        { value: "50+", label: "Faster Case Prioritization", desc: "Reduction in time to identify and act upon high-priority litigation actions." },
        { value: "99K+", label: "Audit Visibility", desc: "Complete system accountability with unalterable change logging across all active portfolios." }
      ]
    },

    reflections: {
      intro: "Designing high-density Enterprise SaaS products taught Neha that clarity, predictability, and efficiency must always guide complex UX structures.",
      bullets: [
        "Usability is a business driver: Designing focused, split-screen interfaces directly translates to hours saved and faster recovery cycles.",
        "Predictability builds system trust: Enterprise operators manage massive portfolios. Giving them explicit pre-flight validation checks reduces anxiety and prevents critical mistakes."
      ],
      takeaway: "True software craftsmanship in enterprise SaaS lies in turning overwhelming datasets into calm, actionable, and accountable workspaces."
    }
  },

  "ai-workflow": {
    id: "ai-workflow",
    title: "⚙️ Workflow Automation",
    category: "Enterprise SaaS & No-Code",
    role: "Lead Designer",
    duration: "5 Months",
    tags: ["Enterprise SaaS", "Low-Code", "Interaction Design", "Workflow Builder"],
    image: "/src/assets/images/ai_workflow_1783261556265.jpg",
    accentBg: "bg-accent-orange",
    accentBorder: "border-orange-300",
    accentText: "text-orange-950",
    oneLiner: "Intelligent conversational drag-and-drop workflow builders enabling non-technical teams to automate campaigns.",
    
    overview: {
      industry: "Enterprise SaaS / Low-Code",
      users: "Operations Managers, Campaign Leads, CRM Administrators",
      team: "1 Lead Designer, 3 Full-Stack Developers, 1 PM",
      role: "Lead Product Designer (End-to-End Interaction, Information Architecture, Prototyping)",
      timeline: "Jul - Nov 2023 (5 Months)",
      platform: "Web Desktop Canvas application",
      deliverables: ["Visual Canvas Stage", "Modular Node Cards", "Telemetry Run Log Terminal"]
    },

    challenge: {
      businessProblem: "Non-technical operations teams waste hundreds of hours manually running data segmentation, sanitizing lists via Excel, and managing cross-app messaging setups without a unified way to automate.",
      userProblem: "Operations managers logged into 4 distinct tools to configure single borrower communication campaigns, resulting in high cognitive stress and frequent compliance errors.",
      whyItMatters: "Standardizing campaign setups onto a unified interactive canvas allows teams to launch compliant outreach flows safely in minutes.",
      metrics: ["Trim setup times from 8 hours to 8 minutes", "Support 100% automated retry configurations", "Maintain absolute messaging compliance audits"]
    },

    research: {
      intro: "Neha shadowed 5 corporate operations leads, discovering that while automation tools existed, operators feared 'black box' actions that might break customer lists.",
      methods: [
        { name: "Workspace Shadowing", desc: "Observed operators copy-pasting customer records between CRM tabs and vendor portals." },
        { name: "Journey Mapping", desc: "Mapped campaign set-up tasks, highlighting severe anxiety drops prior to list dispatch." },
        { name: "Mental Model Interviews", desc: "Found that operators think in terms of sequential diagrams but use spreadsheet cells to build." }
      ],
      steps: [
        { stage: "List Preparation", action: "Upload CRM loan records and resolve missing columns.", pain: "Row corruptions are discovered late.", feeling: "Anxious", opp: "Drag-and-drop CSV pre-flight checks" },
        { stage: "Retry Rules", action: "Configure fail-safes (e.g., if WhatsApp fails, try SMS).", pain: "No visual mapping; manual cron script scheduling.", feeling: "Overwhelmed", opp: "Visual fallback branch nodes" },
        { stage: "Execution Watch", action: "Monitor delivery logs to ensure rates and legal bounds.", pain: "Wait 1 hour for static text reports.", feeling: "Blind", opp: "Live telemetry logs grid" }
      ],
      quote: "I don't trust standard automation tools. I want to see exactly who gets messaged before I press that play button.",
      quoteAuthor: "Priya Sharma, Lead Campaign Coordinator"
    },

    findings: [
      {
        id: "wf-f1",
        num: "01",
        title: "Spreadsheet-centric mental models",
        desc: "Campaign operators expect full visual access to raw customer lists, even when building automated logic paths.",
        implication: "Embed a live preview of the first 5 records inside inspector panels.",
        color: "bg-[#FFE66D]",
        textColors: { title: "text-amber-950", desc: "text-amber-900/80", imp: "text-amber-950/70" }
      },
      {
        id: "wf-f2",
        num: "02",
        title: "Communication failure is expected",
        desc: "API timeouts, blocked profiles, and network downtime happen constantly, but legacy software treats these as errors rather than default flows.",
        implication: "Incorporate primary retry loops into the canvas layout.",
        color: "bg-[#A7D8FF]",
        textColors: { title: "text-blue-950", desc: "text-blue-900/80", imp: "text-blue-950/70" }
      },
      {
        id: "wf-f3",
        num: "03",
        title: "Anxiety triggers before activation",
        desc: "Operators experience severe stress before hitting 'Activate', fearing typos or rule violations in massive campaigns.",
        implication: "Create a mandatory dry-run pre-execution checker summary.",
        color: "bg-[#F8C7D8]",
        textColors: { title: "text-pink-950", desc: "text-pink-900/80", imp: "text-pink-900/70" }
      }
    ],

    meetTheUsers: [
      {
        roleName: "Operations Team",
        avatarName: "Priya Nair",
        avatarTitle: "Operations Specialist",
        description: "Manages daily list processing, messaging layouts, and campaign launches. Priya wants a completely visual flow builder with drag-and-drop mechanics to avoid messing with code or configurations.",
        goals: [
          "Set up and test campaigns in minutes instead of several hours",
          "Visually connect failover channels (SMS, Email) with simple drag cables",
          "Ensure raw list imports are validated automatically on upload"
        ],
        frustrations: [
          "Configuring redundant fields in multiple forms across 4 software applications",
          "Inability to test automated conditions before sending live blasts",
          "Debugging cron script parameters and manual spreadsheet row splits"
        ]
      },
      {
        roleName: "Campaign Manager",
        avatarName: "Vikram Dev",
        avatarTitle: "Director of CRM Operations",
        description: "Directs audience targeting strategy, delivery limits, and billing schedules. Vikram needs high-level telemetry and status transparency to ensure compliance and optimization across active workflows.",
        goals: [
          "Review live delivery rates, speeds, and billing stats in real time",
          "Enforce legal contact hours and regulatory caps automatically system-wide",
          "Create reusable flow templates for multiple remote agencies to leverage"
        ],
        frustrations: [
          "Total lack of real-time monitoring of campaign execution stages",
          "High compliance breach risks when agents launch unapproved message batches",
          "Rebuilding identical workflows from scratch for every minor campaign change"
        ]
      },
      {
        roleName: "CRM Administrator",
        avatarName: "Rajesh Kumar",
        avatarTitle: "CRM & Integrations Admin",
        description: "Manages API links, webhook configurations, and customer database integrations. Rajesh needs a clean node inspector and webhook logger to troubleshoot connection drops quickly.",
        goals: [
          "Verify third-party endpoint connection states easily inside node panels",
          "Keep database fields mapped accurately during drag-and-drop triggers",
          "Access standard systems logs to debug API drops without parsing databases"
        ],
        frustrations: [
          "Opaque failure states that require digging through server log files",
          "Invalid webhook schema mappings that crash automated steps silently",
          "Lack of visual system blueprints showing data flow connections"
        ]
      }
    ],

    opportunities: [
      {
        problem: "Rigid multi-app configurations lead to high stress and frequent timing errors.",
        insight: "Operators process visual branching logic instantly, whereas code parameters remain abstract.",
        opportunity: "Design an infinite-coordinate drag-and-drop flow mapping stage.",
        outcome: "Setup time reduced from hours to minutes."
      },
      {
        problem: "Hidden automation processes trigger low trust and constant manual checking.",
        insight: "Showing real-time stream execution steps validates logic instantly.",
        opportunity: "Incorporate inline node status badges and live logs.",
        outcome: "User trust scores rose by 92% during testing."
      }
    ],

    ecosystem: {
      intro: "We engineered a modular canvas ecology that bridges the gap between raw corporate databases and omnichannel communication endpoints.",
      engineName: "Flow Execution Dispatcher",
      nodes: [
        { title: "Bank SFTP Upload", desc: "Automated CSV past-due record transfers.", type: "input" },
        { title: "CRM REST Webhooks", desc: "Instant billing notifications on critical accounts.", type: "input" },
        { title: "Core Flow Dispatcher", desc: "Coordinates filters, delays, and compliance holds.", type: "core" },
        { title: "Twilio Broadcast Channels", desc: "Direct APIs for SMS and WhatsApp template dispatches.", type: "output" },
        { title: "Operations Telemetry", desc: "Live terminal capturing delivery and rate limit metrics.", type: "output" }
      ]
    },

    workflow: {
      intro: "Replacing the legacy 4-step nightmare with an intuitive flowchart builder that automatically coordinates retries.",
      steps: [
        {
          legacy: { title: "Fragmented Platforms", desc: "Export records from CRM, filter in Excel, import into Twilio campaign panels.", friction: "Takes 8 hours daily, massive data row corruptions risk." },
          improved: { title: "Single Unified Canvas", desc: "Drag, connect, and customize triggers, segments, and channels on one stage.", benefit: "Launches campaigns safely in 8 minutes of canvas setup." }
        },
        {
          legacy: { title: "Manual Retries Scheduling", desc: "Extract failed delivery reports, manually isolate users, reschedule SMS campaigns.", friction: "Takes a whole afternoon, customer contact is delayed." },
          improved: { title: "Visual Retries Branching", desc: "Connect 'SMS Fallback' directly as a failure branch node on the canvas.", benefit: "Automatic failover triggers instantly when API failure limits hit." }
        }
      ]
    },

    strategy: {
      intro: "Neha aligned the system design with our core principle: 'Explicit Over Magic', preferring clear visual paths over auto-run smart actions.",
      principles: [
        { title: "Transparent Flow paths", desc: "Ensure connector cables and logical lines glow green if active, mapping flows clearly." },
        { title: "Pre-execution Dry Runs", desc: "Mandate pre-flight modals detailing active variables, rates, and lists before run." },
        { title: "Failures are Primary Flows", desc: "Treat timeouts and blocks as default branches on the stage, not backend crashes." }
      ],
      comparison: [
        { criteria: "User Trust Setup", legacy: "Low (Invisible steps)", alternative: "AI Prompt (Opaque)", winner: "Canvas Flowchart (Explicit confirmation)" },
        { criteria: "Logical Flexibility", legacy: "Poor (Rigid Form Columns)", alternative: "Script blocks", winner: "Infinite Coordinates (Modular Nodes Layout)" }
      ]
    },

    solutions: {
      intro: "The final solution is a fluid visual canvas styled in clean Swiss typography, paired with custom magnetic snapping ports and micro-interactions.",
      features: [
        { title: "Infinite Flow Canvas", desc: "A zoomable, gridded staging canvas where operators drag-and-drop triggers, filters, and templates." },
        { title: "Magnetic Connector Ports", desc: "Snaps connector lines directly to valid node anchors using responsive spring-physics curves." },
        { title: "Telemetry Console Panel", desc: "A dark terminal displaying live execution summaries, API delivery logs, and compliance flags." }
      ],
      wireframesSpec: {
        left: "MODULE TEMPLATE SELECTOR (Triggers, Filters, Channels)",
        center: "INFINITE CANVAS GRAPH VIEWPORT",
        right: "LOGS INSPECTOR & SETTINGS"
      },
      screens: [
        { title: "Staging Stage Layout", desc: "Displays trigger, action, and channel nodes connected via glowing wire connections." },
        { title: "Active Telemetry Terminal", desc: "Reveals execution logs, delivery progress states, and billing counts." }
      ],
      simulator: {
        type: "workflow",
        title: "Visual Flow Automation Simulator",
        buttonLabel: "Run Automation Simulation",
        initialNodes: [
          { id: "trigger", type: "trigger", title: "Upload Loan List", desc: "Excel upload (9,500 loans)", status: "idle" },
          { id: "segment", type: "action", title: "Segment Borrowers", desc: "Filter DPD 30-60 & Private Bank", status: "idle" },
          { id: "whatsapp", type: "channel", title: "WhatsApp Outreach", desc: "Primary: Twilio Template API", status: "idle" },
          { id: "retry", type: "retry", title: "Failure Retry Loop", desc: "SMS Fallback if failed/unseen", status: "idle" },
          { id: "agent", type: "action", title: "Assign Calling Agent", desc: "Escalate unresolved high-value cases", status: "idle" }
        ],
        logs: {
          start: "[09:00 AM] Campaign Triggered: Upload Loan List (9,500 records)",
          steps: [
            { progress: 20, log: "[09:10 AM] Segmenting Borrowers: Filtering DPD 30-60...", nodeIndex: 1, nodeStatus: "success" },
            { progress: 45, log: "[09:20 AM] Sending 2,140 WhatsApp messages via Twilio API...", nodeIndex: 2, nodeStatus: "running" },
            { progress: 70, log: "[09:30 AM] Twilio report: 1,840 Delivered, 300 Failed. Activating SMS Fallback loop...", nodeIndex: 3, nodeStatus: "success" },
            { progress: 90, log: "[09:45 AM] SMS Fallback complete. Escalating 20 high-risk cases to calling team.", nodeIndex: 4, nodeStatus: "running" }
          ],
          end: "[10:00 AM] Campaign resolved. Success Rate: 98% complete. 50% ops hours saved."
        }
      }
    },

    results: {
      intro: "Integrating Neha's Visual Canvas Builder yielded exceptional operational metrics within 6 months of corporate release.",
      metrics: [
        { value: "50%", label: "Setup Hours Saved", desc: "Setup times plummeted from 8 hours of manual mapping to 8 minutes." },
        { value: "3×", label: "Campaign Scale", desc: "Operators supervise triple the campaigns with zero extra friction." },
        { value: "94%", label: "User Adoption Score", desc: "Outstanding system confidence scores and a major reduction in anxiety." }
      ]
    },

    reflections: {
      intro: "This project shaped Neha's thinking around designing safe, low-code interfaces.",
      bullets: [
        "Control beats automation magic: Users don't want smart algorithms that hide actions; they want clear visual confirmation before run.",
        "Micro-interactions are indicators: Small details like spring connection lines and glowing badges turn complex configurations into friendly workspaces."
      ],
      takeaway: "True software craftsmanship means designing clear windows into complex processes, not smart black boxes."
    }
  },

  "collection-recovery": {
    id: "collection-recovery",
    title: "AI Collection Intelligence",
    category: "FinTech & Empathetic Design",
    role: "Product Designer",
    duration: "4 Months",
    tags: ["FinTech", "Empathetic Design", "Compliance Systems", "B2B Workspaces"],
    image: "/src/assets/images/collection_recovery_1783261590466.jpg",
    accentBg: "bg-accent-pink",
    accentBorder: "border-pink-300",
    accentText: "text-pink-950",
    oneLiner: "Empathetic collection intelligence workspaces that resolve complex customer contexts into payment resolutions.",
    
    overview: {
      industry: "FinTech / Debt Recovery",
      users: "Tele-Calling Agents, Compliance Auditors, Settlement Managers",
      team: "1 Product Designer, 3 Frontend Engineers, 1 Data Scientist, 1 PM",
      role: "Product Designer (User Research, Unified Workspace UI, Information Architecture)",
      timeline: "Mar - Jun 2023 (4 Months)",
      platform: "Web desktop application (Agent workspace client)",
      deliverables: ["Single-View Customer Timeline", "Empathetic Script Suggester", "Settlement Compromise Calculator"]
    },

    challenge: {
      businessProblem: "Debt recovery platforms are notorious for rigid agent interfaces, high regulatory compliance risks, and a complete lack of human-centric context, resulting in high agent stress and low conversion rates.",
      userProblem: "Calling agents worked under severe stress, parsing dozens of transactional columns in raw spreadsheet-like structures while negotiating payment compromises.",
      whyItMatters: "Combining settlement calculators with dynamic compliance scripts lowers call times while protecting agent mental health.",
      metrics: ["Reduce agent onboarding from weeks to 3 days", "Lower compliance breaches to zero", "Increase payment resolution rates by 15%"]
    },

    research: {
      intro: "Neha conducted contextual shadowing of calling agents in high-pressure call centers, revealing how cognitive fatigue leads directly to legal script violations.",
      methods: [
        { name: "Contextual Shadowing", desc: "Shadowed 5 active calling agents during 8-hour shifts to observe workspace friction." },
        { name: "Cognitive Fatigue Mapping", desc: "Analyzed call performance decline during high-pressure shifts." },
        { name: "Regulatory Compliance Audit", desc: "Isolated 12 key legal disclosure checkpoints causing agent hesitation." }
      ],
      steps: [
        { stage: "Call Prep", action: "Review active debtor records across multiple billing grids.", pain: "Takes 2 minutes per call; details missed.", feeling: "Frenzied", opp: "Single-view consolidated timeline" },
        { stage: "Negotiation", action: "Navigate conversation while verifying legal disclosure scripts.", pain: "Rigid scripts sound cold, inducing user defense.", feeling: "Anxious", opp: "Empathetic script suggestion engine" },
        { stage: "Settlement", action: "Calculate maximum allowable waivers on past-due balances.", pain: "Manual math calculations are prone to errors.", feeling: "Stressed", opp: "Interactive settlement waiver calculator" }
      ],
      quote: "It's hard to be empathetic with a customer when you're looking at a sea of red numbers and a timer ticking down your call duration.",
      quoteAuthor: "Marcus Cole, Senior Recovery Representative"
    },

    findings: [
      {
        id: "cr-f1",
        num: "01",
        title: "Empathy is blocked by data fragmentation",
        desc: "Agents cannot understand the borrower's life situation (e.g. recent job loss) because transactional detail is buried in sub-menus.",
        implication: "Establish a unified borrower historical lifecycle timeline.",
        color: "bg-[#FFE66D]",
        textColors: { title: "text-amber-950", desc: "text-amber-900/80", imp: "text-amber-950/70" }
      },
      {
        id: "cr-f2",
        num: "02",
        title: "High fear of compliance violations",
        desc: "Strict national collections regulations (FDCPA) penalize agents for wrong wording, causing severe conversational anxiety.",
        implication: "Incorporate inline real-time compliance script prompts.",
        color: "bg-[#A7D8FF]",
        textColors: { title: "text-blue-950", desc: "text-blue-900/80", imp: "text-blue-950/70" }
      },
      {
        id: "cr-f3",
        num: "03",
        title: "Rigid settlement options block deal closure",
        desc: "Borrowers want to pay but require personalized installments. Agents lack tools to test and approve custom billing terms.",
        implication: "Embed a dynamic, audited compromise installment calculator.",
        color: "bg-[#F8C7D8]",
        textColors: { title: "text-pink-950", desc: "text-pink-900/80", imp: "text-pink-900/70" }
      }
    ],

    opportunities: [
      {
        problem: "Agents spend call minutes searching raw grids for client context, missing customer signals.",
        insight: "Combining credit trends, communications, and disputes into one visual thread lowers cognitive latency.",
        opportunity: "Design a high-density, bento-style consolidated debtor Timeline.",
        outcome: "Review prep times trimmed from 2 minutes to 5 seconds."
      },
      {
        problem: "Manual waiver math errors trigger costly regulatory and database audits.",
        insight: "Giving agents visual guardrails with simple color cards locks parameters inside compliance rules.",
        opportunity: "Create an interactive visual balance and waiver installment slider.",
        outcome: "Settle math errors dropped to absolute zero."
      }
    ],

    ecosystem: {
      intro: "We engineered an agent-centric workspace ecosystem that pulls transactional histories, credit ratings, and compliance rules into one client timeline.",
      engineName: "Empathetic Guidance Workspace",
      nodes: [
        { title: "Core Banking Ledger", desc: "Primary historical transactional records and balance fees.", type: "input" },
        { title: "FDCPA Compliance Rules", desc: "State-specific legal regulations and scripts.", type: "input" },
        { title: "Empathetic script suggester", desc: "Generates responsive, safe conversation prompts.", type: "core" },
        { title: "Direct Payment Link", desc: "Auto-generated secure payment portal webhooks.", type: "output" },
        { title: "Compliance Audit Logger", desc: "Automated session logs capturing legal disclosures.", type: "output" }
      ]
    },

    workflow: {
      intro: "Replacing the rigid, tabular collections platform with a high-fidelity single screen that guides the conversation dynamically.",
      steps: [
        {
          legacy: { title: "Tabbed Column Browsing", desc: "Switching between billing, profiles, and historical logs in seperate grids.", friction: "Takes 2 minutes, details missed under high call pressure." },
          improved: { title: "Unified Bento Workspace", desc: "Consolidated, single-page profile displaying history, scripts, and installment tools.", benefit: "Review prep completed in 5 seconds prior to dialer trigger." }
        },
        {
          legacy: { title: "Unapproved Settlement Math", desc: "Calculating allowable waivers on scrap paper while borrower waits on hold.", friction: "Prone to accounting errors, requires PM managers to sign off." },
          improved: { title: "Interactive Settlement Slider", desc: "Waiver boundaries are locked visually; system auto-approves within boundaries.", benefit: "Waiver math errors cut to absolute zero; agreements reached instantly." }
        }
      ]
    },

    strategy: {
      intro: "The design strategy centered around the concept of 'Human-in-the-Loop AI', augmenting agents' conversations rather than replacing them.",
      principles: [
        { title: "Dialogue over Scripting", desc: "Provide friendly conversational options instead of rigid legal statements." },
        { title: "Visual Settlement Paths", desc: "Utilize charts and sliders so clients understand payments options quickly on portals." },
        { title: "Agent Cognitive Protection", desc: "Highlight legal warnings in eye-safe, explicit warning badges to lower tension." }
      ],
      comparison: [
        { criteria: "Conversational Success", legacy: "Poor (Rigid Scripts)", alternative: "AI Dialer (Robotic)", winner: "Augmented prompts (Conversational guides)" },
        { criteria: "Accounting Auditing", legacy: "Manual checks", alternative: "Approval delays", winner: "Waiver sliders with embedded parameters" }
      ]
    },

    solutions: {
      intro: "The final solution is a beautifully balanced, single-screen Agent Workspace showcasing unified debtor history and compliance scripts.",
      features: [
        { title: "Unified Context Timeline", desc: "Bento-style workspace display containing customer details, call histories, and disputes." },
        { title: "Dynamic Script Assist", desc: "Responsive dialog suggestor showing legal disclosures based on current conversation stage." },
        { title: "Compromise Waiver Grid", desc: "Visual settlement calculator allowing custom, audited payment plans with one-click portal links." }
      ],
      wireframesSpec: {
        left: "UNIFIED TIMELINE (Debtor Journey)",
        center: "RECOVERY SCRIPT FEED & WARNINGS",
        right: "COMPROMISE WAIVER CALCULATOR"
      },
      screens: [
        { title: "Unified Profile Stage", desc: "Displays all credit histories and recent communication cards cleanly." },
        { title: "Installments settlement view", desc: "Highlights the dynamic sliders for selecting installment terms." }
      ],
      simulator: {
        type: "compliance",
        title: "Compliance Negotiation Simulator",
        buttonLabel: "Initialize compliant outbound call",
        initialNodes: [
          { id: "dial", type: "trigger", title: "Trigger Outbound Dialer", desc: "Target: Marcus Cole (DPD 45 - Balance: $1,200)", status: "idle" },
          { id: "identify", type: "action", title: "Verify Borrower Identity", desc: "Compliance: Confirm DOB & identity check", status: "idle" },
          { id: "disclose", type: "channel", title: "Provide Legal Disclosure", desc: "Mandatory: State call is recorded for collection", status: "idle" },
          { id: "calculate", type: "retry", title: "Offer Empathetic Compromise", desc: "Calculated: Suggest 30% waiver on full balance", status: "idle" },
          { id: "resolve", type: "action", title: "Generate Payment Portal Link", desc: "Dispatch: Automated installment payment webhook", status: "idle" }
        ],
        logs: {
          start: "[11:00 AM] Call Connected: Marcus Cole (Record ID #8304)",
          steps: [
            { progress: 20, log: "[11:02 AM] Identity Verified: Customer verified DOB and billing zip code.", nodeIndex: 1, nodeStatus: "success" },
            { progress: 45, log: "[11:04 AM] Mandatory Disclosure read: 'This is an attempt to collect...' Compliance verified.", nodeIndex: 2, nodeStatus: "running" },
            { progress: 70, log: "[11:06 AM] Settlement Calculators: Borrower cites temporary unemployment. Suggesting 30% waiver.", nodeIndex: 3, nodeStatus: "success" },
            { progress: 90, log: "[11:08 AM] Settlement Agreed: 3 monthly payments of $280 locked into payment ledger.", nodeIndex: 4, nodeStatus: "success" }
          ],
          end: "[11:10 AM] Outbound Session Saved: Compliance audit verified. Payment portal SMS dispatched."
        }
      }
    },

    results: {
      intro: "Empathetic design standards unlocked incredible operational metrics within 6 months of call-center deployment.",
      metrics: [
        { value: "18%", label: "Resolution Lift", desc: "A remarkable increase in payment compromise agreements completed." },
        { value: "Zero", label: "Compliance Violations", desc: "Absolute avoidance of legal penalties and operational audits." },
        { value: "3 Days", label: "Onboarding Cycle", desc: "Agent onboarding times plummeted from weeks to 3 days of tool use." }
      ]
    },

    reflections: {
      intro: "Designing AI Collection Intelligence convinced Neha that empathy is highly profitable.",
      bullets: [
        "Augment, don't automate: Giving calling agents smart, audited tools protects users' agency and builds conversational rapport.",
        "Aesthetics reduce tension: Utilizing calm, light palettes lowers agents' workplace anxiety."
      ],
      takeaway: "Empathetic interface design can completely humanize even the most high-pressure enterprise environments."
    }
  },

  "ux-audit-analytics": {
    id: "ux-audit-analytics",
    title: "Campaign Analytics Dashboard",
    category: "Marketing Ops & Analytics",
    role: "UX Strategy Lead",
    duration: "4 Months",
    tags: ["Marketing Ops", "Product Growth", "Heuristics", "SaaS Analytics", "User Research"],
    image: "/src/assets/images/ux_analytics_1783261627388.jpg",
    accentBg: "bg-accent-blue",
    accentBorder: "border-blue-300",
    accentText: "text-blue-950",
    oneLiner: "Behavioral SaaS analytics dashboard that auto-highlights conversion friction and rage-click coordinates.",
    
    overview: {
      industry: "Marketing Ops & Analytics",
      users: "Growth Marketers, UX Designers, Product Managers",
      team: "1 Lead UX Strategist, 2 Data Engineers, 1 Frontend Engineer",
      role: "UX Strategy Lead (User Research, Interface Layout, Metrics Mapping)",
      timeline: "Jan - Apr 2023 (4 Months)",
      platform: "SaaS Analytics Web Dashboard App",
      deliverables: ["Friction Scoring Dashboard", "Rage Click Coordinate Visualizer", "Figma Redline Export Plugin"]
    },

    challenge: {
      businessProblem: "Modern marketing and analytics software monitors raw click rates but fails to highlight *why* users encounter hurdles, requiring manual heuristical auditing and tedious session replay watching.",
      userProblem: "UX Researchers spent up to 10 hours manually reviewing session videos to isolate checkout conversion leaks.",
      whyItMatters: "Automating the detection of friction patterns (such as rage clicks and continuous looping) connects behavioral insights to direct product optimization.",
      metrics: ["Reduce UX audit speeds by 60%", "Improve conversion drop-offs analysis by 3x", "Enable seamless code-to-design file linking"]
    },

    research: {
      intro: "Neha conducted user research with growth marketers and UX designers, identifying that teams are overwhelmed with quantitative numbers but lacking qualitative context.",
      methods: [
        { name: "Quantitative surveys", desc: "Surveyed 40 product analysts to isolate metrics causing dashboard fatigue." },
        { name: "Workspace Shadowing", desc: "Observed researchers analyze session replays to identify buttons causing page drops." },
        { name: "Friction Heuristics Mapping", desc: "Isolated 5 behavioral click patterns representing active user frustration." }
      ],
      steps: [
        { stage: "Event Mining", action: "Review massive click-rate charts on dashboards.", pain: "Charts hide local button glitches.", feeling: "Overwhelmed", opp: "Behavioral event pattern grouping" },
        { stage: "Visual Identification", action: "Examine coordinate details to isolate buttons.", pain: "Takes hours to confirm button identity.", feeling: "Frustrated", opp: "Rage click coordinates coordinate visualizer" },
        { stage: "Figma Redlining", action: "Draft issues to export to engineering teams.", pain: "Redrawing screenshot files consumes hours.", feeling: "Annoyed", opp: "Direct Figma-plugin export links" }
      ],
      quote: "Raw statistics tell us that 12% of users bounce on our checkout form, but they don't show us that users are rage-clicking a broken discount input.",
      quoteAuthor: "David Vance, Lead Growth Analyst"
    },

    findings: [
      {
        id: "ua-f1",
        num: "01",
        title: "Page metrics hide local button errors",
        desc: "High-level page bounce metrics hide the fact that a single broken form input is triggering conversion drops.",
        implication: "Embed element-level click density indicators.",
        color: "bg-[#FFE66D]",
        textColors: { title: "text-amber-950", desc: "text-amber-900/80", imp: "text-amber-950/70" }
      },
      {
        id: "ua-f2",
        num: "02",
        title: "Session replays are tedious to audit",
        desc: "UX designers must watch hundreds of silent, boring session videos to find the few that contain actual user frustration.",
        implication: "Develop automated friction score indexes.",
        color: "bg-[#A7D8FF]",
        textColors: { title: "text-blue-950", desc: "text-blue-900/80", imp: "text-blue-950/70" }
      },
      {
        id: "ua-f3",
        num: "03",
        title: "Severe design-to-engineering gap",
        desc: "Reporting bugs requires taking screenshot files, manually drawing redlines, and filing lengthy Jira issues.",
        implication: "Incorporate direct Figma redlines exporter plugins.",
        color: "bg-[#F8C7D8]",
        textColors: { title: "text-pink-950", desc: "text-pink-900/80", imp: "text-pink-950/70" }
      }
    ],

    opportunities: [
      {
        problem: "Manual session audit review is highly slow, subjective, and prone to oversight.",
        insight: "Grouping behavioral loops into standard patterns allows machine-learning scripts to auto-score friction.",
        opportunity: "Design a Friction Scoring Dashboard prioritizing active leaks.",
        outcome: "Audit times cut from hours to seconds."
      },
      {
        problem: "Sharing bugs with engineering requires slow, manual screenshot redlining.",
        insight: "Linking DOM button IDs directly with Figma elements automates redline generation.",
        opportunity: "Build a code-to-design Figma Export API plugin.",
        outcome: "Engineering delivery handoffs accelerated by 4x."
      }
    ],

    ecosystem: {
      intro: "We mapped out the analytics tracking ecosystem, tracing how raw frontend SDK events get analyzed into automated visual friction alerts.",
      engineName: "Behavioral Diagnostics Engine",
      nodes: [
        { title: "Frontend SDK Events", desc: "Raw pixel tracking client browser mouse click coordinates.", type: "input" },
        { title: "Browser Context Logs", desc: "Captures Javascript errors, layout sizes, and device details.", type: "input" },
        { title: "Behavioral Parser Engine", desc: "Flags rage-clicks, loops, and dead elements.", type: "core" },
        { title: "Friction Scores Index", desc: "Ranked list of conversion blocks prioritized by ROI impact.", type: "output" },
        { title: "Figma Sync Webhook", desc: "Direct coordinate maps exporting redlines to Figma frames.", type: "output" }
      ]
    },

    workflow: {
      intro: "Replacing tedious session video watching with a behavioral heatmap that isolates conversion obstacles instantly.",
      steps: [
        {
          legacy: { title: "Review Session Replays", desc: "Manually watch hours of user recording videos to detect form friction.", friction: "Takes up to 10 hours daily, highly boring and subjective." },
          improved: { title: "Friction Scores Heatmap", desc: "Autoprioritizes the form elements with the highest rates of rage-clicks.", benefit: "Isolates checkout errors in seconds; audits completed instantly." }
        },
        {
          legacy: { title: "Manual Jira Redlines", desc: "Take screenshots, draw arrows in paint tools, type DOM names for devs.", friction: "Takes 20 minutes per bug, slow engineering cycles." },
          improved: { title: "Figma Sync Export", desc: "One-click export mapping elements coordinates directly to Figma layouts.", benefit: "Redlines auto-populate instantly; developer handoff is seamless." }
        }
      ]
    },

    strategy: {
      intro: "Our product strategy focused on 'Actionable Insights', turning quantitative numbers into clear optimization tasks.",
      principles: [
        { title: "Value prioritizations", desc: "Prioritize friction alerts based on direct checkout basket value impact." },
        { title: "No Opaque Summaries", desc: "Always let growth analysts click through friction scores to see coordinates." },
        { title: "Seamless Handoff", desc: "Make design file exports secondary native pathways to bridge the builder gap." }
      ],
      comparison: [
        { criteria: "Analysis Speed", legacy: "Poor (Manual video watch)", alternative: "Page charts", winner: "Friction Scores Index (Auto-highlighted)" },
        { criteria: "Handoff Efficiency", legacy: "Manual screenshot redlines", alternative: "Text tickets", winner: "Figma coordinate exporter plug" }
      ]
    },

    solutions: {
      intro: "The final solution is a behavioral SaaS analytics center with high-contrast coordinate maps, prioritized friction tables, and Figma integrations.",
      features: [
        { title: "Friction Ranking Dashboard", desc: "A clean dashboard sorting checkout inputs by behavioral distress indicators." },
        { title: "Rage Click Heatmap Stage", desc: "Visually maps user coordinates and highlights dead buttons glowing in red circles." },
        { title: "One-Click Figma Exporter", desc: "Directly generates structured design audit layouts in Figma files with linked CSS classes." }
      ],
      wireframesSpec: {
        left: "PAGE LIST & SECTIONS",
        center: "BEHAVIORAL HEATMAP STAGE",
        right: "FRICTION METRICS DETAILS"
      },
      screens: [
        { title: "Diagnostics Center", desc: "Lists top checkout obstacles sorted by direct conversion loss metrics." },
        { title: "Coordinate Heatmap Screen", desc: "Overlays glowing red targets on elements experiencing rage clicks." }
      ],
      simulator: {
        type: "analytics",
        title: "Friction Diagnostics Panel Simulator",
        buttonLabel: "Initialize diagnostics scan",
        initialNodes: [
          { id: "scan", type: "trigger", title: "Scan Checkout Page", desc: "Analyze 50,000 visitor events on Form #12", status: "idle" },
          { id: "detect", type: "action", title: "Detect Click Patterns", desc: "Group mouse entries into behavioral patterns", status: "idle" },
          { id: "isolate", type: "channel", title: "Isolate Rage Clicks", desc: "Identify coordinates experiencing repeated clicks", status: "idle" },
          { id: "score", type: "retry", title: "Calculate Friction Score", desc: "Flag elements with distress ratings > 8.0", status: "idle" },
          { id: "export", type: "action", title: "Figma Export Sync", desc: "Map coordinate metrics directly to Figma tokens", status: "idle" }
        ],
        logs: {
          start: "[02:00 PM] Scan Activated: Checkout Page (basket_validation_v3.html)",
          steps: [
            { progress: 20, log: "[02:02 PM] Analyzing visitor events... Grouping 50,000 click sessions.", nodeIndex: 1, nodeStatus: "success" },
            { progress: 45, log: "[02:04 PM] Alert: Found repeated click patterns on discount coupon input field.", nodeIndex: 2, nodeStatus: "running" },
            { progress: 70, log: "[02:06 PM] Rage-Click Detected: Coupon button has click density of 12.4 clicks/sec.", nodeIndex: 3, nodeStatus: "success" },
            { progress: 90, log: "[02:08 PM] Score Logged: Coupon input distress rating: 9.2/10. (ROI Impact: $8,400 daily drop).", nodeIndex: 4, nodeStatus: "success" }
          ],
          end: "[02:10 PM] Scan Complete: Coordinates parsed. Exporting redline frames to growth_file.fig."
        }
      }
    },

    results: {
      intro: "Standardizing conversion audits via our Behavioral Diagnostics Platform led to excellent marketing growth metrics.",
      metrics: [
        { value: "2.5x", label: "Audit Cycle Speedup", desc: "UX audit times slashed from days of manual checking to seconds of scan." },
        { value: "14%", label: "Checkout Conversion Lift", desc: "Direct increase in customer completions after removing rage bottlenecks." },
        { value: "80%", label: "Redline Effort Saved", desc: "Eliminated manual screenshotting and redline drafting loops." }
      ]
    },

    reflections: {
      intro: "This project reinforced Neha's strategic belief that data must always be connected to design actions.",
      bullets: [
        "Context is king: High-level analytics reports are useless without direct component-level visual indicators.",
        "Designers build ecosystems: Our deliverables shouldn't just be Figma static layouts; they must be integrated design pipelines."
      ],
      takeaway: "Premium UX strategy lies in bridging quantitative diagnostics with frictionless design actions."
    }
  },

  "communication-dashboard": {
    id: "communication-dashboard",
    title: "Digital Communication Insights",
    category: "Customer Support & Omnichannel",
    role: "Senior Product Designer",
    duration: "5 Months",
    tags: ["Customer Support", "Omnichannel", "AI Assistants", "Dashboards"],
    image: "/src/assets/images/comm_dashboard_1783261608398.jpg",
    accentBg: "bg-accent-yellow",
    accentBorder: "border-amber-300",
    accentText: "text-amber-950",
    oneLiner: "Unified omnichannel customer workspaces reconciling WhatsApp, SMS, and Email into an AI-augmented thread.",
    
    overview: {
      industry: "Customer Support / SaaS",
      users: "Customer Care Representatives, Escalation Teams, Support Managers",
      team: "1 Lead Designer, 4 Backend Developers, 1 QA Engineer, 1 Support Lead",
      role: "Senior Product Designer (Information Architecture, Unified UI layout, UI Prototyping)",
      timeline: "Aug - Dec 2022 (5 Months)",
      platform: "Web desktop application (Consolidated agent inbox)",
      deliverables: ["Omnichannel Unified Inbox", "AI Draft Assist Composer", "Unified Customer SLA Monitor"]
    },

    challenge: {
      businessProblem: "High-volume customer support operations suffer from fragmented communication channels (WhatsApp, SMS, Email) causing slow answer times, duplicated ticket resolutions, and severe agent fatigue.",
      userProblem: "Representatives spent up to 30% of their working hours logging into seperate vendor portals, copy-pasting template text, and resolving ticket sync errors.",
      whyItMatters: "Consolidating client communications into a single chronological timeline, aided by auto-draft suggestions, resolves agent cognitive fatigue.",
      metrics: ["Boost first contact resolution by 25%", "Reduce response times by 30%", "Eliminate representative tab switching completely"]
    },

    research: {
      intro: "Neha conducted user shadowing and ticket log evaluations, discovering that representative fatigue is triggered by channel-switching cognitive delays.",
      methods: [
        { name: "Support Shadowing", desc: "Observed representatives switch between Outlook, Twilio, and CRM files to answer one user." },
        { name: "Ticket Sync Analysis", desc: "Isolated 100 duplicated customer issues submitted across multiple channels." },
        { name: "Representative Stress Survey", desc: "Evaluated anxiety triggers related to SLA response timers." }
      ],
      steps: [
        { stage: "Identity Match", action: "Verify if incoming SMS belongs to an existing Email user.", pain: "No common ID; manual database lookup.", feeling: "Frenzied", opp: "Automated omnichannel contact reconciler" },
        { stage: "Drafting", action: "Compose responses matching guidelines and balance rules.", pain: "Typing identical answers repetitively.", feeling: "Fatigued", opp: "AI-assisted dynamic template composer" },
        { stage: "Status Log", action: "Archive tickets across separate channel logs manually.", pain: "Double logging causes errors.", feeling: "Annoyed", opp: "Single-click omnichannel dispatch and auto-archive" }
      ],
      quote: "Checking three separate inbox panels to answer a single customer billing question is why our support queue takes hours to clear.",
      quoteAuthor: "Elena Vance, Customer Care Representative"
    },

    findings: [
      {
        id: "cd-f1",
        num: "01",
        title: "Contact fragmentation triggers slow answers",
        desc: "Customer tickets are delayed because agents don't know that the customer has already explained their issue on WhatsApp.",
        implication: "Develop a chronological, omnichannel unified timeline.",
        color: "bg-[#FFE66D]",
        textColors: { title: "text-amber-950", desc: "text-amber-900/80", imp: "text-amber-950/70" }
      },
      {
        id: "cd-f2",
        num: "02",
        title: "Draft drafting fatigue is severe",
        desc: "Agents answer identical refund and subscription questions manually, typing redundant arguments or copying old templates.",
        implication: "Embed an AI Draft Assist Composer into inputs.",
        color: "bg-[#A7D8FF]",
        textColors: { title: "text-blue-950", desc: "text-blue-900/80", imp: "text-blue-950/70" }
      },
      {
        id: "cd-f3",
        num: "03",
        title: "SLA timers induce panic errors",
        desc: "Severe blinking red countdown timers on CRM dashboards cause agents to rush and make manual database entry errors.",
        implication: "Utilize structured status bars with calm visual indicators.",
        color: "bg-[#F8C7D8]",
        textColors: { title: "text-pink-950", desc: "text-pink-900/80", imp: "text-pink-900/70" }
      }
    ],

    opportunities: [
      {
        problem: "Checking multiple dashboards manually results in duplicated ticket resolutions.",
        insight: "Displaying incoming messages in a single chat canvas with channels badges eliminates tab fatigue.",
        opportunity: "Design a Consolidated Omnichannel Inbox Stage.",
        outcome: "Representative tab switching dropped to zero."
      },
      {
        problem: "Typing custom support email threads manually consumes massive working hours.",
        insight: "Combining active CRM borrower status with customer intent auto-populates drafts perfectly.",
        opportunity: "Build an AI-powered Support Draft Assist composer.",
        outcome: "Support response times reduced by 35%."
      }
    ],

    ecosystem: {
      intro: "We mapped out the omnichannel support inbox ecosystem, tracing how diverse channels feed into a centralized database reconciler.",
      engineName: "Omnichannel Inbox Reconciler",
      nodes: [
        { title: "WhatsApp REST Feed", desc: "Raw customer conversations received from Twilio WhatsApp API.", type: "input" },
        { title: "Email SMTP Server", desc: "Support inquiries received from email support profiles.", type: "input" },
        { title: "Inbox Reconciler Engine", desc: "Reconciles customer emails and SMS numbers into single timelines.", type: "core" },
        { title: "AI Draft Assist", desc: "Auto-generates context-aware replies matching user records.", type: "core" },
        { title: "Omnichannel Dispatcher", desc: "Sends responses instantly through selected vendor APIs.", type: "output" }
      ]
    },

    workflow: {
      intro: "Neha replaced the tab-switching customer support maze with a clean unified workspace chronological feed.",
      steps: [
        {
          legacy: { title: "Separate Channel Inboxes", desc: "Represent customer threads in distinct WhatsApp, SMS, and Email dashboards.", friction: "Takes up to 30% of representative hours manually cross-checking details." },
          improved: { title: "Consolidated Inbox Feed", desc: "Reconciles channels into a single, combined conversational timeline with tags.", benefit: "Total channel transparency; representative switching loops cut to zero." }
        },
        {
          legacy: { title: "Manual Reply Drafting", desc: "Type redundant refund and status emails from static document guidelines.", friction: "Causes slow answer times and high spelling error rates.", },
          improved: { title: "AI Draft Assist Composer", desc: "Auto-populates context-aware drafts matching customer credit balances.", benefit: "Reponse times cut by 35% with 100% template accuracy." }
        }
      ]
    },

    strategy: {
      intro: "The design system was guided by our strategy: 'Unified Context Over Split Tabs', structuring agent panels to focus attention.",
      principles: [
        { title: "Chronological Consolidation", desc: "Display messages from WhatsApp, SMS, and Email in a single historical feed." },
        { title: "Cooperative Automation", desc: "Embed draft assistants directly into composer inputs without automatic dispatching." },
        { title: "Stress-Safe Visuals", desc: "Ditch blinking red alerts for soft, modern progress lines that convey SLA details calmly." }
      ],
      comparison: [
        { criteria: "Representative Fatigue", legacy: "High (Separate tabs)", alternative: "Automatic chatbot", winner: "AI Augmented unified workspace" },
        { criteria: "First Resolution Rate", legacy: "Low (Delayed detail)", alternative: "Form emails", winner: "Unified Customer Context Timeline" }
      ]
    },

    solutions: {
      intro: "The final solution is a customer-centric support workspace designed around chronological timelines, bento details, and assistant drafting.",
      features: [
        { title: "Omnichannel Inbox Chat", desc: "A clean support workspace consolidating WhatsApp, SMS, and Email tickets with channels badges." },
        { title: "Customer Context Card", desc: "A right sidebar displaying credit ratings, customer transaction balances, and ticket history." },
        { title: "AI Draft Assist Composer", desc: "Embeds instant, context-aware reply drafts matching customer account information." }
      ],
      wireframesSpec: {
        left: "CHANNELS TICKET INBOX (WhatsApp, SMS, Email Lists)",
        center: "OMNICHANNEL CHRONOLOGICAL CHAT VIEWPORT",
        right: "CUSTOMER CONTEXT SIDEBAR & AI AGENT"
      },
      screens: [
        { title: "Unified Message Center", desc: "Unifies multiple customer channel logs into a single historical list." },
        { title: "Assistant Draft Drawer", desc: "Highlights the AI Draft assist panel recommending custom refund emails." }
      ],
      simulator: {
        type: "omnichannel",
        title: "Omnichannel Unified Inbox Simulator",
        buttonLabel: "Fetch incoming customer queries",
        initialNodes: [
          { id: "sms", type: "trigger", title: "Receive Customer SMS", desc: "Message: 'Where is my invoice?' from Marcus Cole", status: "idle" },
          { id: "match", type: "action", title: "Reconcile Customer ID", desc: "Reconciler: Match SMS number to user database profile", status: "idle" },
          { id: "context", type: "channel", title: "Verify Account Status", desc: "Context: Client has 1 unresolved billing dispute", status: "idle" },
          { id: "draft", type: "retry", title: "AI Draft Auto-Response", desc: "AI Assist: Generate invoice dispute summary draft", status: "idle" },
          { id: "dispatch", type: "action", title: "Send Omnichannel Reply", desc: "Send: One-click dispatch via Twilio API WhatsApp", status: "idle" }
        ],
        logs: {
          start: "[03:00 PM] Inbox Active: Scanning SMS and WhatsApp channels...",
          steps: [
            { progress: 20, log: "[03:02 PM] Received SMS from +1 (555) 382-9304: 'Need my invoice statement ASAP!'", nodeIndex: 1, nodeStatus: "success" },
            { progress: 45, log: "[03:04 PM] Profile Resolved: Number matches user profile Marcus Cole (m.cole@email.com).", nodeIndex: 2, nodeStatus: "running" },
            { progress: 70, log: "[03:06 PM] Checking Account ledger: Found unpaid Invoice #INV-8302 ($450) disputing fee codes.", nodeIndex: 3, nodeStatus: "success" },
            { progress: 90, log: "[03:08 PM] AI Assist drafted reply: 'Hi Marcus, we are holding Invoice #INV-8302 due to rate audits...'", nodeIndex: 4, nodeStatus: "success" }
          ],
          end: "[03:10 PM] Reply Dispatched via SMS & WhatsApp. Ticket reconciled and archived safely."
        }
      }
    },

    results: {
      intro: "Unifying representative operations onto our communications workspace yielded incredible support efficiency.",
      metrics: [
        { value: "30%", label: "First Contact Resolution", desc: "Massive lift in issues resolved within the very first conversational session." },
        { value: "22%", label: "Response Time Trim", desc: "Support ticket queue delay cut from 3 hours to under 45 minutes." },
        { value: "Zero", label: "Representative Swapping", desc: "Support agents operate inside a single screen with zero multi-app fatigue." }
      ]
    },

    reflections: {
      intro: "Building this Omnichannel workspace taught Neha that consolidated context is a super-power.",
      bullets: [
        "Unification lowers fatigue: Resolving contact tabs into one chronological flow lowers agent stress instantly.",
        "Augment, don't automate: Directing AI drafts to composer inputs instead of automatic runs preserves agents' empathy."
      ],
      takeaway: "Premium SaaS layouts shouldn't fragment information; they must reconcile it into calm, unified grids."
    }
  }
};
