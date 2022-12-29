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
              <ul>
                <li>
                  <a
                    title="Check my LinkedIn profile"
                    href="https://bit.ly/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/linkedin.svg"
                      alt="LinkedIn logo"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="Check my Twitter profile"
                    href="https://twitter.com/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/twitter.svg"
                      alt="Twitter logo"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="Check my GitHub profile"
                    href="https://github.com/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/github.svg"
                      alt="GitHub logo"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="Check my CodePen profile"
                    href="https://codepen.io/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/codepen.svg"
                      alt="CodePen logo"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    title="Check my Dribbble profile"
                    href="https://dribbble.com/solygambas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="icons/dribbble.svg"
                      alt="Dribbble logo"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.image}>
              <Image
                src="/hero.png"
                alt="Man with dark hair and green eyes smiling"
                fill
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
