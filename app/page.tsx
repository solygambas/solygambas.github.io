"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { fallbackLng } from "./i18n/settings";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language
    const detectLanguage = () => {
      if (typeof window === "undefined") return fallbackLng;

      // Check localStorage first
      const stored = localStorage.getItem("i18nextLng");
      if (stored) return stored;

      // Check navigator language
      const browserLang = navigator.language.split("-")[0];
      const supportedLanguages = ["de", "en", "es", "fr", "hi", "it", "pt"];

      if (supportedLanguages.includes(browserLang)) {
        return browserLang;
      }

      return fallbackLng;
    };

    const detectedLng = detectLanguage();
    localStorage.setItem("i18nextLng", detectedLng);
    router.replace(`/${detectedLng}`);
  }, [router]);

  return null;
}
