
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">• OUR WORK</p>
          <h2>โครงการของเรา</h2>
          <p>
            หลากหลายโครงการที่เราลงมือทำ เพื่อชุมชนที่ยั่งยืน
          </p>
        </div>

        <a href="#contact">ดูโครงการทั้งหมด →</a>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
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

              <a href={project.href}>
                ดูรายละเอียด →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
