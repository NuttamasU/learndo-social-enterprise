
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [lightBackground, setLightBackground] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const hero = document.getElementById("top");

      // ถ้าไม่มี Hero เช่น หน้ารอง ให้ใช้พื้นหลัง Header แบบสว่าง
      const heroBottom = hero?.getBoundingClientRect().bottom;

      setLightBackground(
        heroBottom === undefined || heroBottom <= 76
      );

      // Smart Header: ซ่อนเมื่อเลื่อนลง และแสดงเมื่อเลื่อนขึ้น
      const difference = currentScrollY - lastScrollY;

      if (currentScrollY < 80) {
        setVisible(true);
      } else if (difference > 10) {
        setVisible(false);
      } else if (difference < -10) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      className={[
        "site-header",
        visible ? "header-visible" : "header-hidden",
        lightBackground ? "header-light" : "header-dark",
      ].join(" ")}
    >
      <a className="brand" href="/">
        <span className="brand-mark" />
        LearnDo
      </a>

      <nav aria-label="หลัก">
        <a
          href="/"
          className={pathname === "/" ? "active" : ""}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          หน้าหลัก
        </a>

        <a
          href="/about"
          className={pathname === "/about" ? "active" : ""}
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          รู้จักเรา
        </a>

        <a
          href="/projects"
          className={pathname === "/projects" ? "active" : ""}
          aria-current={pathname === "/projects" ? "page" : undefined}
        >
          โครงการ
        </a>

        <a
          href="/activities"
          className={pathname === "/activities" ? "active" : ""}
          aria-current={pathname === "/activities" ? "page" : undefined}
        >
          กิจกรรม
        </a>

        <a
          href="/products"
          className={pathname === "/products" ? "active" : ""}
          aria-current={pathname === "/products" ? "page" : undefined}
        >
          สินค้า
        </a>

        <a
          href="/contact"
          className={pathname === "/contact" ? "active" : ""}
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          ติดต่อเรา
        </a>
      </nav>
    </header>
  );
}
