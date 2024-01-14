import Head from "next/head";
import { Kanit } from "next/font/google";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };

const kanitLight = Kanit({ subsets: ["latin"], weight: "300" });
const kanitMedium = Kanit({ subsets: ["latin"], weight: "500" });
const kanitBold = Kanit({ subsets: ["latin"], weight: "700" });

export default function Home() {
  const { t } = useTranslation("common");
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
              <ul>
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
        </main>
        <Footer />
      </div>
    </>
  );
}
