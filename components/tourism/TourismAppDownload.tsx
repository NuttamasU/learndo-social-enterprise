"use client";

import { useEffect, useState } from "react";
import {
  IconArrowRight,
  IconBrandApple,
  IconBrandGooglePlay,
  IconX,
} from "@tabler/icons-react";

export default function AppDownloadModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        className="tourism-detail-option__button tourism-detail-app-trigger"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        ดูวิธีเที่ยวด้วยแอป
        <IconArrowRight size={17} />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="tourism-app-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="tourism-app-modal__content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tourism-app-modal-title"
          >
            {/* Header */}
            <div className="tourism-app-modal__header">
              <div>
                <span className="tourism-detail-eyebrow">
                  SELF-GUIDED EXPERIENCE
                </span>

                <h2 id="tourism-app-modal-title">
                  เที่ยวด้วยตัวเองผ่านแอป Learn Do
                </h2>
              </div>

              <button
                type="button"
                className="tourism-app-modal__close"
                onClick={() => setIsOpen(false)}
                aria-label="ปิดหน้าต่าง"
              >
                <IconX size={22} />
              </button>
            </div>

            {/* Description */}
            <div className="tourism-app-modal__description">
              <p>
                ออกสำรวจชุมชนในแบบของคุณ
                ค้นหาเส้นทางและสถานที่น่าสนใจ
                พร้อมสัมผัสประสบการณ์ใหม่ ๆ
                ผ่านแอป Learn Do
              </p>
            </div>

            {/* QR Codes */}
            <div className="tourism-app-modal__downloads">
              {/* iOS */}
              <div className="tourism-app-modal__card">
                <div className="tourism-app-modal__platform">
                  <IconBrandApple size={24} />

                  <div>
                    <strong>iOS</strong>
                    <span>สำหรับ iPhone / iPad</span>
                  </div>
                </div>

                <div className="tourism-app-modal__qr">
                  <img
                    src="/images/tourism/qr-ios.png"
                    alt="QR Code สำหรับดาวน์โหลดแอปบน iOS"
                  />
                </div>

                <p>สแกน QR Code เพื่อดาวน์โหลด</p>
              </div>

              {/* Android */}
              <div className="tourism-app-modal__card">
                <div className="tourism-app-modal__platform">
                  <IconBrandGooglePlay size={24} />

                  <div>
                    <strong>Android</strong>
                    <span>สำหรับ Android</span>
                  </div>
                </div>

                <div className="tourism-app-modal__qr">
                  <img
                    src="/images/tourism/qr-android.png"
                    alt="QR Code สำหรับดาวน์โหลดแอปบน Android"
                  />
                </div>

                <p>สแกน QR Code เพื่อดาวน์โหลด</p>
              </div>
            </div>

            <p className="tourism-app-modal__note">
              เลือก QR Code ให้ตรงกับอุปกรณ์ที่คุณใช้งาน
            </p>
          </div>
        </div>
      )}
    </>
  );
}