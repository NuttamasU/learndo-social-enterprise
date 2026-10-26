
import Link from "next/link";
import { projects } from "../data/projects";


const projectSections = [
  {
    id: "community-waste",
    title: "จัดการขยะชุมชน",
    eyebrow: "COMMUNITY WASTE MANAGEMENT",
    description:
      "ส่งเสริมการคัดแยกขยะและการมีส่วนร่วมของคนในพื้นที่ เพื่อให้ชุมชนดูแลสิ่งแวดล้อมได้อย่างต่อเนื่อง",
    audience: "ชุมชน · อบต. · หน่วยงานท้องถิ่น",
    category: "waste",
  },
  {
    id: "community-learning",
    title: "อบรมและพัฒนาทักษะชุมชน",
    eyebrow: "COMMUNITY LEARNING",
    description:
      "ร่วมเรียนรู้และพัฒนาทักษะจากทรัพยากรในท้องถิ่น เพื่อต่อยอดองค์ความรู้สู่การลงมือทำ",
    audience: "ชุมชน · เครือข่ายความร่วมมือ",
    category: "training",
  },
  {
    id: "local-knowledge",
    title: "อาหารและภูมิปัญญาท้องถิ่น",
    eyebrow: "LOCAL FOOD & WISDOM",
    description:
      "ถ่ายทอดเรื่องราว วัตถุดิบ และภูมิปัญญาของชุมชน พร้อมต่อยอดคุณค่าให้เกิดประโยชน์",
    audience: "ชุมชน · ผู้สนใจ · ผู้ประกอบการ",
    category: "local-food",
  },
];

const impactGoals = [
  {
    number: "01",
    name: "ขจัดความยากจน",
    en: "No Poverty",
  },
  {
    number: "08",
    name: "งานที่มีคุณค่าและการเติบโตทางเศรษฐกิจ",
    en: "Decent Work and Economic Growth",
  },
  {
    number: "11",
    name: "เมืองและชุมชนที่ยั่งยืน",
    en: "Sustainable Cities and Communities",
  },
  {
    number: "12",
    name: "การผลิตและการบริโภคที่ยั่งยืน",
    en: "Responsible Consumption and Production",
  },
  {
    number: "13",
    name: "การรับมือการเปลี่ยนแปลงสภาพภูมิอากาศ",
    en: "Climate Action",
  },
  {
    number: "17",
    name: "ความร่วมมือเพื่อการพัฒนาที่ยั่งยืน",
    en: "Partnerships for the Goals",
  },
];

export default function AllProjects() {
  return (
    <main className="all-projects">
      <div className="all-projects-container">
        {/* Page heading */}
        <header className="all-projects-heading">
          <span className="projects-eyebrow">
            OUR WORK & IMPACT
          </span>

          <h1>โครงการทั้งหมด</h1>

          <p>
            เราทำงานร่วมกับชุมชนผ่านการท่องเที่ยว การจัดการสิ่งแวดล้อม
            และการพัฒนาทักษะ เพื่อสร้างโอกาสและคุณค่าที่ยั่งยืน
          </p>
        </header>

        {/* Project categories */}
        {projectSections.map((section) => {
          const sectionProjects = projects.filter(
            (project) =>
              "category" in project &&
              project.category === section.category
          );

          return (
            <section
              className="project-section"
              id={section.id}
              key={section.id}
            >
              <div className="project-section__heading">
                <div>
                  <span className="projects-eyebrow">
                    {section.eyebrow}
                  </span>

                  <h2>{section.title}</h2>

                  <p>{section.description}</p>
                </div>

                <span className="project-section__audience">
                  {section.audience}
                </span>
              </div>

              {sectionProjects.length > 0 ? (
                <div className="all-projects-list">
                  {sectionProjects.map((project) => (
                    <article
                      className="all-project-card"
                      key={project.title}
                    >
                      <Link
                        href={project.href}
                        className="all-project-card-link"
                        aria-label={`ดูรายละเอียดโครงการ ${project.title}`}
                      >
                        <div
                          className="all-project-image"
                          style={{
                            backgroundImage: `url("${project.image}")`,
                          }}
                          role="img"
                          aria-label={project.title}
                        />

                        <div className="all-project-content">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          
                          {project.sdgs && project.sdgs.length > 0 && (
                            <div
                              className="project-sdg-tags"
                              aria-label="เป้าหมายการพัฒนาที่ยั่งยืนที่เกี่ยวข้อง"
                            >
                              {project.sdgs.map((sdg) => (
                                <span className="project-sdg-tag" key={sdg}>
                                  SDG {sdg}
                                </span>
                              ))}
                            </div>
                          )}

                          <span className="all-project-link">
                            ดูรายละเอียด{" "}
                            <span aria-hidden="true">→</span>
                          </span>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="project-section__empty">
                  กำลังรวบรวมเรื่องราวและรายละเอียดโครงการในหมวดนี้
                </p>
              )}
            </section>
          );
        })}

        {/* Social impact */}
        <section
          className="projects-impact"
          id="social-impact"
        >
          <div className="projects-impact__intro">
            <span className="projects-eyebrow">
              SOCIAL IMPACT & SDGs
            </span>

            <h2>
              สร้างคุณค่าที่มากกว่าโครงการ
            </h2>

            <p>
              เราให้ความสำคัญกับการเปลี่ยนแปลงที่เกิดขึ้นกับชุมชน
              ผู้คน และสิ่งแวดล้อม โดยเชื่อมโยงแนวทางการทำงาน
              กับเป้าหมายการพัฒนาที่ยั่งยืนของสหประชาชาติ (SDGs)
            </p>
          </div>

          <div className="projects-impact__statement">
            <span className="projects-impact__number">
              17
            </span>

            <div>
              <h3>เป้าหมายการพัฒนาที่ยั่งยืน</h3>
              <p>
                Sustainable Development Goals
              </p>
            </div>
          </div>

          <div className="projects-impact__goals">
            {impactGoals.map((goal) => (
              <article
                className="projects-impact__goal"
                key={goal.number}
              >
                <span className="projects-impact__goal-number">
                  SDG {goal.number}
                </span>

                <h3>{goal.name}</h3>

                <p>{goal.en}</p>
              </article>
            ))}
          </div>

          <p className="projects-impact__note">
            เป้าหมายข้างต้นเป็นตัวอย่างของ SDGs ที่อาจเกี่ยวข้องกับแนวทาง
            การทำงานของ LearnDo ต้องตรวจสอบความเชื่อมโยงกับแต่ละโครงการ
            และข้อมูลผลลัพธ์ก่อนนำเสนอเป็นผลกระทบที่เกิดขึ้นจริง
          </p>
        </section>
      </div>
    </main>
  );
}
