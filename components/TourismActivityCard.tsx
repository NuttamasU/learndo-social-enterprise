
import Link from "next/link";
import {
  IconClock,
  IconCurrencyBaht,
  IconArrowRight,
} from "@tabler/icons-react";

import type { TourismActivity } from "@/data/tourismDetails";

type Props = {
  activity: TourismActivity;
  placeSlug: string;
};

export default function TourismActivityCard({
  activity,
  placeSlug,
}: Props) {
  return (
    <article className="tourism-detail-activity-card">
      <Link
        href={`/tourism/${placeSlug}/activities/${activity.slug}`}
        className="tourism-detail-activity-card__link"
      >
        <div className="tourism-detail-activity-card__image">
          <img
            src={activity.image}
            alt={activity.title}
            loading="lazy"
          />
        </div>

        <div className="tourism-detail-activity-card__body">
          <span className="tourism-detail-activity-card__category">
            {activity.category}
          </span>

          <h3>{activity.title}</h3>

          <p className="tourism-detail-activity-card__description">
            {activity.description}
          </p>

          <div className="tourism-detail-activity-card__meta">
            <span>
              <IconClock size={17} stroke={1.7} />
              {activity.duration}
            </span>

            <span>
              <IconCurrencyBaht size={17} stroke={1.7} />
              {activity.price === null
                ? "สอบถามราคา"
                : `${activity.price.toLocaleString("th-TH")} / คน`}
            </span>
          </div>

          <span className="tourism-detail-activity-card__more">
            ดูรายละเอียด
            <IconArrowRight size={17} />
          </span>
        </div>
      </Link>
    </article>
  );
}
