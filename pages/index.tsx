import Head from "next/head";
import { Kanit } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const kanitLight = Kanit({ subsets: ["latin"], weight: "300" });
const kanitMedium = Kanit({ subsets: ["latin"], weight: "500" });
const kanitBold = Kanit({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Solygambas</title>
        <meta
          name="description"
          content="Freelance Full-stack Web Developer: Node.js, React, React Native, JavaScript, WordPress, PHP, Python. Remote jobs only."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <header>
          <div className={styles.header}>
            <h1 className={kanitBold.className}>Solygambas</h1>
          </div>
        </header>
        <main className={styles.main}>
          <section className={styles.hero}>
            <div>
              <p className={kanitLight.className}>Hi, I’m Joachim</p>
              <h2 className={kanitMedium.className}>
                I’ve been building websites for almost 25 years
              </h2>
            </div>
            <Image
              src="/hero.png"
              alt="Man with dark hair and green eyes smiling"
              width={644}
              height={644}
            />
          </section>
        </main>
      </div>
    </>
  );
}
