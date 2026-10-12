import { TranslationDictionary } from "../types";

export const enDictionary: TranslationDictionary = {
  locale: "en",
  dir: "ltr",
  brand: {
    name: "Masaar & Co.",
    arabicName: "مسار",
    legalName: "Masaar & Co. Technology Group",
    tagline: "Ideas, Engineered into Existence",
    motto: "We don’t just imagine what could exist. We engineer it into existence.",
    statement: "People · Ideas · Technology · A brighter tomorrow",
    banner: "Movement builds possibilities",
    heroPill: "Technology for what's next",
  },
  nav: {
    items: [
      { label: "Home", href: "/", tag: "Overview & Vision" },
      { label: "About", href: "/about", tag: "Philosophy & Team" },
      { label: "Services", href: "/services", tag: "10 Core Practices" },
      { label: "Work", href: "/work", tag: "Case Studies" },
      { label: "Contact", href: "/contact", tag: "Direct Channel" },
    ],
    letsTalk: "Let's Talk",
    menu: "Menu",
    close: "Close",
    languageToggle: "العربية",
    quickJump: "Jump to Solution (10)",
    swipeHint: "Swipe →",
  },
  home: {
    hero: {
      pill: "Technology for what's next",
      headlineLine1: "A better way",
      headlineLine2: "to move",
      headlineItalic: "forward.",
      arabicCalligraphy: "نحو آفاق جديدة",
      subheading:
        "Building digital products, intelligent systems, software, automation, and infrastructure for ambitious organizations.",
      ctaPrimary: "Explore Services",
      ctaSecondary: "View Work",
      imageAlt: "Masaar & Co. Technology Leader with Laptop",
    },
    intro: {
      heading: "From Ideas to Impact",
      italicWord: "Impact",
      paragraph:
        "Masaar & Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions. We combine engineering, technology, design, and innovation to build digital products, intelligent systems, software, automation, and infrastructure.",
      ctaText: "Our Services",
      ctaHref: "/services",
    },
    stats: {
      movementText: ["Movement", "Builds", "Possibilities"],
      items: [
        { value: "03", label: "Core Solution Practices" },
        { value: "20+", label: "Clients & Partners" },
        { value: "08", label: "Products Engineered" },
        { value: "05", label: "Industries Served" },
      ],
    },
    servicesPreview: {
      label: "Selected Services & Practices",
      title: "Engineered to Automate, Build, and Connect",
      italicWord: "Connect",
      description:
        "From enterprise workflow automation to bespoke web applications and zero-trust cloud infrastructure, we deliver solutions designed to endure.",
      viewAll: "View All 10 Practices",
    },
    approach: {
      label: "Our Approach",
      headlineLines: ["Strategy", "Technology", "Real"],
      headlineItalic: "Impact",
      paragraph:
        "Our approach is simple: understand the problem, find the right direction, and engineer a solution that works. We focus on building technology that is purposeful, reliable, scalable, and designed to create lasting value.",
      steps: [
        {
          step: "01",
          title: "Understand the Problem",
          desc: "We begin with deep immersion into the core challenge, uncovering operational bottlenecks and user realities before writing a line of code.",
        },
        {
          step: "02",
          title: "Find the Right Direction",
          desc: "Inspired by Masaar (مسار), we chart a precise, disciplined path forward, selecting the optimal architecture, technologies, and interfaces.",
        },
        {
          step: "03",
          title: "Engineer a Solution That Works",
          desc: "We build purposeful, reliable, and scalable technology designed to withstand real-world demands and create enduring value.",
        },
      ],
    },
    featuredWork: {
      label: "Selected Implementations",
      title: "Durable Systems Engineered for Demanding Clients",
      italicWord: "Demanding",
      description:
        "A selection of recent platforms spanning ambient intelligence in healthcare, higher-education analytics, and multimodal transportation infrastructure.",
      viewAll: "Explore All Case Studies",
    },
    aboutBanner: {
      label: "The Meaning of Masaar",
      quote: "We don’t just imagine what could exist. We engineer it into existence.",
      attribution: "— Masaar & Co. Philosophy",
      paragraph:
        "The name Masaar (مسار) means path, course, or direction in Arabic. It reflects the journey behind everything we build — from an initial idea to something tangible, useful, and ready for the real world.",
      cta: "Read About Masaar & Co.",
    },
    contactBand: {
      label: "Begin an Engagement",
      title: "Have an Initiative in Mind? Let's Move It Forward.",
      italicWord: "Forward.",
      description:
        "Whether you require an architectural consultation, bespoke AI deployment, or dedicated product engineering team, our directors are available.",
      cta: "Schedule Consultation",
    },
  },
  about: {
    heading: {
      label: "About Masaar & Co.",
      title: "Ideas, Engineered into Existence.",
      italicWord: "Existence",
      description:
        "Masaar & Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions.",
    },
    narrative: {
      headline: "We combine engineering, technology, design, and innovation to build what works.",
      paragraph1:
        "Masaar & Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions. We build digital products, intelligent systems, software, automation, infrastructure, and emerging technology solutions.",
      highlightQuote: "“We don’t just imagine what could exist. We engineer it into existence.”",
      attribution: "— Masaar & Co. Core Conviction",
      arabicRoot: "مسار",
      arabicRootMeaning: "PATH · COURSE · DIRECTION",
      arabicRootExplanation:
        "Rooted in disciplined movement and purpose. Guiding complex enterprises from nascent ideas to tangible reality.",
    },
    capabilities: {
      label: "Comprehensive Capabilities",
      title: "What We Engineer",
      badge: "09 SPECIALIZED DISCIPLINES",
      items: [
        { title: "Software Development", desc: "Production-grade web, mobile, and distributed enterprise software applications." },
        { title: "Artificial Intelligence", desc: "Custom ML pipelines, ambient voice intelligence, and agentic LLM workflows." },
        { title: "Cloud Infrastructure", desc: "Resilient multi-cloud, microservices, containerization, and automated DevOps." },
        { title: "Data & Analytics", desc: "Real-time data ingestion, high-speed querying, and executive intelligence engines." },
        { title: "Cybersecurity", desc: "Zero-trust protocols, compliance governance (SOC-2, HIPAA), and cryptographic security." },
        { title: "Digital Experiences", desc: "High-precision typographic design systems, interfaces, and responsive web products." },
        { title: "IoT & Smart Systems", desc: "Connected sensor telemetry, edge computing, and industrial hardware integration." },
        { title: "Advanced Computing", desc: "High-performance parallel computation, algorithmic optimization, and simulation." },
        { title: "Emerging Technologies", desc: "Spatial computing, decentralized ledger technologies, and next-generation architectures." },
      ],
    },
    presence: {
      label: "Masaar & Co. Presence",
      title: "Operating Across Riyadh, Dubai, and London",
      description:
        "Guiding organizations through the pathway of engineering tangible, useful, and durable technology.",
      cta: "Connect With Our Leadership",
    },
  },
  servicesPage: {
    heading: {
      label: "MASAAR & CO. — SERVICES",
      title: "Automation & Technology, Built Around Your Business.",
      italicWord: "Business.",
      description:
        "We build digital solutions that help businesses automate processes, connect systems, serve customers, and operate more efficiently.",
    },
    coreFocus: {
      label: "Strategic Foundation",
      title: "Our Core Focus",
      pillarsBadge: "04 PILLARS OF CAPABILITY",
      pillars: [
        {
          name: "AUTOMATE",
          tagline: "Streamline operations & eliminate friction",
          desc: "Business, AI, and workflow automation systems.",
          items: ["Business automation", "AI automation", "Workflow automation", "Marketing automation", "Sales automation"],
        },
        {
          name: "BUILD",
          tagline: "End-to-end digital products & software",
          desc: "Websites, applications, chatbots, and digital products.",
          items: ["Websites", "Applications", "SaaS platforms", "Chatbots & Voice", "AI agents", "Digital products"],
        },
        {
          name: "CONNECT",
          tagline: "Unify disparate tools & institutional data",
          desc: "APIs, CRM, ERP, and database integration.",
          items: ["APIs & Webhooks", "CRM integrations", "ERP connectors", "Database unification", "Payment gateways"],
        },
        {
          name: "INTELLIGENCE",
          tagline: "Unlock predictive insights & automated reasoning",
          desc: "Machine learning, executive analytics, and LLMs.",
          items: ["Custom LLM tuning", "Predictive modeling", "Voice interfaces", "Data warehousing", "Executive dashboards"],
        },
      ],
    },
    jumpToTitle: "Jump to Solution (10)",
    servicesList: [
      {
        id: "business-process-automation",
        slug: "business-process-automation",
        number: "01",
        name: "Business Process Automation",
        tagline: "Workflow automation, process optimization, and operational efficiency.",
        summary:
          "Workflow automation, process optimization, and operational efficiency.",
        scope: ["Process analysis & mapping", "RPA & workflow automation", "Legacy system optimization", "Automated document processing", "Operational efficiency auditing"],
        deliverables: ["Automated workflow blueprints", "API connector suites", "Operational dashboards", "Comprehensive runtime audit logs"],
        cta: "Inquire About Automation",
      },
      {
        id: "artificial-intelligence-intelligent-solutions",
        slug: "artificial-intelligence-intelligent-solutions",
        number: "02",
        name: "Artificial Intelligence & Intelligent Solutions",
        tagline: "AI applications, chatbots, voice agents, and intelligent workflows.",
        summary:
          "AI applications, chatbots, voice agents, and intelligent workflows.",
        scope: ["Custom AI applications", "Intelligent conversational chatbots", "Voice agents & speech interfaces", "Automated intelligent workflows", "RAG & vector database integration"],
        deliverables: ["Deployed AI applications & agents", "API endpoints & webhooks", "Analytics & conversation telemetry", "Continuous evaluation framework"],
        cta: "Explore Intelligent Solutions",
      },
      {
        id: "custom-software-development",
        slug: "custom-software-development",
        number: "03",
        name: "Custom Software Development",
        tagline: "Business applications, enterprise software, and tailored digital solutions.",
        summary:
          "Business applications, enterprise software, and tailored digital solutions.",
        scope: ["Enterprise architecture & design", "Bespoke business applications", "Tailored digital solutions", "Database schema engineering", "Scalable backend services"],
        deliverables: ["Complete source repository", "Automated deployment pipelines", "Technical documentation & runbooks", "Post-launch SLA support"],
        cta: "Commission Custom Software",
      },
      {
        id: "web-design-development",
        slug: "web-design-development",
        number: "04",
        name: "Web Design & Development",
        tagline: "Corporate websites, web applications, and digital experiences.",
        summary:
          "Corporate websites, web applications, and digital experiences.",
        scope: ["Corporate websites design", "Modern web applications build", "Immersive digital experiences", "Responsive design systems", "SEO & Core Web Vitals optimization"],
        deliverables: ["Production website deployment", "Design token library", "SEO configuration suite", "Lighthouse 95+ performance report"],
        cta: "Build a Digital Flagship",
      },
      {
        id: "systems-integration-api-development",
        slug: "systems-integration-api-development",
        number: "05",
        name: "Systems Integration & API Development",
        tagline: "Connecting platforms, business systems, databases, and third-party services.",
        summary:
          "Connecting platforms, business systems, databases, and third-party services.",
        scope: ["Platform connectivity architecture", "Custom API engineering (REST/GraphQL)", "Business system & ERP/CRM integration", "Database synchronization pipelines", "Third-party service connectors"],
        deliverables: ["Integration middleware service", "Data mapping schemas", "Real-time sync telemetry", "Comprehensive API documentation"],
        cta: "Connect Your Enterprise Stack",
      },
      {
        id: "ecommerce-development",
        slug: "ecommerce-development",
        number: "06",
        name: "E-Commerce Development",
        tagline: "Online stores, payment integration, and commerce platforms.",
        summary:
          "Online stores, payment integration, and commerce platforms.",
        scope: ["High-converting online stores", "Payment gateway integration", "Custom commerce platforms", "Inventory & order management", "Checkout flow optimization"],
        deliverables: ["Production storefront deployment", "Payment gateway certification", "Admin management console", "Analytics & conversion dashboard"],
        cta: "Launch Commerce Platform",
      },
      {
        id: "data-analytics-business-intelligence",
        slug: "data-analytics-business-intelligence",
        number: "07",
        name: "Data Analytics & Business Intelligence",
        tagline: "Analytics dashboards, reporting systems, and data-driven insights.",
        summary:
          "Analytics dashboards, reporting systems, and data-driven insights.",
        scope: ["Real-time analytics dashboards", "Executive reporting systems", "Data-driven business insights", "Data warehouse & pipeline design", "Interactive data visualization"],
        deliverables: ["Production dashboard application", "Automated refresh pipelines", "Data dictionary & schema docs", "Export & reporting engines"],
        cta: "Engineer Decision Dashboard",
      },
      {
        id: "cloud-infrastructure-devops",
        slug: "cloud-infrastructure-devops",
        number: "08",
        name: "Cloud Infrastructure & DevOps",
        tagline: "Cloud deployment, infrastructure management, CI/CD, and reliability.",
        summary:
          "Cloud deployment, infrastructure management, CI/CD, and reliability.",
        scope: ["Multi-cloud deployment strategy", "Infrastructure management as Code", "Automated CI/CD pipelines", "System reliability & observability", "High-availability architecture"],
        deliverables: ["Version-controlled IaC modules", "Automated deployment pipelines", "Monitoring & alerting dashboards", "Incident recovery playbook"],
        cta: "Upgrade Cloud Infrastructure",
      },
      {
        id: "digital-product-engineering",
        slug: "digital-product-engineering",
        number: "09",
        name: "Digital Product Engineering",
        tagline: "Product strategy, architecture, development, and ongoing enhancement.",
        summary:
          "Product strategy, architecture, development, and ongoing enhancement.",
        scope: ["Product strategy & roadmap definition", "Modular digital architecture", "Iterative agile development", "Ongoing product enhancement", "Scale-readiness stress testing"],
        deliverables: ["Production-ready digital product", "Modular component design system", "IP transfer & source ownership", "Continuous enhancement advisory"],
        cta: "Engineer Your Digital Product",
      },
      {
        id: "digital-transformation-consulting",
        slug: "digital-transformation-consulting",
        number: "10",
        name: "Digital Transformation Consulting",
        tagline: "Technology strategy, process redesign, and digital modernization.",
        summary:
          "Technology strategy, process redesign, and digital modernization.",
        scope: ["Enterprise technology strategy", "Operational process redesign", "Legacy digital modernization", "Architecture & platform roadmapping", "Executive transformation advisory"],
        deliverables: ["Strategic transformation roadmap", "System architecture diagrams", "Capability gap analysis", "Executive board presentation deck"],
        cta: "Engage Transformation Advisory",
      },
    ],
    customCallout: {
      label: "Custom Engineering",
      heading: "Need something specific?",
      description: "We build custom technology around your requirements.",
      cta: "Request Custom Architecture",
    },
    deliverablesLabel: "Key Deliverables",
    scopeLabel: "Scope & Capabilities",
    exploreDetails: "Explore Capabilities",
  },
  workPage: {
    heading: {
      label: "Selected Implementations",
      title: "Durable Systems Engineered for Real-World Demands",
      italicWord: "Real-World",
      description:
        "A curated selection of our deployments across ambient artificial intelligence, university platforms, and logistics infrastructure.",
    },
    categories: {
      all: "All",
      aiHealthcare: "AI Healthcare",
      education: "Education",
      platform: "Platform",
      aiSystems: "AI Systems",
      digitalTransformation: "Digital Transformation",
      businessAutomation: "Business Automation",
    },
    projects: [
      {
        id: "maddy-voice",
        slug: "maddy-voice",
        title: "Maddy Voice",
        category: "AI Healthcare",
        categoryKey: "aiHealthcare",
        client: "Maddy Health Systems",
        year: "2025",
        oneLiner: "AI voice consultation & automated clinical documentation.",
        summary:
          "A clinical-grade ambient voice assistant that captures doctor-patient dialogues in real time, generates structured electronic health record (EHR) notes, and cuts clinician documentation time by 68%.",
        challenge:
          "Physicians were spending up to 3.5 hours every evening transcribing audio notes into legacy electronic health records, accelerating practitioner burnout and creating clinical backlog.",
        solution:
          "Masaar engineered an ambient speech recognition engine with custom medical vocabularies and multi-speaker separation, creating structured SOAP notes directly into hospital records within seconds.",
        metrics: [
          "68% Reduction in documentation time",
          "99.4% Accuracy on specialized medical terminology",
          "SOC-2 Type II & HIPAA certified architecture",
        ],
        stack: ["Next.js", "Python FastAudio", "Whisper ASR", "Med-LLM Fine-tuned", "PostgreSQL", "WebSockets"],
      },
      {
        id: "gradeflow",
        slug: "gradeflow",
        title: "GradeFlow",
        category: "Education",
        categoryKey: "education",
        client: "Academic Analytics Consortium",
        year: "2024",
        oneLiner: "Academic platform for VTU students with result insights.",
        summary:
          "An intelligent academic analytics platform serving over 180,000 university students, enabling real-time semester result parsing, GPA projection algorithms, and personalized curriculum suggestions.",
        challenge:
          "Legacy university portals suffered catastrophic crashes during result release days, leaving students unable to access grades or understand semester credit prerequisites.",
        solution:
          "Constructed a high-concurrency serverless result ingestion pipeline that serves 12,000 requests per second with sub-50ms latency, enriched with GPA predictive algorithms.",
        metrics: [
          "180,000+ Active student users",
          "12,000 req/sec Peak throughput",
          "99.98% System availability during release peaks",
        ],
        stack: ["React", "TypeScript", "FastAPI", "Redis Cache", "ClickHouse Analytics", "AWS Lambda"],
      },
      {
        id: "portlogix",
        slug: "portlogix",
        title: "PortLogix Intelligence",
        category: "Platform",
        categoryKey: "platform",
        client: "Global Maritime Logistics",
        year: "2024",
        oneLiner: "Maritime container tracking & predictive berth scheduling engine.",
        summary:
          "An automated port operations platform coordinating vessel arrivals, predictive berth allocation, and multimodal container tracking across three international terminals.",
        challenge:
          "Vessels experienced unpredictable waiting times of 14 to 36 hours outside berths due to static scheduling spreadsheets and uncoordinated customs clearance pipelines.",
        solution:
          "Engineered a real-time AIS telemetry tracking platform combined with an automated berth allocation algorithm that forecasts container crane availability and clears customs queues dynamically.",
        metrics: [
          "38% Reduction in container dwell time",
          "2.4M TEUs Tracked annually",
          "$4.2M Annual fuel & demurrage savings",
        ],
        stack: ["Go", "Next.js", "Apache Kafka", "PostGIS", "Docker Swarm", "TimescaleDB"],
      },
      {
        id: "autofin-ai",
        slug: "autofin-ai",
        title: "AutoFin AI Engine",
        category: "AI Systems",
        categoryKey: "aiSystems",
        client: "Crescent Capital Partners",
        year: "2025",
        oneLiner: "Automated underwriting & financial statement extraction.",
        summary:
          "A document extraction and risk underwriting pipeline parsing multi-page corporate financial statements, tax filings, and bank statements with cryptographic audit trails.",
        challenge:
          "Private credit analysts took 4 to 6 business days manually reviewing unstandardized audited financial statements from SME loan applicants.",
        solution:
          "Developed an OCR and specialized LLM financial extraction pipeline that identifies ledger discrepancies, recalculates debt-service coverage ratios, and compiles credit memos in minutes.",
        metrics: [
          "82% Decrease in underwriting cycle time",
          "0 Error rate on balance sheet reconciliation",
          "Over $340M in loans processed",
        ],
        stack: ["Python", "PyTorch", "LayoutLMv3", "FastAPI", "React", "PostgreSQL"],
      },
    ],
    modal: {
      challengeLabel: "The Core Challenge",
      solutionLabel: "Engineered Solution",
      metricsLabel: "Key Verified Metrics",
      stackLabel: "Technology Stack",
      launchCta: "Launch Platform",
      closeAria: "Close project details",
    },
  },
  contactPage: {
    heading: {
      label: "Inquiries & Consultations",
      title: "Let's Build What Moves Your Organization Forward",
      italicWord: "Forward",
      description:
        "Whether you have an upcoming product initiative, require an architectural review, or wish to explore custom AI capabilities, our leadership is at your disposal.",
    },
    directChannels: {
      title: "Direct Channels",
      description:
        "All communications are handled under strict non-disclosure. Technical directors review and respond to each inquiry within one business day.",
      emailLabel: "General & Technical Inquiries",
      phoneLabel: "Telephone",
      hoursLabel: "Operating Hours",
      hoursValue: "Sunday – Thursday, 09:00 – 18:00 AST",
      hubsLabel: "Regional Hubs",
      locations: [
        { city: "Riyadh", address: "King Fahd Road, Al Olaya District", country: "Saudi Arabia" },
        { city: "Dubai", address: "DIFC Gate Precinct 4", country: "United Arab Emirates" },
        { city: "London", address: "1 Finsbury Circus", country: "United Kingdom" },
      ],
    },
    form: {
      fullNameLabel: "Your Full Name",
      fullNamePlaceholder: "e.g. Sultan Al-Otaibi",
      emailLabel: "Work Email",
      emailPlaceholder: "sultan@organization.com",
      orgLabel: "Organization / Company",
      orgPlaceholder: "Company or Institution Name",
      serviceLabel: "Area of Focus / Service",
      budgetLabel: "Project Budget (USD / SAR)",
      budgetPlaceholder: "Select anticipated investment scope",
      messageLabel: "Brief Scope of Requirements",
      messagePlaceholder: "Outline your technical objectives, timeline constraints, or existing system architecture...",
      submitBtn: "Transmit Inquiry",
      submittingBtn: "Transmitting...",
      successTitle: "Inquiry Dispatched Successfully",
      successMessage: "Thank you for reaching out. Our engineering directors in Riyadh and Dubai will review your brief and respond within one business day.",
      sendAnother: "Submit Another Inquiry",
      budgetOptions: [
        { value: "<$25k", label: "Under $25,000 (Scoped pilot / review)" },
        { value: "$25k-$50k", label: "$25,000 – $50,000 (Modular product)" },
        { value: "$50k-$100k", label: "$50,000 – $100,000 (Complete build)" },
        { value: "$100k+", label: "$100,000+ (Enterprise transformation)" },
      ],
      serviceOptions: [
        { value: "AI Solutions", label: "Artificial Intelligence & Voice" },
        { value: "Business Automation", label: "Business & Workflow Automation" },
        { value: "Application Development", label: "Application & Software Engineering" },
        { value: "Cloud Infrastructure", label: "Cloud & DevOps Infrastructure" },
        { value: "System Integration", label: "System & API Integration" },
        { value: "Other", label: "Custom Architecture / Undefined" },
      ],
      validation: {
        nameRequired: "Please enter your full name.",
        emailInvalid: "Please enter a valid business email address.",
        messageMin: "Please provide a brief outline of requirements (minimum 10 characters).",
        generalError: "Please review and complete the required fields below.",
      },
    },
  },
  footer: {
    tagline: "Ideas, Engineered into Existence",
    statement: "People · Ideas · Technology · A brighter tomorrow",
    navigationLabel: "Navigation",
    disciplinesLabel: "Disciplines",
    contactLabel: "Contact",
    allRightsReserved: "All rights reserved.",
    architecturalStandard: "Engineered with architectural discipline.",
    hours: "Sun – Thu: 09:00 – 18:00 AST",
  },
  notFound: {
    badge: "404 — Pathway Not Found",
    title: "Lost Along the Route",
    desc: "The requested coordinate or document does not exist within the Masaar & Co. directory. Let us guide you back to the main pathway.",
    cta: "Return to Main Pathway",
  },
  errorPage: {
    badge: "500 — System Exception",
    title: "System Interruption",
    desc: "An unexpected error interrupted this pathway. Our engineering monitors have logged the event.",
    retry: "Retry Connection",
  },
};
