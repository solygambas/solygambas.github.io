import Card from "./Card";
import CoverImage from "./CoverImage";
import Button from "./Button";
import { getT } from "../app/i18n";
import type { Locale } from "../app/i18n/settings";
import styles from "../styles/PromoBanner.module.css";

interface PromoBannerProps {
  locale: Locale;
}

export default async function PromoBanner({ locale }: PromoBannerProps) {
  const t = await getT(locale, "common");

  return (
    <Card className={styles.banner}>
      <CoverImage
        src="/100-projects-in-100-days.jpg"
        alt={t("promoBanner.imageAlt")}
      />
      <div className={styles.content}>
        <p className={styles.subtitle}>{t("promoBanner.subtitle")}</p>
        <h3 className={styles.title}>{t("promoBanner.title")}</h3>
        <Button href="/html-css-javascript-projects">
          {t("promoBanner.cta")}
        </Button>
      </div>
    </Card>
  );
}
