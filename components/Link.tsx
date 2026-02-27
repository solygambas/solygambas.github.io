"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import type { Locale } from "../app/i18n/settings";

interface LinkComponentProps {
  children: React.ReactNode;
  skipLocaleHandling?: boolean;
  href?: string;
  locale?: string;
  className?: string;
}

const LinkComponent = ({
  children,
  skipLocaleHandling,
  ...rest
}: LinkComponentProps) => {
  const params = useParams();
  const pathname = usePathname();
  const locale = (rest.locale ?? params?.locale ?? "") as Locale;

  let href = rest.href ?? pathname ?? "";
  if (href?.startsWith("http")) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling && href) {
    href = href ? `/${locale}${href}` : (pathname ?? "");
  }

  return (
    <Link href={href} className={rest.className}>
      {children}
    </Link>
  );
};

export default LinkComponent;
