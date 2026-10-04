"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { useTranslation } from "@/lib/i18n/LanguageContext";

interface ContactFormProps {
  initialService?: string;
}

export default function ContactForm({ initialService = "" }: ContactFormProps) {
  const { t, isArabic } = useTranslation();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: initialService || (isArabic ? "أتمتة الأعمال وسير العمل" : "Business Automation"),
    budget: "",
    message: "",
    hp_field: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-level error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setServerMessage("");
    setFieldErrors({});

    // Client-side quick validation using Zod
    const clientValidation = contactFormSchema.safeParse(formData);
    if (!clientValidation.success) {
      const errors: Record<string, string> = {};
      clientValidation.error.issues.forEach((err) => {
        const field = err.path[0]?.toString();
        if (field === "name") {
          errors.name = t.contactPage.form.validation.nameRequired;
        } else if (field === "email") {
          errors.email = t.contactPage.form.validation.emailInvalid;
        } else if (field === "message") {
          errors.message = t.contactPage.form.validation.messageMin;
        } else if (field) {
          errors[field] = err.message;
        }
      });
      setFieldErrors(errors);
      setStatus("error");
      setServerMessage(t.contactPage.form.validation.generalError);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setServerMessage(result.message);
      } else {
        setStatus("error");
        setServerMessage(
          result.message ||
            (isArabic ? "تعذر إرسال الاستفسار، يرجى المحاولة لاحقاً." : "Failed to submit. Please try again.")
        );
        if (result.errors) {
          setFieldErrors(result.errors);
        }
      }
    } catch {
      setStatus("error");
      setServerMessage(
        isArabic
          ? "حدث انقطاع في الاتصال بالشبكة. يرجى التحقق من اتصالك وإعادة المحاولة."
          : "Network error encountered. Please check your connection and retry."
      );
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      service: isArabic ? "أتمتة الأعمال وسير العمل" : "Business Automation",
      budget: "",
      message: "",
      hp_field: "",
    });
    setFieldErrors({});
    setStatus("idle");
    setServerMessage("");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="p-8 md:p-12 border border-[#1E6B4F]/30 bg-[#F9F1E7] rounded-[4px] shadow-sm text-center space-y-6"
      >
        <div className="w-12 h-12 rounded-full bg-[#1E6B4F]/10 text-[#1E6B4F] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6 stroke-[2]" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl md:text-3xl text-[#092948]">
            {t.contactPage.form.successTitle}
          </h3>
          <p className="text-sm md:text-base text-[#000000]/80 max-w-lg mx-auto leading-relaxed">
            {isArabic
              ? "تم استلام استفساركم بنجاح وتسجيله لدى مسار وشركاه. سيتولى أحد مدرائنا التقنيين مراجعة المتطلبات والتواصل معكم خلال يوم عمل واحد."
              : (serverMessage || t.contactPage.form.successMessage)}
          </p>
        </div>
        <div className="pt-4 border-t border-[#092948]/10 max-w-md mx-auto">
          <p className="text-xs text-[#092948]/60">
            {isArabic ? (
              <>
                تم إرسال إشعار بالاستلام إلى{" "}
                <strong dir="ltr" className="font-semibold text-[#092948]">
                  {formData.email}
                </strong>
                .
              </>
            ) : (
              <>
                A confirmation has been sent to{" "}
                <strong className="font-semibold text-[#092948]">{formData.email}</strong>.
              </>
            )}
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#092948] px-6 py-2 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FFFFFF] transition-all cursor-pointer"
          >
            {t.contactPage.form.sendAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 sm:space-y-6 bg-[#F9F1E7] p-4 sm:p-8 md:p-10 border border-[#092948]/12 rounded-[4px] shadow-sm"
      aria-label="Contact Masaar & Co. / مسار وشركاه"
    >
      {/* Honeypot field (hidden from users, traps automated bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this field</label>
        <input
          id="hp_field"
          type="text"
          name="hp_field"
          tabIndex={-1}
          autoComplete="off"
          value={formData.hp_field}
          onChange={handleChange}
        />
      </div>

      {/* Global Error Banner */}
      {status === "error" && serverMessage && (
        <div
          role="alert"
          className="p-3.5 sm:p-4 border border-[#B3261E]/30 bg-[#B3261E]/5 rounded-[2px] flex items-start gap-3 text-xs sm:text-sm text-[#B3261E]"
        >
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
          <p>{serverMessage}</p>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-[0.6875rem] sm:text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-1.5 sm:mb-2"
          >
            {t.contactPage.form.fullNameLabel} <span className="text-[#B3261E]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#000000] bg-[#FFFFFF] border rounded-[2px] transition-colors focus:outline-none ${
              fieldErrors.name
                ? "border-[#B3261E] focus:border-[#B3261E] bg-[#B3261E]/5"
                : "border-[#092948]/20 focus:border-[#092948]"
            }`}
            placeholder={t.contactPage.form.fullNamePlaceholder}
          />
          {fieldErrors.name && (
            <p id="name-error" className="text-[0.6875rem] sm:text-xs text-[#B3261E] mt-1 font-medium">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[0.6875rem] sm:text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-1.5 sm:mb-2"
          >
            {t.contactPage.form.emailLabel} <span className="text-[#B3261E]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            dir="ltr"
            required
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#000000] bg-[#FFFFFF] border rounded-[2px] transition-colors focus:outline-none text-start ${
              fieldErrors.email
                ? "border-[#B3261E] focus:border-[#B3261E] bg-[#B3261E]/5"
                : "border-[#092948]/20 focus:border-[#092948]"
            }`}
            placeholder={t.contactPage.form.emailPlaceholder}
          />
          {fieldErrors.email && (
            <p id="email-error" className="text-[0.6875rem] sm:text-xs text-[#B3261E] mt-1 font-medium">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Company & Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-[0.6875rem] sm:text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-1.5 sm:mb-2"
          >
            {t.contactPage.form.orgLabel}{" "}
            <span className="text-[0.6875rem] sm:text-xs text-[#092948]/50 lowercase">
              {isArabic ? "(اختياري)" : "(optional)"}
            </span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#000000] bg-[#FFFFFF] border border-[#092948]/20 rounded-[2px] focus:outline-none focus:border-[#092948] transition-colors"
            placeholder={t.contactPage.form.orgPlaceholder}
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-[0.6875rem] sm:text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-1.5 sm:mb-2"
          >
            {t.contactPage.form.serviceLabel} <span className="text-[#B3261E]">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#000000] bg-[#FFFFFF] border border-[#092948]/20 rounded-[2px] focus:outline-none focus:border-[#092948] transition-colors"
          >
            {t.servicesPage.servicesList.map((svc) => (
              <option key={svc.id} value={svc.name}>
                {svc.number} — {svc.name}
              </option>
            ))}
            <option value="Custom Technology Requirement">
              {isArabic ? "متطلبات برمجية ومعمارية مخصصة" : "Custom Technology Requirement"}
            </option>
          </select>
        </div>
      </div>

      {/* Row 3: Estimated Scope / Budget */}
      <div>
        <label
          htmlFor="budget"
          className="block text-[0.6875rem] sm:text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-1.5 sm:mb-2"
        >
          {t.contactPage.form.budgetLabel}{" "}
          <span className="text-[0.6875rem] sm:text-xs text-[#092948]/50 lowercase">
            {isArabic ? "(اختياري)" : "(optional)"}
          </span>
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#000000] bg-[#F9F1E7]/20 border border-[#092948]/20 rounded-[2px] focus:outline-none focus:border-[#092948] focus:bg-[#FFFFFF] transition-colors"
        >
          <option value="">{t.contactPage.form.budgetPlaceholder}</option>
          {t.contactPage.form.budgetOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Row 4: Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-[0.6875rem] sm:text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-1.5 sm:mb-2"
        >
          {t.contactPage.form.messageLabel} <span className="text-[#B3261E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#000000] bg-[#F9F1E7]/20 border rounded-[2px] transition-colors focus:outline-none ${
            fieldErrors.message
              ? "border-[#B3261E] focus:border-[#B3261E] bg-[#B3261E]/5"
              : "border-[#092948]/20 focus:border-[#092948] focus:bg-[#FFFFFF]"
          }`}
          placeholder={t.contactPage.form.messagePlaceholder}
        />
        {fieldErrors.message && (
          <p id="message-error" className="text-[0.6875rem] sm:text-xs text-[#B3261E] mt-1 font-medium">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Privacy note & Submit button */}
      <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <p className="text-[0.6875rem] sm:text-xs text-[#092948]/60 leading-relaxed max-w-sm">
          {isArabic
            ? "تخضع جميع الاتصالات لسرية تامة واتفاقيات عدم إفصاح صارمة. نحن لا نشارك أي استفسارات أو بيانات مع أطراف خارجية."
            : "Communications are subject to strict non-disclosure. We do not share inquiries with third parties."}
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#092948] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-[0.9375rem] font-medium text-[#FFFFFF] hover:bg-[#316A7E] transition-all duration-200 disabled:opacity-50 cursor-pointer focus-ring-light shadow-xs min-h-[44px] sm:min-h-[48px] w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t.contactPage.form.submittingBtn}</span>
            </>
          ) : (
            <>
              <span>{t.contactPage.form.submitBtn}</span>
              <span className="font-mono rtl:-scale-x-100 inline-block transition-transform">↗</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
