
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProjectDetail from "../../../components/ProjectDetail";
import RelatedProjects from "../../../components/RelatedProjects";
import { projectDetails } from "../../../data/projectDetails";
import { projects } from "../../../data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  const currentProject = projects.find(
    (item) => item.href === `/projects/${slug}`
  );

  return (
    <main className="site-shell">
      <Header />

      <div className="page-content">
        <ProjectDetail project={project} />
      </div>

      {currentProject && (
        <RelatedProjects currentHref={currentProject.href} />
      )}

      <Footer />
    </main>
  );
}
