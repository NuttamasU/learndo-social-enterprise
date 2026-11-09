import type { TourismActivity } from "@/data/tourismDetails";

type Props = {
  activity: TourismActivity;
};

export default function TourismActivityCard({
  activity,
}: Props) {
  return (
    <article className="tourism-detail-activity-card">
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
      </div>
    </article>
  );
}