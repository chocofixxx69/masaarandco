"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Inbox,
  Zap,
  Briefcase,
  Layers,
  Settings,
  ExternalLink,
  LogOut,
  Search,
  Download,
  Trash2,
  Edit3,
  Plus,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  RefreshCw,
  Mail,
  Eye,
  X,
  Check,
  Sliders,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import MasaarLogo from "@/components/ui/MasaarLogo";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import {
  InquiryItem,
  SiteSettings,
  ProjectData,
  ServiceData,
} from "@/lib/admin/types";

type TabKey = "overview" | "inquiries" | "automations" | "projects" | "services" | "settings";

export default function AdminDashboard() {
  const router = useRouter();
  const { isArabic, toggleLanguage } = useTranslation();

  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");

  // Data states
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [services, setServices] = useState<ServiceData[]>([]);

  // Inquiries UI states
  const [inquirySearch, setInquirySearch] = useState("");
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(null);
  const [editingNotes, setEditingNotes] = useState("");

  // Automation Test state
  const [testingWebhook, setTestingWebhook] = useState(false);
  const [webhookTestResult, setWebhookTestResult] = useState<{
    success: boolean;
    statusCode?: number;
    latencyMs: number;
    responsePreview?: string;
    error?: string;
  } | null>(null);

  // Projects Modal states
  const [editingProject, setEditingProject] = useState<ProjectData | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);

  // Services Modal state
  const [editingService, setEditingService] = useState<ServiceData | null>(null);

  // Manual Refresh
  const handleManualRefresh = async () => {
    try {
      setRefreshing(true);
      const [inqRes, setRes, projRes, servRes] = await Promise.all([
        fetch("/api/admin/inquiries"),
        fetch("/api/admin/settings"),
        fetch("/api/admin/projects"),
        fetch("/api/admin/services"),
      ]);

      if (inqRes.status === 401 || setRes.status === 401) {
        router.push("/admin/login");
        return;
      }

      const inqData = await inqRes.json();
      const setData = await setRes.json();
      const projData = await projRes.json();
      const servData = await servRes.json();

      setInquiries(inqData.inquiries || []);
      setSettings(setData.settings || null);
      setProjects(projData.projects || []);
      setServices(servData.services || []);
      showToast(isArabic ? "تم تحديث البيانات لحظياً" : "Data refreshed live");
    } catch (err) {
      console.error("Error refreshing admin data:", err);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      fetch("/api/admin/inquiries"),
      fetch("/api/admin/settings"),
      fetch("/api/admin/projects"),
      fetch("/api/admin/services"),
    ])
      .then(async ([inqRes, setRes, projRes, servRes]) => {
        if (!isMounted) return;
        if (inqRes.status === 401 || setRes.status === 401) {
          router.push("/admin/login");
          return;
        }
        const inqData = await inqRes.json();
        const setData = await setRes.json();
        const projData = await projRes.json();
        const servData = await servRes.json();
        if (!isMounted) return;
        setInquiries(inqData.inquiries || []);
        setSettings(setData.settings || null);
        setProjects(projData.projects || []);
        setServices(servData.services || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading admin data:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [router]);

  const showToast = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(""), 3500);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  // Inquiry actions
  const handleUpdateInquiryStatus = async (
    id: string,
    status: InquiryItem["status"],
    priority?: InquiryItem["priority"]
  ) => {
    try {
      const updates: Partial<InquiryItem> = { status };
      if (priority) updates.priority = priority;

      const res = await fetch("/api/admin/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, updates }),
      });
      if (res.ok) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
        );
        if (selectedInquiry && selectedInquiry.id === id) {
          setSelectedInquiry((prev) => (prev ? { ...prev, ...updates } : null));
        }
        showToast(isArabic ? "تم تحديث حالة الاستفسار" : "Inquiry status updated");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedInquiry) return;
    try {
      const res = await fetch("/api/admin/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedInquiry.id, updates: { notes: editingNotes } }),
      });
      if (res.ok) {
        setInquiries((prev) =>
          prev.map((i) => (i.id === selectedInquiry.id ? { ...i, notes: editingNotes } : i))
        );
        setSelectedInquiry((prev) => (prev ? { ...prev, notes: editingNotes } : null));
        showToast(isArabic ? "تم حفظ الملاحظات الداخلية" : "Internal notes saved");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (
      !confirm(
        isArabic
          ? "هل أنت متأكد من رغبتك في حذف هذا الاستفسار نهائياً؟"
          : "Are you sure you want to permanently delete this inquiry?"
      )
    ) {
      return;
    }
    try {
      const res = await fetch(`/api/admin/inquiries?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setInquiries((prev) => prev.filter((i) => i.id !== id));
        if (selectedInquiry?.id === id) setSelectedInquiry(null);
        showToast(isArabic ? "تم حذف الاستفسار" : "Inquiry deleted");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Test Webhook
  const handleTestWebhook = async () => {
    if (!settings?.automation.webhookUrl) {
      alert(
        isArabic
          ? "يرجى إدخال رابط Webhook أولاً قبل إجراء الاختبار"
          : "Please enter a Webhook endpoint URL before testing"
      );
      return;
    }
    setTestingWebhook(true);
    setWebhookTestResult(null);
    try {
      const res = await fetch("/api/admin/automation/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: settings.automation.webhookUrl,
          secret: settings.automation.webhookSecret,
        }),
      });
      const data = await res.json();
      setWebhookTestResult(data);
      if (data.success) {
        showToast(isArabic ? "نجح اتصال Webhook!" : "Webhook connection verified!");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setTestingWebhook(false);
    }
  };

  // Save Settings
  const handleSaveSettings = async () => {
    if (!settings) return;
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        showToast(isArabic ? "تم حفظ كافة الإعدادات والأتمتة بنجاح" : "All settings & automation saved");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Project CMS Save
  const handleSaveProject = async (p: ProjectData) => {
    try {
      const isNew = isCreatingProject;
      const res = await fetch("/api/admin/projects", {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p),
      });
      if (res.ok) {
        const data = await res.json();
        if (isNew) {
          setProjects((prev) => [data.project, ...prev]);
        } else {
          setProjects((prev) => prev.map((item) => (item.id === p.id ? data.project : item)));
        }
        setEditingProject(null);
        setIsCreatingProject(false);
        showToast(isArabic ? "تم حفظ المشروع في المعرض" : "Project saved to portfolio");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (
      !confirm(
        isArabic
          ? "هل أنت متأكد من حذف هذا المشروع من المعرض؟"
          : "Are you sure you want to remove this project?"
      )
    ) {
      return;
    }
    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setProjects((prev) => prev.filter((p) => p.id !== id));
        showToast(isArabic ? "تم حذف المشروع" : "Project removed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Service CMS Save
  const handleSaveService = async (s: ServiceData) => {
    try {
      const res = await fetch("/api/admin/services", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(s),
      });
      if (res.ok) {
        const data = await res.json();
        setServices((prev) => prev.map((item) => (item.id === s.id ? data.service : item)));
        setEditingService(null);
        showToast(isArabic ? "تم تحديث بيانات الخدمة" : "Service details updated");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus =
      inquiryStatusFilter === "all" || inq.status === inquiryStatusFilter;
    const q = inquirySearch.toLowerCase();
    const matchesSearch =
      !q ||
      inq.name.toLowerCase().includes(q) ||
      inq.email.toLowerCase().includes(q) ||
      (inq.company && inq.company.toLowerCase().includes(q)) ||
      inq.service.toLowerCase().includes(q) ||
      inq.id.toLowerCase().includes(q) ||
      inq.message.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  const newInquiriesCount = inquiries.filter((i) => i.status === "new").length;

  if (loading) {
    return (
      <div className="h-screen bg-[#FBF9F5] text-[#092948] flex flex-col items-center justify-center gap-4 font-sans">
        <MasaarLogo variant="navy" width={160} height={56} />
        <div className="flex items-center gap-3 text-sm text-[#092948]/70 font-medium">
          <Loader2 className="w-5 h-5 animate-spin text-[#316A7E]" />
          <span>{isArabic ? "جاري تحميل لوحة التحكم والأتمتة..." : "Loading Masaar & Co. Admin Control Plane..."}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex overflow-hidden bg-[#FBF9F5] text-[#092948] font-sans selection:bg-[#316A7E] selection:text-[#FFFFFF]">
      {/* Toast Notification */}
      {saveSuccessMsg && (
        <div className="fixed bottom-6 end-6 z-50 bg-[#092948] text-[#FFFFFF] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#1E6B4F] flex-shrink-0" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* FIXED SIDEBAR (SaaS Architecture) */}
      <aside className="w-64 bg-[#FFFFFF] border-e border-[#092948]/10 flex flex-col justify-between h-full flex-shrink-0 z-30 shadow-xs">
        <div>
          {/* Brand & Status Header */}
          <div className="p-5 border-b border-[#092948]/10">
            <MasaarLogo variant="navy" width={135} height={44} />
            <div className="mt-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#F9F1E7] border border-[#092948]/5 text-[0.6875rem] text-[#092948]/80 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#1E6B4F] animate-pulse" />
              <span>{isArabic ? "غرفة العمليات والأتمتة" : "Operations Hub · Active"}</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="p-3 space-y-1">
            {[
              {
                id: "overview" as TabKey,
                label: isArabic ? "نظرة عامة والتحليلات" : "Overview & Stats",
                icon: LayoutDashboard,
              },
              {
                id: "inquiries" as TabKey,
                label: isArabic ? "صندوق الاستفسارات" : "Inquiries Inbox",
                icon: Inbox,
                badge: newInquiriesCount > 0 ? newInquiriesCount : undefined,
              },
              {
                id: "automations" as TabKey,
                label: isArabic ? "محرك الأتمتة والـ Webhooks" : "Automations Hub",
                icon: Zap,
                dot: settings?.automation.webhooksEnabled,
              },
              {
                id: "projects" as TabKey,
                label: isArabic ? "معرض الأعمال (CMS)" : "Projects CMS",
                icon: Briefcase,
              },
              {
                id: "services" as TabKey,
                label: isArabic ? "الخدمات والحلول" : "Services CMS",
                icon: Layers,
              },
              {
                id: "settings" as TabKey,
                label: isArabic ? "إعدادات الشركة والمحتوى" : "Company Settings",
                icon: Settings,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#092948] text-[#FFFFFF] shadow-sm"
                      : "text-[#092948]/70 hover:bg-[#F9F1E7]/70 hover:text-[#092948]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{tab.label}</span>
                  </div>
                  {tab.badge !== undefined && (
                    <span className="px-2 py-0.5 rounded-full bg-[#B3261E] text-[#FFFFFF] text-[0.625rem] font-bold">
                      {tab.badge}
                    </span>
                  )}
                  {tab.dot && !tab.badge && (
                    <span className="w-2 h-2 rounded-full bg-[#1E6B4F] flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile Bar */}
        <div className="p-4 border-t border-[#092948]/10 bg-[#FBF9F5]/50 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[#316A7E] text-[#FFFFFF] flex items-center justify-center font-bold text-xs flex-shrink-0">
              AD
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold text-[#092948] block truncate">
                Admin
              </span>
              <span className="text-[0.625rem] text-[#092948]/50 block truncate">
                {isArabic ? "مدير النظام" : "Super Administrator"}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            title={isArabic ? "تسجيل الخروج" : "Logout"}
            className="p-1.5 rounded-lg text-[#092948]/60 hover:text-[#B3261E] hover:bg-[#B3261E]/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        {/* Sticky Top Header Bar */}
        <header className="h-16 bg-[#FFFFFF] border-b border-[#092948]/10 px-6 sm:px-8 flex items-center justify-between gap-4 flex-shrink-0 z-20">
          {/* Breadcrumb / Title */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#316A7E]">
              Masaar Control Plane
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#092948]/30 rtl:-scale-x-100" />
            <h1 className="text-sm font-semibold text-[#092948] capitalize">
              {activeTab === "overview" && (isArabic ? "نظرة عامة والتحليلات" : "Overview & Analytics")}
              {activeTab === "inquiries" && (isArabic ? "صندوق الاستفسارات" : "Inquiries Inbox")}
              {activeTab === "automations" && (isArabic ? "محرك الأتمتة والـ Webhooks" : "Automations Hub")}
              {activeTab === "projects" && (isArabic ? "معرض المشاريع (CMS)" : "Projects CMS")}
              {activeTab === "services" && (isArabic ? "الخدمات والحلول" : "Services CMS")}
              {activeTab === "settings" && (isArabic ? "إعدادات الشركة والمحتوى" : "Company Settings")}
            </h1>
          </div>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleManualRefresh}
              title={isArabic ? "تحديث فوري للبيانات" : "Refresh Data Live"}
              className="p-2 rounded-lg text-[#092948]/70 hover:text-[#092948] hover:bg-[#F9F1E7] transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            </button>

            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#092948] hover:text-[#316A7E] px-3 py-1.5 rounded-lg border border-[#092948]/15 hover:border-[#092948]/30 bg-[#FFFFFF] hover:bg-[#F9F1E7]/50 transition-all cursor-pointer shadow-2xs"
            >
              <span>{isArabic ? "معاينة الموقع" : "View Live Site"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={toggleLanguage}
              type="button"
              className="text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-lg border border-[#092948]/15 text-[#092948] hover:bg-[#F9F1E7]/60 transition-colors cursor-pointer shadow-2xs"
            >
              {isArabic ? "English" : "العربية"}
            </button>
          </div>
        </header>

        {/* Scrollable Viewport */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif text-[#092948] tracking-tight">
                  {isArabic ? "لوحة الإدارة والتحليلات الحية" : "Executive Overview & Intelligence"}
                </h2>
                <p className="text-xs sm:text-sm text-[#092948]/70 mt-1">
                  {isArabic
                    ? "مراقبة الاستفسارات الواردة، صحة خطوط الأتمتة، والمشاريع المنشورة لحظياً."
                    : "Real-time monitor for client inquiries, automated pipelines, and portfolio content."}
                </p>
              </div>

              {/* 4 Stat Metric Cards (Light Executive Theme) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6875rem] uppercase tracking-wider text-[#316A7E] font-semibold">
                      {isArabic ? "إجمالي الاستفسارات" : "Total Inquiries"}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#316A7E]/10 text-[#316A7E] flex items-center justify-center">
                      <Inbox className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-serif text-[#092948] my-2">
                    {inquiries.length}
                  </div>
                  <span className="text-[0.6875rem] text-[#092948]/60 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-[#1E6B4F]" />
                    {isArabic ? "مسجلة بنجاح في قاعدة البيانات" : "Persisted to structured records"}
                  </span>
                </div>

                <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6875rem] uppercase tracking-wider text-[#B3261E] font-semibold">
                      {isArabic ? "استفسارات جديدة" : "New / Unread"}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#B3261E]/10 text-[#B3261E] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-serif text-[#B3261E] my-2">
                    {newInquiriesCount}
                  </div>
                  <span className="text-[0.6875rem] text-[#B3261E] font-medium">
                    {isArabic ? "تتطلب استجابة الفريق" : "Action required by director"}
                  </span>
                </div>

                <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6875rem] uppercase tracking-wider text-[#316A7E] font-semibold">
                      {isArabic ? "المشاريع المنشورة" : "Active Portfolio"}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#092948]/5 text-[#092948] flex items-center justify-center">
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-serif text-[#092948] my-2">
                    {projects.length}
                  </div>
                  <span className="text-[0.6875rem] text-[#092948]/60 font-medium">
                    {projects.filter((p) => p.featured).length}{" "}
                    {isArabic ? "مشاريع مثبتة في الرئيسية" : "featured on homepage"}
                  </span>
                </div>

                <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6875rem] uppercase tracking-wider text-[#1E6B4F] font-semibold">
                      {isArabic ? "صحة الأتمتة" : "Automation Health"}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#1E6B4F]/10 text-[#1E6B4F] flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-lg font-serif text-[#1E6B4F] my-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1E6B4F] animate-pulse" />
                    <span>{settings?.automation.webhooksEnabled ? (isArabic ? "متصل ولحظي" : "Active & Ready") : (isArabic ? "معطل" : "Disabled")}</span>
                  </div>
                  <span className="text-[0.6875rem] text-[#092948]/60 truncate font-medium">
                    {settings?.automation.webhookUrl
                      ? isArabic ? "Webhook مهيأ للترحيل" : "Webhook configured"
                      : isArabic ? "بانتظار رابط Webhook" : "Awaiting Webhook URL"}
                  </span>
                </div>
              </div>

              {/* Automation Status Callout Banner */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F9F1E7] border border-[#092948]/10 flex items-center justify-center text-[#316A7E] flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#092948]">
                      {isArabic ? "محرك الأتمتة والربط السحابي" : "Live Outbound Automation Engine"}
                    </h3>
                    <p className="text-xs text-[#092948]/70 mt-0.5 leading-relaxed">
                      {settings?.automation.webhooksEnabled
                        ? isArabic
                          ? "كل استفسار جديد يتم ترحيله تلقائياً إلى Webhook + إشعار بريدي للمدير + رد تأكيد فوري للعميل."
                          : "Inquiries trigger instant JSON Webhook payloads + admin alerts + client confirmation dispatch."
                        : isArabic
                          ? "محرك الأتمتة في وضع الاستعداد. اضغط على الزر لتكوين الربط."
                          : "Automation pipeline is in standby mode. Click to configure integrations."}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab("automations")}
                  className="px-4 py-2.5 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 shadow-xs whitespace-nowrap"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{isArabic ? "تكوين خطوط الأتمتة" : "Configure Integrations"}</span>
                </button>
              </div>

              {/* Recent Inquiries Table Preview */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-5 sm:p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm sm:text-base font-serif text-[#092948]">
                      {isArabic ? "أحدث استفسارات العملاء" : "Recent Inquiries"}
                    </h3>
                    <p className="text-xs text-[#092948]/60 mt-0.5">
                      {isArabic ? "آخر الاستفسارات الواردة عبر نموذج التواصل بالموقع" : "Latest submissions received from the storefront"}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab("inquiries")}
                    className="text-xs text-[#316A7E] hover:text-[#092948] font-semibold transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>{isArabic ? "عرض كافة الاستفسارات" : "View All Inquiries"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
                  </button>
                </div>

                <div className="divide-y divide-[#092948]/5">
                  {inquiries.slice(0, 4).map((inq) => (
                    <div
                      key={inq.id}
                      onClick={() => {
                        setSelectedInquiry(inq);
                        setEditingNotes(inq.notes || "");
                        setActiveTab("inquiries");
                      }}
                      className="py-3 px-2 rounded-xl hover:bg-[#F9F1E7]/50 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#092948]">
                            {inq.name}
                          </span>
                          {inq.company && (
                            <span className="text-xs text-[#092948]/60 font-normal">
                              · {inq.company}
                            </span>
                          )}
                          <span className="text-[0.625rem] px-2 py-0.5 rounded-md bg-[#F9F1E7] text-[#092948]/80 font-mono">
                            #{inq.id}
                          </span>
                          {inq.priority === "high" && (
                            <span className="text-[0.625rem] px-1.5 py-0.5 rounded-full bg-red-100 text-red-700 font-bold">
                              {isArabic ? "أولوية عالية" : "High Priority"}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#092948]/70 truncate mt-1">
                          {inq.service} · {inq.message}
                        </p>
                      </div>

                      <div className="text-end flex-shrink-0">
                        <span
                          className={`text-[0.6875rem] px-2.5 py-1 rounded-full font-semibold ${
                            inq.status === "new"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : inq.status === "reviewing"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : inq.status === "contacted"
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {inq.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INQUIRIES INBOX (Professional SaaS Data Table) */}
          {activeTab === "inquiries" && (
            <div className="space-y-6 max-w-7xl mx-auto">
              {/* Header Title & Export */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif text-[#092948] tracking-tight">
                    {isArabic ? "صندوق استفسارات العملاء" : "Client Inquiries Inbox"}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#092948]/70 mt-0.5">
                    {isArabic
                      ? "إدارة الطلبات، مراجعة البيانات، تحديث الحالات، الملاحظات وتصدير ملف CSV."
                      : "Manage leads, view messages, update pipeline stages, and export structured CSV records."}
                  </p>
                </div>

                <a
                  href="/api/admin/inquiries/export"
                  download
                  className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] text-xs font-semibold transition-all cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isArabic ? "تصدير إلى CSV" : "Export CSV"}</span>
                </a>
              </div>

              {/* Filters & Search Toolbar */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 absolute start-3 top-1/2 -translate-y-1/2 text-[#092948]/40 pointer-events-none" />
                  <input
                    type="text"
                    value={inquirySearch}
                    onChange={(e) => setInquirySearch(e.target.value)}
                    placeholder={
                      isArabic
                        ? "بحث بالاسم، الشركة، البريد أو المعرف..."
                        : "Search leads by name, email, company, ID..."
                    }
                    className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl ps-9 pe-4 py-2 text-xs sm:text-sm text-[#092948] placeholder-[#092948]/40 focus:outline-none focus:border-[#316A7E] focus:ring-2 focus:ring-[#316A7E]/10"
                  />
                </div>

                {/* Status Tabs */}
                <div className="flex items-center gap-1 bg-[#FBF9F5] border border-[#092948]/10 rounded-xl p-1 overflow-x-auto w-full md:w-auto">
                  {(["all", "new", "reviewing", "contacted", "closed"] as const).map(
                    (st) => (
                      <button
                        key={st}
                        onClick={() => setInquiryStatusFilter(st)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer capitalize whitespace-nowrap ${
                          inquiryStatusFilter === st
                            ? "bg-[#092948] text-[#FFFFFF] shadow-2xs"
                            : "text-[#092948]/70 hover:text-[#092948] hover:bg-[#FFFFFF]"
                        }`}
                      >
                        {st === "all"
                          ? isArabic ? "الكل" : "All"
                          : st === "new"
                          ? isArabic ? "جديد" : "New"
                          : st === "reviewing"
                          ? isArabic ? "قيد المراجعة" : "Reviewing"
                          : st === "contacted"
                          ? isArabic ? "تم التواصل" : "Contacted"
                          : isArabic ? "مغلق" : "Closed"}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Data Table View */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-start text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#F9F1E7]/60 border-b border-[#092948]/10 text-[0.6875rem] uppercase tracking-wider text-[#092948]/70">
                        <th className="py-3.5 px-4 text-start font-semibold">{isArabic ? "العميل والجهة" : "Client & Organization"}</th>
                        <th className="py-3.5 px-4 text-start font-semibold">{isArabic ? "الخدمة والميزانية" : "Service & Budget"}</th>
                        <th className="py-3.5 px-4 text-start font-semibold">{isArabic ? "التاريخ" : "Date"}</th>
                        <th className="py-3.5 px-4 text-start font-semibold">{isArabic ? "الأولوية" : "Priority"}</th>
                        <th className="py-3.5 px-4 text-start font-semibold">{isArabic ? "الحالة" : "Status"}</th>
                        <th className="py-3.5 px-4 text-end font-semibold">{isArabic ? "الإجراءات" : "Actions"}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#092948]/5">
                      {filteredInquiries.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center py-12 text-[#092948]/50">
                            {isArabic ? "لا توجد استفسارات مطابقة للبحث." : "No inquiries match your current filter."}
                          </td>
                        </tr>
                      ) : (
                        filteredInquiries.map((inq) => (
                          <tr
                            key={inq.id}
                            className="hover:bg-[#F9F1E7]/40 transition-colors"
                          >
                            <td className="py-4 px-4">
                              <div className="font-semibold text-[#092948]">
                                {inq.name}
                              </div>
                              <div className="text-xs text-[#092948]/60 flex items-center gap-1.5 mt-0.5">
                                <span>{inq.company || inq.email}</span>
                                <span className="text-[#092948]/30">·</span>
                                <span className="font-mono text-[0.6875rem]">#{inq.id}</span>
                              </div>
                            </td>

                            <td className="py-4 px-4">
                              <div className="font-medium text-[#092948]">
                                {inq.service}
                              </div>
                              <div className="text-xs text-[#1E6B4F] font-semibold mt-0.5">
                                {inq.budget || (isArabic ? "غير محدد" : "Not specified")}
                              </div>
                            </td>

                            <td className="py-4 px-4 text-xs text-[#092948]/60 whitespace-nowrap">
                              {new Date(inq.createdAt).toLocaleDateString()}
                            </td>

                            <td className="py-4 px-4 whitespace-nowrap">
                              {inq.priority === "high" ? (
                                <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[0.6875rem] font-bold">
                                  {isArabic ? "أولوية عليا" : "High"}
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[0.6875rem] font-medium">
                                  {isArabic ? "عادي" : "Normal"}
                                </span>
                              )}
                            </td>

                            <td className="py-4 px-4 whitespace-nowrap">
                              <select
                                value={inq.status}
                                onChange={(e) =>
                                  handleUpdateInquiryStatus(
                                    inq.id,
                                    e.target.value as InquiryItem["status"]
                                  )
                                }
                                className="bg-[#FFFFFF] border border-[#092948]/15 text-[#092948] text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#316A7E] font-medium cursor-pointer shadow-2xs"
                              >
                                <option value="new">New (جديد)</option>
                                <option value="reviewing">Reviewing (قيد المراجعة)</option>
                                <option value="contacted">Contacted (تم التواصل)</option>
                                <option value="closed">Closed (مغلق)</option>
                              </select>
                            </td>

                            <td className="py-4 px-4 text-end whitespace-nowrap">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedInquiry(inq);
                                    setEditingNotes(inq.notes || "");
                                  }}
                                  className="px-2.5 py-1.5 rounded-lg bg-[#092948]/5 hover:bg-[#092948] hover:text-[#FFFFFF] text-[#092948] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>{isArabic ? "عرض" : "Details"}</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleDeleteInquiry(inq.id)}
                                  className="p-1.5 rounded-lg text-[#092948]/40 hover:text-[#B3261E] hover:bg-[#B3261E]/10 transition-colors cursor-pointer"
                                  title={isArabic ? "حذف الاستفسار" : "Delete Inquiry"}
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AUTOMATIONS & WEBHOOKS HUB */}
          {activeTab === "automations" && settings && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif text-[#092948] tracking-tight">
                  {isArabic ? "محرك الأتمتة وخطوط الربط (Automations Hub)" : "Automations & Webhooks Hub"}
                </h2>
                <p className="text-xs sm:text-sm text-[#092948]/70 mt-0.5">
                  {isArabic
                    ? "إعداد الربط اللحظي مع Slack، Discord، Zapier، إشعارات البريد، وقواعد توجيه العملاء."
                    : "Configure live event dispatch to Slack, Discord, Zapier, email notification pipelines, and lead routing."}
                </p>
              </div>

              {/* Webhook Dispatcher Card */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F9F1E7] border border-[#092948]/10 flex items-center justify-center text-[#316A7E]">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#092948]">
                        {isArabic ? "إرسال Webhook فوري عند استلام استفسار" : "Live Outbound Webhook Trigger"}
                      </h3>
                      <p className="text-xs text-[#092948]/60">
                        {isArabic ? "يرسل رسالة JSON كاملة إلى أي عنوان خارجي فور تسجيل الطلب" : "Dispatches complete JSON payload to your endpoint whenever a client submits"}
                      </p>
                    </div>
                  </div>

                  {/* Clean Modern Switch */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.automation.webhooksEnabled}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          automation: {
                            ...settings.automation,
                            webhooksEnabled: e.target.checked,
                          },
                        })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#092948]/15 peer-focus:outline-none rounded-full peer peer-checked:bg-[#1E6B4F] transition-colors relative after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full shadow-2xs"></div>
                  </label>
                </div>

                <div className="space-y-4 pt-3 border-t border-[#092948]/10">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "رابط نقطة النهاية (Webhook Endpoint URL)" : "Webhook Endpoint URL"}
                    </label>
                    <input
                      type="url"
                      value={settings.automation.webhookUrl}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          automation: {
                            ...settings.automation,
                            webhookUrl: e.target.value,
                          },
                        })
                      }
                      placeholder="https://hooks.slack.com/services/... or https://discord.com/api/webhooks/..."
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#092948] placeholder-[#092948]/30 focus:outline-none focus:border-[#316A7E] focus:ring-2 focus:ring-[#316A7E]/10"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "المفتاح السري للتحقق (HMAC Signature Secret)" : "Secret Key (Signature Verification)"}
                    </label>
                    <input
                      type="text"
                      value={settings.automation.webhookSecret}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          automation: {
                            ...settings.automation,
                            webhookSecret: e.target.value,
                          },
                        })
                      }
                      placeholder="masaar_sec_..."
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#092948] placeholder-[#092948]/30 focus:outline-none focus:border-[#316A7E] focus:ring-2 focus:ring-[#316A7E]/10"
                    />
                  </div>

                  {/* Test Ping Button & Result Display */}
                  <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3">
                    <button
                      type="button"
                      disabled={testingWebhook}
                      onClick={handleTestWebhook}
                      className="px-4 py-2.5 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 shadow-xs"
                    >
                      {testingWebhook ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{isArabic ? "جاري إرسال الاختبار..." : "Dispatching Test Ping..."}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>{isArabic ? "إرسال اختبار فوري (Send Test Ping)" : "Send Test Webhook Ping"}</span>
                        </>
                      )}
                    </button>

                    {settings.automation.lastTestedAt && (
                      <span className="text-xs text-[#092948]/60">
                        {isArabic ? "آخر اختبار تم: " : "Last verified: "}
                        {new Date(settings.automation.lastTestedAt).toLocaleTimeString()}
                      </span>
                    )}
                  </div>

                  {webhookTestResult && (
                    <div
                      className={`p-4 rounded-xl text-xs border ${
                        webhookTestResult.success
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                          : "bg-red-50 border-red-200 text-red-800"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold">
                        {webhookTestResult.success ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-600" />
                        )}
                        <span>
                          {webhookTestResult.success
                            ? isArabic ? "نجح اتصال Webhook بنجاح!" : "Webhook Dispatched Successfully!"
                            : isArabic ? "فشل اتصال Webhook" : "Webhook Dispatch Failed"}
                        </span>
                        <span className="ms-auto text-[0.6875rem] font-mono">
                          {webhookTestResult.latencyMs}ms latency
                        </span>
                      </div>
                      {webhookTestResult.error && (
                        <p className="mt-1.5">{webhookTestResult.error}</p>
                      )}
                      {webhookTestResult.responsePreview && (
                        <p className="mt-1 text-[0.6875rem] font-mono opacity-80">
                          Response: {webhookTestResult.responsePreview}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Email Alerts & Client Auto-Reply */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F9F1E7] border border-[#092948]/10 flex items-center justify-center text-[#316A7E]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#092948]">
                      {isArabic ? "إشعارات البريد والرد التلقائي للعميل" : "Email Dispatch & Customer Auto-Reply"}
                    </h3>
                    <p className="text-xs text-[#092948]/60">
                      {isArabic ? "تنبيهات الإدارة الفورية وقوالب الرد الآلي للعملاء" : "Instant administrative alerts and customer confirmation templates"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[#092948]/10">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "بريد إشعار الإدارة" : "Admin Alert Recipient Email"}
                    </label>
                    <input
                      type="email"
                      value={settings.automation.adminNotificationEmail}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          automation: {
                            ...settings.automation,
                            adminNotificationEmail: e.target.value,
                          },
                        })
                      }
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "عنوان بريد الرد التلقائي" : "Auto-Reply Subject Line"}
                    </label>
                    <input
                      type="text"
                      value={settings.automation.autoReplySubject}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          automation: {
                            ...settings.automation,
                            autoReplySubject: e.target.value,
                          },
                        })
                      }
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "قالب رسالة تأكيد الاستلام للعميل" : "Client Confirmation Email Body Template"}
                      <span className="ms-2 text-[0.6875rem] text-[#316A7E] font-normal">
                        Tokens: {"{name}"}, {"{service}"}, {"{id}"}, {"{company}"}
                      </span>
                    </label>
                    <textarea
                      rows={4}
                      value={settings.automation.autoReplyTemplate}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          automation: {
                            ...settings.automation,
                            autoReplyTemplate: e.target.value,
                          },
                        })
                      }
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl p-3 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E] leading-relaxed"
                    />
                  </div>
                </div>
              </div>

              {/* Lead Routing Rules Card */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-6 shadow-xs flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-[#092948]">
                    {isArabic ? "قواعد تصنيف وتصعيد العملاء (Lead Routing)" : "Enterprise Lead Routing & SLA Escalation"}
                  </h3>
                  <p className="text-xs text-[#092948]/60 mt-0.5">
                    {isArabic
                      ? "تصنيف الاستفسارات ذات الميزانية العالية ($50,000+) كـ 'أولوية قصوى' تلقائياً"
                      : "Automatically marks leads with budget > $50k as 'High Priority'"}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.automation.autoTagHighBudget}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      automation: {
                        ...settings.automation,
                        autoTagHighBudget: e.target.checked,
                      },
                    })
                  }
                  className="w-4 h-4 accent-[#092948] cursor-pointer"
                />
              </div>

              {/* Save All Automation Settings */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveSettings}
                  className="px-6 py-3 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-md flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>{isArabic ? "حفظ كافة إعدادات الأتمتة" : "Save All Automation Settings"}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS CMS */}
          {activeTab === "projects" && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif text-[#092948] tracking-tight">
                    {isArabic ? "إدارة معرض المشاريع (Portfolio CMS)" : "Portfolio & Projects CMS"}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#092948]/70 mt-0.5">
                    {isArabic
                      ? "إضافة وتعديل وحذف مشاريع الشركة المنشورة في المعرض الحي بالموقع."
                      : "Manage engineering case studies and highlight featured projects on the website."}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsCreatingProject(true);
                    setEditingProject({
                      id: "",
                      slug: "",
                      title: "",
                      category: "AI & Intelligent Systems",
                      client: "",
                      year: String(new Date().getFullYear()),
                      oneLiner: "",
                      summary: "",
                      image: "/images/project-maddy-voice.jpg",
                      imageAlt: "",
                      featured: false,
                      aspect: "16:10",
                      metrics: [],
                      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
                      challenge: "",
                      solution: "",
                    });
                  }}
                  className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] text-xs font-semibold transition-all cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isArabic ? "إضافة مشروع جديد" : "Add New Project"}</span>
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-5 shadow-xs flex flex-col justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[0.6875rem] px-2.5 py-0.5 rounded-full bg-[#F9F1E7] text-[#092948] font-semibold">
                          {proj.category}
                        </span>
                        {proj.featured && (
                          <span className="text-[0.625rem] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                            {isArabic ? "مثبت في الرئيسية" : "FEATURED"}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-serif text-[#092948] font-medium">
                        {proj.title}
                      </h3>
                      {proj.client && (
                        <span className="text-xs text-[#316A7E] block mb-2 font-medium">
                          {proj.client} ({proj.year})
                        </span>
                      )}
                      <p className="text-xs text-[#092948]/70 line-clamp-2 leading-relaxed">
                        {proj.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {proj.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[0.625rem] px-2 py-0.5 rounded bg-[#F9F1E7] text-[#092948]/80 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#092948]/10">
                      <span className="text-[0.6875rem] text-[#092948]/40 font-mono">
                        id: {proj.id}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsCreatingProject(false);
                            setEditingProject(proj);
                          }}
                          className="px-2.5 py-1.5 rounded-lg bg-[#092948]/5 hover:bg-[#092948] hover:text-[#FFFFFF] text-[#092948] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>{isArabic ? "تعديل" : "Edit"}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-1.5 rounded-lg text-[#092948]/40 hover:text-[#B3261E] hover:bg-[#B3261E]/10 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SERVICES CMS */}
          {activeTab === "services" && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif text-[#092948] tracking-tight">
                  {isArabic ? "إدارة الخدمات والحلول الهندسية" : "Services & Solutions CMS"}
                </h2>
                <p className="text-xs sm:text-sm text-[#092948]/70 mt-0.5">
                  {isArabic
                    ? "تعديل تفاصيل الخدمات، النطاقات التشغيلية والمخرجات التقنية."
                    : "Edit service offerings, operational scopes, and deliverables displayed on the site."}
                </p>
              </div>

              <div className="space-y-4">
                {services.map((serv) => (
                  <div
                    key={serv.id}
                    className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-[#316A7E] font-bold">
                          {serv.number}
                        </span>
                        <h3 className="text-base sm:text-lg font-serif text-[#092948]">
                          {serv.name}
                        </h3>
                      </div>
                      <p className="text-xs text-[#316A7E] font-semibold mb-1">
                        {serv.tagline}
                      </p>
                      <p className="text-xs text-[#092948]/70 line-clamp-2">
                        {serv.summary}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {serv.scope.map((item) => (
                          <span
                            key={item}
                            className="text-[0.6875rem] px-2 py-0.5 rounded bg-[#F9F1E7] text-[#092948]/80 font-medium"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => setEditingService(serv)}
                        className="px-3.5 py-2 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>{isArabic ? "تعديل الخدمة" : "Edit Service"}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: COMPANY SETTINGS */}
          {activeTab === "settings" && settings && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif text-[#092948] tracking-tight">
                  {isArabic ? "إعدادات الشركة وبيانات الهوية" : "Company & Brand Settings"}
                </h2>
                <p className="text-xs sm:text-sm text-[#092948]/70 mt-0.5">
                  {isArabic
                    ? "تحديث أرقام التواصل، المقرات العالمية وشريط الإعلانات أعلى الموقع."
                    : "Update direct contact numbers, global hubs, mottos, and top announcement bar."}
                </p>
              </div>

              {/* Announcement Banner Control */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[#092948]">
                      {isArabic ? "شريط الإعلانات أعلى الموقع" : "Top Site Announcement Banner"}
                    </h3>
                    <p className="text-xs text-[#092948]/60">
                      {isArabic
                        ? "عرض شريط إشعار علوي في كامل صفحات الموقع الحي"
                        : "Displays an announcement banner across the header of the storefront"}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.company.announcementEnabled}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        company: {
                          ...settings.company,
                          announcementEnabled: e.target.checked,
                        },
                      })
                    }
                    className="w-4 h-4 accent-[#092948] cursor-pointer"
                  />
                </div>
                <input
                  type="text"
                  value={settings.company.announcementBanner}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      company: {
                        ...settings.company,
                        announcementBanner: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                />
              </div>

              {/* Direct Channels */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-6 shadow-xs space-y-4">
                <h3 className="text-sm font-semibold text-[#092948]">
                  {isArabic ? "قنوات التواصل الرسمية" : "Official Direct Channels"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "البريد الإلكتروني العام" : "Primary Email"}
                    </label>
                    <input
                      type="email"
                      value={settings.contact.email}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: { ...settings.contact, email: e.target.value },
                        })
                      }
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "رقم الهاتف المباشر" : "Direct Phone"}
                    </label>
                    <input
                      type="text"
                      dir="ltr"
                      value={settings.contact.phone}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: { ...settings.contact, phone: e.target.value },
                        })
                      }
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "ساعات العمل الرسمية" : "Operating Hours"}
                    </label>
                    <input
                      type="text"
                      value={settings.contact.hours}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: { ...settings.contact, hours: e.target.value },
                        })
                      }
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Copy & Mottos */}
              <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-6 shadow-xs space-y-4">
                <h3 className="text-sm font-semibold text-[#092948]">
                  {isArabic ? "نصوص وهوية مسار" : "Brand Identity & Mottos"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "الاسم التجاري" : "Brand Name"}
                    </label>
                    <input
                      type="text"
                      value={settings.company.name}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          company: { ...settings.company, name: e.target.value },
                        })
                      }
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "الاسم القانوني" : "Legal Name"}
                    </label>
                    <input
                      type="text"
                      value={settings.company.legalName}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          company: { ...settings.company, legalName: e.target.value },
                        })
                      }
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1">
                      {isArabic ? "الشعار الرئيسي (Headline Tagline)" : "Primary Headline Tagline"}
                    </label>
                    <input
                      type="text"
                      value={settings.company.tagline}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          company: { ...settings.company, tagline: e.target.value },
                        })
                      }
                      className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                    />
                  </div>
                </div>
              </div>

              {/* Save All Settings */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveSettings}
                  className="px-6 py-3 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-md flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>{isArabic ? "حفظ كافة التغييرات" : "Save All Company Edits"}</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* SLIDE-OVER DRAWER: Selected Inquiry Details */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#092948]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedInquiry(null)}
          />

          <div className="fixed inset-y-0 end-0 max-w-full flex">
            <div className="w-screen max-w-md bg-[#FFFFFF] shadow-2xl border-s border-[#092948]/10 p-6 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#092948]/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-[#F9F1E7] text-[#092948] font-mono font-semibold">
                      #{selectedInquiry.id}
                    </span>
                    <span className="text-xs text-[#092948]/50">
                      {new Date(selectedInquiry.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="p-1.5 rounded-lg text-[#092948]/50 hover:text-[#092948] hover:bg-[#F9F1E7] cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-[#092948]">
                    {selectedInquiry.name}
                  </h3>
                  {selectedInquiry.company && (
                    <p className="text-xs text-[#316A7E] font-semibold mt-0.5">
                      {selectedInquiry.company}
                    </p>
                  )}
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#FBF9F5] border border-[#092948]/5 text-xs">
                  <div>
                    <span className="text-[#092948]/50 block">{isArabic ? "البريد الإلكتروني" : "Email"}</span>
                    <a
                      href={`mailto:${selectedInquiry.email}`}
                      className="text-[#316A7E] hover:underline font-semibold"
                    >
                      {selectedInquiry.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-[#092948]/50 block">{isArabic ? "الخدمة المطلوبة" : "Service Requested"}</span>
                    <span className="text-[#092948] font-semibold">{selectedInquiry.service}</span>
                  </div>
                  <div>
                    <span className="text-[#092948]/50 block">{isArabic ? "الميزانية المقدرة" : "Estimated Budget"}</span>
                    <span className="text-[#1E6B4F] font-bold">
                      {selectedInquiry.budget || "Not Specified"}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#092948]/50 block">{isArabic ? "مستوى الأولوية" : "Priority"}</span>
                    <span className="text-[#092948] font-semibold capitalize">{selectedInquiry.priority}</span>
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#092948]/70 font-semibold block mb-1.5">
                    {isArabic ? "نص الرسالة والاستفسار" : "Inquiry Message"}
                  </span>
                  <div className="p-4 rounded-xl bg-[#FBF9F5] text-xs sm:text-sm text-[#092948] leading-relaxed border border-[#092948]/5 whitespace-pre-wrap">
                    {selectedInquiry.message}
                  </div>
                </div>

                {/* Internal Admin Notes */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs uppercase tracking-wider text-[#092948]/70 font-semibold">
                      {isArabic ? "الملاحظات الداخلية" : "Internal Notes"}
                    </span>
                    <button
                      type="button"
                      onClick={handleSaveNotes}
                      className="text-[0.6875rem] px-2.5 py-1 rounded bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] font-semibold cursor-pointer shadow-2xs"
                    >
                      {isArabic ? "حفظ الملاحظة" : "Save Notes"}
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={editingNotes}
                    onChange={(e) => setEditingNotes(e.target.value)}
                    placeholder={isArabic ? "اكتب ملاحظة فريق العمل..." : "Add private notes..."}
                    className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl p-3 text-xs text-[#092948] focus:outline-none focus:border-[#316A7E]"
                  />
                </div>

                {/* Automation Logs */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#316A7E] font-semibold block mb-2">
                    {isArabic ? "سجل تنفيذ الأتمتة" : "Automation Audit Logs"}
                  </span>
                  <div className="space-y-1.5">
                    {selectedInquiry.automationLogs && selectedInquiry.automationLogs.length > 0 ? (
                      selectedInquiry.automationLogs.map((log, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-lg bg-[#FBF9F5] text-[0.6875rem] flex items-center justify-between gap-2 border border-[#092948]/5"
                        >
                          <div className="flex items-center gap-2">
                            {log.status === "success" ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1E6B4F]" />
                            ) : (
                              <AlertCircle className="w-3.5 h-3.5 text-[#B3261E]" />
                            )}
                            <span className="font-semibold text-[#092948]">{log.action}</span>
                            {log.detail && (
                              <span className="text-[#092948]/60">· {log.detail}</span>
                            )}
                          </div>
                          <span className="text-[#092948]/40 flex-shrink-0">
                            {log.durationMs ? `${log.durationMs}ms · ` : ""}
                            {new Date(log.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-[#092948]/50">
                        {isArabic ? "لا توجد سجلات" : "No logs recorded."}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-4 border-t border-[#092948]/10 flex items-center justify-between">
                <a
                  href={`mailto:${selectedInquiry.email}`}
                  className="px-4 py-2 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{isArabic ? "إرسال بريد رد" : "Send Email"}</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                  className="px-3 py-2 rounded-xl text-[#B3261E] hover:bg-[#B3261E]/10 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{isArabic ? "حذف الطلب" : "Delete"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Project Editor */}
      {editingProject && (
        <div className="fixed inset-0 z-50 bg-[#092948]/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] border border-[#092948]/15 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => {
                setEditingProject(null);
                setIsCreatingProject(false);
              }}
              className="absolute top-5 end-5 p-1.5 rounded-lg text-[#092948]/50 hover:text-[#092948] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-serif text-[#092948]">
              {isCreatingProject
                ? isArabic ? "إضافة مشروع جديد للمعرض" : "Add New Portfolio Project"
                : isArabic ? "تعديل بيانات المشروع" : "Edit Portfolio Project"}
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#092948]/70 font-semibold mb-1">
                  {isArabic ? "عنوان المشروع" : "Project Title"}
                </label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, title: e.target.value })
                  }
                  className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#092948]/70 font-semibold mb-1">
                    {isArabic ? "التصنيف" : "Category"}
                  </label>
                  <input
                    type="text"
                    value={editingProject.category}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, category: e.target.value })
                    }
                    className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#092948]/70 font-semibold mb-1">
                    {isArabic ? "العميل / الشريك" : "Client"}
                  </label>
                  <input
                    type="text"
                    value={editingProject.client || ""}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, client: e.target.value })
                    }
                    className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#092948]/70 font-semibold mb-1">
                  {isArabic ? "الملخص المختصر (One-liner)" : "One-liner Summary"}
                </label>
                <input
                  type="text"
                  value={editingProject.oneLiner}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, oneLiner: e.target.value })
                  }
                  className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#092948]/70 font-semibold mb-1">
                  {isArabic ? "الشرح المفصل" : "Detailed Overview"}
                </label>
                <textarea
                  rows={3}
                  value={editingProject.summary}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, summary: e.target.value })
                  }
                  className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl p-3 text-xs text-[#092948] focus:outline-none focus:border-[#316A7E]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featuredToggle"
                  checked={editingProject.featured}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, featured: e.target.checked })
                  }
                  className="w-4 h-4 accent-[#092948] cursor-pointer"
                />
                <label
                  htmlFor="featuredToggle"
                  className="text-xs text-[#092948] cursor-pointer font-medium"
                >
                  {isArabic ? "تثبيت كمشروع مميز في الصفحة الرئيسية" : "Feature this case study on homepage"}
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setEditingProject(null);
                    setIsCreatingProject(false);
                  }}
                  className="px-4 py-2 rounded-xl text-xs text-[#092948]/70 hover:text-[#092948] cursor-pointer"
                >
                  {isArabic ? "إلغاء" : "Cancel"}
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveProject(editingProject)}
                  className="px-5 py-2 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] text-xs font-semibold cursor-pointer shadow-xs"
                >
                  {isArabic ? "حفظ المشروع" : "Save Project"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Service Editor */}
      {editingService && (
        <div className="fixed inset-0 z-50 bg-[#092948]/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] border border-[#092948]/15 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setEditingService(null)}
              className="absolute top-5 end-5 p-1.5 rounded-lg text-[#092948]/50 hover:text-[#092948] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-serif text-[#092948]">
              {isArabic ? `تعديل خدمة: ${editingService.name}` : `Edit Service: ${editingService.name}`}
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#092948]/70 font-semibold mb-1">
                  {isArabic ? "اسم الخدمة" : "Service Name"}
                </label>
                <input
                  type="text"
                  value={editingService.name}
                  onChange={(e) =>
                    setEditingService({ ...editingService, name: e.target.value })
                  }
                  className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#092948]/70 font-semibold mb-1">
                  {isArabic ? "الشعار الفرعي" : "Tagline"}
                </label>
                <input
                  type="text"
                  value={editingService.tagline}
                  onChange={(e) =>
                    setEditingService({ ...editingService, tagline: e.target.value })
                  }
                  className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl px-3 py-2 text-xs sm:text-sm text-[#092948] focus:outline-none focus:border-[#316A7E]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#092948]/70 font-semibold mb-1">
                  {isArabic ? "الوصف المختصر" : "Summary"}
                </label>
                <textarea
                  rows={3}
                  value={editingService.summary}
                  onChange={(e) =>
                    setEditingService({ ...editingService, summary: e.target.value })
                  }
                  className="w-full bg-[#FBF9F5] border border-[#092948]/15 rounded-xl p-3 text-xs text-[#092948] focus:outline-none focus:border-[#316A7E]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 rounded-xl text-xs text-[#092948]/70 hover:text-[#092948] cursor-pointer"
                >
                  {isArabic ? "إلغاء" : "Cancel"}
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveService(editingService)}
                  className="px-5 py-2 rounded-xl bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] text-xs font-semibold cursor-pointer shadow-xs"
                >
                  {isArabic ? "حفظ التعديلات" : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
