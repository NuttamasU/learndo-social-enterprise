
import Link from "next/link";
import type { ProjectDetailData } from "../../data/projectDetails";
import ProjectDetailHero from "./ProjectDetailHero";

type Props = {
  project: ProjectDetailData;
};

export default function ProjectDetail({ project }: Props) {
  return (
    <div className="project-detail">
      
      <ProjectDetailHero project={project} />

      {/* Alternating Content Sections */}
      <div className="project-detail-content">
        {project.sections.map((section, index) => (
          <section
            className={`project-story ${
              index % 2 === 1 ? "project-story-reverse" : ""
            }`}
            key={`${section.eyebrow}-${section.title}`}
          >
            <div className="project-story-image">
              <img src={section.image} alt={section.imageAlt} />
            </div>

            <div className="project-story-copy">
              <p className="project-story-eyebrow">
                {section.eyebrow}
              </p>

              <h2>{section.title}</h2>

              {section.description.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Optional External Website */}
        {project.externalUrl && (
          <div className="project-external-link">
            <h2>เรียนรู้เพิ่มเติม</h2>
            <p>
              ดูรายละเอียดและข้อมูลเพิ่มเติมเกี่ยวกับโครงการได้ที่เว็บไซต์
            </p>

            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.externalLabel ?? "เยี่ยมชมเว็บไซต์"}
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        )}

        {/* <div className="project-detail-footer-link">
          <Link href="/projects">← กลับไปดูโครงการทั้งหมด</Link>
        </div> */}
      </div>
    </div>
  );
}
