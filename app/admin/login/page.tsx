"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Key, ArrowRight, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import MasaarLogo from "@/components/ui/MasaarLogo";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function AdminLoginPage() {
  const router = useRouter();
  const { isArabic, toggleLanguage } = useTranslation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/admin");
          router.refresh();
        }, 500);
      } else {
        setError(
          data.message ||
            (isArabic
              ? "بيانات الاعتماد غير صالحة. يرجى التحقق والمحاولة مجدداً."
              : "Invalid administrator credentials. Please verify and retry.")
        );
      }
    } catch {
      setError(
        isArabic
          ? "حدث خطأ في الاتصال بالخادم. يرجى المحاولة لاحقاً."
          : "Server communication error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setUsername("admin");
    setPassword("masar2026");
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#092948] flex flex-col justify-between p-4 sm:p-6 md:p-10 relative overflow-hidden font-sans">
      {/* Subtle architectural ambient backdrop */}
      <div
        className="absolute top-[-10%] start-[-5%] w-[500px] h-[500px] rounded-full bg-[#316A7E]/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] end-[-5%] w-[500px] h-[500px] rounded-full bg-[#092948]/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header bar */}
      <header className="relative z-10 flex items-center justify-between max-w-5xl mx-auto w-full">
        <MasaarLogo variant="navy" width={140} height={48} />
        <button
          onClick={toggleLanguage}
          type="button"
          className="text-xs uppercase tracking-[0.15em] font-medium px-3.5 py-1.5 rounded-full border border-[#092948]/15 text-[#092948]/80 hover:text-[#092948] hover:border-[#092948]/40 hover:bg-[#FFFFFF] transition-all cursor-pointer shadow-xs"
        >
          {isArabic ? "English" : "العربية"}
        </button>
      </header>

      {/* Center Login Box */}
      <main className="relative z-10 w-full max-w-md mx-auto my-auto py-8">
        <div className="bg-[#FFFFFF] border border-[#092948]/10 rounded-2xl p-6 sm:p-9 shadow-xl relative overflow-hidden">
          {/* Subtle top brand bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#092948] via-[#316A7E] to-[#619AAA]" />

          {/* Badge & Title */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1E6B4F] inline-block animate-pulse" />
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[#316A7E] font-semibold">
              {isArabic ? "بوابة العمليات والأتمتة" : "Operations & Automation Hub"}
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl text-[#092948] font-normal mb-2 tracking-tight">
            {isArabic ? "تسجيل دخول الإدارة" : "Administrator Sign In"}
          </h1>
          <p className="text-xs sm:text-sm text-[#092948]/70 mb-6 leading-relaxed">
            {isArabic
              ? "التحكم في الاستفسارات، المحتوى، والمزامنة اللحظية مع خطوط الأتمتة."
              : "Manage inquiries, content CMS, and live automation pipelines."}
          </p>

          {/* Quick Demo Fill Pill */}
          <div className="mb-6 p-3 rounded-xl bg-[#F9F1E7]/80 border border-[#092948]/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#092948]/80 font-medium">
              <Sparkles className="w-4 h-4 text-[#316A7E] flex-shrink-0" />
              <span>
                {isArabic
                  ? "حساب تجريبي: admin / masar2026"
                  : "Quick Access: admin / masar2026"}
              </span>
            </div>
            <button
              type="button"
              onClick={handleFillDemo}
              className="text-[0.6875rem] font-semibold bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] px-3 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              {isArabic ? "تعبئة تلقائية" : "Auto-fill"}
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-[#B3261E]/10 border border-[#B3261E]/20 text-xs text-[#B3261E] flex items-center gap-2 font-medium">
              <Shield className="w-4 h-4 text-[#B3261E] flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 rounded-xl bg-[#1E6B4F]/10 border border-[#1E6B4F]/20 text-xs text-[#1E6B4F] flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#1E6B4F] flex-shrink-0" />
              <span>
                {isArabic
                  ? "تم التحقق بنجاح! جاري فتح لوحة التحكم..."
                  : "Authenticated! Launching admin dashboard..."}
              </span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1.5"
              >
                {isArabic ? "اسم المستخدم" : "Username"}
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full bg-[#FFFFFF] border border-[#092948]/15 rounded-xl px-3.5 py-2.5 text-sm text-[#092948] placeholder-[#092948]/30 focus:outline-none focus:border-[#316A7E] focus:ring-2 focus:ring-[#316A7E]/10 transition-all shadow-xs"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs uppercase tracking-wider text-[#092948]/80 font-semibold mb-1.5"
              >
                {isArabic ? "رمز الدخول / كلمة المرور" : "Password / PIN"}
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#FFFFFF] border border-[#092948]/15 rounded-xl px-3.5 py-2.5 text-sm text-[#092948] placeholder-[#092948]/30 focus:outline-none focus:border-[#316A7E] focus:ring-2 focus:ring-[#316A7E]/10 transition-all shadow-xs"
              />
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className="w-full mt-2 bg-[#092948] hover:bg-[#316A7E] text-[#FFFFFF] font-medium text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-md cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{isArabic ? "جاري التحقق..." : "Authenticating..."}</span>
                </>
              ) : (
                <>
                  <Key className="w-4 h-4" />
                  <span>{isArabic ? "دخول لوحة التحكم" : "Enter Admin Panel"}</span>
                  <ArrowRight className="w-4 h-4 rtl:-scale-x-100" />
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      {/* Footer bar */}
      <footer className="relative z-10 text-center text-xs text-[#092948]/50 max-w-5xl mx-auto w-full pt-4">
        &copy; {new Date().getFullYear()} Masaar & Co. Technology Group · Operations & Automation Architecture
      </footer>
    </div>
  );
}
