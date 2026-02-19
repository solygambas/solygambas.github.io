"use client";

import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions, locales, type Locale } from "./settings";

const runsOnServerSide = typeof window === "undefined";

// Initialize i18next for client-side usage
void i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    detection: {
      order: ["path"],
    },
    preload: runsOnServerSide ? locales : [],
  });

export function useT(ns: string | string[] = "common") {
  const params = useParams();
  const locale = (params?.locale as Locale) || "en";
  const ret = useTranslationOrg(ns);
  const { i18n } = ret;

  // Update i18n language when locale changes
  useEffect(() => {
    if (!i18n || i18n.resolvedLanguage === locale) return;
    void i18n.changeLanguage(locale);
  }, [locale, i18n]);

  return ret;
}
