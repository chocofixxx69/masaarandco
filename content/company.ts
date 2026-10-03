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
  meaning:
    "The name Masaar (مسار) means path, course, or direction in Arabic. It reflects the journey behind everything we build — from an initial idea to something tangible, useful, and ready for the real world.",
  taglines: {
    heroPill: "Technology for what's next",
    brandStatement: "People · Ideas · Technology · A brighter tomorrow",
    badge: "Ideas, Engineered into Existence",
    banner: "Movement builds possibilities",
    headline: "Ideas, Engineered into Existence",
    motto: "We don’t just imagine what could exist. We engineer it into existence.",
  },
  description:
    "Masaar & Co. is a technology and solutions company focused on turning ideas into practical, real-world solutions.",
  extendedBio:
    "We combine engineering, technology, design, and innovation to build digital products, intelligent systems, software, automation, infrastructure, and emerging technology solutions. Our approach is simple: understand the problem, find the right direction, and engineer a solution that works. We focus on building technology that is purposeful, reliable, scalable, and designed to create lasting value.",
  capabilitiesList: [
    "Software Development",
    "Artificial Intelligence",
    "Cloud Infrastructure",
    "Data & Analytics",
    "Cybersecurity",
    "Digital Experiences",
    "IoT & Smart Systems",
    "Advanced Computing",
    "Emerging Technologies",
  ],
  stats: [
    { value: "03", label: "Core Solution Practices" },
    { value: "20+", label: "Clients & Partners" },
    { value: "08", label: "Products Engineered" },
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
    { name: "People", desc: "Human-centered purpose tailored for genuine human and organizational utility" },
    { name: "Ideas", desc: "Turning bold concepts into tangible, deployable, and useful architectures" },
    { name: "Technology", desc: "Rigorous software, artificial intelligence, and resilient infrastructure" },
    { name: "A Brighter Tomorrow", desc: "Engineering solutions designed to create lasting enterprise value" },
  ],
  approach: [
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
