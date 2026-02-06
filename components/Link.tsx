import Link from "next/link";
import { useRouter } from "next/router";

interface LinkComponentProps {
  children: React.ReactNode;
  skipLocaleHandling?: boolean;
  href?: string;
  locale?: string;
}

const LinkComponent = ({
  children,
  skipLocaleHandling,
  ...rest
}: LinkComponentProps) => {
  const router = useRouter();
  const rawLocale = rest.locale ?? (router.query.locale);
  const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale ?? "";

  let href = rest.href ?? router.asPath;
  if (href.startsWith("http")) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace("[locale]", locale);
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
