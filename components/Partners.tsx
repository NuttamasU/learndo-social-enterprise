
import Image from "next/image";

const partners = [
  { name: "NIA", logo: "/images/partners/nia.png" },
  { name: "SET Social Impact", logo: "/images/partners/set-social-impact.png" },
  { name: "Chulalongkorn University", logo: "/images/partners/chula.png" },
  { name: "Partner 4", logo: "/images/partners/partner-04.png" },
  { name: "บัณฑิต", logo: "/images/partners/partner-05.png" },
  { name: "บพท.", logo: "/images/partners/pmua.png" },
  { name: "TED Fund", logo: "/images/partners/ted-fund.png" },
  { name: "Market Scaling Up", logo: "/images/partners/market-scaling-up.png" },
  { name: "Sasin School of Management", logo: "/images/partners/sasin.png" },
  { name: "KMUTT", logo: "/images/partners/kmutt.png" },
  { name: "Enjoy Lab", logo: "/images/partners/enjoy-lab.png" },
  { name: "CODI", logo: "/images/partners/codi.png" },
  { name: "สสส.", logo: "/images/partners/thaihealth.png" },
  { name: "หน่วยงานภาคี", logo: "/images/partners/partner-13.png" },
  { name: "InnoPhytoTech", logo: "/images/partners/innophytotech.png" },
  { name: "TK Park", logo: "/images/partners/tk-park.png" },
  { name: "Partner 17", logo: "/images/partners/partner-17.png" },
];

export default function Partners() {
  return (
    <section className="partners-section" aria-labelledby="partners-title">
      <div className="partners-container">
        <div className="partners-heading">
          <span className="partners-eyebrow">OUR NETWORK</span>
          <h2 id="partners-title">Partner</h2>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-item" key={partner.name}>
              <div className="partner-logo">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 480px) 40vw, (max-width: 768px) 25vw, 180px"
                  className="partner-logo-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
