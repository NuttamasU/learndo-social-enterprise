
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourismDetail from "@/components/TourismDetail";
import { tourismDetails } from "@/data/tourismDetails";
import TourismCorporate from '@/components/TourismCorporate';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(tourismDetails).map((slug) => ({ slug }));
}

export default async function TourismDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = tourismDetails[slug];

  if (!place) {
    notFound();
  }

  return (
    <div className="site-shell">
      <Header />
      <div className="page-content">
        <TourismDetail place={place} /> 
        <TourismCorporate /> 
      </div>
      <Footer />
    </div>
  );
}
