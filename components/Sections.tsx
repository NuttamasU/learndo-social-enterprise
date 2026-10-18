import localFont from "next/font/local";

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

        <a className="button outline" /* href="mailto:hello@learndo.co" */ >
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
