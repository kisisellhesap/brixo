import type { FC } from 'react';
import type { ProductWithAmount } from '../../../types';
import { GiRoundStar } from 'react-icons/gi';

interface PaymentInCartProps {
  product: ProductWithAmount;
}

const PaymentProducts: FC<PaymentInCartProps> = ({ product }) => {
  return (
    <div className='flex gap-5 max-md:flex-col items-center'>
      <img
        src={product.images.front}
        alt={product.title}
        className='max-w-[100px] mix-blend-darken object-fit-cover'
      />

      <div className='w-full flex flex-col gap-2'>
        <header className='flex justify-between gap-2 items-center font-bold'>
          <h3 className=''>{product.more.brand}</h3>
          <p className='flex items-center gap-2 text-red'>
            <span>{product.rating.toFixed(1)}</span> <GiRoundStar />
          </p>
        </header>

        <h2 className='text-md font-bold'>{product.title}</h2>
        <p className='text-sm'>{product.description}</p>
        <div className='flex items-center  gap-2 mt-3'>
          <p className='text-red font-bold text-md flex items-center'>
            <span className='text-4xl italic me-1'> {product.amount}</span>x
          </p>

          <div className='flex gap-3 items-center ms-auto'>
            <p className='text-2xl bg-red text-pink py-1 px-3 rounded-full  w-shadow-md min-w-[100px] text-center'>
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProducts;
