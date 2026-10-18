
export default function Hero() {
  return (
    <section
      id="top"
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(8, 69, 25, .92), rgba(8, 69, 25, .28)), url('/images/hero.jpg')",
      }}
    >
      <div className="hero-copy">
        <p className="eyebrow light">• SOCIAL ENTERPRISE</p>

        <h1>
          เราอยากเห็น
          <br />
          ชุมชนเติบโต ผู้คนมีความสุข
          <br />
          และธรรมชาติได้รับการดูแล
        </h1>

        <p className="lead">
          Learn Do เป็นธุรกิจเพื่อสังคมที่ลงมือทำ
          และร่วมพัฒนาแนวทางต่าง ๆ
          <br />
          เพื่อสร้างคุณค่าให้กับชุมชน สังคม และสิ่งแวดล้อม
        </p>

        <div className="actions">
          <a className="button primary" href="#about">
            รู้จัก Learn Do <span>→</span>
          </a>

          <a className="button ghost" href="#project">
            สิ่งที่เราทำ
          </a>
        </div>
      </div>
    </section>
  );
}
