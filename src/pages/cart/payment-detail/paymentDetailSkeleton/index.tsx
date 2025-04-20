import { FC } from "react";

const SkeletonPaymentDetail: FC = () => {
  return (
    <div className="flex flex-col gap-5 italic p-5 rounded-lg h-fit shadow-css animate-pulse bg-white">
      <div className="bg-red/30 h-8 w-40 rounded-md" />

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center gap-2">
          <div className="bg-red/20 h-6 w-40 rounded-md" />
          <div className="bg-red/30 h-6 w-10 rounded-md" />
        </div>

        <div className="flex justify-between items-center gap-2">
          <div className="bg-red/20 h-6 w-40 rounded-md" />
          <div className="bg-red/30 h-6 w-16 rounded-md" />
        </div>

        <div className="h-1 bg-red-500 rounded-2xl my-5" />

        <div className="flex justify-between items-center gap-2">
          <div className="bg-red/20 h-6 w-24 rounded-md" />
          <div className="bg-red/30 h-6 w-16 rounded-md" />
        </div>
      </div>

      <div className="bg-red/30 h-10 w-full rounded-md shadow-md" />
    </div>
  );
};

export default SkeletonPaymentDetail;
