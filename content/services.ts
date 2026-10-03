export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  scope: string[];
  deliverables: string[];
  cta: string;
  featured?: boolean;
}

export const SERVICES_HEADER = {
  label: "MASAAR & CO. — SERVICES",
  title: "Automation & Technology, Built Around Your Business.",
  subtitle:
    "We build digital solutions that help businesses automate processes, connect systems, serve customers, and operate more efficiently.",
  customCallout: {
    heading: "Need something specific?",
    description: "We build custom technology around your requirements.",
    cta: "Request Custom Architecture",
  },
};

export const CORE_FOCUS = [
  {
    name: "AUTOMATE",
    tagline: "Streamline operations & eliminate manual friction",
    items: [
      "Business automation",
      "AI automation",
      "Workflow automation",
      "Marketing automation",
      "Sales automation",
    ],
  },
  {
    name: "BUILD",
    tagline: "End-to-end digital products & software",
    items: [
      "Websites",
      "Applications",
      "SaaS",
      "Chatbots",
      "Voice agents",
      "AI agents",
      "Digital products",
    ],
  },
  {
    name: "CONNECT",
    tagline: "Unify disparate tools & institutional data",
    items: [
      "APIs",
      "CRM",
      "ERP",
      "Databases",
      "Cloud services",
      "Third-party integrations",
    ],
  },
  {
    name: "SCALE",
    tagline: "Enterprise resiliency, speed & continuous growth",
    items: [
      "Cloud",
      "DevOps",
      "Data",
      "Analytics",
      "Security",
      "Maintenance",
      "Optimisation",
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "business-automation",
    slug: "business-automation",
    number: "01",
    name: "Business Automation",
    tagline: "Automate repetitive tasks, workflows, operations, approvals, reporting, and day-to-day business processes.",
    summary:
      "We eliminate manual operational friction by designing tailored workflow automation engines. From invoice reconciliation and cross-department approvals to autonomous reporting pipelines, we turn manual bottlenecks into instantaneous, zero-error systems.",
    image: "/images/service-ai-solutions.jpg",
    imageAlt: "Minimalist architectural curved ceiling representing efficient flow",
    scope: [
      "Multi-step Approval & Operations Workflows",
      "Automated Financial & Executive Reporting",
      "Document Generation & Contract Lifecycle Automation",
      "Cross-Department Hand-off Orchestration",
    ],
    deliverables: [
      "End-to-end automated workflow engines",
      "Custom trigger & alert notification matrices",
      "Audit trail logs & process monitoring dashboards",
      "Operational SOP documentation & staff onboarding",
    ],
    cta: "Automate Your Workflows",
    featured: true,
  },
  {
    id: "ai-chatbots-voice-agents",
    slug: "ai-chatbots-voice-agents",
    number: "02",
    name: "AI, Chatbots & Voice Agents",
    tagline: "AI chatbots, AI agents, voice agents, AI receptionists, customer support systems, knowledge assistants, appointment agents, and intelligent business solutions.",
    summary:
      "Next-generation conversational intelligence built on proprietary LLMs and speech synthesis. We engineer human-like voice agents, autonomous customer support systems, and internal knowledge assistants that resolve inquiries and book appointments 24/7.",
    image: "/images/project-maddy-voice.jpg",
    imageAlt: "Intelligent voice assistant and transcription interface",
    scope: [
      "Autonomous Voice Agents & AI Receptionists",
      "Customer Support Chatbots with Deep Context",
      "Internal Enterprise Knowledge Assistants (RAG)",
      "Automated Appointment Scheduling & Calendar Agents",
    ],
    deliverables: [
      "Omnichannel voice & web conversational interfaces",
      "Knowledge base vector database synchronization",
      "Real-time speech-to-text and low-latency audio pipelines",
      "CRM & ticketing integration with fallback escalation",
    ],
    cta: "Deploy AI Agents",
    featured: true,
  },
  {
    id: "website-development",
    slug: "website-development",
    number: "03",
    name: "Website Development",
    tagline: "Business websites, landing pages, e-commerce websites, web portals, dashboards, and custom web platforms.",
    summary:
      "We design and build high-performance, responsive web experiences with strict typographic discipline and sub-second load times. Every website is engineered for brand distinction, conversion efficacy, and accessibility compliance.",
    image: "/images/hero-architecture.jpg",
    imageAlt: "Architectural composition representing structured web design",
    scope: [
      "Corporate Flagship & Brand Websites",
      "High-Conversion Campaign Landing Pages",
      "B2B & B2C E-Commerce Digital Storefronts",
      "Client Web Portals & Executive Dashboards",
    ],
    deliverables: [
      "Next.js / React full-stack production deployment",
      "Custom responsive design system with token library",
      "Technical SEO architecture, sitemaps & Schema markup",
      "Speed-optimized asset delivery via CDN with 95+ Lighthouse score",
    ],
    cta: "Build Your Website",
    featured: false,
  },
  {
    id: "application-development",
    slug: "application-development",
    number: "04",
    name: "Application Development",
    tagline: "Web applications, mobile applications, SaaS platforms, internal tools, customer portals, and custom software.",
    summary:
      "Full-cycle software engineering delivering robust native mobile apps and complex cloud applications. We build scalable digital backbones that empower your staff and delight your end users across iOS, Android, and the web.",
    image: "/images/project-omniconnect.jpg",
    imageAlt: "Mobile application interface showing connected systems",
    scope: [
      "Cross-Platform iOS & Android Mobile Apps",
      "Single-Page Web Applications & Dashboards",
      "Internal Business Tools & Field Operator Portals",
      "Custom Backend APIs & Microservice Architectures",
    ],
    deliverables: [
      "Production-ready mobile application builds",
      "Responsive web application with offline sync capability",
      "Role-based access control (RBAC) & security hardening",
      "Comprehensive TypeScript codebase with test suites",
    ],
    cta: "Develop Your Application",
    featured: true,
  },
  {
    id: "system-integration",
    slug: "system-integration",
    number: "05",
    name: "System Integration",
    tagline: "Connect CRM, ERP, databases, APIs, communication tools, payment systems, and other business software into unified workflows.",
    summary:
      "Break down organizational data silos. We integrate legacy monoliths, modern SaaS platforms, ERPs (SAP, Oracle, NetSuite), CRMs (Salesforce, HubSpot), payment gateways, and custom databases into a coherent real-time ecosystem.",
    image: "/images/service-digital-trans.jpg",
    imageAlt: "Modern architectural glass structure representing unified integration",
    scope: [
      "Enterprise CRM & ERP Bi-directional Sync",
      "Payment Gateway & Banking Reconciliation APIs",
      "Custom Middleware & Webhook Orchestration",
      "Communication Systems (Slack, Teams, WhatsApp Business, SMS)",
    ],
    deliverables: [
      "Fault-tolerant event-driven integration middleware",
      "Real-time bidirectional data synchronization pipelines",
      "API documentation & endpoint monitoring alerts",
      "Automated data validation and error handling queues",
    ],
    cta: "Integrate Your Systems",
    featured: true,
  },
  {
    id: "ai-intelligent-solutions",
    slug: "ai-intelligent-solutions",
    number: "06",
    name: "AI & Intelligent Solutions",
    tagline: "Generative AI, document processing, data extraction, recommendation systems, computer vision, speech solutions, and AI-powered applications.",
    summary:
      "Transform unstructured assets into strategic business advantages. We deploy machine vision, intelligent OCR document extraction, predictive recommendation algorithms, and fine-tuned generative AI tuned to your operational data.",
    image: "/images/service-product-dev.jpg",
    imageAlt: "Dynamic water surface representing fluid intelligence",
    scope: [
      "Automated Document Processing (OCR & Information Extraction)",
      "Domain-specific Generative AI & Fine-tuned LLMs",
      "Predictive Recommendation & Personalization Engines",
      "Computer Vision & Automated Visual Quality Inspection",
    ],
    deliverables: [
      "High-speed AI inference microservices",
      "Structured data extraction pipelines for invoices and PDFs",
      "Safety guardrails, evaluation metrics & confidence thresholds",
      "Continuous model retraining infrastructure",
    ],
    cta: "Explore AI Solutions",
    featured: true,
  },
  {
    id: "data-business-intelligence",
    slug: "data-business-intelligence",
    number: "07",
    name: "Data & Business Intelligence",
    tagline: "Data platforms, dashboards, analytics, reporting systems, data pipelines, and business intelligence solutions.",
    summary:
      "Turn millions of raw data points into actionable executive clarity. We build centralized data warehouses, real-time telemetry streaming, interactive BI dashboards, and automated KPI tracking for high-velocity decision-making.",
    image: "/images/project-gradeflow.jpg",
    imageAlt: "Analytics dashboard showing real-time metrics",
    scope: [
      "Centralized Data Lakehouse & Warehousing Architecture",
      "Real-time ETL / ELT Data Ingestion Pipelines",
      "Executive KPI Dashboards & Operational Telemetry",
      "Automated Scheduled Business Intelligence Reports",
    ],
    deliverables: [
      "Custom interactive web analytics dashboards",
      "Optimized analytical SQL queries with sub-second latency",
      "Automated data quality assertions & monitoring alerts",
      "Self-service BI reporting schemas for internal teams",
    ],
    cta: "Unlock Your Data",
    featured: false,
  },
  {
    id: "cloud-it-solutions",
    slug: "cloud-it-solutions",
    number: "08",
    name: "Cloud & IT Solutions",
    tagline: "Cloud infrastructure, deployment, DevOps, hosting, integrations, monitoring, and scalable technology environments.",
    summary:
      "Enterprise-grade cloud architectures engineered for high availability, zero downtime, and strict cost efficiency. We manage AWS, GCP, Azure, Kubernetes deployments, infrastructure-as-code (Terraform), and automated CI/CD pipelines.",
    image: "/images/arch-curved-concrete.jpg",
    imageAlt: "Clean architectural geometry representing cloud stability",
    scope: [
      "Multi-Cloud & Hybrid Cloud Infrastructure Design",
      "Kubernetes & Containerized Microservice Orchestration",
      "Automated CI/CD Delivery Pipelines & Zero-Downtime Deployments",
      "24/7 Infrastructure Observability, Logging & SRE",
    ],
    deliverables: [
      "Terraform / OpenTofu Infrastructure-as-Code modules",
      "Automated deployment workflows with rollback safety",
      "Cloud security hardening & disaster recovery runbooks",
      "Cost optimization audit with compute scaling policies",
    ],
    cta: "Scale Your Cloud",
    featured: false,
  },
  {
    id: "digital-products-saas",
    slug: "digital-products-saas",
    number: "09",
    name: "Digital Products & SaaS",
    tagline: "From idea to launch — product strategy, UI/UX, MVP development, SaaS platforms, APIs, backend systems, and ongoing development.",
    summary:
      "We partner with founders and enterprises to bring novel digital products to market rapidly. From initial product discovery and prototype design to scalable multitenant SaaS backends, billing engines, and continuous iteration.",
    image: "/images/service-ai-solutions.jpg",
    imageAlt: "Sleek architectural visual representing product craftsmanship",
    scope: [
      "Product Strategy & Technical Feasibility Discovery",
      "High-Fidelity UI/UX & Interactive Design Prototyping",
      "Rapid MVP Development & Market Validation Builds",
      "Multi-tenant SaaS Architecture, Subscriptions & Metered Billing",
    ],
    deliverables: [
      "Functional production MVP within targeted timelines",
      "Scalable multi-tenant database & authentication layer",
      "Integrated Stripe / checkout billing & customer portal",
      "Product analytics telemetry & user retention funnels",
    ],
    cta: "Launch Your Product",
    featured: true,
  },
  {
    id: "digital-marketing-content-systems",
    slug: "digital-marketing-content-systems",
    number: "10",
    name: "Digital Marketing & Content Systems",
    tagline: "Marketing automation, lead generation, email automation, social media systems, content workflows, campaign automation, and digital growth solutions.",
    summary:
      "Architect autonomous engines for customer acquisition and retention. We integrate automated lead routing, behavioral email sequences, programmatic content publishing, and analytics-driven campaign infrastructure.",
    image: "/images/service-product-dev.jpg",
    imageAlt: "Rippling visual representing dynamic growth waves",
    scope: [
      "Behavior-driven Email & WhatsApp Marketing Automation",
      "Dynamic Lead Scoring & Instant CRM Routing",
      "Content Management Systems (Headless CMS) & Multi-channel Publishing",
      "Marketing Attribution Telemetry & Conversion Analytics",
    ],
    deliverables: [
      "Configured marketing automation workflows & nurturing sequences",
      "Custom lead capture widgets & interactive landing templates",
      "Headless CMS integration with automated SEO feeds",
      "Unified executive ROI & conversion reporting",
    ],
    cta: "Automate Your Growth",
    featured: false,
  },
  {
    id: "emerging-technology",
    slug: "emerging-technology",
    number: "11",
    name: "Emerging Technology",
    tagline: "Advanced computing, research, experimentation, and emerging technology development.",
    summary:
      "Exploratory applied engineering pushing the boundaries of what is possible. We conduct rigorous R&D into spatial computing, high-performance computing (HPC), decentralized architectures, and proprietary machine learning topologies.",
    image: "/images/hero-architecture.jpg",
    imageAlt: "Visionary architectural cantilever overlooking horizon",
    scope: [
      "Spatial Computing & Immersive WebGL / 3D Simulations",
      "High-Performance Computing (HPC) & Parallel Algorithmic Kernels",
      "Decentralized Protocol R&D & Cryptographic Verification",
      "Experimental Prototyping & Novel Hardware Interfacing",
    ],
    deliverables: [
      "Proof-of-concept prototype deployments",
      "Technical whitepapers & patent-ready architecture blueprints",
      "Performance benchmarks & comparative viability analyses",
      "Production roadmap for institutional deployment",
    ],
    cta: "Explore Research Partnerships",
    featured: false,
  },
  {
    id: "technology-consulting",
    slug: "technology-consulting",
    number: "12",
    name: "Technology Consulting",
    tagline: "Technology strategy, automation audits, process analysis, system architecture, digital transformation, and technical roadmaps.",
    summary:
      "Objective, rigorous technology guidance for leadership teams. We evaluate existing technology stacks, uncover operational debt, audit security vulnerabilities, and craft actionable engineering roadmaps aligned with business objectives.",
    image: "/images/service-digital-trans.jpg",
    imageAlt: "Corporate architectural perspective representing strategic clarity",
    scope: [
      "Comprehensive Architecture & Codebase Technical Audits",
      "Automation Readiness & Process Bottleneck Analysis",
      "Digital Transformation Multi-Year Engineering Roadmaps",
      "Vendor Evaluation, RFP Formulation & Tech Stack Selection",
    ],
    deliverables: [
      "Executive technical audit reports with risk heatmaps",
      "Detailed architectural blueprint diagrams & specifications",
      "Prioritized engineering backlog with ROI projections",
      "Board-level technology strategy briefings",
    ],
    cta: "Schedule Strategic Consultation",
    featured: false,
  },
];
