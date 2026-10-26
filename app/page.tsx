import Header from "../components/Header";
import Hero from "../components/Hero";
import { About, Belief, Collab } from "../components/Sections";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <About />
      
      <Projects />
      <Services />
      <Belief />
      <Collab />
      <Footer />
    </main>
  );
}
