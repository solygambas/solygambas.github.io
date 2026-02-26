import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { getT } from "../i18n";
import type { Locale } from "../i18n/settings";
import SocialMediaIcon from "../../components/SocialMediaIcon";
import PortfolioCard from "../../components/PortfolioCard";
import FeedbackForm from "../../components/FeedbackForm";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getT(locale, "common");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getT(locale, "common");

  return (
    <div className={styles.content}>
      <header>
        <div className={styles.header}>
          <h1>{t("title")}</h1>
        </div>
      </header>
      <div className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.heroName}>{t("hero.name")}</p>
            <h2 className={styles.heroTagline}>{t("hero.experience")}</h2>
            <ul className={styles.socialLinks}>
              <SocialMediaIcon
                title={t("hero.brand.social", { brand: "LinkedIn" })}
                href="https://www.onbusinessplan.com/linkedin"
                src="/icons/linkedin.svg"
              />
              <SocialMediaIcon
                title={t("hero.brand.social", { brand: "X" })}
                href="https://x.com/solygambas"
                src="/icons/x.svg"
              />
              <SocialMediaIcon
                title={t("hero.brand.social", { brand: "GitHub" })}
                href="https://github.com/solygambas"
                src="/icons/github.svg"
              />
              <SocialMediaIcon
                title={t("hero.brand.social", { brand: "CodePen" })}
                href="https://codepen.io/solygambas"
                src="/icons/codepen.svg"
              />
              <SocialMediaIcon
                title={t("hero.brand.social", { brand: "Dribbble" })}
                href="https://dribbble.com/solygambas"
                src="/icons/dribbble.svg"
              />
              <SocialMediaIcon
                title={t("hero.brand.social", {
                  brand: "Google Cloud Skills",
                })}
                href="https://www.onbusinessplan.com/googlecloudskills"
                src="/icons/google-cloud.svg"
              />
            </ul>
          </div>
          <div className={styles.heroImage}>
            <Image src="/hero.jpg" alt={t("hero.alt")} fill priority />
          </div>
        </section>

        <section className={styles.portfolioContainer}>
          <h2>{t("caseStudies.title")}</h2>
          <div className={styles.portfolioContainerGrid}>
            <PortfolioCard
              title={t("caseStudies.adevinta.title")}
              subtitle={t("caseStudies.adevinta.subtitle")}
              link={`/${locale}/case-studies/adevinta`}
              src="/case-studies/adevinta.png"
            />
            <PortfolioCard
              title={t(
                "caseStudies.credit-agricole-group-infrastructure-platform.title"
              )}
              subtitle={t(
                "caseStudies.credit-agricole-group-infrastructure-platform.subtitle"
              )}
              link={`/${locale}/case-studies/credit-agricole-group-infrastructure-platform`}
              src="/case-studies/credit-agricole-group-infrastructure-platform.png"
            />
            <PortfolioCard
              title={t("caseStudies.ho36-hostels.title")}
              subtitle={t("caseStudies.ho36-hostels.subtitle")}
              link={`/${locale}/case-studies/ho36-hostels`}
              src="/case-studies/ho36-hostels.png"
            />
          </div>
        </section>

        {/* Project section */}
        <section className={styles.portfolioContainer}>
          <h2>{t("featuredProjects.title")}</h2>
          <div className={styles.portfolioContainerGrid}>
            <PortfolioCard
              title={t("featuredProjects.on-business-plan.title")}
              subtitle={t("featuredProjects.on-business-plan.subtitle")}
              link={`/${locale}/featured-projects/on-business-plan`}
              src="/featured-projects/on-business-plan.png"
            />
            <PortfolioCard
              title={t("featuredProjects.watchello.title")}
              subtitle={t("featuredProjects.watchello.subtitle")}
              link={`/${locale}/featured-projects/watchello`}
              src="/featured-projects/watchello.png"
            />
            <PortfolioCard
              title={t("featuredProjects.projectin.title")}
              subtitle={t("featuredProjects.projectin.subtitle")}
              link={`/${locale}/featured-projects/projectin`}
              src="/featured-projects/projectin.png"
            />
          </div>
        </section>

        {/* Contact section */}
        <section className={styles.contactSection}>
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.description")}</p>
          <FeedbackForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}
