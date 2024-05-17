import { GetStaticPropsContext, GetStaticPathsResult } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../next-i18next.config";

type Params = {
  locale: string;
};

export const getI18nPaths = (): { params: Params }[] =>
  i18nextConfig.i18n.locales.map((lng: string) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = (): GetStaticPathsResult => ({
  fallback: false,
  paths: getI18nPaths(),
});

export async function getI18nProps(
  ctx: GetStaticPropsContext,
  ns: string[] = ["common"]
) {
  const locale = ctx?.params?.locale as string;
  let props = {
    ...(await serverSideTranslations(locale, ns)),
  };
  return props;
}

export function makeStaticProps(ns: string[] = ["common"]) {
  return async function getStaticProps(ctx: GetStaticPropsContext) {
    return {
      props: await getI18nProps(ctx, ns),
    };
  };
}
