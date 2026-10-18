
import Link from "next/link";
import type { ProjectDetailData } from "../data/projectDetails";

type Props = {
  project: ProjectDetailData;
};

export default function ProjectDetail({ project }: Props) {
  return (
    <div className="project-detail">
      {/* Project Hero */}
      <header className="project-detail-hero">
        <div className="project-detail-hero-copy">
          <Link href="/projects" className="project-back">
            ← โครงการทั้งหมด
          </Link>

          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>

          
            <div className="project-location">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span className="project-location-label">
                    พื้นที่ดำเนินโครงการ :
                </span>

                <span>
                    {project.location ?? "พื้นที่ดำเนินโครงการ"}
                </span>
            </div>

        </div>

        <div className="project-detail-hero-image">
          <img src={project.heroImage} alt={project.heroImageAlt} />
        </div>
      </header>

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
