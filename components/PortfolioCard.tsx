import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PortfolioCard.module.css";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  link: string;
  src: string;
}

const PortfolioCard = ({ title, subtitle, link, src }: PortfolioCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={link} className={styles.cardLink}>
        <div className={styles.cardMedia}>
          <Image src={src} alt={title} width={300} height={200} />
        </div>
        <div className={styles.portfolioCard}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
