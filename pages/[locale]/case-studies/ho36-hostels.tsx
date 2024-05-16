import Head from "next/head";
import Image from "next/image";
import { kanitBold, kanitLight } from "..";
import BackButton from "../../../components/BackButton";
import styles from "../../../styles/CaseStudy.module.css";

function HoThirtySixHostels() {
  const title =
    "HO36 Hostels: Enhancing User Experience and Booking Integration";
  return (
    <div className={styles.caseStudy}>
      <Head>
        <title>{title}</title>
      </Head>
      <Image
        src="/case-studies/ho36-hostels.png"
        alt="HO36 Hostels"
        width={300}
        height={200}
      />
      <h3 className={kanitBold.className}>{title}</h3>
      <p className={kanitLight.className}>
        Over the past decade, I've specialized in WordPress projects, often
        collaborating with first-time clients to align their goals with their
        budget constraints.
      </p>

      <p className={kanitLight.className}>
        One notable project was Ho36 Hostels, where I contributed to their
        website redesign. While WordPress allows autonomous users to achieve
        much independently, my role was to address lingering issues and add
        professional touches that enhance visitor experience.
      </p>

      <p className={kanitLight.className}>
        Another crucial aspect was integrating the Mews booking system. This
        integration streamlined the reservation process, allowing independent
        accommodations to avoid hefty commissions from third-party booking
        platforms.
      </p>

      <p className={kanitLight.className}>
        Collaborating closely with the marketing team, I gained insights into
        their business objectives and successfully implemented solutions within
        tight deadlines.
      </p>
      <BackButton />
    </div>
  );
}
export default HoThirtySixHostels;
