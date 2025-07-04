import { FC } from "react";

const ProductInCartSkeleton: FC = () => {
  return (
    <div className="flex gap-3 max-md:flex-col items-center animate-pulse">
      <div className="bg-red/30 rounded-md w-[250px] h-[250px]" />

      <div className="w-full flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="bg-red/20 h-5 w-24 rounded-md" />
          <div className="flex items-center gap-2">
            <div className="bg-red/20 h-5 w-8 rounded-md" />
            <div className="bg-red/30 h-5 w-5 rounded-full" />
          </div>
        </div>

        <div className="bg-red/30 h-6 w-3/4 rounded-md" />
        <div className="bg-red/20 h-4 w-full rounded-md" />
        <div className="bg-red/20 h-4 w-5/6 rounded-md" />

        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-3">
            <div className="bg-red/30 w-[25px] h-[25px] rounded-full" />
            <div className="bg-red/20 w-4 h-5 rounded-md" />
            <div className="bg-red/30 w-[25px] h-[25px] rounded-full" />
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-red/20 h-6 w-12 rounded-md" />
            <div className="bg-red/30 h-8 w-16 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCartSkeleton;
