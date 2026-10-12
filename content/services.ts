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
    id: "business-process-automation",
    slug: "business-process-automation",
    number: "01",
    name: "Business Process Automation",
    tagline: "Workflow automation, process optimization, and operational efficiency.",
    summary:
      "Workflow automation, process optimization, and operational efficiency.",
    image: "/images/service-ai-solutions.jpg",
    imageAlt: "Minimalist architectural curved ceiling representing efficient flow",
    scope: [
      "Process analysis & mapping",
      "RPA & workflow automation",
      "Legacy system optimization",
      "Automated document processing",
      "Operational efficiency auditing",
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
    id: "artificial-intelligence-intelligent-solutions",
    slug: "artificial-intelligence-intelligent-solutions",
    number: "02",
    name: "Artificial Intelligence & Intelligent Solutions",
    tagline: "AI applications, chatbots, voice agents, and intelligent workflows.",
    summary:
      "AI applications, chatbots, voice agents, and intelligent workflows.",
    image: "/images/project-maddy-voice.jpg",
    imageAlt: "Intelligent voice assistant and AI solutions interface",
    scope: [
      "Custom AI applications",
      "Intelligent conversational chatbots",
      "Voice agents & speech interfaces",
      "Automated intelligent workflows",
      "RAG & vector database integration",
    ],
    deliverables: [
      "Deployed AI applications & agents",
      "API endpoints & webhooks",
      "Analytics & conversation telemetry",
      "Continuous evaluation framework",
    ],
    cta: "Explore Intelligent Solutions",
    featured: true,
  },
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    number: "03",
    name: "Custom Software Development",
    tagline: "Business applications, enterprise software, and tailored digital solutions.",
    summary:
      "Business applications, enterprise software, and tailored digital solutions.",
    image: "/images/project-omniconnect.jpg",
    imageAlt: "Enterprise software and custom digital solutions interface",
    scope: [
      "Enterprise architecture & design",
      "Bespoke business applications",
      "Tailored digital solutions",
      "Database schema engineering",
      "Scalable backend services",
    ],
    deliverables: [
      "Complete source repository",
      "Automated deployment pipelines",
      "Technical documentation & runbooks",
      "Post-launch SLA support",
    ],
    cta: "Commission Custom Software",
    featured: true,
  },
  {
    id: "web-design-development",
    slug: "web-design-development",
    number: "04",
    name: "Web Design & Development",
    tagline: "Corporate websites, web applications, and digital experiences.",
    summary:
      "Corporate websites, web applications, and digital experiences.",
    image: "/images/hero-architecture.jpg",
    imageAlt: "Architectural composition representing structured web design",
    scope: [
      "Corporate websites design",
      "Modern web applications build",
      "Immersive digital experiences",
      "Responsive design systems",
      "SEO & Core Web Vitals optimization",
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
    id: "systems-integration-api-development",
    slug: "systems-integration-api-development",
    number: "05",
    name: "Systems Integration & API Development",
    tagline: "Connecting platforms, business systems, databases, and third-party services.",
    summary:
      "Connecting platforms, business systems, databases, and third-party services.",
    image: "/images/service-digital-trans.jpg",
    imageAlt: "Modern architectural glass structure representing unified integration",
    scope: [
      "Platform connectivity architecture",
      "Custom API engineering (REST/GraphQL)",
      "Business system & ERP/CRM integration",
      "Database synchronization pipelines",
      "Third-party service connectors",
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
    id: "ecommerce-development",
    slug: "ecommerce-development",
    number: "06",
    name: "E-Commerce Development",
    tagline: "Online stores, payment integration, and commerce platforms.",
    summary:
      "Online stores, payment integration, and commerce platforms.",
    image: "/images/service-product-dev.jpg",
    imageAlt: "Dynamic surface representing commercial velocity",
    scope: [
      "High-converting online stores",
      "Payment gateway integration",
      "Custom commerce platforms",
      "Inventory & order management",
      "Checkout flow optimization",
    ],
    deliverables: [
      "Production storefront deployment",
      "Payment gateway certification",
      "Admin management console",
      "Analytics & conversion dashboard",
    ],
    cta: "Launch Commerce Platform",
    featured: true,
  },
  {
    id: "data-analytics-business-intelligence",
    slug: "data-analytics-business-intelligence",
    number: "07",
    name: "Data Analytics & Business Intelligence",
    tagline: "Analytics dashboards, reporting systems, and data-driven insights.",
    summary:
      "Analytics dashboards, reporting systems, and data-driven insights.",
    image: "/images/project-gradeflow.jpg",
    imageAlt: "Analytics dashboard showing real-time metrics",
    scope: [
      "Real-time analytics dashboards",
      "Executive reporting systems",
      "Data-driven business insights",
      "Data warehouse & pipeline design",
      "Interactive data visualization",
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
    id: "cloud-infrastructure-devops",
    slug: "cloud-infrastructure-devops",
    number: "08",
    name: "Cloud Infrastructure & DevOps",
    tagline: "Cloud deployment, infrastructure management, CI/CD, and reliability.",
    summary:
      "Cloud deployment, infrastructure management, CI/CD, and reliability.",
    image: "/images/arch-curved-concrete.jpg",
    imageAlt: "Clean architectural geometry representing cloud stability",
    scope: [
      "Multi-cloud deployment strategy",
      "Infrastructure management as Code",
      "Automated CI/CD pipelines",
      "System reliability & observability",
      "High-availability architecture",
    ],
    deliverables: [
      "Version-controlled IaC modules",
      "Automated deployment pipelines",
      "Monitoring & alerting dashboards",
      "Incident recovery playbook",
    ],
    cta: "Upgrade Cloud Infrastructure",
    featured: false,
  },
  {
    id: "digital-product-engineering",
    slug: "digital-product-engineering",
    number: "09",
    name: "Digital Product Engineering",
    tagline: "Product strategy, architecture, development, and ongoing enhancement.",
    summary:
      "Product strategy, architecture, development, and ongoing enhancement.",
    image: "/images/service-product-dev.jpg",
    imageAlt: "Bespoke craftsmanship visual representing digital product engineering",
    scope: [
      "Product strategy & roadmap definition",
      "Modular digital architecture",
      "Iterative agile development",
      "Ongoing product enhancement",
      "Scale-readiness stress testing",
    ],
    deliverables: [
      "Production-ready digital product",
      "Modular component design system",
      "IP transfer & source ownership",
      "Continuous enhancement advisory",
    ],
    cta: "Engineer Your Digital Product",
    featured: false,
  },
  {
    id: "digital-transformation-consulting",
    slug: "digital-transformation-consulting",
    number: "10",
    name: "Digital Transformation Consulting",
    tagline: "Technology strategy, process redesign, and digital modernization.",
    summary:
      "Technology strategy, process redesign, and digital modernization.",
    image: "/images/service-digital-trans.jpg",
    imageAlt: "Corporate architectural perspective representing strategic clarity",
    scope: [
      "Enterprise technology strategy",
      "Operational process redesign",
      "Legacy digital modernization",
      "Architecture & platform roadmapping",
      "Executive transformation advisory",
    ],
    deliverables: [
      "Strategic transformation roadmap",
      "System architecture diagrams",
      "Capability gap analysis",
      "Executive board presentation deck",
    ],
    cta: "Engage Transformation Advisory",
    featured: false,
  },
];
