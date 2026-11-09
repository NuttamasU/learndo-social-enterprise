
import Link from "next/link";
import { IconMapPin } from "@tabler/icons-react";
import type { ProjectDetailData } from "../../data/projectDetails";

type Props = {
  project: ProjectDetailData;
};

export default function ProjectDetailHero({ project }: Props) {
  return (
    <header className="inner-page-hero project-detail-hero">
      <div className="project-detail-hero-copy">
        <Link href="/projects" className="project-back">
          ← โครงการทั้งหมด
        </Link>

        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>

        <div className="project-location">
          <IconMapPin size={16} stroke={2} aria-hidden="true" />

          <span className="project-location-label">
            พื้นที่ดำเนินโครงการ :
          </span>

          <span>
            {project.location ?? "พื้นที่ดำเนินโครงการ"}
          </span>
        </div>
      </div>

      <div className="project-detail-hero-image">
        <img
          src={project.heroImage}
          alt={project.heroImageAlt}
        />
      </div>
    </header>
  );
}
