import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import BackButton from "./BackButton";
import styles from "../styles/PortfolioItem.module.css";

interface PortfolioItemProps {
  title: string;
  paragraphs: string[];
  src: string;
  alt: string;
  url?: string;
}

function PortfolioItem({
  title,
  paragraphs,
  src,
  alt,
  url,
}: PortfolioItemProps) {
  const { t } = useTranslation("common");
  return (
    <div className={styles.portfolioItem}>
      <Head>
        <title>{title}</title>
      </Head>
      <Image src={src} alt={alt} width={300} height={200} />
      <h3>{title}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {url && (
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {t("visitButton.text", { website: alt })}
          </a>
        </p>
      )}
      <BackButton />
    </div>
  );
}
export default PortfolioItem;
