
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export default function ProductsStory() {
  return (
    <section className="community-story" id="community-story">
      <div className="community-story__image">
        <img
          src="/images/products/product-story.jpg"
          alt="การเรียนรู้และแลกเปลี่ยนความรู้ร่วมกับชุมชน"
          loading="lazy"
        />

        <span className="community-story__image-label">
          LEARNING WITH COMMUNITIES
        </span>
      </div>

      <div className="community-story__content">
        <span className="products-eyebrow">
          BEHIND EVERY PRODUCT
        </span>

        <h2>
          เริ่มจากการเรียนรู้
          <br />
          เติบโตไปด้วยกัน
        </h2>

        <p>
          เมื่อเราได้เข้าไปเรียนรู้และแลกเปลี่ยนความรู้กับชุมชน
          สิ่งที่เกิดขึ้นไม่ได้มีเพียงกิจกรรมหรือการอบรม
          แต่ยังทำให้เราได้รู้จักผู้คน ภูมิปัญญา
          และผลิตภัณฑ์ที่มีเรื่องราวอยู่เบื้องหลัง
        </p>

        <p>
          เราจึงอยากเป็นอีกหนึ่งช่องทางที่ช่วยให้เรื่องราวเหล่านี้
          เดินทางไปถึงผู้คนมากขึ้น
          และเปิดโอกาสให้ทุกคนได้ร่วมสนับสนุนชุมชน
          ผ่านการเลือกซื้อผลิตภัณฑ์ของพวกเขา
        </p>

        <Link
          href="#products-list"
          className="community-story__link"
        >
          ค้นพบสินค้าจากชุมชน
          <IconArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
