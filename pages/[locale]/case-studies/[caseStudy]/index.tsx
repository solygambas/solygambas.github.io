import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import i18nextConfig from "../../../../next-i18next.config";
import PortfolioItem from "../../../../components/PortfolioItem";

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
};

export const getStaticPaths: GetStaticPaths = () => {
  const caseStudiesKeys = Object.keys(caseStudyKeys);

  const paths = i18nextConfig.i18n.locales.flatMap((locale: string) =>
    caseStudiesKeys.map((caseStudy) => ({
      params: {
        locale,
        caseStudy,
      },
    }))
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = params?.locale as string;
  const caseStudy = params?.caseStudy as CaseStudyKey;

  if (!caseStudy || !(caseStudy in caseStudyKeys)) {
    return { notFound: true };
  }

  const i18nProps = await serverSideTranslations(locale, ["common"]);

  return {
    props: {
      ...i18nProps,
      caseStudy,
    },
  };
};

const CaseStudyPage = ({ caseStudy }: { caseStudy: CaseStudyKey }) => {
  const { t } = useTranslation("common");
  const data =
    t(`caseStudies.${caseStudyKeys[caseStudy]}`, {
      returnObjects: true,
    }) as unknown as CaseStudyData;
  const { title, subtitle, paragraphs } = data;

  return (
    <PortfolioItem
      title={`${title} - ${subtitle}`}
      paragraphs={paragraphs}
      src={`/case-studies/${caseStudy}.png`}
      alt={title}
    />
  );
};

export default CaseStudyPage;
