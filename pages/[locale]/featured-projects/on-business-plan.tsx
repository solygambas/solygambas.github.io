import PortfolioItem from "../../../components/PortfolioItem";

function OnBusinessPlan() {
  const title = "On Business Plan: Empowering Digital Entrepreneurs";
  const paragraphs = [
    "In 2012, while working as an investor in the digital economy, I received numerous requests for business plans. This inspired me to start posting blog content and eventually sell business plan templates. Over time, I expanded to offer a collection of ebooks, videos, and podcasts covering digital business models, WordPress website creation, and other entrepreneurship-related topics.",
    "These years were incredibly enriching. I shared insights from my digital ventures and engaged in enlightening exchanges with clients. I thrived as a consultant and mentor for entrepreneurs and startups, focusing on digital platforms, food & travel apps, and websites.",
    "Interestingly, this consulting practice increased the demand for my technical skills. First-time entrepreneurs, finding it difficult to rely on agencies or developers, began trusting me to build their websites. This also opened doors for full-time contracts with larger companies like Adevinta (leboncoin) and Crédit Agricole Group Infrastructure Platform.",
    "On Business Plan now boasts a vibrant community on YouTube and a blog in English updated twice weekly, where I share my business insights and tips for young developers and first-time entrepreneurs.",
  ];
  return (
    <PortfolioItem
      title={title}
      paragraphs={paragraphs}
      src="/featured-projects/on-business-plan.png"
      alt="On Business Plan"
      url="https://www.onbusinessplan.com/"
    />
  );
}
export default OnBusinessPlan;
