import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Contact, Collab } from "../../components/Sections";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Partners from "@/components/Partners";

export default function ContactPage() {
  return (
    <main
       className="site-shell" 
    >
      <Header />
      <div className="page-content">
        <Contact />
        <Collab />  
        <Partners />
      </div>
      <Footer />
    </main>
  );
}
