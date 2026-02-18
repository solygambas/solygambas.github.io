import languageDetector from "../lib/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/LanguageSwitchLink.module.css";

interface LanguageSwitchLinkProps {
  locale: string;
  href?: string;
}

const LanguageSwitchLink = ({ locale, href }: LanguageSwitchLinkProps) => {
  const router = useRouter();

  let link = href ?? router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    const q = router.query[k];
    pName = pName.replace(`[${k}]`, Array.isArray(q) ? q[0] : q!);
  });
  if (locale) {
    link = href ? `/${locale}${href}` : pName;
  }

  return (
    <Link href={link} onClick={() => languageDetector.cache?.(locale)}>
      <button className={styles.button}>{locale.toUpperCase()}</button>
    </Link>
  );
};

export default LanguageSwitchLink;
