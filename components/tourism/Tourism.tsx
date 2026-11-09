
"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  IconCheck,
  IconX,
  IconMapPin,
  IconUsers,
  IconWalk,
} from "@tabler/icons-react";

import {
  tourismPlaces,
  type TravelMode,
} from "@/data/tourism";

const travelOptions: {
  id: TravelMode;
  title: string;
  description: string;
  icon: typeof IconUsers;
}[] = [
  {
    id: "guide",
    title: "ทริปและกิจกรรมกับคนท้องถิ่น",
    description:
      "ออกเดินทางพร้อมกับไกด์ชุมชน เรียนรู้เรื่องราวและวิถีชีวิตจากคนในพื้นที่",
    icon: IconUsers,
  },
  {
    id: "self",
    title: "เที่ยวด้วยตัวเอง",
    description:
      "ใช้แอปของเรา วางแผนเส้นทางและค้นหากิจกรรมในพื้นที่ได้ตามต้องการ",
    icon: IconWalk,
  },
];

export default function Tourism() {
  const [selectedMode, setSelectedMode] =
    useState<TravelMode | null>(null);

  const [selectedArea, setSelectedArea] =
    useState("ทั้งหมด");

  const areaSectionRef = useRef<HTMLElement>(null);

  const areas = useMemo(
    () => [
      "ทั้งหมด",
      ...new Set(tourismPlaces.map((place) => place.area)),
    ],
    []
  );

  const filteredPlaces = useMemo(() => {
    return tourismPlaces.filter((place) => {
      const matchesMode =
        selectedMode === null ||
        place.travelModes.includes(selectedMode);

      const matchesArea =
        selectedArea === "ทั้งหมด" ||
        place.area === selectedArea;

      return matchesMode && matchesArea;
    });
  }, [selectedMode, selectedArea]);

  function handleModeSelect(mode: TravelMode) {
    setSelectedMode((current) =>
      current === mode ? null : mode
    );

    setSelectedArea("ทั้งหมด");

    requestAnimationFrame(() => {
      areaSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  function clearMode() {
    setSelectedMode(null);
  }

  return (
    <div className="tourism-experience">
      {/* เลือกรูปแบบการเที่ยว */}
      <section className="tourism-choice">
        <div className="tourism-choice__heading">
          <h2>เลือกประสบการณ์ในแบบของคุณ</h2>
          <p>
            ไม่ว่าคุณจะอยากไปกับคนท้องถิ่น หรือเที่ยวด้วยตัวเอง
            เรามีตัวเลือกให้เหมาะกับทุกไลฟ์สไตล์
          </p>
        </div>

        <div className="tourism-choice__grid">
          {travelOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedMode === option.id;

            return (
              <button
                key={option.id}
                type="button"
                className={[
                  "tourism-choice__card",
                  isSelected
                    ? "tourism-choice__card--selected"
                    : "",
                ].join(" ")}
                aria-pressed={isSelected}
                onClick={() => handleModeSelect(option.id)}
              >
                <span className="tourism-choice__image">
                  <Icon size={34} stroke={1.6} />
                </span>

                <span className="tourism-choice__content">
                  <span className="tourism-choice__title">
                    {option.title}
                  </span>

                  <span className="tourism-choice__description">
                    {option.description}
                  </span>

                  <span className="tourism-choice__link">
                    {isSelected
                      ? "เลือกแล้ว"
                      : "ดูพื้นที่ที่รองรับ"}
                    {isSelected ? (
                      <IconCheck size={18} />
                    ) : (
                      <span aria-hidden="true">→</span>
                    )}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* เลือกพื้นที่ */}
      <section
        className="tourism-areas"
        ref={areaSectionRef}
      >
        <div className="tourism-areas__heading">
          <div>
            <h2>เลือกพื้นที่ที่อยากไป</h2>
            <p>
              ค้นหาพื้นที่และรูปแบบการเที่ยวที่เหมาะกับคุณ
            </p>
          </div>

          <span className="tourism-areas__count">
            {filteredPlaces.length} พื้นที่
          </span>
        </div>

        {/* ตัวกรองรูปแบบการเที่ยว */}
        {selectedMode && (
          <div className="tourism-active-filters">
            <span className="tourism-active-filters__label">
              ตัวกรอง:
            </span>

            <button
              type="button"
              className="tourism-filter-chip"
              onClick={clearMode}
              aria-label={`ล้างตัวกรอง${travelOptions.find(
                (option) => option.id === selectedMode
              )?.title}`}
            >
              {selectedMode === "self"
                ? "เที่ยวด้วยตัวเอง"
                : "เที่ยวกับไกด์"}
              <IconX size={16} />
            </button>

            <button
              type="button"
              className="tourism-clear-filters"
              onClick={() => {
                setSelectedMode(null);
                setSelectedArea("ทั้งหมด");
              }}
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        )}

        {/* ตัวกรองพื้นที่ */}
        <div
          className="tourism-area-filters"
          aria-label="เลือกพื้นที่"
        >
          {areas.map((area) => (
            <button
              key={area}
              type="button"
              className={[
                "tourism-area-filter",
                selectedArea === area
                  ? "tourism-area-filter--active"
                  : "",
              ].join(" ")}
              aria-pressed={selectedArea === area}
              onClick={() => setSelectedArea(area)}
            >
              {area}
            </button>
          ))}
        </div>

        {/* การ์ดสถานที่ */}
        {filteredPlaces.length > 0 ? (
          <div className="tourism-place-grid">
            {filteredPlaces.map((place) => (
              <article
                key={place.slug}
                className="tourism-place-card"
              >
                <Link
                  href={`/tourism/${place.slug}`}
                  className="tourism-place-card__link"
                >
                  <div className="tourism-place-card__image">
                    <img
                      src={place.image}
                      alt={place.name}
                      loading="lazy"
                    />
                  </div>

                  <div className="tourism-place-card__body">
                    <span className="tourism-place-card__area">
                      <IconMapPin size={15} />
                      {place.area}
                    </span>

                    <h3>{place.name}</h3>

                    {/* แท็กรูปแบบการเที่ยว */}
                    <div className="tourism-place-card__tags">
                      {place.travelModes.includes("guide") && (
                        <span className="tourism-place-tag">
                          <IconUsers size={14} />
                          เที่ยวกับไกด์
                        </span>
                      )}

                      {place.travelModes.includes("self") && (
                        <span className="tourism-place-tag">
                          <IconWalk size={14} />
                          เที่ยวด้วยตัวเอง
                        </span>
                      )}
                    </div>

                    <p>{place.description}</p>

                    <span className="tourism-place-card__more">
                      ดูรายละเอียด <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="tourism-empty">
            <h3>ยังไม่มีพื้นที่ที่ตรงกับตัวเลือกนี้</h3>
            <p>
              ลองเปลี่ยนรูปแบบการเที่ยวหรือเลือกพื้นที่อื่น
            </p>

            <button
              type="button"
              onClick={() => {
                setSelectedMode(null);
                setSelectedArea("ทั้งหมด");
              }}
            >
              ดูพื้นที่ทั้งหมด
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
