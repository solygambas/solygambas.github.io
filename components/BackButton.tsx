"use client";

import { useRouter } from "next/navigation";
import { useT } from "../app/i18n/client";
import styles from "../styles/BackButton.module.css";

function BackButton() {
  const router = useRouter();
  const { t } = useT("common");
  return (
    <button
      className={`${styles.button} uiButton`}
      onClick={() => router.back()}
    >
      {t("backButton.text")}
    </button>
  );
}
export default BackButton;
