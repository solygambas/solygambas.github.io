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
    <div>
      <Link href={link}>
        <Image src={src} alt={title} width={300} height={200} />
        <div className={styles.portfolioCard}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
