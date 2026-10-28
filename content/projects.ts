export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client?: string;
  year: string;
  oneLiner: string;
  summary: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  aspect: "16:10" | "16:9" | "4:3";
  metrics: string[];
  stack: string[];
  link?: string;
  challenge?: string;
  solution?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "returngo",
    slug: "returngo",
    title: "ReturnGo",
    category: "Platform",
    client: "ReturnGo Mobility Network",
    year: "2025",
    oneLiner: "Return-journey matching, passenger seat-sharing & vehicle rental platform.",
    summary:
      "An intelligent regional mobility and vehicle rental platform that matches empty return-leg taxi journeys with waiting passengers, reducing deadhead miles while supporting full-taxi bookings, seat-sharing, and verified self-drive or chauffeur rentals.",
    image: "/images/project-returngo.jpg",
    imageAlt: "ReturnGo regional return-journey matching and rental mobility platform interface",
    featured: true,
    aspect: "16:10",
    metrics: [
      "40%+ Reduction in empty return-trip miles",
      "Verified multi-tier driver & vehicle onboarding",
      "Sub-minute journey publication to booking matching",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Lucide React", "Node.js"],
    challenge:
      "Most regional taxi trips involve empty return legs where drivers travel back with zero passengers, driving up fuel waste and passenger fares while depressing driver income.",
    solution:
      "Engineered an algorithmic return-journey matching engine that scores route compatibility, unifying full taxi booking, seat-sharing, and independent vehicle rentals on a single coastal corridor with verified driver and owner workflows.",
  },
  {
    id: "vox-ai",
    slug: "vox-ai",
    title: "VOX AI",
    category: "AI Healthcare",
    client: "Omnimed Clinical Systems",
    year: "2025",
    oneLiner: "AI-powered ambient clinical documentation and consultation report generation.",
    summary:
      "An ambient clinical documentation suite that captures doctor-patient dialogues in real time, converts consultation audio into structured medical records with Gemini AI, generates downloadable clinical PDF reports, and triggers automated n8n EHR workflows.",
    image: "/images/project-vox-ai.jpg",
    imageAlt: "VOX AI ambient clinical documentation and speech-to-text consultation platform",
    featured: true,
    aspect: "16:10",
    metrics: [
      "Instant clinical transcription & structured extraction",
      "Automated PDF consultation report generation",
      "Real-time communication with Socket.IO & n8n webhooks",
    ],
    stack: ["Python Flask", "Google Gemini AI", "Supabase", "React", "Socket.IO", "n8n Webhooks", "ReportLab"],
    challenge:
      "Clinicians spend hours every day transcribing consultations and manually inputting diagnostic findings into electronic records, increasing burnout and delaying patient report generation.",
    solution:
      "Engineered a real-time speech-to-text pipeline integrated with Google Gemini AI for clinical entity extraction, automated structured PDF report synthesis, and Supabase storage with webhook orchestration.",
  },
  {
    id: "smartlinesystems",
    slug: "smartlinesystems",
    title: "SmartLineSystems",
    category: "Digital Transformation",
    client: "Smartline Systems Pvt. Ltd.",
    year: "2025",
    oneLiner: "Cloud computing, AI SaaS applications & enterprise operations platform.",
    summary:
      "An enterprise technology platform uniting cloud infrastructure, AI-driven SaaS applications, automated cloud bookkeeping, and IoT connectivity for growing organizations.",
    image: "/images/project-smartlinesystems.jpg",
    imageAlt: "SmartLineSystems cloud computing, AI SaaS applications and enterprise dashboard",
    featured: true,
    aspect: "16:10",
    metrics: [
      "Unified Cloud, AI & IoT operational stack",
      "Automated real-time cloud bookkeeping pipelines",
      "Cloud-native high-availability architecture",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloud Native", "IoT Telemetry"],
    challenge:
      "Growing enterprises struggle with fragmented operational systems, juggling siloed bookkeeping, disconnected client records, and slow legacy computing infrastructure without unified intelligence.",
    solution:
      "Architected a cloud-native platform integrating SaaS application modules with AI, automated real-time bookkeeping, and IoT device telemetry into a centralized, scalable operational dashboard.",
  },
  {
    id: "leadsense",
    slug: "leadsense",
    title: "LeadSense",
    category: "AI Systems",
    client: "LeadSense Autonomous Systems",
    year: "2025",
    oneLiner: "Autonomous business growth, digital presence audit & website generation platform.",
    summary:
      "A production-oriented autonomous business growth engine that discovers local businesses, audits digital presence across 11 measured dimensions, deterministically generates responsive websites, and provisions tenant-isolated RAG chatbots.",
    image: "/images/project-leadsense.png",
    imageAlt: "LeadSense AI autonomous business growth and website generation dashboard",
    featured: false,
    aspect: "16:10",
    metrics: [
      "11 Deterministic audit dimensions evaluated per business",
      "Fully automated responsive web & RAG chatbot provisioning",
      "Tenant-isolated vector retrieval with strict SSRF bounds",
    ],
    stack: ["Python FastAPI", "Next.js", "pgvector", "PostgreSQL", "Playwright", "Tailwind CSS", "OpenStreetMap"],
    challenge:
      "Small and regional businesses lack modern digital presence or conversational customer tools, while manual agency web design and chatbot configuration remain slow and prohibitively expensive.",
    solution:
      "Built an end-to-end autonomous discovery pipeline via Overpass QL/OSM, automated 11-stage audit engine with Playwright, deterministic template-based web generator, and tenant-isolated pgvector RAG chatbot provisioning.",
  },
  {
    id: "leadscout",
    slug: "leadscout",
    title: "LeadScout",
    category: "Business Automation",
    client: "Commercial Sales Operations",
    year: "2025",
    oneLiner: "Universal local business lead discovery, website auditing & outreach engine.",
    summary:
      "A high-precision sales intelligence and scraping engine that extracts local business prospects across cities and niches, audits web capabilities, deduplicates records via SHA-256 hashes, and orchestrates personalized cold outreach sequences.",
    image: "/images/project-leadscout.jpg",
    imageAlt: "LeadScout sales intelligence scraper and automated outreach platform",
    featured: false,
    aspect: "16:10",
    metrics: [
      "Zero-duplicate ingestion with SHA-256 deduplication",
      "Automated multi-field extraction (phone, email, social, rating)",
      "Evidence-cited cold outreach copy generation",
    ],
    stack: ["Python", "Playwright", "n8n", "PostgreSQL", "Google Sheets API", "LLM Outreach"],
    challenge:
      "B2B outreach teams waste over 60% of their operational time manually browsing business directories, extracting unverified emails, and evaluating whether prospects have modern web infrastructure.",
    solution:
      "Engineered an automated crawler and intelligence pipeline utilizing Playwright, Google Maps/OSM extraction, contact discovery, 11-dimension opportunity scoring, and automated n8n email outreach.",
  },
  {
    id: "lyfodaily",
    slug: "lyfodaily",
    title: "LyfoDaily",
    category: "AI Healthcare",
    client: "Clinical & Practice Healthcare Network",
    year: "2025",
    oneLiner: "Production-grade multilingual AI voice receptionist & scheduling agent for clinics.",
    summary:
      "A multi-tenant conversational voice receptionist platform purpose-built for healthcare that answers incoming clinic calls in real time, natively detects and speaks 20+ languages, schedules appointments directly into clinic calendars, and hands off gracefully when human intervention is needed.",
    image: "/images/project-lyfodaily-new.png",
    imageAlt: "LyfoDaily production-grade multilingual AI voice receptionist and clinical appointment scheduler",
    featured: false,
    aspect: "16:10",
    metrics: [
      "Native support for 20+ languages with mid-call switching",
      "Direct two-way calendar slot booking in real time",
      "Sub-second streaming audio latency via LiveKit & WebRTC",
    ],
    stack: ["LiveKit", "React", "Python FastAPI", "WebRTC", "Docker", "PostgreSQL"],
    challenge:
      "Medical clinics and multi-location practices face high call drop rates, missed patient appointments, and multilingual communication friction that generic IVR phone trees cannot resolve.",
    solution:
      "Engineered a sub-second streaming voice pipeline using LiveKit with real-time intent parsing, dynamic doctor slot booking directly in the practice database, and bring-your-own-AI provider routing with zero lock-in.",
  },
  {
    id: "internal-management",
    slug: "internal-management",
    title: "Internal Management",
    category: "Business Automation",
    client: "Masaar & Co. Operations",
    year: "2025",
    oneLiner: "Unified operations, client workflow orchestration & internal management portal.",
    summary:
      "A centralized enterprise administration and operational management console integrating client engagement pipelines, project milestone delivery tracking, role-based access control, and internal workflow orchestration.",
    image: "/images/project-internal-management.png",
    imageAlt: "Internal Management unified operations, project delivery and enterprise administration portal",
    featured: false,
    aspect: "16:10",
    metrics: [
      "Centralized operational dashboard for all active workstreams",
      "Role-based access control & granular audit logging",
      "Real-time delivery milestone and resource tracking",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Docker", "REST/GraphQL API"],
    challenge:
      "Coordinating multidisciplinary engineering sprints, client deliverables, and organizational assets across disparate tools created coordination friction and manual reporting overhead.",
    solution:
      "Deployed an integrated internal management dashboard consolidating pipeline telemetry, resource allocation, approval pipelines, and tenant administration into a unified, secure control interface.",
  },
];
