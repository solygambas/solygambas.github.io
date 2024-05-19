import { GetStaticProps, GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../../../next-i18next.config";
import PortfolioItem from "../../../../components/PortfolioItem";
import { PortfolioItemProps } from "../../../../components/PortfolioItem";

type CaseStudyKey = keyof typeof caseStudies;

const caseStudies = {
  adevinta: {
    title: "Adevinta: Scaling Design Systems Across Europe",
    src: "/case-studies/adevinta.png",
    alt: "Adevinta",
    paragraphs: [
      "As a creative technologist, technical architect, and lead developer, I was the first developer to join the design team of 25 at leboncoin marketplace. My role involved auditing and enhancing the design system, collaborating closely with a dedicated designer.",
      "After a year of refining our processes, we seized the opportunity to expand our design system across Europe in collaboration with other Adevinta marketplaces—Kleinanzeigen in Germany, Milanuncios in Spain, Subito in Italy, and Marktplaats/2dehands in Benelux. Together with colleagues from Spain and Germany, we formed a specialized team of 20 members focused solely on the design system for web, native iOS, and native Android platforms.",
      "Our efforts were part of a broader initiative to consolidate our expertise and facilitate seamless brand transitions. To achieve this, I developed a Figma solution and implemented a pipeline to automate the delivery of icons and color tokens directly from Figma to developers.",
      "Starting with just a designer and a small team, we made remarkable progress in two years, impacting our entire group. Collaborating in an international setting was both rewarding and challenging. I particularly enjoyed empowering designers and developers to leverage our components for faster interface development.",
    ],
  },
  "credit-agricole-group-infrastructure-platform": {
    title:
      "Crédit Agricole Group Infrastructure Platform: Driving Cloud Innovation",
    src: "/case-studies/credit-agricole-group-infrastructure-platform.png",
    alt: "Crédit Agricole Group Infrastructure Platform",
    paragraphs: [
      "In my role as a full-stack lead developer and DevOps cloud expert, I spearheaded a squad tasked with developing an internal portal at Crédit Agricole Group Infrastructure Platform. This portal offered on-demand cloud computing services to all developers within the organization, allowing them to create virtual machines seamlessly.",
      "Our primary challenge was scaling the portal efficiently. Within just 6 months, we scaled from hosting 1,000 to 15,000 virtual servers. Collaborating with major cloud providers like Google Cloud, Microsoft Azure, and Amazon Web Services was exhilarating. It also provided insight into the future of technical infrastructure in the banking sector, despite encountering legacy constraints that enriched my understanding of architectural principles.",
      "Given the backend expertise of my teammates, I focused on establishing a design system. This system empowered backend developers to create portal interfaces effortlessly, even with minimal CSS and accessibility knowledge. Additionally, I led the frontend stack onboarding process to ensure smooth integration.",
      "Furthermore, as Crédit Agricole prioritizes its social impact, I had the privilege of mentoring two talented apprentices. Guiding them through the journey of becoming DevOps professionals was enlightening. Their enthusiasm and inquisitiveness not only enhanced their skills but also enriched my own learning experience.",
    ],
  },
  "ho36-hostels": {
    title: "HO36 Hostels: Enhancing User Experience and Booking Integration",
    src: "/case-studies/ho36-hostels.png",
    alt: "HO36 Hostels",
    paragraphs: [
      "Over the past decade, I've specialized in WordPress projects, often collaborating with first-time clients to align their goals with their budget constraints.",
      "One notable project was Ho36 Hostels, where I contributed to their website redesign. While WordPress allows autonomous users to achieve much independently, my role was to address lingering issues and add professional touches that enhance visitor experience.",
      "Another crucial aspect was integrating the Mews booking system. This integration streamlined the reservation process, allowing Ho36 Hostels, as an independent accommodation group, to avoid hefty commissions from third-party booking platforms.",
      "Collaborating closely with the marketing team, I gained insights into their business objectives and successfully implemented solutions within tight deadlines.",
    ],
  },
};

export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudiesKeys = Object.keys(caseStudies);

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

  const i18nProps = await serverSideTranslations(locale, ["common"]);

  const caseStudyData = caseStudies[caseStudy];

  if (!caseStudyData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...i18nProps,
      title: caseStudyData.title,
      paragraphs: caseStudyData.paragraphs,
      src: caseStudyData.src,
      alt: caseStudyData.alt,
    },
  };
};

const CaseStudyPage = ({ title, paragraphs, src, alt }: PortfolioItemProps) => {
  return (
    <PortfolioItem title={title} paragraphs={paragraphs} src={src} alt={alt} />
  );
};

export default CaseStudyPage;
