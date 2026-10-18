
import Link from "next/link";
import { projects } from "../data/projects";

type RelatedProjectsProps = {
  currentHref: string;
};

export default function RelatedProjects({
  currentHref,
}: RelatedProjectsProps) {
  const relatedProjects = projects.filter(
    (project) => project.href !== currentHref
  );

  return (
    <section className="related-projects">
      <div className="related-projects-heading">
        <div>
          <p className="eyebrow">• OUR PROJECTS</p>
          <h2>โครงการอื่น ๆ ของเรา</h2>
          <p>
            สำรวจโครงการอื่น ๆ ที่เราร่วมสร้างคุณค่าให้ชุมชน
            และสังคมอย่างยั่งยืน
          </p>
        </div>

        <Link href="/projects">
          ดูโครงการทั้งหมด →
        </Link>
      </div>

      <div className="related-projects-grid">
        {relatedProjects.map((project) => (
          <article
            className="related-project-card"
            key={project.href}
          >
            <Link
              href={project.href}
              className="related-project-card-link"
              aria-label={`ดูรายละเอียดโครงการ ${project.title}`}
            >
              <div
                className="related-project-image"
                style={{
                  backgroundImage: `url("${project.image}")`,
                }}
                role="img"
                aria-label={project.title}
              />

              <div className="related-project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <span className="related-project-action">
                  ดูรายละเอียด <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
