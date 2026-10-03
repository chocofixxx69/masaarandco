"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validation";

interface ContactFormProps {
  initialService?: string;
}

export default function ContactForm({ initialService = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: initialService || "AI Solutions",
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
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      setFieldErrors(errors);
      setStatus("error");
      setServerMessage("Please review and complete the required fields below.");
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
        setServerMessage(result.message || "Failed to submit. Please try again.");
        if (result.errors) {
          setFieldErrors(result.errors);
        }
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error encountered. Please check your connection and retry.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "AI Solutions",
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
        className="p-8 md:p-12 border border-[#1E6B4F]/30 bg-[#FFFFFF] rounded-[2px] text-center space-y-6"
      >
        <div className="w-12 h-12 rounded-full bg-[#1E6B4F]/10 text-[#1E6B4F] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6 stroke-[2]" />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl md:text-3xl text-[#092948]">Inquiry Received</h3>
          <p className="text-sm md:text-base text-[#000000]/80 max-w-lg mx-auto leading-relaxed">
            {serverMessage}
          </p>
        </div>
        <div className="pt-4 border-t border-[#092948]/10 max-w-md mx-auto">
          <p className="text-xs text-[#092948]/60">
            A confirmation has been sent to <strong>{formData.email}</strong>.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#092948] px-6 py-2 text-xs uppercase tracking-wider font-medium text-[#092948] hover:bg-[#092948] hover:text-[#FEEED7] transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 bg-[#FFFFFF] p-6 sm:p-8 md:p-10 border border-[#092948]/15 rounded-[2px]"
      aria-label="Contact Masaar & Co."
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
          className="p-4 border border-[#B3261E]/30 bg-[#B3261E]/5 rounded-[2px] flex items-start gap-3 text-sm text-[#B3261E]"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>{serverMessage}</p>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-2"
          >
            Full Name <span className="text-[#B3261E]">*</span>
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
            className={`w-full px-4 py-3 text-base text-[#000000] bg-[#FEEED7]/20 border rounded-[2px] transition-colors focus:outline-none ${
              fieldErrors.name
                ? "border-[#B3261E] focus:border-[#B3261E] bg-[#B3261E]/5"
                : "border-[#092948]/20 focus:border-[#092948] focus:bg-[#FFFFFF]"
            }`}
            placeholder="e.g. Sarah Al-Otaibi"
          />
          {fieldErrors.name && (
            <p id="name-error" className="text-xs text-[#B3261E] mt-1.5 font-medium">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-2"
          >
            Corporate Email <span className="text-[#B3261E]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 text-base text-[#000000] bg-[#FEEED7]/20 border rounded-[2px] transition-colors focus:outline-none ${
              fieldErrors.email
                ? "border-[#B3261E] focus:border-[#B3261E] bg-[#B3261E]/5"
                : "border-[#092948]/20 focus:border-[#092948] focus:bg-[#FFFFFF]"
            }`}
            placeholder="sarah@company.com"
          />
          {fieldErrors.email && (
            <p id="email-error" className="text-xs text-[#B3261E] mt-1.5 font-medium">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Company & Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-2"
          >
            Organization / Entity <span className="text-xs text-[#092948]/50 lowercase">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 text-base text-[#000000] bg-[#FEEED7]/20 border border-[#092948]/20 rounded-[2px] focus:outline-none focus:border-[#092948] focus:bg-[#FFFFFF] transition-colors"
            placeholder="Entity name"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-2"
          >
            Solution Domain <span className="text-[#B3261E]">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 text-base text-[#000000] bg-[#FEEED7]/20 border border-[#092948]/20 rounded-[2px] focus:outline-none focus:border-[#092948] focus:bg-[#FFFFFF] transition-colors"
          >
            <option value="Business Automation">01 — Business Automation</option>
            <option value="AI, Chatbots & Voice Agents">02 — AI, Chatbots &amp; Voice Agents</option>
            <option value="Website Development">03 — Website Development</option>
            <option value="Application Development">04 — Application Development</option>
            <option value="System Integration">05 — System Integration</option>
            <option value="AI & Intelligent Solutions">06 — AI &amp; Intelligent Solutions</option>
            <option value="Data & Business Intelligence">07 — Data &amp; Business Intelligence</option>
            <option value="Cloud & IT Solutions">08 — Cloud &amp; IT Solutions</option>
            <option value="Digital Products & SaaS">09 — Digital Products &amp; SaaS</option>
            <option value="Digital Marketing & Content Systems">10 — Digital Marketing &amp; Content Systems</option>
            <option value="Emerging Technology">11 — Emerging Technology</option>
            <option value="Technology Consulting">12 — Technology Consulting</option>
            <option value="Custom Technology Requirement">Custom Technology Requirement</option>
          </select>
        </div>
      </div>

      {/* Row 3: Estimated Scope / Budget */}
      <div>
        <label
          htmlFor="budget"
          className="block text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-2"
        >
          Anticipated Engagement Scale <span className="text-xs text-[#092948]/50 lowercase">(optional)</span>
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 text-base text-[#000000] bg-[#FEEED7]/20 border border-[#092948]/20 rounded-[2px] focus:outline-none focus:border-[#092948] focus:bg-[#FFFFFF] transition-colors"
        >
          <option value="">Select scope tier...</option>
          <option value="50k-100k">$50,000 — $100,000 (Targeted Architecture)</option>
          <option value="100k-250k">$100,000 — $250,000 (Core Platform Build)</option>
          <option value="250k-500k">$250,000 — $500,000 (Comprehensive Enterprise Solution)</option>
          <option value="500k+">$500,000+ (Institutional Transformation)</option>
        </select>
      </div>

      {/* Row 4: Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.15em] font-medium text-[#092948] mb-2"
        >
          Inquiry &amp; Objectives <span className="text-[#B3261E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 text-base text-[#000000] bg-[#FEEED7]/20 border rounded-[2px] transition-colors focus:outline-none ${
            fieldErrors.message
              ? "border-[#B3261E] focus:border-[#B3261E] bg-[#B3261E]/5"
              : "border-[#092948]/20 focus:border-[#092948] focus:bg-[#FFFFFF]"
          }`}
          placeholder="Briefly describe your objectives, timeline, and current technical architecture..."
        />
        {fieldErrors.message && (
          <p id="message-error" className="text-xs text-[#B3261E] mt-1.5 font-medium">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Privacy note & Submit button */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-[#092948]/60 leading-relaxed max-w-sm">
          Communications are subject to strict non-disclosure. We do not share inquiries with third parties.
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#092948] px-8 py-3 text-[0.9375rem] font-medium text-[#FEEED7] hover:bg-[#316A7E] transition-all duration-200 disabled:opacity-50 cursor-pointer focus-ring-light"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <span>Send Inquiry</span>
              <span className="font-mono">↗</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
