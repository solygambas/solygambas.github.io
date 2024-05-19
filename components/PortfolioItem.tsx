import Head from "next/head";
import Image from "next/image";
import BackButton from "./BackButton";
import styles from "../styles/PortfolioItem.module.css";

export type PortfolioItemProps = {
  title: string;
  paragraphs: string[];
  src: string;
  alt: string;
  url?: string;
};

function PortfolioItem({
  title,
  paragraphs,
  src,
  alt,
  url,
}: PortfolioItemProps) {
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
            Visit {alt}
          </a>
        </p>
      )}
      <BackButton />
    </div>
  );
}
export default PortfolioItem;
