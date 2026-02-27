import Image from "next/image";
import styles from "../styles/CoverImage.module.css";

interface CoverImageProps {
  src: string;
  alt: string;
}

export default function CoverImage({ src, alt }: CoverImageProps) {
  return (
    <div className={styles.wrap}>
      <Image src={src} alt={alt} width={160} height={160} />
    </div>
  );
}
