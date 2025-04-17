import { FC } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import DetailSliderCard from "./detailSliderCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import DetailSliderCardSkeleton from "./DetailSliderCardSkeleton";

const DetailSlider: FC = () => {
  const { loading, singleProduct } = useSelector(
    (store: RootState) => store.productReducer
  );

  if (loading && !singleProduct) {
    return <DetailSliderCardSkeleton />;
  }
  if (!loading && singleProduct) {
    return (
      <div className="w-[60%] max-lg:w-[100%]">
        <Splide options={{ type: "loop", perPage: 1 }} className="!pb-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <DetailSliderCardSkeleton key={i} />
              ))
            : Object.values(singleProduct.images).map((item, i) => (
                <SplideSlide key={i}>
                  <DetailSliderCard item={item} key={i} />
                </SplideSlide>
              ))}
        </Splide>
      </div>
    );
  }
};

export default DetailSlider;
