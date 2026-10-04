"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  useCallback,
  useSyncExternalStore,
} from "react";
import { Language, Direction, TranslationDictionary } from "./types";
import { enDictionary } from "./dictionaries/en";
import { arDictionary } from "./dictionaries/ar";

export const en = enDictionary;
export const ar = arDictionary;

export interface LanguageContextValue {
  language: Language;
  dir: Direction;
  isArabic: boolean;
  t: TranslationDictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const STORAGE_KEY = "masaar_locale";

function applyDocumentLanguage(lang: Language) {
  if (typeof document === "undefined") return;
  const dir: Direction = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  if (lang === "ar") {
    document.documentElement.classList.add("rtl");
  } else {
    document.documentElement.classList.remove("rtl");
  }
}

// In-memory cache & pub-sub for reactive store
let currentLocale: Language = "en";
const listeners = new Set<() => void>();

function getClientSnapshot(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") {
      currentLocale = stored;
      return currentLocale;
    }
    const docLang = document.documentElement.lang;
    if (docLang === "ar" || docLang === "en") {
      currentLocale = docLang;
      return currentLocale;
    }
  } catch {
    // ignore
  }
  return currentLocale;
}

function getServerSnapshot(): Language {
  return "en";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY && (e.newValue === "ar" || e.newValue === "en")) {
      currentLocale = e.newValue as Language;
      applyDocumentLanguage(currentLocale);
      callback();
    }
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function setStoredLanguage(newLang: Language) {
  currentLocale = newLang;
  try {
    localStorage.setItem(STORAGE_KEY, newLang);
    document.cookie = `masaar_locale=${newLang};path=/;max-age=31536000;SameSite=Lax`;
  } catch {
    // ignore
  }
  applyDocumentLanguage(newLang);
  listeners.forEach((listener) => listener());
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  const setLanguage = useCallback((newLang: Language) => {
    setStoredLanguage(newLang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setStoredLanguage(language === "en" ? "ar" : "en");
  }, [language]);

  const dir: Direction = language === "ar" ? "rtl" : "ltr";
  const isArabic = language === "ar";
  const t = language === "ar" ? ar : en;

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      dir,
      isArabic,
      t,
      toggleLanguage,
      setLanguage,
    }),
    [language, dir, isArabic, t, toggleLanguage, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a <LanguageProvider>");
  }
  return context;
}

export const useLanguage = useTranslation;
