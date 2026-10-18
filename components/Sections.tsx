import localFont from "next/font/local";
import { Phone, MessageCircle, Map, MapPin } from "lucide-react";

const torsilpFont = localFont({
  src: "../public/fonts/TorsilpKhitthuengSamoe.ttf",
  display: "swap",
  weight: "400",
});

export function About() {
  return (
    <section id="about" className="about section-grid">
      <div>
        <p className="eyebrow">• ABOUT US</p>
        <h2>เราคือใคร</h2>

        <p>
          เราเชื่อในพลังของผู้คน ชุมชน และธรรมชาติ
          <br />
          จึงลงมือทำสิ่งเล็ก ๆ ที่สร้างความเปลี่ยนแปลงได้จริง
          <br />
          ผ่านโครงการ และกิจกรรมที่เชื่อมโยงผู้คน วิถีชีวิต
          <br />
          และสิ่งแวดล้อมเข้าด้วยกัน
        </p>

        <a className="button outline" href="#collab">
          รู้จักเราเพิ่มเติม →
        </a>
      </div>

      <img
        src="/images/about.jpg"
        alt="ชุมชนและธรรมชาติ"
      />
    </section>
  );
}

export function Belief() {
  return (
    <section className="belief section-grid">
      <img
        src="/images/belief.jpg"
        alt="ผู้คนร่วมกันดูแลธรรมชาติ"
      />

      <div>
        <p className="eyebrow">• OUR BELIEF</p>
        <h2 className={torsilpFont.className}>
            สิ่งดี ๆ เริ่มต้นได้จากตัวเรา
        </h2>
        <p>
          จากความรักในธรรมชาติ และความใส่ใจผู้คน
          <br />
          สู่การลงมือทำเล็ก ๆ ที่สร้างคุณค่าให้กับชุมชน และสังคม
        </p>
      </div>
    </section>
  );
}

export function Collab() {
  return (
    <section id="collab" className="collab section-grid">
      <div>
        <p className="eyebrow">• COLLABORATION</p>
        <h2>มาร่วมพัฒนาสิ่งดี ๆ ไปด้วยกัน</h2>

        <p>
          ไม่ว่าคุณจะเป็นชุมชน องค์กร หรือทีมที่สนใจ
          ร่วมพัฒนาไปด้วยกัน
        </p>

        <a className="button outline" href="/contact" >
          ติดต่อเรา →
        </a>
      </div>

      <img
        src="/images/collab.jpg"
        alt="ทีมงาน Learn Do ร่วมกันทำงาน"
      />
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">ติดต่อเรา</h2>

        <div className="contact-grid">
          {/* เบอร์ติดต่อ */}
          <div className="contact-card">
            <div className="contact-icon">
              <Phone size={20} />
            </div>
            <h3>เบอร์ติดต่อ</h3>
            <a href="tel:0925054994" className="contact-detail">
              092 505 4994
            </a>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-icon">
              <MessageCircle size={20} />
            </div>
            <h3>Email</h3>
            <a
              href="mailto:info.learndo@gmail.com"
              className="contact-detail"
            >
              info.learndo@gmail.com
            </a>
          </div>

          {/* เวลาทำการ */}
          <div className="contact-card">
            <div className="contact-icon">
              <Map size={20} />
            </div>
            <h3>เวลาทำการ</h3>
            <p className="contact-detail">
              Open 9:00–18:00 Closed on
              <br />
              Saturday and Sunday
            </p>
          </div>

          {/* ที่อยู่ */}
          <div className="contact-card contact-address">
            <div className="contact-icon">
              <MapPin size={20} />
            </div>
            <h3>ที่อยู่</h3>
            <p className="contact-detail">
              <strong>
                บริษัท เลิร์นดู วิสาหกิจเพื่อสังคม จำกัด
              </strong>
              <br />
              เลขที่ 68/7 หมู่ที่ 3 ตำบลบางกอบัว
              อำเภอพระประแดง จังหวัดสมุทรปราการ 10130
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
