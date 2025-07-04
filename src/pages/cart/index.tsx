import PaymentDetail from './payment-detail';
import { useSelector } from 'react-redux';
import SkeletonPaymentDetail from './payment-detail/paymentDetailSkeleton';
// import ProductInCartSkeleton from "./product-in-cart/productInCartSkeleton";
import type { RootState } from '../../redux/store';
import { type FC } from 'react';
import ProductInCart from './product-in-cart';
import { Link } from 'react-router-dom';
import ProductInCartSkeleton from './product-in-cart/productInCartSkeleton';

const Cart: FC = () => {
  const { loading, cartProducts } = useSelector((store: RootState) => store.cartReducer);

  console.log(cartProducts);

  if (cartProducts.length === 0 && !loading) {
    return (
      <div className='flex flex-col gap-5 items-center justify-center h-[60vh] '>
        <h2 className='text-3xl font-bold'>There are no products in your cart.</h2>

        <Link to='/products' className='text-pink  bg-red hover:bg-red/90 rounded-lg p-3'>
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-[auto_300px] h-[520px] max-lg:grid-cols-1 gap-20 '>
      <div className='flex flex-col gap-4 overflow-y-scroll scroll-none '>
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <ProductInCartSkeleton key={i} />)
          : cartProducts.map((product, i) => <ProductInCart key={i} product={product} />)}
      </div>
      {loading && cartProducts.length === 0 ? <SkeletonPaymentDetail /> : <PaymentDetail />}
    </div>
  );
};

export default Cart;
