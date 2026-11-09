"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "หน้าหลัก", href: "/" },
  { label: "ท่องเที่ยวชุมชน", href: "/tourism" },
  { label: "สินค้าชุมชน", href: "/products" },
  { label: "โครงการเพื่อสังคม", href: "/projects" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [lightBackground, setLightBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ตรวจสอบตำแหน่ง Hero
      const hero = document.getElementById("top");
      const heroBottom = hero?.getBoundingClientRect().bottom;

      // Tourism และ Products ใช้พื้นหลังสีอ่อนตั้งแต่ต้น
      // หน้าอื่นเปลี่ยนสีตามตำแหน่ง Scroll
      const isLightPage =
        pathname === "/tourism" ||
        pathname === "/products";

      if (isLightPage) {
        setLightBackground(true);
      } else {
        setLightBackground(
          heroBottom === undefined || heroBottom <= 76
        );
      }

      // ซ่อน Header เมื่อเลื่อนลง
      // แสดง Header เมื่อเลื่อนขึ้น
      const difference = currentScrollY - lastScrollY;

      if (currentScrollY < 80) {
        setVisible(true);
      } else if (difference > 10) {
        setVisible(false);
        setMenuOpen(false);
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

  // ปิด Mobile Menu เมื่อเปลี่ยนหน้า
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "site-header",
        visible ? "header-visible" : "header-hidden",
        lightBackground ? "header-light" : "header-dark",
        menuOpen ? "menu-open" : "",
      ].join(" ")}
    >
      {/* Brand */}
      <Link href="/" className="brand">
        <span className="brand-mark">
          <span />
        </span>

        <span className="brand-name">LearnDo</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" aria-label="หลัก">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "active" : ""}
            aria-current={
              isActive(item.href) ? "page" : undefined
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav" aria-label="เมนูหลัก">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              aria-current={
                isActive(item.href) ? "page" : undefined
              }
            >
              {item.label}
              <span className="mobile-nav-arrow">↗</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}