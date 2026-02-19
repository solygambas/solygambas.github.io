import { createInstance, type i18n as I18nInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions, type Locale } from "./settings";

const initI18next = async (lng: Locale, ns: string | string[]) => {
  const i18nInstance: I18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function getT(
  lng: Locale,
  ns: string | string[] = "common"
): Promise<ReturnType<I18nInstance["getFixedT"]>> {
  const i18nextInstance = await initI18next(lng, ns);
  return i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns);
}
