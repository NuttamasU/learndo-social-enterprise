import Link from "next/link";
import {
  IconMapPin,
  IconUsers,
  IconWalk,
  IconArrowRight,
  IconBrandLine,
} from "@tabler/icons-react";

import type { TourismDetailData } from "@/data/tourismDetails";
import TourismActivityCard from "@/components/tourism/TourismActivityCard";
import AppDownloadModal from "@/components/tourism/TourismAppDownload";
import ScrollToSectionButton from "@/components/tourism/ScrollToSectionButton";

type Props = {
  place: TourismDetailData;
};

// TODO: เปลี่ยนเป็น LINE OA URL จริง
const LINE_CONTACT_URL = "";

export default function TourismDetail({ place }: Props) {
  const hasGuide = place.travelModes.includes("guide");
  const hasSelf = place.travelModes.includes("self");

  return (
    <main className="tourism-detail">
      {/* ========================================
          Hero
      ======================================== */}
      <section
        className="tourism-detail-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(13, 48, 18, 0.94) 0%, rgba(13, 48, 18, 0.78) 43%, rgba(13, 48, 18, 0.08) 100%), url("${place.heroImage}")`,
        }}
      >
        <div className="tourism-detail-hero__content">
          <Link
            href="/tourism"
            className="tourism-detail-hero__back"
          >
            ← ท่องเที่ยวชุมชน
          </Link>

          <h1>{place.name}</h1>

          <h2>{place.tagline}</h2>

          <p>{place.description}</p>

          <div className="tourism-detail-hero__facts">
            <div>
              <IconMapPin size={22} />

              <span>
                พื้นที่ดำเนินโครงการ
                <strong>{place.province}</strong>
              </span>
            </div>

            <div>
              <IconUsers size={22} />

              <span>
                เหมาะสำหรับ
                <strong>{place.suitableFor}</strong>
              </span>
            </div>

            <div>
              <IconWalk size={22} />

              <span>
                รูปแบบการเที่ยว
                <strong>
                  {hasGuide && hasSelf
                    ? "เที่ยวกับไกด์และเที่ยวด้วยตัวเอง"
                    : hasGuide
                      ? "เที่ยวกับไกด์ชุมชน"
                      : "เที่ยวด้วยตัวเอง"}
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          About
      ======================================== */}
      <section className="tourism-detail-about">
        <div className="tourism-detail-about__content">
          <span className="tourism-detail-eyebrow">
            ABOUT {place.name.toUpperCase()}
          </span>

          <h2>{place.aboutTitle}</h2>

          <p>{place.aboutDescription}</p>
        </div>

        <div className="tourism-detail-about__image">
          <img
            src={place.aboutImage}
            alt={place.aboutTitle}
            loading="lazy"
          />
        </div>
      </section>

      {/* ========================================
          Travel Options
      ======================================== */}
      <section className="tourism-detail-options">
        {/* Local Guide */}
        {hasGuide && (
          <article className="tourism-detail-option">
            <div className="tourism-detail-option__image">
              <img
                src="/images/tourism/cycling.jpg"
                alt="เที่ยวกับไกด์ชุมชน"
                loading="lazy"
              />
            </div>

            <div className="tourism-detail-option__content">
              <span className="tourism-detail-option__leaf">
                🍃
              </span>

              <h3>เที่ยวกับคนในท้องถิ่น</h3>

              <p>
                ออกเดินทางพร้อมกับไกด์ชุมชน
                เรียนรู้เรื่องราว ธรรมชาติ
                และวิถีชีวิตจากคนในพื้นที่
              </p>

              {/* <Link
                href="#local-trips"
                className="tourism-detail-option__button"
              >
                ดูโปรแกรมทริป
                <IconArrowRight size={17} />
              </Link> */}
              <ScrollToSectionButton
                targetId="local-trips"
                className="tourism-detail-option__button"
              >
                ดูโปรแกรมทริป
              </ScrollToSectionButton>
            </div>
          </article>
        )}

        {/* Self-guided */}
        {hasSelf && (
          <article className="tourism-detail-option">
            <div className="tourism-detail-option__image">
              <img
                src={place.heroImage}
                alt={`เที่ยว${place.name}ด้วยตัวเอง`}
                loading="lazy"
              />
            </div>

            <div className="tourism-detail-option__content">
              <span className="tourism-detail-option__leaf">
                🍃
              </span>

              <h3>เที่ยวด้วยตัวเอง</h3>

              <p>
                ออกสำรวจชุมชนในแบบของคุณ
                ค้นหาเส้นทางและสถานที่น่าสนใจ
                ผ่านแอป Learn Do
              </p>

              <AppDownloadModal />
            </div>
          </article>
        )}
      </section>

      {/* ========================================
          Local Trips / Trip Highlights
      ======================================== */}
      {hasGuide && (
        <section
          className="tourism-detail-activities"
          id="local-trips"
        >
          <div className="tourism-detail-activities__heading">
            <span className="tourism-detail-eyebrow">
              LOCAL GUIDED EXPERIENCE
            </span>

            <h2>
              กิจกรรมที่น่าสนใจใน{place.name}
            </h2>

            <p>
              ออกเดินทางไปสัมผัสเสน่ห์ของชุมชน
              ผ่านธรรมชาติ อาหาร และวิถีชีวิตท้องถิ่น
              พร้อมเรียนรู้เรื่องราวจากคนในพื้นที่
            </p>
          </div>

          <div className="tourism-detail-activities__intro">
            <span className="tourism-detail-activities__intro-icon">
              🍃
            </span>

            <div>
              <h3>ระหว่างทริป คุณจะได้พบกับ</h3>

              <p>
                สำรวจสถานที่น่าสนใจและเรียนรู้ประสบการณ์
                ที่เป็นเอกลักษณ์ของชุมชน
              </p>
            </div>
          </div>

          <div className="tourism-detail-activities__grid">
            {place.activities.map((activity) => (
              <TourismActivityCard
                key={activity.slug}
                activity={activity}
              />
            ))}
          </div>

          {/* LINE Contact */}
          <div className="tourism-detail-activities__contact">
            <div className="tourism-detail-activities__contact-content">
              <h3>
                สนใจเที่ยวกับคนในท้องถิ่นไหม?
              </h3>

              <p>
                สอบถามรายละเอียดโปรแกรมทริป
                และข้อมูลการเดินทางเพิ่มเติมได้เลย
              </p>
            </div>

            {LINE_CONTACT_URL ? (
              <a
                href={LINE_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tourism-detail-activities__line"
              >
                <IconBrandLine size={20} />
                สอบถามผ่าน LINE
                <IconArrowRight size={17} />
              </a>
            ) : (
              <span
                className="tourism-detail-activities__line is-disabled"
                aria-disabled="true"
                title="รอเพิ่ม LINE OA URL"
              >
                <IconBrandLine size={20} />
                สอบถามผ่าน LINE
                <IconArrowRight size={17} />
              </span>
            )}
          </div>
        </section>
      )}
    </main>
  );
}