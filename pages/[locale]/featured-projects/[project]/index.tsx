import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import i18nextConfig from "../../../../next-i18next.config";
import PortfolioItem from "../../../../components/PortfolioItem";

type FeaturedProjectKey = keyof typeof featuredProjectKeys;

type FeaturedProjectData = {
  title: string;
  subtitle: string;
  paragraphs: string[];
  url: string;
};

const featuredProjectKeys = {
  "on-business-plan": "on-business-plan",
  projectin: "projectin",
  watchello: "watchello",
};

export const getStaticPaths: GetStaticPaths = async () => {
  const featuredProjectsKeys = Object.keys(featuredProjectKeys);

  const paths = i18nextConfig.i18n.locales.flatMap((locale: string) =>
    featuredProjectsKeys.map((project) => ({
      params: {
        locale,
        project,
      },
    }))
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locale = params?.locale as string;
  const project = params?.project as FeaturedProjectKey;

  if (!project || !(project in featuredProjectKeys)) {
    return {
      notFound: true,
    };
  }

  const i18nProps = await serverSideTranslations(locale, ["common"]);

  return {
    props: {
      ...i18nProps,
      project,
    },
  };
};

const FeaturedProjectPage = ({ project }: { project: FeaturedProjectKey }) => {
  const { t } = useTranslation("common");
  const { title, subtitle, paragraphs, url } = t(
    `featuredProjects.${featuredProjectKeys[project]}`,
    {
      returnObjects: true,
    }
  ) as FeaturedProjectData;

  return (
    <PortfolioItem
      title={`${title} - ${subtitle}`}
      paragraphs={paragraphs}
      src={`/featured-projects/${project}.png`}
      alt={title}
      url={url}
    />
  );
};

export default FeaturedProjectPage;
