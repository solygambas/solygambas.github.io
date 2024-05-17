import Head from "next/head";
import Image from "next/image";
import BackButton from "./BackButton";
import styles from "../styles/CaseStudy.module.css";

type CaseStudyProps = {
  title: string;
  paragraphs: string[];
  src: string;
  alt: string;
};

function CaseStudy({ title, paragraphs, src, alt }: CaseStudyProps) {
  return (
    <div className={styles.caseStudy}>
      <Head>
        <title>{title}</title>
      </Head>
      <Image src={src} alt={alt} width={300} height={200} />
      <h3>{title}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <BackButton />
    </div>
  );
}
export default CaseStudy;
