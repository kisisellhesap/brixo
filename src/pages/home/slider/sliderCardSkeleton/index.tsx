import { FC } from "react";

const SliderCardSkeleton: FC = () => {
  return (
    <div className="w-[100%] h-[100%] flex max-lg:flex-col gap-15 relative animate-pulse cursor-wait">
      <div className="flex flex-col gap-7 w-[50%] max-lg:w-[100%] max-lg:order-2 order-1">
        <div className="flex justify-between items-center">
          <div className="h-10 w-40 bg-red/20 rounded"></div>
          <div className="flex gap-2 items-center">
            <div className="h-5 w-5 bg-red/30 rounded-full"></div>
            <div className="h-4 w-6 bg-red/30 rounded"></div>
          </div>
        </div>

        <div className="h-10 w-60 bg-red/20 rounded"></div>
        <div className="h-16 w-full bg-red/10 rounded"></div>

        <div className="flex items-center justify-between">
          <div className="h-10 w-32 bg-red/30 rounded"></div>
          <div className="h-6 w-16 bg-red/20 rounded"></div>
        </div>

        <span className="absolute right-0 top-0 w-28 h-10 bg-red/30 rounded-full shadow-md"></span>

        <div className="flex flex-wrap gap-2 mt-auto">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-red/20 w-16 h-5 rounded-sm shadow-md"
            ></div>
          ))}
        </div>
      </div>

      <div className="w-[50%] max-lg:w-[100%] h-[400px]  max-lg:order-1 order-2 bg-red/10 rounded-md"></div>
    </div>
  );
};

export default SliderCardSkeleton;
