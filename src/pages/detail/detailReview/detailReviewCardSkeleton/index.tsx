import { FC } from "react";

const DetailReviewCardSkeleton: FC = () => {
  return (
    <div className="flex gap-5 font-bold italic w-full text-gray animate-pulse">
      <div className="w-10 h-10 bg-red/30 rounded-full" />

      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between gap-3 items-center">
          <div className="flex flex-col gap-2">
            <div className="h-5 w-32 bg-red/20 rounded" />
            <div className="h-4 w-40 bg-red/10 rounded" />
          </div>
          <div className="h-4 w-24 bg-red/10 rounded" />
        </div>

        <div className="h-5 w-full bg-red/10 rounded" />
        <div className="h-5 w-5/6 bg-red/10 rounded" />
        <div className="h-5 w-2/3 bg-red/10 rounded" />

        <div className="flex gap-2 mt-5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-red/30 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailReviewCardSkeleton;
