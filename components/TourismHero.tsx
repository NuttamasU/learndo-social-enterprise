
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export default function TourismHero() {
  return (
    <section className="tourism-hero" id="top">
      <div className="tourism-hero__content">
        <h1>
          ท่องเที่ยวชุมชน
          <br />
          หลายพื้นที่ หลายเรื่องราว
          <br />
          รอให้คุณไปสัมผัส
        </h1>

        <p>
          เลือกไปกับเราได้ทั้งทริปพร้อมไกด์ หรือเที่ยวด้วยตัวเอง
          <br className="tourism-hero__desktop-break" />
          ผ่านแอปของเรา พบกับชุมชนที่หลากหลายทั่วไทย
        </p>

        <Link
          href="#tourism-areas"
          className="tourism-hero__button"
        >
          เลือกพื้นที่ท่องเที่ยว
          <IconArrowRight size={17} stroke={1.8} />
        </Link>
      </div>

      <div className="tourism-hero__visual">
        <img
          src="/images/tourism/tourism-hero.jpg"
          alt="นักท่องเที่ยวเรียนรู้วิถีชีวิตและกิจกรรมในชุมชน"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
