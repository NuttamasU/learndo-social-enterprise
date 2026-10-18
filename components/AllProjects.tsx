
import { projects } from "../data/projects";
import Link from "next/link";

export default function AllProjects() {
  return (
    <section className="all-projects">
      <div className="all-projects-container">
        <div className="all-projects-heading">
          <h1>โครงการทั้งหมด</h1>
          <p>
            ทำความรู้จักกับโครงการและแนวทางการทำงานของเรา
            ที่มุ่งสร้างคุณค่าให้ชุมชนและสังคมในหลากหลายมิติ
          </p>
        </div>

        <div className="all-projects-list">
          {projects.map((project) => (
            <article className="all-project-card" key={project.title}>
              <div
                className="all-project-image"
                style={{
                  backgroundImage: `url("${project.image}")`,
                }}
                role="img"
                aria-label={project.title}
              />

              <div className="all-project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <Link
                    className="all-project-link"
                    href={project.href}
                    >
                    ดูรายละเอียด <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
