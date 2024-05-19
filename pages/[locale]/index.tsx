import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import SocialMediaIcon from "../../components/SocialMediaIcon";
import PortfolioCard from "../../components/PortfolioCard";

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
            <h2>Case Studies</h2>
            <div className={styles.portfolioContainerGrid}>
              <PortfolioCard
                title="Adevinta"
                subtitle="Scaling Design Systems Across Europe"
                link={`/${currentLanguage}/case-studies/adevinta`}
                src="/case-studies/adevinta.png"
              />
              <PortfolioCard
                title="Crédit Agricole Group Infrastructure Platform"
                subtitle="Driving Cloud Innovation"
                link={`/${currentLanguage}/case-studies/credit-agricole-group-infrastructure-platform`}
                src="/case-studies/credit-agricole-group-infrastructure-platform.png"
              />
              <PortfolioCard
                title="HO36 Hostels"
                subtitle="Enhancing User Experience and Booking Integration"
                link={`/${currentLanguage}/case-studies/ho36-hostels`}
                src="/case-studies/ho36-hostels.png"
              />
            </div>
          </section>

          {/* Project section */}
          <section className={styles.portfolioContainer}>
            <h2>Featured Projects</h2>
            <div className={styles.portfolioContainerGrid}>
              <PortfolioCard
                title="On Business Plan"
                subtitle="Empowering Digital Entrepreneurs"
                link={`/${currentLanguage}/featured-projects/on-business-plan`}
                src="/featured-projects/on-business-plan.png"
              />
              <PortfolioCard
                title="Watchello"
                subtitle="My Path from HTML to Machine Learning"
                link={`/${currentLanguage}/featured-projects/watchello`}
                src="/featured-projects/watchello.png"
              />
              <PortfolioCard
                title="ProjectIn"
                subtitle="Mastering Time Management for Freelancers"
                link={`/${currentLanguage}/featured-projects/projectin`}
                src="/featured-projects/projectin.png"
              />
            </div>
          </section>

          {/* Contact section */}
        </div>
        <Footer />
      </div>
    </>
  );
}
