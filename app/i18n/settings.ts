export const fallbackLng = "en";
export const locales = ["de", "en", "es", "fr", "hi", "it", "pt"] as const;
export const defaultNS = "common";

export type Locale = (typeof locales)[number];

export function getOptions(
  lng: string = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    // debug: process.env.NODE_ENV === "development",
    showSupportNotice: false,
    supportedLngs: locales,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
