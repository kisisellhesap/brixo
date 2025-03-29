import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SliderCard from "./slider-card";

const Slider: FC = () => {
  return (
    <div>
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
          speed: 500, // Geçiş süresi (1 saniyede yumuşak geçiş)
        }}
      >
        <SplideSlide>
          <SliderCard />
        </SplideSlide>
        <SplideSlide>
          <SliderCard />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;
