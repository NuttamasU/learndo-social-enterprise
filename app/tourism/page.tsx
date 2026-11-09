import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tourism from "../../components/tourism/Tourism";
import TourismCorporate from "@/components/tourism/TourismCorporate";
import TourismHero from "@/components/tourism/TourismHero";

export default function TourismPage() {
  return (
    <main className="site-shell">
      <Header />
      <div className="page-content">
        <TourismHero />
        <Tourism />
        <TourismCorporate />
      </div>
      <Footer />
    </main>
  );
}