import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type LinkComponentProps = {
  children: React.ReactNode;
  skipLocaleHandling?: boolean;
  href?: string;
  locale?: string;
};

const LinkComponent = ({
  children,
  skipLocaleHandling,
  ...rest
}: LinkComponentProps) => {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || "";

  let href = rest.href || router.asPath;
  if (href.indexOf("http") === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace("[locale]", locale as string);
  }

  return (
    <>
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    </>
  );
};

export default LinkComponent;
