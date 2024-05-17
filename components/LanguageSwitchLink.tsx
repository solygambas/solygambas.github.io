import languageDetector from "../lib/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";

type LanguageSwitchLinkProps = {
  locale: string;
  href?: string;
};

const LanguageSwitchLink = ({ locale, href }: LanguageSwitchLinkProps) => {
  const router = useRouter();

  let link = href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale as string);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k] as string);
  });
  if (locale) {
    link = href ? `/${locale}${href}` : pName;
  }

  return (
    <Link
      href={link}
      onClick={() => languageDetector.cache && languageDetector.cache(locale)}
    >
      <button
        style={{
          cursor: "pointer",
          padding: "0.25rem 0.5rem",
          backgroundColor: "var(--background-alternate-color)",
          color: "var(--foreground-color)",
          border: "none",
        }}
      >
        {locale.toUpperCase()}
      </button>
    </Link>
  );
};

export default LanguageSwitchLink;
