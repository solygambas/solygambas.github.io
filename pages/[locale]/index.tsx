import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import SocialMediaIcon from "../../components/SocialMediaIcon";
import PortfolioCard from "../../components/PortfolioCard";
import FeedbackFrom from "../../components/FeedbackForm";

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };

export default function Home() {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description") as string} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <header>
          <div className={styles.header}>
            <h1>{t("title")}</h1>
          </div>
        </header>
        <div className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroText}>
              <p>{t("hero.name")}</p>
              <h2>{t("hero.experience")}</h2>
              <ul className={styles.socialLinks}>
                <SocialMediaIcon
                  title={
                    t("hero.brand.social", { brand: "LinkedIn" }) as string
                  }
                  href="https://bit.ly/solygambas"
                  src="/icons/linkedin.svg"
                />
                <SocialMediaIcon
                  title={t("hero.brand.social", { brand: "X" }) as string}
                  href="https://x.com/solygambas"
                  src="/icons/x.svg"
                />
                <SocialMediaIcon
                  title={t("hero.brand.social", { brand: "GitHub" }) as string}
                  href="https://github.com/solygambas"
                  src="/icons/github.svg"
                />
                <SocialMediaIcon
                  title={t("hero.brand.social", { brand: "CodePen" }) as string}
                  href="https://codepen.io/solygambas"
                  src="/icons/codepen.svg"
                />
                <SocialMediaIcon
                  title={
                    t("hero.brand.social", { brand: "Dribbble" }) as string
                  }
                  href="https://dribbble.com/solygambas"
                  src="/icons/dribbble.svg"
                />
                <SocialMediaIcon
                  title={
                    t("hero.brand.social", {
                      brand: "Google Cloud Skills",
                    }) as string
                  }
                  href="https://bit.ly/googlecloudskills-solygambas"
                  src="/icons/google-cloud.svg"
                />
                <SocialMediaIcon
                  title={
                    t("hero.brand.social", {
                      brand: "DeepLearning.AI",
                    }) as string
                  }
                  href="https://bit.ly/deeplearningai-solygambas"
                  src="/icons/deeplearning.svg"
                />
              </ul>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/hero.jpg"
                alt={t("hero.alt") as string}
                fill
                priority
              />
            </div>
          </section>

          <section className={styles.portfolioContainer}>
            <h2>{t("caseStudies.title")}</h2>
            <div className={styles.portfolioContainerGrid}>
              <PortfolioCard
                title={t("caseStudies.adevinta.title")}
                subtitle={t("caseStudies.adevinta.subtitle")}
                link={`/${currentLanguage}/case-studies/adevinta`}
                src="/case-studies/adevinta.png"
              />
              <PortfolioCard
                title={t(
                  "caseStudies.credit-agricole-group-infrastructure-platform.title"
                )}
                subtitle={t(
                  "caseStudies.credit-agricole-group-infrastructure-platform.subtitle"
                )}
                link={`/${currentLanguage}/case-studies/credit-agricole-group-infrastructure-platform`}
                src="/case-studies/credit-agricole-group-infrastructure-platform.png"
              />
              <PortfolioCard
                title={t("caseStudies.ho36-hostels.title")}
                subtitle={t("caseStudies.ho36-hostels.subtitle")}
                link={`/${currentLanguage}/case-studies/ho36-hostels`}
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
                link={`/${currentLanguage}/featured-projects/on-business-plan`}
                src="/featured-projects/on-business-plan.png"
              />
              <PortfolioCard
                title={t("featuredProjects.watchello.title")}
                subtitle={t("featuredProjects.watchello.subtitle")}
                link={`/${currentLanguage}/featured-projects/watchello`}
                src="/featured-projects/watchello.png"
              />
              <PortfolioCard
                title={t("featuredProjects.projectin.title")}
                subtitle={t("featuredProjects.projectin.subtitle")}
                link={`/${currentLanguage}/featured-projects/projectin`}
                src="/featured-projects/projectin.png"
              />
            </div>
          </section>

          {/* Contact section */}
          <section className={styles.contactSection}>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.description")}</p>
            <FeedbackFrom />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
