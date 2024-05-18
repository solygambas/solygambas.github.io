import PortfolioItem from "../../../components/PortfolioItem";

function HoThirtySixHostels() {
  const title =
    "HO36 Hostels: Enhancing User Experience and Booking Integration";
  const paragraphs = [
    "Over the past decade, I've specialized in WordPress projects, often collaborating with first-time clients to align their goals with their budget constraints.",
    "One notable project was Ho36 Hostels, where I contributed to their website redesign. While WordPress allows autonomous users to achieve much independently, my role was to address lingering issues and add professional touches that enhance visitor experience.",
    "Another crucial aspect was integrating the Mews booking system. This integration streamlined the reservation process, allowing Ho36 Hostels, as an independent accommodation group, to avoid hefty commissions from third-party booking platforms.",
    "Collaborating closely with the marketing team, I gained insights into their business objectives and successfully implemented solutions within tight deadlines.",
  ];

  return (
    <PortfolioItem
      title={title}
      paragraphs={paragraphs}
      src="/case-studies/ho36-hostels.png"
      alt="HO36 Hostels"
    />
  );
}
export default HoThirtySixHostels;
