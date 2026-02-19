"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import Button from "./Button";

interface LanguageSwitchLinkProps {
  locale: string;
  href?: string;
}

const LanguageSwitchLink = ({ locale, href }: LanguageSwitchLinkProps) => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

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
    router.push(link);
  };

  return (
    <Button variant="language" onClick={handleClick}>
      {locale.toUpperCase()}
    </Button>
  );
};

export default LanguageSwitchLink;
