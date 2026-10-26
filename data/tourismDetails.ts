
export type TourismActivity = {
  slug: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  price: number | null;
  description: string;
};

export type TourismDetailData = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  province: string;
  suitableFor: string;
  travelModes: ("guide" | "self")[];
  heroImage: string;
  aboutImage: string;
  aboutTitle: string;
  aboutDescription: string;
  activities: TourismActivity[];
};

export const tourismDetails: Record<string, TourismDetailData> = {
  "bang-kachao": {
    slug: "bang-kachao",
    name: "บางกะเจ้า",
    tagline: "ธรรมชาติ วิถีชีวิต และชุมชนที่ยั่งยืน",
    description:
      "สัมผัสเสน่ห์ของ “ปอดของกรุงเทพฯ” ผ่านวิถีชีวิตของคนในชุมชนที่อยู่ร่วมกับธรรมชาติอย่างสมดุล",
    province: "จ.สมุทรปราการ",
    suitableFor: "ทุกกลุ่ม",
    travelModes: ["guide", "self"],
    heroImage: "/images/tourism/bang-kachao-hero.jpg",
    aboutImage: "/images/tourism/bang-kachao-about.jpg",
    aboutTitle: "รู้จักบางกะเจ้า",
    aboutDescription:
      "บางกะเจ้า คือพื้นที่สีเขียวกลางกรุงเทพฯ ที่เต็มไปด้วยธรรมชาติ วิถีชีวิตชุมชน และภูมิปัญญาท้องถิ่น เหมาะสำหรับการเรียนรู้เรื่องสิ่งแวดล้อม การจัดการทรัพยากร และการใช้ชีวิตที่เรียบง่ายและอบอุ่น",
    activities: [
      {
        slug: "cycling",
        title: "ปั่นจักรยานชมวิถีบางกะเจ้า",
        category: "ทริปชุมชน",
        image: "/images/tourism/cycling.jpg",
        duration: "2–3 ชั่วโมง",
        price: 600,
        description:
          "ปั่นจักรยานชมพื้นที่สีเขียวและเรียนรู้วิถีชีวิตของชุมชน",
      },
      {
        slug: "biochar",
        title: "ทำปุ๋ยหมักจากวัสดุธรรมชาติ",
        category: "เวิร์กช็อป",
        image: "/images/tourism/biochar.jpg",
        duration: "3 ชั่วโมง",
        price: 450,
        description:
          "เรียนรู้การนำวัสดุธรรมชาติมาใช้ประโยชน์ผ่านกิจกรรมลงมือทำ",
      },
      {
        slug: "boat-tour",
        title: "ล่องเรือชมคลองบางกะเจ้า",
        category: "ทริปชุมชน",
        image: "/images/tourism/boat-tour.jpg",
        duration: "1–2 ชั่วโมง",
        price: 300,
        description:
          "สัมผัสบรรยากาศริมคลองและชมธรรมชาติจากมุมมองทางน้ำ",
      },
      {
        slug: "local-food",
        title: "ทำอาหารพื้นถิ่นกับชาวบ้าน",
        category: "อาหารและภูมิปัญญาท้องถิ่น",
        image: "/images/tourism/local-food.jpg",
        duration: "2–3 ชั่วโมง",
        price: 500,
        description:
          "เรียนรู้วัตถุดิบท้องถิ่นและลงมือทำอาหารร่วมกับคนในชุมชน",
      },
    ],
  },
};
