import { useRouter } from "next/router";
import styles from "../styles/BackButton.module.css";

function BackButton() {
  const router = useRouter();
  return (
    <button className={styles.button} onClick={() => router.back()}>
      Back
    </button>
  );
}
export default BackButton;
