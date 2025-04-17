import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { getSingleProduct } from "../../redux/actions/getSingleProduct";
import DetailSlider from "./detailSlider";
import DetailInfo from "./detailInfo";
import { clearSingleProduct } from "../../redux/productSlice";
import DetailReview from "./detailReview";

const Detail: FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }

    return () => {
      dispatch(clearSingleProduct());
    };
  }, [id]);

  return (
    <div>
      <div className="flex flex-col gap-15">
        <div className="flex max-lg:flex-col gap-5">
          <DetailSlider />
          <DetailInfo />
        </div>

        <DetailReview />
      </div>
    </div>
  );
};

export default Detail;
