import { useEffect, useState, type FC, type MouseEvent } from 'react';
import type { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ProductInCartSkeleton from '../cart/product-in-cart/productInCartSkeleton';
import PaymentProducts from './paymentProduct';
import numeral from 'numeral';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import {
  fromGeneralCartToPrivateCart,
  getCurrentUser,
  updateOrderUser,
} from '../../redux/actions/userActions';
import type { User } from '../../types';
import { deleteToAllCart } from '../../redux/actions/cartActions';
import toast from 'react-hot-toast';

const Payment: FC = () => {
  const { cartProducts, loading } = useSelector((store: RootState) => store.cartReducer);
  const { currentUser } = useSelector((store: RootState) => store.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && cartProducts.length === 0) {
      navigate('/profile/orders');
    }

    console.log(cartProducts, 'cartProducts.length');
  }, [cartProducts]);

  const dispatch = useDispatch<AppDispatch>();
  let productQuantity = 0;
  let productTotal = 0;

  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16); // Sadece rakam ve 16 haneye kadar
    const groups = digits.match(/.{1,4}/g); // Her 4 hanede bir ayır
    return groups ? groups.join(' ') : '';
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 3); // Sadece 3 haneli rakam
    setCvc(digits);
  };

  const formatExpiryDate = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length < 3) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(formatExpiryDate(e.target.value));
  };

  const isAllFieldsFilled =
    currentUser !== null &&
    currentUser.addresses !== '' &&
    currentUser.phone !== '' &&
    currentUser.firstName !== '' &&
    currentUser.lastName !== '';

  if (cartProducts && cartProducts.length !== 0) {
    productQuantity = cartProducts.reduce((sum, product) => sum + product.amount, 0);
    productTotal = cartProducts.reduce((sum, product) => sum + product.price * product.amount, 0);
  }

  const confirmPayment = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cardNumber.length < 19 || cvc.length < 3 || expiry.length < 5) {
      console.log('Lütfen tüm kart bilgilerini doğru şekilde doldurun.');

      toast.error('Please fill out all card information correctly');
      return;
    }

    toast.success('Payment successful!');
    const paymentDetails = {
      orderId: uuidv4(),
      products: cartProducts,
      totalAmount: productTotal * productQuantity,
      orderDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
      paymentStatus: 'Paid',
      cardInformation: {
        cardNumber: cardNumber,
        expiryDate: expiry,
        cvc: cvc,
      },
    };

    const updateUser = {
      ...currentUser,
      orders: [...(currentUser?.orders || []), paymentDetails],
    };

    const updateCartUser = {
      ...currentUser,
      myCart: [],
    };

    console.log(updateUser, 'updateUser');

    await dispatch(updateOrderUser(updateUser as User));

    await dispatch(deleteToAllCart());
    await dispatch(getCurrentUser());

    console.log(paymentDetails);

    setCardNumber('');
    setCvc('');
    setExpiry('');
  };

  if (!loading && cartProducts.length !== 0 && currentUser !== null) {
    return (
      <div className='flex flex-col gap-6'>
        <div className='overflow-y-scroll p-3 max-h-[350px] min-h-[144px] scroll-none'>
          <div className='flex flex-col gap-7'>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <ProductInCartSkeleton key={i} />)
              : cartProducts.map((product, i) => <PaymentProducts key={i} product={product} />)}
          </div>
        </div>

        <div className='flex flex-col gap-5 italic p-5 rounded-lg bg-red text-white shadow-css'>
          <div className='flex justify-between items-center gap-2 font-bold'>
            <p className='text-lg'>Product Quantity</p>
            <span className='italic text-2xl'>{productQuantity}</span>
          </div>

          <div className='flex justify-between items-center gap-2 font-bold'>
            <p className='text-lg'>Product Total</p>
            <span className='italic text-2xl'>$ {numeral(productTotal).format('0,0')}</span>
          </div>

          <div className='flex justify-between items-center gap-2 font-bold'>
            <p className='text-lg'>Total</p>
            <span className='italic text-2xl'>
              $ {numeral(productTotal * productQuantity).format('0,0')}
            </span>
          </div>
        </div>

        {isAllFieldsFilled ? (
          <div className='flex flex-col gap-10'>
            {/* Fatura Bilgileri */}
            <div className='min-h-60 p-5 bg-gray-100 rounded-lg shadow'>
              <h1 className='text-2xl font-bold mb-4'>Billing Information</h1>
              <p>
                <strong>Ad Soyad:</strong> {currentUser.firstName} {currentUser.lastName}
              </p>
              <p>
                <strong>Email:</strong> {currentUser.email}
              </p>
              <p>
                <strong>Telefon:</strong> {currentUser.phone}
              </p>
              <p>
                <strong>Adres:</strong> {currentUser.addresses}
              </p>
              <p>
                <strong>Toplam Tutar:</strong> ${' '}
                {numeral(productTotal * productQuantity).format('0,0')}
              </p>
            </div>

            <form className='min-h-60 p-6  shadow-md' onSubmit={confirmPayment}>
              <h1 className='text-2xl font-bold mb-6 text-gray-800'>Payment Information</h1>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Name on Card
                  </label>
                  <input
                    type='text'
                    placeholder='Ad Soyad'
                    className='w-full px-4 py-2 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-red'
                    required
                  />
                </div>

                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Card Number
                  </label>
                  <input
                    type='text'
                    placeholder='0000 0000 0000 0000'
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    inputMode='numeric'
                    minLength={19}
                    maxLength={19}
                    className='w-full px-4 py-2 border rounded-md tracking-widest focus:outline-none focus:ring-2 focus:ring-red'
                    required
                  />
                </div>

                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>CVC</label>
                  <input
                    type='text'
                    placeholder='123'
                    value={cvc}
                    onChange={handleCvcChange}
                    inputMode='numeric'
                    className='w-full px-4 py-2 border rounded-md tracking-widest focus:outline-none focus:ring-2 focus:ring-red'
                    required
                    minLength={3}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Expiration date
                  </label>
                  <input
                    type='text'
                    placeholder='MM/YY'
                    value={expiry}
                    onChange={handleExpiryChange}
                    inputMode='numeric'
                    maxLength={5}
                    className='w-full px-4 py-2 border rounded-md tracking-widest focus:outline-none focus:ring-2 focus:ring-red'
                    required
                    minLength={5}
                  />
                </div>
              </div>

              <button className='mt-6 w-full py-3 bg-red text-white text-lg font-semibold rounded-md shadow hover:brightness-110 transition'>
                Confirm Payment
              </button>
            </form>
          </div>
        ) : (
          <div className='text-center bg-yellow-100 border border-yellow-300 p-5 rounded'>
            <h2 className='text-lg font-semibold text-red-600'>
              Please fill in your profile information for invoice.
            </h2>
            <Link
              to='/profile/me'
              className='mt-3 inline-block px-4 py-2 bg-red text-white rounded-md font-semibold hover:brightness-110'
            >
              Go to Homes
            </Link>
          </div>
        )}
      </div>
    );
  }
};

export default Payment;
