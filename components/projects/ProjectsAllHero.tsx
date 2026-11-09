interface ProjectsAllHeroProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export default function ProjectsAllHero({
  eyebrow = "OUR WORK & IMPACT",
  title = "โครงการทั้งหมด",
  description = "เราทำงานร่วมกับชุมชนเพื่อสร้างการเปลี่ยนแปลงที่ดีให้กับผู้คน สังคม และสิ่งแวดล้อม ผ่านโครงการที่มุ่งเน้นการพัฒนาอย่างยั่งยืน",
}: ProjectsAllHeroProps) {
  return (
    <section className="projects-all-hero">
      <div className="projects-all-hero__inner">
        <span className="projects-all-hero__eyebrow">
          {eyebrow}
        </span>

        <h1>{title}</h1>

        <p>{description}</p>
      </div>
    </section>
  );
}