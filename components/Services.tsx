import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <p className="eyebrow">• OUR SERVICES & EXPERIENCES</p>

          <h2>มาเรียนรู้และสัมผัสชุมชนไปด้วยกัน</h2>

          <p className="services-subtitle">
            เปิดประสบการณ์ใหม่ผ่านกิจกรรม เวิร์กช็อป
            และการท่องเที่ยวที่เชื่อมโยงผู้คน วัฒนธรรม และธรรมชาติ
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <a
                className="service-card-link"
                href={service.href}
                aria-label={`${service.button} - ${service.title}`}
              >
                <div
                  className="service-image"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                  role="img"
                  aria-label={service.title}
                />

                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <span className="service-action">
                    {service.button}
                    <span aria-hidden="true"> →</span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
