
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ProductsHero from "@/components/products/ProductsHero";
import ProductsStory from "@/components/products/ProductsStory";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <div className="site-shell">
      <Header />

      <main className="products-page">
        <div className="page-content">
          <ProductsHero />

          <ProductsStory />

          <ProductGrid />

          <section className="products-support">
            <div className="products-support__content">
              <span className="products-eyebrow">
                SUPPORT LOCAL COMMUNITIES
              </span>

              <h2>
                การสนับสนุนเล็ก ๆ
                <br />
                อาจสร้างโอกาสที่ยิ่งใหญ่
              </h2>

              <p>
                ทุกครั้งที่คุณเลือกสนับสนุนผลิตภัณฑ์ชุมชน
                คุณก็เป็นส่วนหนึ่งที่ช่วยส่งต่อเรื่องราว
                และเปิดพื้นที่ให้คุณค่าท้องถิ่นเป็นที่รู้จักมากขึ้น
              </p>
            </div>

            <div
              className="products-support__decoration"
              aria-hidden="true"
            >
              <span>LOCAL</span>
              <span>LOVE</span>
              <span>GROW</span>
            </div>
          </section>  
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
