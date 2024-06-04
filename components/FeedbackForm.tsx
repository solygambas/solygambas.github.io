import { useTranslation } from "next-i18next";
import styles from "../styles/FeedbackForm.module.css";

function FeedbackFrom() {
  const { t } = useTranslation("common");
  return (
    <form
      className={styles.contactForm}
      id="portfolio-feedback"
      action="https://formspree.io/f/xyyrqnpz"
      method="POST"
    >
      <div className={styles.formGroup}>
        <label htmlFor="name">{t("contact.name")}</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">{t("contact.email")}</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">{t("contact.message")}</label>
        <textarea id="message" name="message" rows={4} required></textarea>
      </div>
      <button type="submit">{t("contact.submit")}</button>
    </form>
  );
}
export default FeedbackFrom;
