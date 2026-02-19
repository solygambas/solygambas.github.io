import { notFound } from "next/navigation";
import { getT } from "../../../i18n";
import type { Locale } from "../../../i18n/settings";
import { locales } from "../../../i18n/settings";
import PortfolioItem from "../../../../components/PortfolioItem";
import type { Metadata } from "next";

type FeaturedProjectKey = keyof typeof featuredProjectKeys;

interface FeaturedProjectData {
  title: string;
  subtitle: string;
  paragraphs: string[];
  url: string;
}

const featuredProjectKeys = {
  "on-business-plan": "on-business-plan",
  projectin: "projectin",
  watchello: "watchello",
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  // Generate all combinations of locale + project
  return locales.flatMap((locale) =>
    Object.keys(featuredProjectKeys).map((project) => ({
      locale,
      project,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; project: FeaturedProjectKey }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { locale, project } = resolvedParams;
  const t = await getT(locale, "common");

  if (!(project in featuredProjectKeys)) {
    return { title: "Not Found" };
  }

  const dataRaw = t(`featuredProjects.${featuredProjectKeys[project]}`, {
    returnObjects: true,
  });
  const data = dataRaw as FeaturedProjectData;

  return {
    title: `${data.title} - ${data.subtitle}`,
    description: data.paragraphs[0],
  };
}

export default async function FeaturedProjectPage({
  params,
}: {
  params: Promise<{ locale: Locale; project: FeaturedProjectKey }>;
}) {
  const resolvedParams = await params;
  const { locale, project } = resolvedParams;

  if (!(project in featuredProjectKeys)) {
    notFound();
  }

  const t = await getT(locale, "common");
  const dataRaw = t(`featuredProjects.${featuredProjectKeys[project]}`, {
    returnObjects: true,
  });
  const data = dataRaw as FeaturedProjectData;

  const { title, subtitle, paragraphs, url } = data;

  return (
    <PortfolioItem
      title={`${title} - ${subtitle}`}
      paragraphs={paragraphs}
      src={`/featured-projects/${project}.png`}
      alt={title}
      url={url}
    />
  );
}
