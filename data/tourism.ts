
export type TravelMode = "guide" | "self";

export type TourismPlace = {
  slug: string;
  name: string;
  description: string;
  image: string;
  area: string;
  travelModes: TravelMode[];
};

export const tourismPlaces: TourismPlace[] = [
  {
    slug: "bang-kachao",
    name: "คุ้งบางกะเจ้า",
    description:
      "สัมผัสธรรมชาติ วิถีชีวิตชุมชน และเรียนรู้การท่องเที่ยวอย่างยั่งยืน",
    image: "/images/tourism/bang-kachao.jpg",
    area: "สมุทรปราการ",
    travelModes: ["guide", "self"],
  },
  {
    slug: "khao-chaison",
    name: "เขาชัยสน",
    description:
      "สัมผัสธรรมชาติ วิถีชีวิตชุมชน และเรียนรู้การท่องเที่ยวอย่างยั่งยืน",
    image: "/images/tourism/khao-chaison.jpg",
    area: "พัทลุง",
    travelModes: ["guide"],
  },
  {
    slug: "suan-pung",
    name: "สวนผึ้ง",
    description:
      "เรียนรู้เรื่องราวท้องถิ่น ผ่านผู้คน อาหาร และภูมิปัญญาของชุมชน",
    image: "/images/tourism/suan-pung.jpg",
    area: "ราชบุรี",
    travelModes: ["guide"],
  },
  {
    slug: "hat-yai",
    name: "หาดใหญ่",
    description:
      "ออกสำรวจพื้นที่สีเขียวและค้นพบเสน่ห์ของธรรมชาติในแบบของคุณ",
    image: "/images/tourism/hat-yai.jpg",
    area: "สงขลา",
    travelModes: ["self"],
  },
  {
    slug: "tae-paa",
    name: "เทพา",
    description:
      "ออกสำรวจพื้นที่สีเขียวและค้นพบเสน่ห์ของธรรมชาติในแบบของคุณ",
    image: "/images/tourism/tae-paa.jpg",
    area: "สงขลา",
    travelModes: ["self"],
  },
];
