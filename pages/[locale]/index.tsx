import Head from "next/head";
import { Kanit } from "next/font/google";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };

export const kanitLight = Kanit({ subsets: ["latin"], weight: "300" });
export const kanitMedium = Kanit({ subsets: ["latin"], weight: "500" });
export const kanitBold = Kanit({ subsets: ["latin"], weight: "700" });

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
            <h1 className={kanitBold.className}>{t("title")}</h1>
          </div>
        </header>
        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroText}>
              <p className={kanitLight.className}>{t("hero.name")}</p>
              <h2 className={kanitMedium.className}>{t("hero.experience")}</h2>
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
                    href="https://twitter.com/solygambas"
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
              <Image src="/hero.jpg" alt={t("hero.alt") as string} fill />
            </div>
          </section>

          {/* Portfolio section */}
          <section className={styles.portfolio}>
            <h2 className={kanitBold.className}>Case Studies</h2>
            {/* Add portfolio items */}
            <div className={styles.portfolioItem}>
              <Link href={`${currentLanguage}/case-studies/adevinta`}>
                <h3 className={kanitMedium.className}>Adevinta</h3>
                <p className={kanitLight.className}>
                  Scaling Design Systems Across Europe
                </p>
                <Image
                  src="/case-studies/adevinta.png"
                  alt="Adevinta"
                  width={300}
                  height={200}
                />
              </Link>
            </div>
            <div className={styles.portfolioItem}>
              <Link
                href={`${currentLanguage}/case-studies/credit-agricole-group-infrastructure-platform`}
              >
                <h3 className={kanitMedium.className}>
                  Crédit Agricole Group Infrastructure Platform
                </h3>
                <p className={kanitLight.className}>Driving Cloud Innovation</p>
                <Image
                  src="/case-studies/credit-agricole-group-infrastructure-platform.png"
                  alt="Crédit Agricole Group Infrastructure Platform"
                  width={300}
                  height={200}
                />
              </Link>
            </div>
            <div className={styles.portfolioItem}>
              <Link href={`${currentLanguage}/case-studies/ho36-hostels`}>
                <h3 className={kanitMedium.className}>HO36 Hostels</h3>
                <p className={kanitLight.className}>
                  Enhancing User Experience and Booking Integration
                </p>
                <Image
                  src="/case-studies/ho36-hostels.png"
                  alt="HO36 Hostels"
                  width={300}
                  height={200}
                />
              </Link>
            </div>
          </section>

          {/* Skills section */}
          {/* <section className={styles.skills}>
            <h2 className={kanitMedium.className}>Projects</h2>
            <ul className={styles.skillList}>
              <li>Node.js</li>
              <li>React</li>
              <li>React Native</li>
              {/* Add more skills 
            </ul>
          </section> */}

          {/* Contact section */}
        </main>
        <Footer />
      </div>
    </>
  );
}
