import PortfolioItem from "../../../components/PortfolioItem";

function Adevinta() {
  const title = "Adevinta: Scaling Design Systems Across Europe";
  const paragraphs = [
    "As a creative technologist, technical architect, and lead developer, I was the first developer to join the design team of 25 at leboncoin marketplace. My role involved auditing and enhancing the design system, collaborating closely with a dedicated designer.",
    "After a year of refining our processes, we seized the opportunity to expand our design system across Europe in collaboration with other Adevinta marketplaces—Kleinanzeigen in Germany, Milanuncios in Spain, Subito in Italy, and Marktplaats/2dehands in Benelux. Together with colleagues from Spain and Germany, we formed a specialized team of 20 members focused solely on the design system for web, native iOS, and native Android platforms.",
    "Our efforts were part of a broader initiative to consolidate our expertise and facilitate seamless brand transitions. To achieve this, I developed a Figma solution and implemented a pipeline to automate the delivery of icons and color tokens directly from Figma to developers.",
    "Starting with just a designer and a small team, we made remarkable progress in two years, impacting our entire group. Collaborating in an international setting was both rewarding and challenging. I particularly enjoyed empowering designers and developers to leverage our components for faster interface development.",
  ];
  return (
    <PortfolioItem
      title={title}
      paragraphs={paragraphs}
      src="/case-studies/adevinta.png"
      alt="Adevinta"
    />
  );
}
export default Adevinta;
