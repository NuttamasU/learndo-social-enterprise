
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AllProjects from "../../components/AllProjects";
import { Collab } from "../../components/Sections";

export default function ProjectsPage() {
  return (
    <main className="site-shell">
      <Header />
      <div className="page-content">
        <AllProjects />
      </div>
      <Collab />
      <Footer />
    </main>
  );
}
