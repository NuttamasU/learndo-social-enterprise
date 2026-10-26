
export type ProductCategory =
  | "ทั้งหมด"
  | "อาหารและเครื่องดื่ม"
  | "งานฝีมือ"
  | "ผลิตภัณฑ์รักษ์โลก";

export type CommunityProduct = {
  id: string;
  name: string;
  category: Exclude<ProductCategory, "ทั้งหมด">;
  description: string;
  story: string;
  image: string;
  price: number | null;
  lineUrl: string;
  featured?: boolean;
};

export const productCategories: ProductCategory[] = [
  "ทั้งหมด",
  "อาหารและเครื่องดื่ม",
  "งานฝีมือ",
  "ผลิตภัณฑ์รักษ์โลก",
];

export const communityProducts: CommunityProduct[] = [
  {
    id: "woven-shirt",
    name: "เสื้อมัดย้อม",
    category: "งานฝีมือ",
    description: "งานผ้าที่สะท้อนสีสันและภูมิปัญญาของชุมชน",
    story:
      "จากการเรียนรู้ร่วมกับชุมชน เราได้พบกับงานฝีมือที่ถ่ายทอดความรู้จากคนในพื้นที่ สินค้าแต่ละชิ้นเป็นอีกหนึ่งช่องทางให้ภูมิปัญญาท้องถิ่นได้รับการส่งต่อ",
    image: "/images/products/handmade.jpg",
    price: null,
    lineUrl: "https://line.me/",
    featured: true,
  },
  {
    id: "local-food",
    name: "ผลิตภัณฑ์อาหารชุมชน",
    category: "อาหารและเครื่องดื่ม",
    description: "ผลิตภัณฑ์จากวัตถุดิบและเรื่องราวท้องถิ่น",
    story:
      "อาหารเป็นส่วนหนึ่งของวิถีชีวิตและความทรงจำของแต่ละพื้นที่ เราอยากชวนให้ทุกคนรู้จักผลิตภัณฑ์ที่เกิดจากวัตถุดิบและความตั้งใจของคนในชุมชน",
    image: "/images/products/local-food.jpg",
    price: null,
    lineUrl: "https://line.me/",
  },
  {
    id: "eco-product",
    name: "ผลิตภัณฑ์รักษ์โลก",
    category: "ผลิตภัณฑ์รักษ์โลก",
    description: "แนวคิดการใช้ทรัพยากรให้เกิดประโยชน์มากขึ้น",
    story:
      "การดูแลสิ่งแวดล้อมเริ่มต้นได้จากสิ่งใกล้ตัว ผลิตภัณฑ์เหล่านี้สะท้อนแนวคิดการใช้ทรัพยากรอย่างคุ้มค่าและการสร้างโอกาสใหม่ให้ชุมชน",
    image: "/images/products/eco-product.jpg",
    price: null,
    lineUrl: "https://line.me/",
  },
  {
    id: "community-craft",
    name: "งานฝีมือจากชุมชน",
    category: "งานฝีมือ",
    description: "ผลงานที่มีเอกลักษณ์และเรื่องราวเฉพาะพื้นที่",
    story:
      "เบื้องหลังงานฝีมือแต่ละชิ้นมีทั้งเวลา ประสบการณ์ และความรู้ของผู้ทำ การสนับสนุนสินค้าเหล่านี้ช่วยเปิดโอกาสให้เรื่องราวของชุมชนเป็นที่รู้จักมากขึ้น",
    image: "/images/products/handmade.jpg",
    price: null,
    lineUrl: "https://line.me/",
  },
];
