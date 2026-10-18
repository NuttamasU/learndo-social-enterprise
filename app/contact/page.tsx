import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Contact, Collab } from "../../components/Sections";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px 5% 40px",
        background: "#fbf8e9",
        color: "#164f1e",
      }}
    >
      <Header />
      <Contact />
      <Collab />
    </main>
  );
}
