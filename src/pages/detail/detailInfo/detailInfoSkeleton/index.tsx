import { FC } from "react";

const DetailInfoSkeleton: FC = () => {
  return (
    <div className="text-gray flex flex-col font-bold gap-5 w-[40%] max-lg:w-[100%] animate-pulse">
      <div className="h-8 w-3/4 bg-red/20 rounded" />

      <div className="h-6 w-1/2 bg-red/10 rounded" />

      <div className="flex items-center justify-between gap-4">
        <div className="h-8 w-24 bg-red/30 rounded" />
        <div className="h-6 w-20 bg-red/20 rounded" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-2xl pb-3">
          <div className="w-6 h-6 bg-red/20 rounded" />
          <div className="w-32 h-6 bg-red/20 rounded" />
        </div>

        <div className="h-5 w-full bg-red/10 rounded" />
        <div className="h-5 w-5/6 bg-red/10 rounded" />
        <div className="h-5 w-3/4 bg-red/10 rounded" />

        <div className="flex flex-col gap-2 mt-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-5 w-2/3 bg-red/10 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailInfoSkeleton;
