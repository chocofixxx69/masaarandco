export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SectorItem {
  name: string;
  icon: string;
}

export const COMPANY = {
  name: "Masaar & Co.",
  legalName: "Masaar & Co. Technology Group",
  arabicName: "مسار",
  meaning: "Pathway / Route (مسار)",
  taglines: {
    heroPill: "Technology for what's next",
    brandStatement: "People · Ideas · Technology · A brighter tomorrow",
    badge: "Global technology company",
    banner: "Movement builds possibilities",
    headline: "From Ideas to Impact",
  },
  description:
    "Masaar & Co. is a technology company building AI solutions, modern products and intelligent systems for businesses, institutions and communities.",
  extendedBio:
    "Founded on the principle of 'Pathway' — masaar (مسار) — we build purposeful digital architectures that guide organizations from initial concepts to scalable, durable impact. By fusing deep computational intelligence, robust software engineering, and disciplined spatial aesthetics, we deliver mission-critical solutions across the Middle East, Europe, and global markets.",
  stats: [
    { value: "03", label: "AI & Product Solutions" },
    { value: "20+", label: "Clients & Partners" },
    { value: "08", label: "Products Built" },
    { value: "05", label: "Industries Served" },
  ] as StatItem[],
  sectors: [
    { name: "Startups", icon: "Rocket" },
    { name: "Growing Businesses", icon: "TrendingUp" },
    { name: "Educational Institutions", icon: "GraduationCap" },
    { name: "Healthcare Providers", icon: "Activity" },
    { name: "Global Teams", icon: "Globe" },
  ] as SectorItem[],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  pillars: [
    { name: "People", desc: "Human-centered design tailored for institutional scale" },
    { name: "Ideas", desc: "Rigorous technical ideation unconstrained by generic templates" },
    { name: "Technology", desc: "Modern, high-performance distributed architectures and AI" },
    { name: "A Brighter Tomorrow", desc: "Long-term sustainability, reliability, and security" },
  ],
  approach: [
    {
      step: "01",
      title: "Understand",
      desc: "Deep immersion into institutional workflows, user mental models, technical bottlenecks, and strategic business goals.",
    },
    {
      step: "02",
      title: "Build",
      desc: "High-velocity engineering with rigorous architectural specifications, automated testing pipelines, and responsive precision.",
    },
    {
      step: "03",
      title: "Scale",
      desc: "Hardening for enterprise concurrency, continuous telemetry, algorithmic fine-tuning, and sustained organizational expansion.",
    },
  ],
  contact: {
    email: "contact@masaar.co",
    phone: "+966 (11) 482-9100",
    locations: [
      { city: "Riyadh", address: "King Fahd Road, Al Olaya District", country: "Saudi Arabia" },
      { city: "Dubai", address: "DIFC Gate Precinct 4", country: "United Arab Emirates" },
      { city: "London", address: "1 Finsbury Circus", country: "United Kingdom" },
    ],
    hours: "Sunday – Thursday, 09:00 – 18:00 AST",
  },
};
