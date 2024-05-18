import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import Link from "next/link";

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
                <li>
                  <a
                    title={
                      t("hero.brand.social", { brand: "LinkedIn" }) as string
                    }
                    href="https://bit.ly/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/linkedin.svg"
                      alt={t("hero.brand.alt", { brand: "LinkedIn" }) as string}
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title={t("hero.brand.social", { brand: "X" }) as string}
                    href="https://x.com/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/x.svg"
                      alt={t("hero.brand.alt", { brand: "X" }) as string}
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title={
                      t("hero.brand.social", { brand: "GitHub" }) as string
                    }
                    href="https://github.com/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/github.svg"
                      alt={t("hero.brand.alt", { brand: "GitHub" }) as string}
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title={
                      t("hero.brand.social", { brand: "CodePen" }) as string
                    }
                    href="https://codepen.io/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/codepen.svg"
                      alt={t("hero.brand.alt", { brand: "CodePen" }) as string}
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title={
                      t("hero.brand.social", { brand: "Dribbble" }) as string
                    }
                    href="https://dribbble.com/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/dribbble.svg"
                      alt={t("hero.brand.alt", { brand: "Dribbble" }) as string}
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title={
                      t("hero.brand.social", {
                        brand: "Google Cloud Skills",
                      }) as string
                    }
                    href="https://bit.ly/googlecloudskills-solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/google-cloud.svg"
                      alt={
                        t("hero.brand.alt", {
                          brand: "Google Cloud Skills",
                        }) as string
                      }
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
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
              <div className={styles.portfolioContainerItem}>
                <Link href={`${currentLanguage}/case-studies/adevinta`}>
                  <Image
                    src="/case-studies/adevinta.png"
                    alt="Adevinta"
                    width={300}
                    height={200}
                  />
                  <h3>Adevinta</h3>
                  <p>Scaling Design Systems Across Europe</p>
                </Link>
              </div>
              <div className={styles.portfolioContainerItem}>
                <Link
                  href={`${currentLanguage}/case-studies/credit-agricole-group-infrastructure-platform`}
                >
                  <Image
                    src="/case-studies/credit-agricole-group-infrastructure-platform.png"
                    alt="Crédit Agricole Group Infrastructure Platform"
                    width={300}
                    height={200}
                  />
                  <h3>Crédit Agricole Group Infrastructure Platform</h3>
                  <p>Driving Cloud Innovation</p>
                </Link>
              </div>
              <div className={styles.portfolioContainerItem}>
                <Link href={`${currentLanguage}/case-studies/ho36-hostels`}>
                  <Image
                    src="/case-studies/ho36-hostels.png"
                    alt="HO36 Hostels"
                    width={300}
                    height={200}
                  />
                  <h3>HO36 Hostels</h3>
                  <p>Enhancing User Experience and Booking Integration</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Project section */}
          <section className={styles.portfolioContainer}>
            <h2>Featured Projects</h2>
            <div className={styles.portfolioContainerGrid}>
              <div className={styles.portfolioContainerItem}>
                <Link
                  href={`${currentLanguage}/featured-projects/on-business-plan`}
                >
                  <Image
                    src="/featured-projects/on-business-plan.png"
                    alt="On Business Plan"
                    width={300}
                    height={200}
                  />
                  <h3>On Business Plan</h3>
                  <p>Empowering Digital Entrepreneurs</p>
                </Link>
              </div>
              <div className={styles.portfolioContainerItem}>
                <Link href={`${currentLanguage}/featured-projects/watchello`}>
                  <Image
                    src="/featured-projects/watchello.png"
                    alt="Watchello"
                    width={300}
                    height={200}
                  />
                  <h3>Watchello</h3>
                  <p>My Path from HTML to Machine Learning</p>
                </Link>
              </div>
              <div className={styles.portfolioContainerItem}>
                <Link href={`${currentLanguage}/featured-projects/projectin`}>
                  <Image
                    src="/featured-projects/projectin.png"
                    alt="ProjectIn"
                    width={300}
                    height={200}
                  />
                  <h3>ProjectIn</h3>
                  <p>Mastering Time Management for Freelancers</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Contact section */}
        </div>
        <Footer />
      </div>
    </>
  );
}
