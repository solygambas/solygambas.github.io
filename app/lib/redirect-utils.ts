import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const SUPPORTED_LOCALES = ["de", "en", "es", "fr", "hi", "it", "pt"];
export const PDF_URL =
  "https://www.onbusinessplan.com/pdfs/100-projects-in-100-days.pdf";
export const OLD_PROJECTS_PATH = "/html-css-javascript-projects";

export function detectLocale(): string {
  const storedLang =
    typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : null;
  const browserLang =
    typeof navigator !== "undefined" ? navigator.language.split("-")[0] : "en";

  if (storedLang && SUPPORTED_LOCALES.includes(storedLang)) {
    return storedLang;
  }
  if (SUPPORTED_LOCALES.includes(browserLang)) {
    return browserLang;
  }
  return "en";
}

export function shouldRedirectToPDF(pathname: string): boolean {
  return pathname.includes(OLD_PROJECTS_PATH);
}

export function useNotFoundRedirect(targetLocale?: string) {
  const router = useRouter();

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (shouldRedirectToPDF(currentPath)) {
      window.location.href = PDF_URL;
      return;
    }

    const locale = targetLocale ?? detectLocale();
    router.replace(`/${locale}`);
  }, [router, targetLocale]);
}
