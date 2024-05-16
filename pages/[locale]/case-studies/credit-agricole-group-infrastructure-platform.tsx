import Head from "next/head";
import Image from "next/image";
import { kanitBold, kanitLight } from "..";

function Cagip() {
  const title =
    "Crédit Agricole Group Infrastructure Platform: Driving Cloud Innovation";
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Image
        src="/case-studies/credit-agricole-group-infrastructure-platform.png"
        alt="Crédit Agricole Group Infrastructure Platform"
        width={300}
        height={200}
      />
      <h3 className={kanitBold.className}>{title}</h3>
      <p className={kanitLight.className}>
        In my role as a full-stack lead developer and DevOps cloud expert, I
        spearheaded a squad tasked with developing an internal portal at Crédit
        Agricole Group Infrastructure Platform. This portal offered on-demand
        cloud computing services to all developers within the organization,
        allowing them to create virtual machines seamlessly.
      </p>

      <p className={kanitLight.className}>
        Our primary challenge was scaling the portal efficiently. Within just 6
        months, we scaled from hosting 1,000 to 15,000 virtual servers.
        Collaborating with major cloud providers like Google Cloud, Microsoft
        Azure, and Amazon Web Services was exhilarating. It also provided
        insight into the future of technical infrastructure in the banking
        sector, despite encountering legacy constraints that enriched my
        understanding of architectural principles.
      </p>

      <p className={kanitLight.className}>
        Given the backend expertise of my teammates, I focused on establishing a
        design system. This system empowered backend developers to create portal
        interfaces effortlessly, even with minimal CSS and accessibility
        knowledge. Additionally, I led the frontend stack onboarding process to
        ensure smooth integration.
      </p>

      <p className={kanitLight.className}>
        Furthermore, as Crédit Agricole prioritizes its social impact, I had the
        privilege of mentoring two talented apprentices. Guiding them through
        the journey of becoming DevOps professionals was enlightening. Their
        enthusiasm and inquisitiveness not only enhanced their skills but also
        enriched my own learning experience.
      </p>
    </div>
  );
}
export default Cagip;
