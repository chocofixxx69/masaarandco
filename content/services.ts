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
}

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    number: "01",
    name: "AI Solutions",
    tagline: "Custom AI systems, automation and intelligent workflows.",
    summary:
      "We design and deploy proprietary machine learning pipelines, predictive engines, and automated voice & clinical intelligence that transform core business operations.",
    image: "/images/service-ai-solutions.jpg",
    imageAlt: "Architectural curved ceiling reflecting intelligent geometry",
    scope: [
      "Large Language Model (LLM) Integration & Agentic Workflows",
      "Audio/Voice Processing & Real-time Clinical Transcription",
      "Predictive Analytics & Automated Decision Architectures",
      "Secure Enterprise Data Ingestion & Fine-tuning",
    ],
    deliverables: [
      "Production-ready AI microservices & high-speed inference APIs",
      "Scalable vector database retrieval & semantic search infrastructure",
      "Evaluation benchmarks, confidence scoring & safety guardrails",
      "Automated data pipeline orchestration and model telemetry",
    ],
    cta: "Inquire about AI Solutions",
  },
  {
    id: "product-development",
    slug: "product-development",
    number: "02",
    name: "Product Development",
    tagline: "Web and mobile products built for real-world impact.",
    summary:
      "From zero to production-grade release, we engineer responsive web platforms, native mobile applications, and resilient digital architectures built to withstand rapid user scaling.",
    image: "/images/service-product-dev.jpg",
    imageAlt: "Dynamic rippling water surface capturing fluidity and speed",
    scope: [
      "Full-stack Web & Mobile Application Engineering",
      "High-performance Cloud Architecture & Serverless Microservices",
      "Low-latency Distributed APIs & Real-time State Synchronization",
      "Design Systems, Typography Tokens & Production Component Libraries",
    ],
    deliverables: [
      "Cross-platform iOS and Android production builds",
      "Next.js web applications with sub-second time-to-interactive",
      "Comprehensive TypeScript codebases with 90%+ test coverage",
      "CI/CD pipelines with automated accessibility & performance checks",
    ],
    cta: "Build Your Product",
  },
  {
    id: "digital-transformation",
    slug: "digital-transformation",
    number: "03",
    name: "Digital Transformation",
    tagline: "Helping businesses modernize and scale with technology.",
    summary:
      "We partner with established enterprises and expanding institutions to overhaul legacy infrastructure, streamline operational workflows, and implement durable digital-first systems.",
    image: "/images/service-digital-trans.jpg",
    imageAlt: "Sleek architectural glass facade representing corporate modernization",
    scope: [
      "Legacy Monolith Modernization & Cloud Native Migration",
      "Automated Business Process Engineering & Integration",
      "Institutional Data Architecture, Observability & Governance",
      "Executive Technology Roadmaps & Architectural Feasibility Audits",
    ],
    deliverables: [
      "Phased cloud migration and zero-downtime cutover plans",
      "Unified internal admin dashboards and operational telemetry",
      "Detailed architectural documentation and engineering handoff",
      "Compliance audit validation (SOC 2, ISO 27001, HIPAA readiness)",
    ],
    cta: "Modernize Your Infrastructure",
  },
];
