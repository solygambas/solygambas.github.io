import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../../../next-i18next.config";
import PortfolioItem from "../../../../components/PortfolioItem";
import { PortfolioItemProps } from "../../../../components/PortfolioItem";

type FeaturedProjectKey = keyof typeof featuredProjects;

const featuredProjects = {
  "on-business-plan": {
    title: "On Business Plan: Empowering Digital Entrepreneurs",
    src: "/featured-projects/on-business-plan.png",
    alt: "On Business Plan",
    paragraphs: [
      "In 2012, while working as an investor in the digital economy, I received numerous requests for business plans. This inspired me to start posting blog content and eventually sell business plan templates. Over time, I expanded to offer a collection of ebooks, videos, and podcasts covering digital business models, WordPress website creation, and other entrepreneurship-related topics.",
      "These years were incredibly enriching. I shared insights from my digital ventures and engaged in enlightening exchanges with clients. I thrived as a consultant and mentor for entrepreneurs and startups, focusing on digital platforms, food & travel apps, and websites.",
      "Interestingly, this consulting practice increased the demand for my technical skills. First-time entrepreneurs, finding it difficult to rely on agencies or developers, began trusting me to build their websites. This also opened doors for full-time contracts with larger companies like Adevinta (leboncoin) and Crédit Agricole Group Infrastructure Platform.",
      "On Business Plan now boasts a vibrant community on YouTube and a blog in English updated twice weekly, where I share my business insights and tips for young developers and first-time entrepreneurs.",
    ],
    url: "https://www.onbusinessplan.com/",
  },
  projectin: {
    title: "ProjectIn: Mastering Time Management for Freelancers",
    src: "/featured-projects/projectin.png",
    alt: "ProjectIn",
    paragraphs: [
      "As a freelancer, managing your time effectively across multiple projects can be challenging. You often find yourself making progress on one task while feeling frustrated about pausing another. For years, I tracked my working hours manually, noting down how I spent each day.",
      "ProjectIn was born out of the need to streamline this process. The app allows you to log work sessions for each project and provides weekly and monthly metrics to help you understand how your time is spent.",
      "Interestingly, ProjectIn had several false starts. My first attempt was a project called Revery, built with Gatsby and Material UI. Despite being well-designed, it didn't align with my previous manual time-tracking methods, so I continued using my old system.",
      "The second attempt involved creating an app with Flutter, which I was learning at the time. Although I got it working, it still didn't meet my needs perfectly.",
      "The third attempt was successful. I used basic HTML, CSS, and vanilla JavaScript, along with local storage to avoid needing a database initially. I mimicked my old note-taking method, resulting in a tool that I began using daily.",
      "Over time, I improved ProjectIn with user management and a real-time database. Now, I rely on ProjectIn every day, and I've left behind the days of manually recording my work activities.",
    ],
    url: "https://projectin.netlify.app/",
  },
  watchello: {
    title: "Watchello: My Path from HTML to Machine Learning",
    src: "/featured-projects/watchello.png",
    alt: "Watchello",
    paragraphs: [
      "Watchello began as a small HTML and CSS project designed to practice working with grids, flexbox, and transitions. Eventually, I integrated a movie database API to fetch real movie data.",
      "At the time, I kept track of movies I wanted to watch and had watched using Evernote. This inspired me to transform the small movie app into a standalone application called Watchello.",
      "I implemented user management and a real-time database, enabling users to search for movies, add them to their watchlist, and track their viewing history.",
      "Over the months, I continuously added new features. Leveraging my machine learning experience, I developed a recommendation algorithm. Now, whenever users search for a movie, the app displays a compatibility percentage based on their viewing history.",
      "This project exemplifies the learning journey that comes from building your own tools. Starting small without a clear end goal, you gradually see opportunities to improve and expand. As a result, the project evolves alongside your growth as a developer.",
    ],
    url: "https://watchello.netlify.app/"
  },
};

export const getStaticPaths: GetStaticPaths = async () => {
  const featuredProjectsKeys = Object.keys(featuredProjects);

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

  const i18nProps = await serverSideTranslations(locale, ["common"]);

  const projectData = featuredProjects[project];

  if (!projectData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...i18nProps,
      title: projectData.title,
      paragraphs: projectData.paragraphs,
      src: projectData.src,
      alt: projectData.alt,
      url: projectData.url,
    },
  };
};

const FeaturedProjectPage = ({
  title,
  paragraphs,
  src,
  alt,
  url,
}: PortfolioItemProps) => {
  return (
    <PortfolioItem
      title={title}
      paragraphs={paragraphs}
      src={src}
      alt={alt}
      url={url}
    />
  );
};

export default FeaturedProjectPage;
