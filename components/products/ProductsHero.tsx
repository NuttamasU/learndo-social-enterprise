
import Link from "next/link";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";

export default function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="products-hero__content">
        <span className="products-eyebrow">
          LOCAL WISDOM, LOCAL STORIES
        </span>

        <h1>
          เรื่องราวจากชุมชน
          <br />
          ส่งต่อคุณค่าถึงคุณ
        </h1>

        <p>
          ทุกผลิตภัณฑ์มีเรื่องราวเบื้องหลัง
          <br className="products-desktop-break" />
          มาทำความรู้จักภูมิปัญญา วัตถุดิบ
          และความตั้งใจของผู้คนในท้องถิ่นไปด้วยกัน
        </p>

        <div className="products-hero__actions">
          <Link href="#products-list" className="products-button">
            เลือกชมสินค้า
            <IconArrowRight size={18} />
          </Link>

          <Link
            href="#community-story"
            className="products-hero__secondary"
          >
            รู้จักเรื่องราวของเรา
            <IconArrowDown size={17} />
          </Link>
        </div>
      </div>

      <div className="products-hero__image">
        <img
          src="/images/products/product-hero.jpg"
          alt="ผลิตภัณฑ์และวิถีชีวิตของชุมชน"
          fetchPriority="high"
        />
        <div className="products-hero__image-caption">
          <span>COMMUNITY · CRAFT · CARE</span>
          <p>คุณค่าที่เริ่มต้นจากคนในชุมชน</p>
        </div>
      </div>
    </section>
  );
}
