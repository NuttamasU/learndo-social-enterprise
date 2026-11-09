
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AllProjects from "../../components/projects/ProjectsAll";
import { Collab } from "../../components/Sections";
import ProjectsAllHero from "@/components/projects/ProjectsAllHero";

export default function ProjectsPage() {
  return (
    <main className="site-shell">
      <Header />
      <div className="page-content">
        <ProjectsAllHero />
        <AllProjects />
      </div>
      <Collab />
      <Footer />
    </main>
  );
}
