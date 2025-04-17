import { FC } from "react";
import { Review } from "../../../../types";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

interface DetailReviewCardProps {
  review: Review;
}
const DetailReviewCard: FC<DetailReviewCardProps> = ({ review }) => {
  const formattedDate = new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(review.date));
  return (
    <div className="flex gap-5 font-bold italic w-full text-gray">
      <FaUserCircle className="text-4xl" />

      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between gap-3 items-center ">
          <div>
            <h2 className="text-xl">{review.reviewerName} </h2>
            <span className="text-sm text-black/40">
              {review.reviewerEmail}
            </span>
          </div>
          <span className="text-black/50 text-sm"> {formattedDate}</span>
        </div>
        <p>{review.comment}</p>

        <div>
          <div className="flex gap-2 mt-5">
            {Array.from({ length: review.rating }).map((_, i) => (
              <FaStar key={i} className="text-red" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReviewCard;
