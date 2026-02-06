import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LanguageSwitchLink from "./LanguageSwitchLink";
import i18nextConfig from "../next-i18next.config";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("footer");
  const currentLocale =
    (Array.isArray(router.query.locale) ? router.query.locale[0] : router.query.locale) ??
    i18nextConfig.i18n.defaultLocale;

  return (
    <footer>
      <p className={styles.footer}>
        <span>{t("change-locale")}</span>{" "}
        {i18nextConfig.i18n.locales.map((locale) => {
          if (locale === currentLocale) return null;
          return <LanguageSwitchLink locale={locale} key={locale} />;
        })}
      </p>
    </footer>
  );
};
