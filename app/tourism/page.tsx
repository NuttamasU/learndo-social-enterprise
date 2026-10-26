import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tourism from "../../components/Tourism";
import TourismCorporate from "@/components/TourismCorporate";
import TourismHero from "@/components/TourismHero";

export default function TourismPage() {
  return (
    <div className="site-shell">
      <Header />

      <div className="page-content">
        <TourismHero />
        <Tourism />
        <TourismCorporate />
      </div>
      <Footer />
    </div>
  );
}