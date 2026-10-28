export interface AutomationLog {
  timestamp: string;
  action: string;
  status: "success" | "failed" | "skipped";
  detail?: string;
  durationMs?: number;
}

export interface InquiryItem {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  status: "new" | "reviewing" | "contacted" | "closed";
  priority: "normal" | "high" | "urgent";
  notes?: string;
  automationLogs: AutomationLog[];
}

export interface LocationItem {
  city: string;
  address: string;
  country: string;
}

export interface SiteSettings {
  company: {
    name: string;
    legalName: string;
    arabicName: string;
    tagline: string;
    heroPill: string;
    brandStatement: string;
    motto: string;
    description: string;
    extendedBio: string;
    announcementBanner: string;
    announcementEnabled: boolean;
  };
  contact: {
    email: string;
    phone: string;
    hours: string;
    locations: LocationItem[];
  };
  automation: {
    webhooksEnabled: boolean;
    webhookUrl: string;
    webhookSecret: string;
    webhookEvents: string[];
    adminEmailAlerts: boolean;
    adminNotificationEmail: string;
    autoReplyEnabled: boolean;
    autoReplySubject: string;
    autoReplyTemplate: string;
    autoTagHighBudget: boolean;
    highBudgetThreshold: string;
    lastTestedAt?: string;
    lastTestStatus?: "success" | "failed";
  };
}

export interface ProjectData {
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

export interface ServiceData {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  summary: string;
  scope: string[];
  deliverables: string[];
  cta: string;
}
