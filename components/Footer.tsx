"use client";

import { useParams } from "next/navigation";
import LanguageSwitchLink from "./LanguageSwitchLink";
import { locales } from "../app/i18n/settings";
import { useT } from "../app/i18n/client";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  const params = useParams();
  const { t } = useT("footer");
  const currentLocale = params?.locale as string;

  return (
    <footer>
      <p className={styles.footer}>
        <span>{t("change-locale")}</span>{" "}
        {locales.map((locale) => {
          if (locale === currentLocale) return null;
          return <LanguageSwitchLink locale={locale} key={locale} />;
        })}
      </p>
    </footer>
  );
};
