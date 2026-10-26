
import Link from "next/link";
import {
  IconMapPin,
  IconUsers,
  IconWalk,
  IconArrowRight,
} from "@tabler/icons-react";

import type { TourismDetailData } from "@/data/tourismDetails";
import TourismActivityCard from "@/components/TourismActivityCard";

type Props = {
  place: TourismDetailData;
};

export default function TourismDetail({ place }: Props) {
  return (
    <main className="tourism-detail">
      {/* Hero */}
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
                  {place.travelModes.includes("guide") &&
                  place.travelModes.includes("self")
                    ? "ไกด์และเที่ยวด้วยตัวเอง"
                    : place.travelModes.includes("guide")
                      ? "เที่ยวกับไกด์"
                      : "เที่ยวด้วยตัวเอง"}
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="tourism-detail-about">
        <div className="tourism-detail-about__content">
          <span className="tourism-detail-eyebrow">
            ABOUT {place.name.toUpperCase()}
          </span>

          <h2>{place.aboutTitle}</h2>

          <p>{place.aboutDescription}</p>
        </div>

        <div className="tourism-detail-about__image">
          <img src={place.aboutImage} alt={place.aboutTitle} />
        </div>
      </section>

      {/* Travel options */}
      <section className="tourism-detail-options">
        {place.travelModes.includes("guide") && (
          <article className="tourism-detail-option">
            <div className="tourism-detail-option__image">
              <img
                src="/images/tourism/cycling.jpg"
                alt="กิจกรรมร่วมกับไกด์ชุมชน"
                loading="lazy"
              />
            </div>

            <div className="tourism-detail-option__content">
              <span className="tourism-detail-option__leaf">🍃</span>
              <h3>ทริปและกิจกรรมกับคนท้องถิ่น</h3>
              <p>
                ออกเดินทางพร้อมกับไกด์ชุมชน
                เรียนรู้เรื่องราวและวิถีชีวิตจากคนในพื้นที่
              </p>
              <Link
                href="#activities"
                className="tourism-detail-option__button"
              >
                ดูทริปและกิจกรรม <IconArrowRight size={17} />
              </Link>
            </div>
          </article>
        )}

        {place.travelModes.includes("self") && (
          <article className="tourism-detail-option">
            <div className="tourism-detail-option__image">
              <img
                src={place.heroImage}
                alt="เที่ยวบางกะเจ้าด้วยตัวเอง"
                loading="lazy"
              />
            </div>

            <div className="tourism-detail-option__content">
              <span className="tourism-detail-option__leaf">🍃</span>
              <h3>เที่ยวด้วยตัวเอง</h3>
              <p>
                วางแผนเส้นทางและค้นหากิจกรรม
                เพื่อออกสำรวจชุมชนได้ตามต้องการ
              </p>
              <Link
                href="#activities"
                className="tourism-detail-option__button"
              >
                ดูทริปและกิจกรรม <IconArrowRight size={17} />
              </Link>
            </div>
          </article>
        )}
      </section>

      {/* Activities */}
      <section
        className="tourism-detail-activities"
        id="activities"
      >
        <div className="tourism-detail-activities__heading">
          <span className="tourism-detail-eyebrow">
            ACTIVITIES IN {place.name.toUpperCase()}
          </span>

          <h2>กิจกรรมที่น่าสนใจใน{place.name}</h2>
        </div>

        <div className="tourism-detail-activities__grid">
          {place.activities.map((activity) => (
            <TourismActivityCard
              key={activity.slug}
              activity={activity}
              placeSlug={place.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
