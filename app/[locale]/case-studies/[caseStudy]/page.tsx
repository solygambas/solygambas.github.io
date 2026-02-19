import { notFound } from "next/navigation";
import { getT } from "../../../i18n";
import type { Locale } from "../../../i18n/settings";
import { locales } from "../../../i18n/settings";
import PortfolioItem from "../../../../components/PortfolioItem";
import type { Metadata } from "next";

type CaseStudyKey = keyof typeof caseStudyKeys;

interface CaseStudyData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

const caseStudyKeys = {
  adevinta: "adevinta",
  "credit-agricole-group-infrastructure-platform":
    "credit-agricole-group-infrastructure-platform",
  "ho36-hostels": "ho36-hostels",
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  // Generate all combinations of locale + caseStudy
  return locales.flatMap((locale) =>
    Object.keys(caseStudyKeys).map((caseStudy) => ({
      locale,
      caseStudy,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; caseStudy: CaseStudyKey }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { locale, caseStudy } = resolvedParams;
  const t = await getT(locale, "common");

  if (!(caseStudy in caseStudyKeys)) {
    return { title: "Not Found" };
  }

  const dataRaw = t(`caseStudies.${caseStudyKeys[caseStudy]}`, {
    returnObjects: true,
  });
  const data = dataRaw as CaseStudyData;

  return {
    title: `${data.title} - ${data.subtitle}`,
    description: data.paragraphs[0],
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: Locale; caseStudy: CaseStudyKey }>;
}) {
  const resolvedParams = await params;
  const { locale, caseStudy } = resolvedParams;

  if (!(caseStudy in caseStudyKeys)) {
    notFound();
  }

  const t = await getT(locale, "common");
  const dataRaw = t(`caseStudies.${caseStudyKeys[caseStudy]}`, {
    returnObjects: true,
  });
  const data = dataRaw as CaseStudyData;

  const { title, subtitle, paragraphs } = data;

  return (
    <PortfolioItem
      title={`${title} - ${subtitle}`}
      paragraphs={paragraphs}
      src={`/case-studies/${caseStudy}.png`}
      alt={title}
    />
  );
}
