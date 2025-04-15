import { FC } from "react";
import { Link } from "react-router-dom";

const PaymentDetail: FC = () => {
  return (
    <div className="flex flex-col gap-5 italic p-5 rounded-lg h-fit  shadow-css">
      <h3 className="text-2xl font-bold">Order Details</h3>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center gap-2 font-bold">
          <p className=" text-lg">Product Quantity</p>
          <span>4</span>
        </div>

        <div className="flex justify-between items-center gap-2  font-bold">
          <p className=" text-lg">Product Total</p>
          <span>$200</span>
        </div>

        <hr className=" h-1 bg-red-500 rounded-2xl border-none my-5" />

        <div className="flex justify-between items-center gap-2  font-bold">
          <p className="text-lg">Total</p>

          <span>$200</span>
        </div>
      </div>

      <Link
        to="/payment"
        className="px-5 py-2 bg-red text-pink text-center  rounded-md cursor-pointer font-bold shadow-md"
      >
        Confirm Cart
      </Link>
    </div>
  );
};

export default PaymentDetail;
