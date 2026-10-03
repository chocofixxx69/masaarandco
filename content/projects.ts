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
    id: "maddy-voice",
    slug: "maddy-voice",
    title: "Maddy Voice",
    category: "AI Healthcare",
    client: "Maddy Health Systems",
    year: "2025",
    oneLiner: "AI voice consultation & automated clinical documentation.",
    summary:
      "A clinical-grade ambient voice assistant that captures doctor-patient dialogues in real time, generates structured electronic health record (EHR) notes, and cuts clinician documentation time by 68%.",
    image: "/images/project-maddy-voice.jpg",
    imageAlt: "Maddy Voice smartphone app interface showing speech waveform and clinical draft notes",
    featured: true,
    aspect: "16:10",
    metrics: [
      "68% Reduction in documentation time",
      "99.4% Accuracy on specialized medical terminology",
      "SOC-2 Type II & HIPAA certified architecture",
    ],
    stack: ["Next.js", "Python FastAudio", "Whisper ASR", "Med-LLM Fine-tuned", "PostgreSQL", "WebSockets"],
    challenge:
      "Physicians were spending up to 3.5 hours every evening transcribing audio notes into legacy electronic health records, accelerating practitioner burnout and creating clinical backlog.",
    solution:
      "Masaar engineered an ambient speech recognition engine with custom medical vocabularies and multi-speaker separation, creating structured SOAP notes directly into hospital records within seconds.",
  },
  {
    id: "gradeflow",
    slug: "gradeflow",
    title: "GradeFlow",
    category: "Education",
    client: "Academic Analytics Consortium",
    year: "2024",
    oneLiner: "Academic platform for VTU students with result insights.",
    summary:
      "An intelligent academic analytics platform serving over 180,000 university students, enabling real-time semester result parsing, GPA projection algorithms, and personalized curriculum suggestions.",
    image: "/images/project-gradeflow.jpg",
    imageAlt: "GradeFlow laptop interface displaying student grade analytics and charts",
    featured: true,
    aspect: "16:10",
    metrics: [
      "180,000+ Active university student users",
      "< 85ms Query response time across 12M records",
      "99.98% Uptime throughout university exam results week",
    ],
    stack: ["React 19", "TypeScript", "Node.js", "Redis Caching", "Tailwind CSS", "AWS ECS"],
    challenge:
      "State university examination portals faced severe database timeouts during semester result releases, leading to frustrated students and inaccurate GPA manual calculations.",
    solution:
      "We engineered an edge-cached data layer with real-time PDF result scraping and automated grade curve visualizers, providing instantaneous queries and semester-over-semester GPA tracking.",
  },
  {
    id: "omniconnect",
    slug: "omniconnect",
    title: "OmniConnect",
    category: "Platform",
    client: "Omni Logistics & Infrastructure",
    year: "2024",
    oneLiner: "Connecting people, systems and opportunities.",
    summary:
      "A unified enterprise mobility application linking distributed field teams with centralized supply chain and operational data in low-latency offline-first environments.",
    image: "/images/project-omniconnect.jpg",
    imageAlt: "OmniConnect mobile interface connecting logistics teams",
    featured: true,
    aspect: "16:10",
    metrics: [
      "40,000+ Connected field operators across 14 hubs",
      "Full peer-to-peer offline sync support",
      "4.2x Faster ticket resolution and material dispatch",
    ],
    stack: ["React Native", "GraphQL", "Go Microservices", "Couchbase Lite", "Docker"],
    challenge:
      "Industrial teams working in underground freight terminals and remote sites suffered constant data disconnects, causing dispatch confusion and inventory tracking mismatches.",
    solution:
      "A resilient local-first database sync protocol with differential encryption was deployed, ensuring zero work disruption even in totally disconnected warehouse zones.",
  },
  {
    id: "horizons-spatial",
    slug: "horizons-spatial",
    title: "Horizons Spatial",
    category: "AI Systems",
    client: "Horizons Urban Development",
    year: "2025",
    oneLiner: "Geospatial machine learning for urban density and environmental simulation.",
    summary:
      "An interactive spatial intelligence engine that analyzes multi-spectral satellite imagery to simulate climate resilience, solar irradiance, and infrastructure development across metropolitan sectors.",
    image: "/images/hero-architecture.jpg",
    imageAlt: "High-resolution architectural spatial rendering with environmental reflection",
    featured: false,
    aspect: "16:10",
    metrics: [
      "12 Metropolitan municipal sectors mapped",
      "Real-time solar irradiance & shadow simulation",
      "30TB Geospatial sensor telemetry processed",
    ],
    stack: ["Python GeoPandas", "PyTorch", "WebGL / Three.js", "Next.js", "FastAPI"],
    challenge:
      "Municipal zoning boards struggled to forecast the microclimate thermal impact of proposed high-density commercial towers before breaking ground.",
    solution:
      "An AI spatial model running thermal fluid dynamics and shadow projection was integrated into an interactive browser dashboard, enabling urban planners to simulate building envelopes in seconds.",
  },
  {
    id: "pulse-ledger",
    slug: "pulse-ledger",
    title: "Pulse Ledger",
    category: "Digital Transformation",
    client: "FinCapital MENA",
    year: "2024",
    oneLiner: "Modernized real-time settlement architecture for corporate treasury.",
    summary:
      "An institutional treasury gateway consolidating cross-border liquidity across five central banks into an instantaneous automated reconciliation engine.",
    image: "/images/arch-curved-concrete.jpg",
    imageAlt: "Minimalist concrete banking architecture symbolizing institutional stability",
    featured: false,
    aspect: "16:10",
    metrics: [
      "$1.2B+ Daily settlement volume routed",
      "Zero ledger discrepancies over 18 months",
      "ISO 20022 message compliance natively enforced",
    ],
    stack: ["Rust Core Engine", "Kafka Stream", "Next.js Admin Console", "PostgreSQL Citus", "Kubernetes"],
    challenge:
      "Legacy batch processing meant corporate multi-currency settlements required 48 to 72 hours with high manual clearing intervention.",
    solution:
      "Masaar engineered an event-driven clearing core using Rust and Kafka with sub-second cryptographic validation, providing real-time multi-currency settlement.",
  },
  {
    id: "apex-automate",
    slug: "apex-automate",
    title: "Apex Automate",
    category: "Business Automation",
    client: "Gulf Logistics & Operations",
    year: "2025",
    oneLiner: "Enterprise operations workflow orchestration and real-time approval pipelines.",
    summary:
      "An autonomous business automation engine processing over 250,000 multi-tier approval requests, document generation workflows, and cross-department handoffs with zero manual delay.",
    image: "/images/service-ai-solutions.jpg",
    imageAlt: "Architectural lines representing operational streamlined pathways",
    featured: false,
    aspect: "16:10",
    metrics: [
      "82% Reduction in manual processing time",
      "250k+ Automated transactions monthly",
      "Zero data sync discrepancies",
    ],
    stack: ["Next.js", "Python FastAPI", "Temporal.io", "PostgreSQL", "Tailwind CSS"],
    challenge:
      "Enterprise logistics requests required manual verification across six disparate software packages, causing up to 4 days of turnaround lag per invoice.",
    solution:
      "We built an autonomous workflow orchestrator with rule-based conditional escalations, unifying dispatch, billing, and customs compliance into instant automated pipelines.",
  },
];
