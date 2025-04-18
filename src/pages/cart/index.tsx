import { FC } from "react";
import PaymentDetail from "./payment-detail";
import ProductInCart from "./product-in-cart";

const Cart: FC = () => {
  return (
    <div className="grid grid-cols-[auto_300px] gap-20">
      <div className="flex flex-col gap-4 ">
        <ProductInCart />
        <ProductInCart />
        <ProductInCart />
      </div>
      <PaymentDetail />
    </div>
  );
};

export default Cart;
