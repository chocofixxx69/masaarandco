import fs from "fs";
import path from "path";
import { InquiryItem, SiteSettings, ProjectData, ServiceData } from "./types";
import { COMPANY } from "@/content/company";
import { PROJECTS } from "@/content/projects";
import { SERVICES } from "@/content/services";

const DATA_DIR = path.join(process.cwd(), "data");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");
const SERVICES_FILE = path.join(DATA_DIR, "services.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

const DEFAULT_SETTINGS: SiteSettings = {
  company: {
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    arabicName: COMPANY.arabicName,
    tagline: COMPANY.taglines.headline,
    heroPill: COMPANY.taglines.heroPill,
    brandStatement: COMPANY.taglines.brandStatement,
    motto: COMPANY.taglines.motto,
    description: COMPANY.description,
    extendedBio: COMPANY.extendedBio,
    announcementBanner: "Now accepting Q2/Q3 enterprise architecture & automation engagements.",
    announcementEnabled: false,
  },
  contact: {
    email: COMPANY.contact.email,
    phone: "",
    hours: "",
    locations: [],
  },
  automation: {
    webhooksEnabled: true,
    webhookUrl: "",
    webhookSecret: "masaar_sec_2026",
    webhookEvents: ["inquiry.created", "inquiry.status_changed"],
    adminEmailAlerts: true,
    adminNotificationEmail: "leads@masaar.co",
    autoReplyEnabled: true,
    autoReplySubject: "Thank you for contacting Masaar & Co. — Inquiry Registered",
    autoReplyTemplate:
      "Dear {name},\n\nThank you for reaching out to Masaar & Co. regarding {service}. Your inquiry has been registered under reference #{id}.\n\nOur technology directorship team is reviewing your requirements and will contact you within 24 business hours.\n\nWarm regards,\nMasaar & Co. Technology Group\nRiyadh · Dubai · London",
    autoTagHighBudget: true,
    highBudgetThreshold: "$50,000+",
  },
};

// Seed sample initial inquiries if empty
const SAMPLE_INQUIRIES: InquiryItem[] = [
  {
    id: "inq_9401",
    createdAt: new Date(Date.now() - 3600 * 1000 * 4).toISOString(),
    name: "Dr. Tariq Al-Mansoor",
    email: "tariq.mansoor@alman-health.sa",
    company: "Al-Manarah Healthcare Group",
    service: "AI & Intelligent Systems",
    budget: "$50,000 - $100,000",
    message: "Seeking ambient voice medical transcription architecture similar to Maddy Voice for our 4 outpatient clinics in Riyadh.",
    status: "new",
    priority: "high",
    notes: "High value lead. Recommended immediate outreach by clinical solutions lead.",
    automationLogs: [
      {
        timestamp: new Date(Date.now() - 3600 * 1000 * 4).toISOString(),
        action: "Inquiry Stored",
        status: "success",
        detail: "Auto-tagged High Priority based on Enterprise budget.",
      },
      {
        timestamp: new Date(Date.now() - 3600 * 1000 * 4 + 200).toISOString(),
        action: "Admin Email Alert",
        status: "success",
        detail: "Dispatched to leads@masaar.co",
      },
      {
        timestamp: new Date(Date.now() - 3600 * 1000 * 4 + 400).toISOString(),
        action: "Customer Auto-Reply",
        status: "success",
        detail: "Confirmation dispatched to tariq.mansoor@alman-health.sa",
      },
    ],
  },
  {
    id: "inq_8842",
    createdAt: new Date(Date.now() - 3600 * 1000 * 24).toISOString(),
    name: "Sarah Jenkins",
    email: "s.jenkins@apexlogistics.ae",
    company: "Apex Global Logistics DIFC",
    service: "Business Automation",
    budget: "$25,000 - $50,000",
    message: "We need autonomous ERP and customs clearance workflow automation linking our Dubai and Rotterdam shipping lines.",
    status: "reviewing",
    priority: "normal",
    notes: "Technical scoping call scheduled for Wednesday.",
    automationLogs: [
      {
        timestamp: new Date(Date.now() - 3600 * 1000 * 24).toISOString(),
        action: "Inquiry Stored",
        status: "success",
        detail: "Validated via Zod schema",
      },
      {
        timestamp: new Date(Date.now() - 3600 * 1000 * 24 + 150).toISOString(),
        action: "Customer Auto-Reply",
        status: "success",
        detail: "Delivered to s.jenkins@apexlogistics.ae",
      },
    ],
  },
  {
    id: "inq_7729",
    createdAt: new Date(Date.now() - 3600 * 1000 * 72).toISOString(),
    name: "Faisal Al-Otaibi",
    email: "faisal@tamweel-fintech.com",
    company: "Tamweel Financial Systems",
    service: "Software & Digital Products",
    budget: "$100,000+",
    message: "Requesting proposal for mobile banking customer onboarding portal with biometric verification and compliance check.",
    status: "contacted",
    priority: "high",
    notes: "NDA signed. Architecture roadmap doc shared.",
    automationLogs: [
      {
        timestamp: new Date(Date.now() - 3600 * 1000 * 72).toISOString(),
        action: "Inquiry Stored",
        status: "success",
        detail: "High Priority flag applied",
      },
    ],
  },
];

export function getInquiries(): InquiryItem[] {
  ensureDataDir();
  try {
    if (!fs.existsSync(INQUIRIES_FILE)) {
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(SAMPLE_INQUIRIES, null, 2), "utf8");
      return SAMPLE_INQUIRIES;
    }
    const raw = fs.readFileSync(INQUIRIES_FILE, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading inquiries:", error);
    return SAMPLE_INQUIRIES;
  }
}

export function saveInquiries(inquiries: InquiryItem[]) {
  ensureDataDir();
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf8");
}

export function addInquiry(
  item: Omit<InquiryItem, "id" | "createdAt" | "status" | "priority" | "automationLogs"> & {
    priority?: InquiryItem["priority"];
  }
): InquiryItem {
  const inquiries = getInquiries();
  const settings = getSettings();

  const isHighBudget =
    settings.automation.autoTagHighBudget &&
    item.budget &&
    (item.budget.includes("50,000") || item.budget.includes("100,000") || item.budget.includes("200,000"));

  const newInquiry: InquiryItem = {
    id: `inq_${Math.floor(1000 + Math.random() * 9000)}`,
    createdAt: new Date().toISOString(),
    name: item.name,
    email: item.email,
    company: item.company || "",
    service: item.service,
    budget: item.budget || "",
    message: item.message,
    status: "new",
    priority: item.priority || (isHighBudget ? "high" : "normal"),
    notes: isHighBudget ? "Auto-tagged High Priority based on enterprise budget scale." : "",
    automationLogs: [],
  };

  inquiries.unshift(newInquiry);
  saveInquiries(inquiries);
  return newInquiry;
}

export function updateInquiry(id: string, updates: Partial<InquiryItem>): InquiryItem | null {
  const inquiries = getInquiries();
  const index = inquiries.findIndex((i) => i.id === id);
  if (index === -1) return null;

  inquiries[index] = { ...inquiries[index], ...updates };
  saveInquiries(inquiries);
  return inquiries[index];
}

export function deleteInquiry(id: string): boolean {
  const inquiries = getInquiries();
  const filtered = inquiries.filter((i) => i.id !== id);
  if (filtered.length === inquiries.length) return false;
  saveInquiries(filtered);
  return true;
}

export function getSettings(): SiteSettings {
  ensureDataDir();
  try {
    if (!fs.existsSync(SETTINGS_FILE)) {
      fs.writeFileSync(SETTINGS_FILE, JSON.stringify(DEFAULT_SETTINGS, null, 2), "utf8");
      return DEFAULT_SETTINGS;
    }
    const raw = fs.readFileSync(SETTINGS_FILE, "utf8");
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (error) {
    console.error("Error reading settings:", error);
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: Partial<SiteSettings>): SiteSettings {
  ensureDataDir();
  const current = getSettings();
  const merged: SiteSettings = {
    ...current,
    ...settings,
    company: { ...current.company, ...settings.company },
    contact: { ...current.contact, ...settings.contact },
    automation: { ...current.automation, ...settings.automation },
  };
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(merged, null, 2), "utf8");
  return merged;
}

export function getProjects(): ProjectData[] {
  ensureDataDir();
  try {
    if (!fs.existsSync(PROJECTS_FILE)) {
      const initial: ProjectData[] = PROJECTS.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        category: p.category,
        client: p.client,
        year: p.year,
        oneLiner: p.oneLiner,
        summary: p.summary,
        image: p.image,
        imageAlt: p.imageAlt,
        featured: p.featured,
        aspect: p.aspect,
        metrics: p.metrics,
        stack: p.stack,
        link: p.link,
        challenge: p.challenge,
        solution: p.solution,
      }));
      fs.writeFileSync(PROJECTS_FILE, JSON.stringify(initial, null, 2), "utf8");
      return initial;
    }
    const raw = fs.readFileSync(PROJECTS_FILE, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading projects:", error);
    return PROJECTS as ProjectData[];
  }
}

export function saveProjects(projects: ProjectData[]) {
  ensureDataDir();
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2), "utf8");
}

export function getServices(): ServiceData[] {
  ensureDataDir();
  try {
    if (!fs.existsSync(SERVICES_FILE)) {
      const initial: ServiceData[] = SERVICES.map((s) => ({
        id: s.id,
        slug: s.slug,
        number: s.number,
        name: s.name,
        tagline: s.tagline,
        summary: s.summary,
        scope: s.scope,
        deliverables: s.deliverables,
        cta: s.cta,
      }));
      fs.writeFileSync(SERVICES_FILE, JSON.stringify(initial, null, 2), "utf8");
      return initial;
    }
    const raw = fs.readFileSync(SERVICES_FILE, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading services:", error);
    return SERVICES as ServiceData[];
  }
}

export function saveServices(services: ServiceData[]) {
  ensureDataDir();
  fs.writeFileSync(SERVICES_FILE, JSON.stringify(services, null, 2), "utf8");
}
