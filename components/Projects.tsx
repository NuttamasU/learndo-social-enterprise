
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="project" className="project">
      <div className="section-heading">
        <div>
          <p className="eyebrow">• OUR PROJECTS</p>
          <h2>โครงการของเรา</h2>
          <p>
            หลากหลายโครงการที่เราลงมือทำ เพื่อชุมชนที่ยั่งยืน
          </p>
        </div>

        <Link href="/projects">ดูโครงการทั้งหมด →</Link>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <Link
              href={project.href}
              className="project-card-link"
              aria-label={`ดูรายละเอียดโครงการ ${project.title}`}
            >
              <div
                className="project-image"
                style={{
                  backgroundImage: `url("${project.image}")`,
                }}
                role="img"
                aria-label={project.title}
              />

              <div className="card-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <span className="project-card-action">
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
