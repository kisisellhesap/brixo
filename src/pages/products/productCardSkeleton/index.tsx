import { FC } from "react";

const ProductCardSkeleton: FC = () => {
  return (
    <div className="shadow-md p-4 rounded-xl flex flex-col gap-3 bg-white animate-pulse">
      <div className="flex justify-between items-center">
        <div className="w-1/3 h-4 bg-gray-300 rounded" />
        <div className="w-10 h-4 bg-gray-300 rounded" />
      </div>

      <div className="w-full h-[200px] bg-gray-200 rounded-md" />

      <div className="w-3/4 h-4 bg-gray-300 rounded" />
      <div className="flex justify-between gap-4">
        <div className="w-1/3 h-4 bg-gray-300 rounded" />
        <div className="w-1/4 h-4 bg-gray-300 rounded" />
      </div>

      <div className="w-1/2 h-8 bg-gray-300 rounded" />
    </div>
  );
};

export default ProductCardSkeleton;
