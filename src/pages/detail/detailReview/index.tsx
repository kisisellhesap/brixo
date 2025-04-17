import { FC } from "react";
import DetailReviewCard from "./detailReviewCard";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import DetailReviewCardSkeleton from "./detailReviewCardSkeleton";

const DetailReview: FC = () => {
  const { loading, singleProduct } = useSelector(
    (store: RootState) => store.productReducer
  );

  if (loading && !singleProduct) {
    return <DetailReviewCardSkeleton />;
  }
  if (!loading && singleProduct) {
    return (
      <div className="flex flex-col gap-10">
        <h3 className="text-5xl text-gray font-bold">COMMENTS</h3>
        <div className="flex flex-col gap-10">
          {singleProduct.reviews.map((review, i) => (
            <DetailReviewCard review={review} key={i} />
          ))}
        </div>
      </div>
    );
  }
};

export default DetailReview;
