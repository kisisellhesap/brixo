import { FC } from "react";
import PaymentDetail from "./payment-detail";
import ProductInCart from "./product-in-cart";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import SkeletonPaymentDetail from "./payment-detail/paymentDetailSkeleton";
import ProductInCartSkeleton from "./product-in-cart/productInCartSkeleton";

const Cart: FC = () => {
  const { loading } = useSelector((store: RootState) => store.productReducer);
  return (
    <div className="grid grid-cols-[auto_300px] max-lg:grid-cols-1 gap-20">
      <div className="flex flex-col gap-4">
        {loading ? <ProductInCartSkeleton /> : <ProductInCart />}

        {/* <ProductInCart /> */}
        {/* <ProductInCart /> */}
      </div>
      {loading ? <SkeletonPaymentDetail /> : <PaymentDetail />}
    </div>
  );
};

export default Cart;
