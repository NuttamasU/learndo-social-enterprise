
import Link from "next/link";
import { IconCheck, IconBulb } from "@tabler/icons-react";

export default function TourismCorporate() {
  return (
    <section className="tourism-corporate">
      <div className="tourism-corporate__inner">
        {/* รูปกิจกรรม */}
        <div className="tourism-corporate__image">
          <img
            src="/images/tourism/corporate.jpg"
            alt="กิจกรรมท่องเที่ยวและเรียนรู้ร่วมกันขององค์กร"
          />
        </div>

        {/* รายละเอียดบริการ */}
        <div className="tourism-corporate__content">
          <p className="tourism-corporate__eyebrow">
            • CORPORATE
          </p>

          <h2>ทริปและกิจกรรมสำหรับองค์กร</h2>

          <p className="tourism-corporate__description">
            จัดทริปและกิจกรรม CSR ที่เชื่อมโยงกับชุมชนอย่างยั่งยืน
            เราดูแลทุกขั้นตอน ตั้งแต่การวางแผน ประสานงาน
            ไปจนถึงการดำเนินกิจกรรม แบบ One-stop service
          </p>

          <ul className="tourism-corporate__features">
            <li>
              <span className="tourism-corporate__icon">
                <IconCheck size={19} stroke={3} />
              </span>
              <span>ทริปสำหรับพนักงานและทีม</span>
            </li>
            <li>
              <span className="tourism-corporate__icon">
                <IconCheck size={19} stroke={3} />
              </span>
              <span>กิจกรรม CSR และการเรียนรู้ร่วมกับชุมชน</span>
            </li>
            <li>
              <span className="tourism-corporate__icon">
                <IconCheck size={19} stroke={3} />
              </span>
              <span>ออกแบบกิจกรรมตามเป้าหมายองค์กร</span>
            </li>
          </ul>
        </div>

        {/* สิทธิประโยชน์และ CTA */}
        <div className="tourism-corporate__action">
          <div className="tourism-corporate__benefit">
            <span className="tourism-corporate__leaf">
                <IconBulb size={32} stroke={1.8} />
            </span>
            <h3>ลดหย่อนภาษีได้</h3>
            <p>ตามหลักเกณฑ์ที่กำหนด</p>
          </div>

          <Link
            href="/contact?subject=corporate"
            className="tourism-corporate__button"
          >
            ปรึกษาการจัดกิจกรรม
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
