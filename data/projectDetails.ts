
export type ProjectSection = {
  eyebrow: string;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
};

export type ProjectDetailData = {
  title: string;
  subtitle: string;
  location?: string;
  heroImage: string;
  heroImageAlt: string;
  externalUrl?: string;
  externalLabel?: string;
  sections: ProjectSection[];
};

export const projectDetails: Record<string, ProjectDetailData> = {
  "community-tourism": {
    title: "ท่องเที่ยวชุมชน",
    subtitle:
      "เปิดประสบการณ์ท่องเที่ยวชุมชน สัมผัสวิถีชีวิตและธรรมชาติ พร้อมเรียนรู้เสน่ห์ของท้องถิ่นในมุมที่แตกต่าง",
    location: "คุ้งบางกะเจ้า จังหวัดสมุทรปราการ",
    heroImage: "/images/community-tourism.jpg",
    heroImageAlt: "บรรยากาศการท่องเที่ยวชุมชน",
    sections: [
      {
        eyebrow: "01 - ABOUT THE PROJECT",
        title: "สัมผัสเสน่ห์ของชุมชน",
        description: [
          "เรียนรู้วิถีชีวิต วัฒนธรรม และภูมิปัญญาท้องถิ่น ผ่านประสบการณ์ที่เชื่อมโยงผู้คนกับธรรมชาติ",
        ],
        image: "/images/community-tourism.jpg",
        imageAlt: "กิจกรรมเรียนรู้วิถีชีวิตชุมชน",
      },
      {
        eyebrow: "02 - WHAT WE DO",
        title: "เรียนรู้ผ่านประสบการณ์จริง",
        description: [
          "เปิดโอกาสให้ผู้เข้าร่วมได้สัมผัสกิจกรรมในพื้นที่ และเรียนรู้เรื่องราวจากคนในชุมชนโดยตรง",
        ],
        image: "/images/community-tourism.jpg",
        imageAlt: "ประสบการณ์ท่องเที่ยวชุมชน",
      },
    ],
  },

  "community-waste": {
    title: "จัดการขยะชุมชน",
    subtitle:
      "เปลี่ยนการจัดการขยะให้เป็นเรื่องที่ทุกคนมีส่วนร่วม เพื่อชุมชนที่สะอาดและยั่งยืน",
    location: "คุ้งบางกะเจ้า จังหวัดสมุทรปราการ",
    heroImage: "/images/community-waste.jpg",
    heroImageAlt: "การจัดการขยะในชุมชน",
    externalUrl: "https://example.com",
    externalLabel: "เยี่ยมชมเว็บไซต์น้องรักษ์",
    sections: [
      {
        eyebrow: "01 - ABOUT THE PROJECT",
        title: "สร้างระบบจัดการขยะที่ชุมชนมีส่วนร่วม",
        description: [
          "ส่งเสริมการคัดแยกและบันทึกข้อมูลขยะ เพื่อให้การจัดการขยะในชุมชนเป็นระบบมากขึ้น",
        ],
        image: "/images/community-waste.jpg",
        imageAlt: "ระบบจัดการขยะชุมชน",
      },
      {
        eyebrow: "02 - HOW IT WORKS",
        title: "เปลี่ยนขยะให้เกิดคุณค่า",
        description: [
          "สนับสนุนการนำวัสดุกลับมาใช้ประโยชน์ พร้อมส่งเสริมการมีส่วนร่วมของคนในชุมชน",
        ],
        image: "/images/community-waste.jpg",
        imageAlt: "กิจกรรมจัดการขยะ",
      },
    ],
  },

  "local-food": {
    title: "อาหารและภูมิปัญญาท้องถิ่น",
    subtitle:
      "ต่อยอดวัตถุดิบและองค์ความรู้ท้องถิ่น สู่เรื่องราวอาหารที่สะท้อนเอกลักษณ์ของชุมชน",
    location: "คุ้งบางกะเจ้า จังหวัดสมุทรปราการ",
    heroImage: "/images/local-food.jpg",
    heroImageAlt: "อาหารจากวัตถุดิบท้องถิ่น",
    sections: [
      {
        eyebrow: "01 - ABOUT THE PROJECT",
        title: "เรื่องราวของอาหารและชุมชน",
        description: [
          "นำเสนอคุณค่าของวัตถุดิบและภูมิปัญญาท้องถิ่น ผ่านเรื่องราวอาหารที่สะท้อนเอกลักษณ์ของพื้นที่",
        ],
        image: "/images/local-food.jpg",
        imageAlt: "อาหารและผลิตภัณฑ์ท้องถิ่น",
      },
      {
        eyebrow: "02 - WHAT WE DO",
        title: "ต่อยอดคุณค่าจากท้องถิ่น",
        description: [
          "สนับสนุนการนำองค์ความรู้และวัตถุดิบในพื้นที่มาพัฒนาต่อยอดให้เกิดประโยชน์",
        ],
        image: "/images/local-food.jpg",
        imageAlt: "วัตถุดิบและอาหารชุมชน",
      },
    ],
  },

  "project-community-workshop": {
    title: "อบรมทักษะชุมชนการทำไบโอชาร์จากกาบมะพร้าว",
    subtitle:
      "เปลี่ยนวัสดุเหลือใช้ในชุมชน ให้กลายเป็นพลังงานสะอาดและโอกาสใหม่ในการพัฒนาชุมชนอย่างยั่งยืน",
    location: "คุ้งบางกะเจ้า จังหวัดสมุทรปราการ",
    heroImage: "/images/project-community-workshop-00.jpg",
    heroImageAlt: "กิจกรรมอบรมและแลกเปลี่ยนความรู้ในชุมชน",
    sections: [
      {
        eyebrow: "01 - ABOUT THE PROJECT",
        title: "จากวัสดุเหลือใช้ สู่พลังงานที่ยั่งยืน",
        description: [
          "กาบมะพร้าวเป็นวัสดุเหลือใช้ที่พบได้ทั่วไปในชุมชนคุ้งบางกะเจ้า แต่กลับยังไม่ได้รับการนำไปใช้ประโยชน์อย่างคุ้มค่า LearnDo จึงร่วมกับชุมชนพัฒนาหลักสูตรการทำไบโอชาร์จากกาบมะพร้าว เพื่อให้คนในชุมชนได้เรียนรู้ทักษะใหม่ สร้างมูลค่าเพิ่มจากวัสดุในท้องถิ่น และต่อยอดไปสู่การใช้ประโยชน์ในด้านกานเกษตรและสิ่งแวดล้อม",
        ],
        image: "/images/project-community-workshop-01.jpg",
        imageAlt: "กิจกรรมแลกเปลี่ยนความรู้",
      },
      {
        eyebrow: "02 - WHAT WE DO",
        title: "การอบรมและลงมือทำจริง",
        description: [
          "เราออกแบบหลักสูตรการอบรมที่ผสมผสานความรู้ด้านสิ่งแวดล้อมกับการลงมือปฏิบัติจริง โดยมีผู้เชี่ยวชาญจากภายนอกและคนในชุมชนร่วมถ่ายทอดความรู้",
        ],
        image: "/images/project-community-workshop-02.jpg",
        imageAlt: "การอบรมและกิจกรรมชุมชน",
      },
      {
        eyebrow: "03 - IMPACT & STORIES",
        title: "ผลลัพธ์ที่เกิดขึ้นกับชุมชน",
        description: [
          "นอกจากจะช่วยลดปริมาณขยะจากกาบมะพร้าวแล้ว โครงการยังสร้างทักษะใหม่ให้กับคนในชุมชน เกิดการต่อยอดไปสู่การใช้ไบโอชาร์ในพื้นที่เกษตร และสร้างรายได้เสริมให้กับครัวเรือนในระยะยาว",
        ],
        image: "/images/project-community-workshop-03.jpg",
        imageAlt: "การอบรมและกิจกรรมชุมชน",
      },
    ],
  },
};
