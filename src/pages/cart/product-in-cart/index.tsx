import type { FC } from 'react';
import { GiRoundStar } from 'react-icons/gi';
import type { ProductWithAmount } from '../../../types';
import { discountPercentage } from '../../../utils/discountPercentage';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../redux/store';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import Numeral from 'numeral';

import { decreaseAmount, deleteToCart, increaseAmount } from '../../../redux/actions/cartActions';

interface ProductInCartProps {
  product: ProductWithAmount;
}

const ProductInCart: FC<ProductInCartProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className='flex gap-5 max-md:flex-col items-center'>
      <img
        src={product.images.front}
        alt={product.title}
        className='max-w-[200px] mix-blend-darken object-fit-cover'
      />

      <div className='w-full flex flex-col gap-3'>
        <header className='flex justify-between gap-2 items-center font-bold'>
          <h3 className=''>{product.more.brand}</h3>
          <p className='flex items-center gap-2 text-red'>
            <span>{product.rating.toFixed(1)}</span> <GiRoundStar />
          </p>
        </header>

        <h2 className='text-2xl font-bold'>{product.title}</h2>
        <p className='text-sm'>{product.description}</p>
        <div className='flex items-center  gap-6 mt-10'>
          <div className='flex justify-between items-center gap-3  min-w-[120px]'>
            <button
              className={` ${
                product.amount === 1 && 'bg-transparent'
              } hover:brightness-130 cursor-pointer bg-red text-pink rounded-full  flex items-center justify-center p-2`}
              onClick={() => {
                dispatch(decreaseAmount(product)).then((res) => {
                  const updatedProduct = res.payload;
                  if (updatedProduct.amount <= 0) {
                    dispatch(deleteToCart(updatedProduct));
                  }
                });
              }}
            >
              {product.amount === 1 ? (
                <FaRegTrashCan className='text-[1.2rem] text-red' />
              ) : (
                <FaMinus className='text-[.8rem]' />
              )}
            </button>
            <span className='  text-gray font-extrabold'>{product.amount}</span>
            <button
              className={`${
                product.amount === product.stock && 'opacity-25'
              } p-2 border-none outline-none hover:brightness-130 cursor-pointer bg-red text-pink rounded-full`}
              disabled={product.amount === product.stock ? true : false}
              onClick={() => {
                dispatch(increaseAmount(product));
              }}
            >
              <FaPlus className='text-[.8rem]' />
            </button>
          </div>
          <p
            className={`${product.amount === product.stock ? 'text-red' : undefined}
              transition 
            `}
          >
            Stock : {product.stock}
          </p>

          <div className='flex gap-3 items-center ms-auto'>
            <p className='line-through font-bold'>$ {product.price}</p>
            <p className='text-2xl bg-red text-pink py-1 px-3 rounded-full  w-shadow-md min-w-[100px] text-center'>
              ${' '}
              {Numeral(
                discountPercentage({
                  percent: product.discountPercentage,
                  price: product.price * product.amount,
                }).toFixed(0),
              ).format('0,0')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
