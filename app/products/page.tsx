import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { About, Belief, Collab } from "../../components/Sections";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
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
      <h1>สินค้า</h1>
      <p>หน้านี้กำลังอยู่ระหว่างการพัฒนา</p>
    </main>
  );
}
