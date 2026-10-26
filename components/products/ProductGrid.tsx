
"use client";

import { useMemo, useState } from "react";
import {
  IconArrowUpRight,
  IconBrandLine,
} from "@tabler/icons-react";

import {
  communityProducts,
  productCategories,
  type ProductCategory,
} from "@/data/products";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("ทั้งหมด");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "ทั้งหมด") {
      return communityProducts;
    }

    return communityProducts.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="products-list" id="products-list">
      <div className="products-list__heading">
        <div>
          <span className="products-eyebrow">
            DISCOVER LOCAL PRODUCTS
          </span>

          <h2>เลือกชมสินค้าจากชุมชน</h2>

          <p>
            แต่ละชิ้นมีเรื่องราวที่แตกต่างกัน
            เลือกชมสิ่งที่คุณสนใจได้เลย
          </p>
        </div>

        <span className="products-list__count">
          {filteredProducts.length} รายการ
        </span>
      </div>

      <div
        className="products-filter"
        role="group"
        aria-label="กรองประเภทสินค้า"
      >
        {productCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              activeCategory === category
                ? "products-filter__button is-active"
                : "products-filter__button"
            }
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid" aria-live="polite">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-card__image">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />

              {product.featured && (
                <span className="product-card__featured">
                  เรื่องราวแนะนำ
                </span>
              )}
            </div>

            <div className="product-card__body">
              <span className="product-card__category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <p className="product-card__description">
                {product.description}
              </p>

              <div className="product-card__bottom">
                <div className="product-card__price">
                  {product.price === null
                    ? "สอบถามราคา"
                    : `${product.price.toLocaleString("th-TH")} บาท`}
                </div>

                <a
                  href={product.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-card__link"
                  aria-label={`สอบถามหรือสั่งซื้อ ${product.name} ผ่าน LINE`}
                >
                  <IconBrandLine size={18} />
                  สอบถาม / สั่งซื้อ
                  <IconArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="products-list__empty">
          ยังไม่มีสินค้าในหมวดหมู่นี้
        </p>
      )}
    </section>
  );
}
