import { FC, useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SliderCard from "./slider-card";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Product } from "../../../types";
import SliderCardSkeleton from "./sliderCardSkeleton";

const Slider: FC = () => {
  const { products, loading } = useSelector(
    (store: RootState) => store.productReducer
  );
  const [sliderProducts, setSliderProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length !== 0) {
      const rastgeleSayilar: number[] = [];
      while (rastgeleSayilar.length < 5) {
        const sayi = Math.floor(Math.random() * products.length);
        if (!rastgeleSayilar.includes(sayi)) {
          rastgeleSayilar.push(sayi);
        }
      }

      const secilenUrunler: Product[] = rastgeleSayilar.map(
        (index) => products[index]
      );
      setSliderProducts(secilenUrunler);
    }
  }, [products.length]);

  console.log(sliderProducts);

  return (
    <div className="h-[503px] max-lg:h-[732px]">
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          heightRatio: 0.4,
          arrows: false,
          // autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          // type: "fade",
          speed: 500,
          height: "100%",
        }}
        className="!pb-8"
      >
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <SplideSlide key={i}>
                <SliderCardSkeleton />
              </SplideSlide>
            ))
          : sliderProducts.map((item, i) => (
              <SplideSlide key={i}>
                <SliderCard item={item} />
              </SplideSlide>
            ))}
      </Splide>
    </div>
  );
};

export default Slider;
