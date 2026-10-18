// const image = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-vOssMacpe7NuOFnJkOfz5tae2l4WlE.png'

// const projects = [
//   ['ท่องเที่ยวชุมชน', 'เปิดประสบการณ์ท่องเที่ยวชุมชน สัมผัสวิถีชีวิตและธรรมชาติ พร้อมเรียนรู้ของท้องถิ่นในมุมที่แตกต่าง'],
//   ['จัดการขยะชุมชน', 'แพลตฟอร์มจัดการขยะชุมชน ช่วยกันดูแลชุมชนและลดขยะอย่างเป็นระบบ'],
//   ['อาหารและภูมิปัญญาท้องถิ่น', 'ต่อยอดวัตถุดิบและองค์ความรู้ท้องถิ่น สู่เรื่องราวอาหารที่สะท้อนอัตลักษณ์และคุณค่าของชุมชน'],
//   ['อบรมเพิ่มทักษะชุมชน', 'เปลี่ยนวัสดุเหลือใช้ในชุมชนให้เกิดคุณค่า พร้อมสร้างอาชีพและความยั่งยืน']
// ]

// export default function Page() {
//   return (
//     <main className="site-shell">
//       <header className="site-header">
//         <a className="brand" href="#top"><span className="brand-mark" />LearnDo</a>
//         <nav aria-label="หลัก">
//           <a className="active" href="#top">หน้าหลัก</a><a href="#about">รู้จักเรา</a><a href="#work">โครงการ</a><a href="#contact">ติดต่อเรา</a>
//         </nav>
//       </header>

//       <section id="top" className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 69, 25, .92), rgba(8, 69, 25, .28)), url(${image})` }}>
//         <div className="hero-copy"><p className="eyebrow light">• SOCIAL ENTERPRISE</p><h1>เราอยากเห็น<br />ชุมชนเติบโต ผู้คนมีความสุข<br />และธรรมชาติได้รับการดูแล</h1><p className="lead">Learn Do เป็นธุรกิจเพื่อสังคมที่ลงมือทำ และร่วมพัฒนาแนวทางต่าง ๆ<br />เพื่อสร้างคุณค่าให้กับชุมชน สังคม และสิ่งแวดล้อม</p><div className="actions"><a className="button primary" href="#about">รู้จัก Learn Do <span>→</span></a><a className="button ghost" href="#work">สิ่งที่เราทำ</a></div></div>
//       </section>

//       <section id="about" className="about section-grid"><div><p className="eyebrow">• ABOUT US</p><h2>เราคือใคร</h2><p>เราเชื่อในพลังของผู้คน ชุมชน และธรรมชาติ<br />จึงลงมือทำสิ่งเล็ก ๆ ที่สร้างความเปลี่ยนแปลงได้จริง<br />ผ่านโครงการ และกิจกรรมที่เชื่อมโยงผู้คน วิถีชีวิต<br />และสิ่งแวดล้อมเข้าด้วยกัน</p><a className="button outline" href="#contact">รู้จักเราเพิ่มเติม →</a></div><img src={image} alt="ชุมชนสีเขียวริมแม่น้ำ" /></section>

//       <section id="work" className="work"><div className="section-heading"><div><p className="eyebrow">• OUR WORK</p><h2>โครงการของเรา</h2><p>หลากหลายโครงการที่เราลงมือทำ เพื่อชุมชนที่ยั่งยืน</p></div><a href="#contact">ดูโครงการทั้งหมด →</a></div><div className="project-grid">{projects.map(([title, desc], index) => <article className="project-card" key={title}><div className={`project-image crop-${index}`} style={{ backgroundImage: `url(${image})` }} /><div className="card-copy"><h3>{title}</h3><p>{desc}</p><a href="#contact">ดูรายละเอียด →</a></div></article>)}</div></section>

//       <section className="belief section-grid"><img src={image} alt="ผู้คนร่วมกันดูแลธรรมชาติ" /><div><p className="eyebrow">• OUR BELIEF</p><h2>สิ่งดี ๆ เริ่มต้นได้จากตัวเรา</h2><p>จากความรักในธรรมชาติ และความใส่ใจผู้คน<br />สู่การลงมือทำเล็ก ๆ ที่สร้างคุณค่าให้กับชุมชน และสังคม</p></div></section>
//       <section id="contact" className="contact section-grid"><div><p className="eyebrow">• COLLABORATION</p><h2>มาร่วมพัฒนาสิ่งดี ๆ ไปด้วยกัน</h2><p>ไม่ว่าคุณจะเป็นชุมชน องค์กร หรือทีมที่สนใจร่วมพัฒนาไปด้วยกัน</p><a className="button outline" href="mailto:hello@learndo.co">ติดต่อเรา →</a></div><img src={image} alt="ทีมงาน Learn Do ร่วมกัน" /></section>
//       <footer><div><strong>บริษัท เลิร์นดู วิสาหกิจเพื่อสังคม จำกัด</strong><br />เลขที่ 68/7 หมู่ที่ 3 ตำบลบางกอบัว<br />อำเภอพระประแดง จังหวัดสมุทรปราการ 10130</div><div><strong>ติดต่อ</strong><br />092 505 4994</div></footer>
//     </main>
//   )
// }

import Header from "../components/Header";
import Hero from "../components/Hero";
import { About, Belief, Collab } from "../components/Sections";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Belief />
      <Collab />
      <Footer />
    </main>
  );
}
