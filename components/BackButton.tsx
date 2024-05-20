import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "../styles/BackButton.module.css";

function BackButton() {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <button className={styles.button} onClick={() => router.back()}>
      {t("backButton.text")}
    </button>
  );
}
export default BackButton;
