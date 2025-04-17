import { FC } from "react";

const FeaturesCardSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 items-center gap-6 animate-pulse group mt-15">
      <div className="flex flex-col  gap-6 group-even:first:order-2 max-lg:group-odd:order-2">
        <div className="h-8 w-2/3 bg-red/30 rounded" />
        <div className="h-35 w-full bg-red/20 rounded" />
        <div className="h-10 w-32 bg-red/30 rounded" />
      </div>

      <div>
        <div className="w-[60%] h-[200px] rounded-4xl bg-red/20 mx-auto" />
      </div>
    </div>
  );
};

export default FeaturesCardSkeleton;
