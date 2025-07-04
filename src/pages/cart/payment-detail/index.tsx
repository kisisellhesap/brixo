import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { type RootState } from '../../../redux/store';
import Numeral from 'numeral';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const PaymentDetail: FC = () => {
  const { cartProducts } = useSelector((store: RootState) => store.cartReducer);
  const { currentUser } = useSelector((store: RootState) => store.userReducer);

  let ProductQuantity = 0;
  let Producttotal = 0;
  if (cartProducts && cartProducts.length !== 0) {
    ProductQuantity = cartProducts.reduce((sum, product) => sum + product.amount, 0);
    Producttotal = cartProducts.reduce((sum, product) => sum + product.price * product.amount, 0);
  }

  const pay = async () => {
    if (currentUser && cartProducts.length > 0) {
      console.log('true');

      toast.success('You are directed to the payment page');
    }
  };

  return (
    <div className='flex flex-col gap-5 italic p-5 rounded-lg   shadow-css'>
      <h3 className='text-2xl font-bold'>Order Details</h3>

      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center gap-2 font-bold'>
          <p className=' text-lg'>Product Quantity</p>
          <span>{ProductQuantity}</span>
        </div>

        <div className='flex justify-between items-center gap-2  font-bold'>
          <p className=' text-lg'>Product Total</p>
          <span>$ {Numeral(Producttotal * ProductQuantity).format('0,0')}</span>
        </div>

        <hr className=' h-1 bg-red-500 rounded-2xl border-none my-5' />

        <div className='flex justify-between items-center gap-2  font-bold'>
          <p className='text-lg'>Total</p>

          <span>
            <span>$ {Numeral(Producttotal * ProductQuantity).format('0,0')}</span>
          </span>
        </div>
      </div>

      <Link
        to='/payment'
        className='px-5 py-2 bg-red text-pink text-center  rounded-md cursor-pointer font-bold shadow-md'
        onClick={pay}
      >
        Confirm Cart
      </Link>
    </div>
  );
};

export default PaymentDetail;
