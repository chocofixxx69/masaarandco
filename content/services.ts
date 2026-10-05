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
    tagline: "Streamline operations, reduce manual tasks, increase speed and efficiency.",
    summary:
      "End-to-end workflow analysis and robotic process automation that replaces repetitive operational friction with dependable, self-healing digital pipelines.",
    image: "/images/service-ai-solutions.jpg",
    imageAlt: "Minimalist architectural curved ceiling representing efficient flow",
    scope: [
      "Process analysis & mapping",
      "RPA workflow design",
      "Legacy system modernization",
      "Automated document processing",
      "Exception routing & alert systems",
    ],
    deliverables: [
      "Automated workflow blueprints",
      "API connector suites",
      "Operational dashboards",
      "Comprehensive runtime audit logs",
    ],
    cta: "Inquire About Automation",
    featured: true,
  },
  {
    id: "ai-chatbots-voice-agents",
    slug: "ai-chatbots-voice-agents",
    number: "02",
    name: "AI, Chatbots & Voice Agents",
    tagline: "Smart conversational agents for customer support, lead capture, and internal processes.",
    summary:
      "Domain-tuned conversational intelligence built on state-of-the-art LLMs, real-time speech-to-text engines, and contextual memory architectures.",
    image: "/images/project-maddy-voice.jpg",
    imageAlt: "Intelligent voice assistant and transcription interface",
    scope: [
      "Custom LLM agent fine-tuning",
      "Multilingual conversational design",
      "Ambient speech-to-text pipelines",
      "RAG vector database integration",
      "Guardrail & safety engineering",
    ],
    deliverables: [
      "Deployed conversational agents",
      "API endpoints & webhooks",
      "Analytics & conversation telemetry",
      "Continuous evaluation framework",
    ],
    cta: "Explore AI Agent Deployments",
    featured: true,
  },
  {
    id: "application-development",
    slug: "application-development",
    number: "03",
    name: "Application Development",
    tagline: "Custom web and mobile applications designed to perform and scale.",
    summary:
      "Production-ready distributed web and mobile applications constructed with modern component-driven architectures, strict typing, and high test coverage.",
    image: "/images/project-omniconnect.jpg",
    imageAlt: "Mobile application interface showing connected systems",
    scope: [
      "System architecture & design",
      "Frontend engineering (Next.js/React)",
      "Backend API services (Node/Go/Python)",
      "Database schema design & tuning",
      "CI/CD & cloud deployment",
    ],
    deliverables: [
      "Complete source repository",
      "Automated deployment pipelines",
      "Technical documentation & runbooks",
      "Post-launch SLA support",
    ],
    cta: "Commission Application Build",
    featured: true,
  },
  {
    id: "website-design-development",
    slug: "website-design-development",
    number: "04",
    name: "Website Design & Development",
    tagline: "Modern, high-converting, responsive websites that represent your brand.",
    summary:
      "Architectural web platforms engineered with bespoke typography, sub-second load times, accessible design systems, and responsive viewport fidelity.",
    image: "/images/hero-architecture.jpg",
    imageAlt: "Architectural composition representing structured web design",
    scope: [
      "Editorial UI/UX design systems",
      "Responsive HTML5/Tailwind build",
      "SEO metadata & schema markup",
      "CMS integration & authoring flows",
      "Performance & Core Web Vitals audit",
    ],
    deliverables: [
      "Production website deployment",
      "Design token library",
      "SEO configuration suite",
      "Lighthouse 95+ performance report",
    ],
    cta: "Build a Digital Flagship",
    featured: true,
  },
  {
    id: "system-integration",
    slug: "system-integration",
    number: "05",
    name: "System Integration",
    tagline: "Connect your CRM, ERP, databases, and third-party tools into a unified flow.",
    summary:
      "Eliminate data silos through bidirectional data pipelines, asynchronous event brokers, and secure webhook infrastructures.",
    image: "/images/service-digital-trans.jpg",
    imageAlt: "Modern architectural glass structure representing unified integration",
    scope: [
      "Integration topology design",
      "REST, GraphQL & gRPC APIs",
      "Enterprise ERP/CRM connectors",
      "Data transformation & ETL pipelines",
      "Fault-tolerant queue architectures",
    ],
    deliverables: [
      "Integration middleware service",
      "Data mapping schemas",
      "Real-time sync telemetry",
      "Comprehensive API documentation",
    ],
    cta: "Connect Your Enterprise Stack",
    featured: true,
  },
  {
    id: "ecommerce-solutions",
    slug: "ecommerce-solutions",
    number: "06",
    name: "E-Commerce Solutions",
    tagline: "Custom storefronts, payment flows, inventory systems, and commerce platforms.",
    summary:
      "High-throughput transactional commerce engines designed for frictionless checkouts, inventory synchronization, and regional compliance.",
    image: "/images/service-product-dev.jpg",
    imageAlt: "Dynamic surface representing commercial velocity",
    scope: [
      "Headless commerce architecture",
      "Regional payment gateway integration",
      "Inventory & order management sync",
      "Checkout conversion optimization",
      "Fraud detection & 3D Secure 2.0",
    ],
    deliverables: [
      "Production storefront deployment",
      "Payment gateway certification",
      "Admin management console",
      "Analytics & conversion dashboard",
    ],
    cta: "Launch Commerce Engine",
    featured: true,
  },
  {
    id: "data-analytics-dashboards",
    slug: "data-analytics-dashboards",
    number: "07",
    name: "Data & Analytics Dashboards",
    tagline: "Turn raw operational data into clear, actionable executive intelligence.",
    summary:
      "Modern analytics platforms combining real-time streaming data, columnar analytical querying, and clear visual interfaces.",
    image: "/images/project-gradeflow.jpg",
    imageAlt: "Analytics dashboard showing real-time metrics",
    scope: [
      "Data warehouse architecture",
      "ETL/ELT pipeline engineering",
      "Real-time aggregation queries",
      "Role-based access & permissions",
      "Interactive visualization design",
    ],
    deliverables: [
      "Production dashboard application",
      "Automated refresh pipelines",
      "Data dictionary & schema docs",
      "Export & reporting engines",
    ],
    cta: "Engineer Decision Dashboard",
    featured: false,
  },
  {
    id: "cloud-devops-infrastructure",
    slug: "cloud-devops-infrastructure",
    number: "08",
    name: "Cloud & DevOps Infrastructure",
    tagline: "Scalable, resilient, cost-optimized cloud setups and automated CI/CD pipelines.",
    summary:
      "Terraform-managed multi-region cloud infrastructures built with container orchestration, automated vulnerability scanning, and disaster recovery.",
    image: "/images/arch-curved-concrete.jpg",
    imageAlt: "Clean architectural geometry representing cloud stability",
    scope: [
      "Infrastructure as Code (Terraform)",
      "Kubernetes & container orchestration",
      "Zero-downtime CI/CD deployment",
      "Cloud spend & resource optimization",
      "Multi-region disaster recovery",
    ],
    deliverables: [
      "Version-controlled IaC modules",
      "Automated deployment pipelines",
      "Monitoring & alerting dashboards",
      "Incident recovery playbook",
    ],
    cta: "Upgrade Cloud Architecture",
    featured: false,
  },
  {
    id: "cybersecurity-compliance",
    slug: "cybersecurity-compliance",
    number: "09",
    name: "Cybersecurity & Compliance",
    tagline: "Protect digital assets and achieve regulatory compliance with zero-trust architectures.",
    summary:
      "Comprehensive threat modeling, static/dynamic code analysis, end-to-end cryptographic key management, and SOC-2/HIPAA compliance.",
    image: "/images/service-ai-solutions.jpg",
    imageAlt: "Clean architectural structure representing secure boundaries",
    scope: [
      "Threat modeling & attack surface audit",
      "Zero-trust network architecture",
      "Secrets management & encryption",
      "Compliance audit preparation",
      "Automated vulnerability scanning",
    ],
    deliverables: [
      "Security architecture assessment",
      "Hardened infrastructure configuration",
      "Compliance gap-analysis matrix",
      "Incident response procedures",
    ],
    cta: "Fortify Digital Assets",
    featured: false,
  },
  {
    id: "iot-smart-systems",
    slug: "iot-smart-systems",
    number: "10",
    name: "IoT & Smart Systems",
    tagline: "Connect physical hardware, sensor telemetry, and edge computing to digital platforms.",
    summary:
      "High-volume telemetry ingestion engines, MQTT broker networks, and edge firmware pipelines connecting physical hardware to central cloud dashboards.",
    image: "/images/hero-architecture.jpg",
    imageAlt: "Connected architectural elements symbolizing intelligent systems",
    scope: [
      "MQTT & CoAP protocol engineering",
      "Edge processing & local storage",
      "Time-series database ingestion",
      "Fleet management & OTA updates",
      "Hardware-to-cloud security handshake",
    ],
    deliverables: [
      "Telemetry ingestion backend",
      "Device fleet management console",
      "Firmware update pipeline",
      "Real-time hardware status monitor",
    ],
    cta: "Deploy Connected Infrastructure",
    featured: false,
  },
  {
    id: "digital-transformation-consulting",
    slug: "digital-transformation-consulting",
    number: "11",
    name: "Digital Transformation Consulting",
    tagline: "Strategic technology roadmaps that align software investments with business goals.",
    summary:
      "Senior technical leadership helping executive teams audit existing technology stacks, prioritize high-ROI initiatives, and manage execution.",
    image: "/images/service-digital-trans.jpg",
    imageAlt: "Corporate architectural perspective representing strategic clarity",
    scope: [
      "Technology audit & legacy review",
      "Enterprise architecture roadmapping",
      "Build vs. buy analysis & modeling",
      "Vendor evaluation & technical diligence",
      "Engineering team process design",
    ],
    deliverables: [
      "Strategic technology roadmap",
      "System architecture diagrams",
      "Capability gap analysis",
      "Executive board presentation deck",
    ],
    cta: "Engage Strategic Leadership",
    featured: false,
  },
  {
    id: "custom-product-engineering",
    slug: "custom-product-engineering",
    number: "12",
    name: "Custom Product Engineering",
    tagline: "End-to-end realization of novel software products from initial concept to launch.",
    summary:
      "Dedicated multidisciplinary engineering squads providing end-to-end product realization: from conceptual wireframing to enterprise deployment.",
    image: "/images/service-product-dev.jpg",
    imageAlt: "Bespoke craftsmanship visual representing custom engineering",
    scope: [
      "Rapid proof-of-concept prototyping",
      "Production architecture definition",
      "Iterative agile sprint execution",
      "User acceptance testing & QA",
      "Scale-readiness stress testing",
    ],
    deliverables: [
      "Production-ready software platform",
      "Modular component design system",
      "IP transfer & source ownership",
      "Post-launch scale advisory",
    ],
    cta: "Initiate Product Build",
    featured: false,
  },
];
