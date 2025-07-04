import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Socialcons from '../../sociaIcons';
import { type FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';

const HeaderInfo: FC = () => {
  const { cartProducts } = useSelector((store: RootState) => store.cartReducer);
  let totalAmount = 0;
  totalAmount = cartProducts?.reduce((sum, product) => {
    return sum + product.amount;
  }, 0);

  return (
    <div className='container flex items-center justify-between gap-3 font-semibold italic mt-2'>
      <Socialcons />

      <h3 className='max-lg:hidden'>"Your Shopping, Your Way!"</h3>

      <Link to='cart' className='text-3xl relative cursor-pointer'>
        <BsCart2 />

        {totalAmount > 0 && (
          <span className='text-sm p-3 w-[20px] h-[20px] flex items-center justify-center text-pink bg-red rounded-full absolute right-[-10px] top-[-12px]'>
            {totalAmount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default HeaderInfo;
