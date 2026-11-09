
"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "../../data/projects";
import Image from "next/image";

const projectSections = [
  {
    id: "community-waste",
    title: "จัดการขยะชุมชน",
    eyebrow: "COMMUNITY WASTE MANAGEMENT",
    description:
      "ส่งเสริมการคัดแยกขยะและการมีส่วนร่วมของคนในพื้นที่ เพื่อให้ชุมชนดูแลสิ่งแวดล้อมได้อย่างต่อเนื่อง",
    // highlights: [
    //   "ส่งเสริมการคัดแยกและจัดการขยะในชุมชน",
    //   "สร้างการมีส่วนร่วมในการดูแลสิ่งแวดล้อม",
    //   "สนับสนุนความร่วมมือระหว่างชุมชนและหน่วยงานท้องถิ่น",
    // ],
    audience: "ชุมชน · อบต. · หน่วยงานท้องถิ่น",
    category: "waste",
  },
  {
    id: "community-learning",
    title: "อบรมและพัฒนาทักษะชุมชน",
    eyebrow: "COMMUNITY LEARNING",
    description:
      "ร่วมเรียนรู้และพัฒนาทักษะจากทรัพยากรในท้องถิ่น เพื่อต่อยอดองค์ความรู้สู่การลงมือทำ",
    // highlights: [
    //   "จัดกิจกรรมเรียนรู้และอบรมทักษะ",
    //   "ต่อยอดทรัพยากรและองค์ความรู้ในท้องถิ่น",
    //   "ส่งเสริมการนำความรู้ไปใช้ได้จริง",
    // ],
    audience: "ชุมชน · เครือข่ายความร่วมมือ",
    category: "training",
  },
  {
    id: "local-knowledge",
    title: "อาหารและภูมิปัญญาท้องถิ่น",
    eyebrow: "LOCAL FOOD & WISDOM",
    description:
      "ถ่ายทอดเรื่องราว วัตถุดิบ และภูมิปัญญาของชุมชน พร้อมต่อยอดคุณค่าให้เกิดประโยชน์",
    // highlights: [
    //   "นำเสนอวัตถุดิบและเรื่องราวจากชุมชน",
    //   "ส่งเสริมการสืบสานภูมิปัญญาท้องถิ่น",
    //   "ต่อยอดคุณค่าของอาหารและองค์ความรู้ในพื้นที่",
    // ],
    audience: "ชุมชน · ผู้สนใจ · ผู้ประกอบการ",
    category: "local-food",
  },
];

const impactGoals = [
  {
    number: "01",
    name: "ขจัดความยากจน",
    en: "No Poverty",
    image: "/images/sdgs/sdg-01.png",
  },
  {
    number: "08",
    name: "งานที่มีคุณค่าและการเติบโตทางเศรษฐกิจ",
    en: "Decent Work and Economic Growth",
    image: "/images/sdgs/sdg-08.png",
  },
  {
    number: "11",
    name: "เมืองและชุมชนที่ยั่งยืน",
    en: "Sustainable Cities and Communities",
    image: "/images/sdgs/sdg-11.png",
  },
  {
    number: "12",
    name: "การผลิตและการบริโภคที่ยั่งยืน",
    en: "Responsible Consumption and Production",
    image: "/images/sdgs/sdg-12.png",
  },
  {
    number: "13",
    name: "การรับมือการเปลี่ยนแปลงสภาพภูมิอากาศ",
    en: "Climate Action",
    image: "/images/sdgs/sdg-13.png",
  },
  {
    number: "17",
    name: "ความร่วมมือเพื่อการพัฒนาที่ยั่งยืน",
    en: "Partnerships for the Goals",
    image: "/images/sdgs/sdg-17.png",
  },
];

const categoryOptions = [
  { label: "ทั้งหมด", value: "all" },
  { label: "จัดการขยะชุมชน", value: "waste" },
  { label: "อบรมและพัฒนาทักษะ", value: "training" },
  { label: "อาหารและภูมิปัญญา", value: "local-food" },
];

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleSections =
    activeCategory === "all"
      ? projectSections
      : projectSections.filter(
          (section) => section.category === activeCategory
        );

  return (
    <main className="all-projects">
      <div className="all-projects-container">
        {/* Page heading */}
        {/* <header className="all-projects-heading">
          <span className="projects-eyebrow">
            OUR WORK & IMPACT
          </span>

          <h1>โครงการทั้งหมด</h1>

          <p>
            เราทำงานร่วมกับชุมชนผ่านการท่องเที่ยว การจัดการสิ่งแวดล้อม
            และการพัฒนาทักษะ เพื่อสร้างโอกาสและคุณค่าที่ยั่งยืน
          </p>
        </header> */}

        {/* Category filter */}
        <nav
          className="projects-filter"
          aria-label="กรองโครงการตามหมวดหมู่"
        >
          <span className="projects-filter__label">
            เลือกดูโครงการตามหมวดหมู่
          </span>

          <div className="projects-filter__list">
            {categoryOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`projects-filter__button ${
                  activeCategory === option.value ? "is-active" : ""
                }`}
                onClick={() => setActiveCategory(option.value)}
                aria-pressed={activeCategory === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Project categories */}
        <div className="projects-sections">
          {visibleSections.map((section) => {
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
                  <div className="project-section__intro">
                    <span className="projects-eyebrow">
                      {section.eyebrow}
                    </span>

                    <h2>{section.title}</h2>

                    <p>{section.description}</p>

                    {/* <ul className="project-section__highlights">
                      {section.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul> */}
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
                                  <span
                                    className="project-sdg-tag"
                                    key={sdg}
                                  >
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
        </div>

        {/* Social Impact */}
        <section className="projects-impact" id="social-impact">
          <div className="projects-impact__layout">

            {/* Left: Social Impact */}
            <div className="projects-impact__intro">
              <span className="projects-eyebrow">
                SOCIAL IMPACT & SDGs
              </span>

              <h2>สร้างคุณค่าที่มากกว่าโครงการ</h2>

              <p>
                เราให้ความสำคัญกับการเปลี่ยนแปลงที่เกิดขึ้นกับชุมชน
                ผู้คน และสิ่งแวดล้อม
              </p>

              <div className="projects-impact__stat">
                <strong>2,000+</strong>
                <div>
                  <span>คน</span>
                  <p>ได้รับการอบรมและถ่ายทอดความรู้</p>
                </div>
              </div>
            </div>

            {/* Right: SDGs */}
            <div className="projects-impact__sdgs">
              <div className="projects-impact__sdgs-heading">
                <h3>เป้าหมายการพัฒนาที่ยั่งยืน</h3>
                <span>6 Goals</span>
              </div>

              <div className="projects-impact__goals">
                {impactGoals.map((goal) => (
                  <article
                    className="projects-impact__goal"
                    key={goal.number}
                    title={`${goal.name} (${goal.en})`}
                  >
                    <Image
                      src={goal.image}
                      alt={`SDG ${goal.number}: ${goal.name}`}
                      width={64}
                      height={64}
                      className="projects-impact__goal-image"
                    />

                    <span>SDG {goal.number}</span>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
