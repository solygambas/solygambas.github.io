"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/LanguageSwitchLink.module.css";

interface LanguageSwitchLinkProps {
  locale: string;
  href?: string;
}

const LanguageSwitchLink = ({ locale, href }: LanguageSwitchLinkProps) => {
  const params = useParams();
  const pathname = usePathname();

  // Replace current locale in pathname with new locale
  const currentLocale = params?.locale as string;
  const newPathname = (pathname ?? "").replace(
    `/${currentLocale}`,
    `/${locale}`
  );
  const link = href ? `/${locale}${href}` : newPathname;

  const handleClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", locale);
    }
  };

  return (
    <Link href={link} onClick={handleClick}>
      <button className={styles.button}>{locale.toUpperCase()}</button>
    </Link>
  );
};

export default LanguageSwitchLink;
