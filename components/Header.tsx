
"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lightBackground, setLightBackground] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const hero = document.getElementById("top");
      const heroBottom = hero?.getBoundingClientRect().bottom ?? 600;

      // เปลี่ยนสี Header ตามตำแหน่งของ Hero
      setLightBackground(heroBottom <= 76);

      // Smart Header
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
  }, []);

  return (
    <header
      className={[
        "site-header",
        visible ? "header-visible" : "header-hidden",
        lightBackground ? "header-light" : "header-dark",
      ].join(" ")}
    >
      <a className="brand" href="#top">
        <span className="brand-mark" />
        LearnDo
      </a>

      <nav aria-label="หลัก">
        <a className="active" href="#top">
          หน้าหลัก
        </a>
        <a href="#about">รู้จักเรา</a>
        <a href="#work">โครงการ</a>
        <a href="#contact">ติดต่อเรา</a>
      </nav>
    </header>
  );
}
