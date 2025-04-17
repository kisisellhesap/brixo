import { FC } from "react";

const DetailSliderCardSkeleton: FC = () => {
  return (
    <div className="bg-pink/10 mx-auto w-[50%] max-lg:w-[100%] h-[300px] flex items-center justify-center animate-pulse rounded-md">
      <div className="w-[80%] h-[80%] bg-red/20 rounded-md" />
    </div>
  );
};

export default DetailSliderCardSkeleton;
