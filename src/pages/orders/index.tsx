import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import numeral from 'numeral';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Orders: FC = () => {
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const orders = currentUser?.orders || [];

  if (orders.length === 0) {
    return (
      <div className='p-10 text-center'>
        <h1 className='text-3xl font-bold text-gray-700'>You don't have any orders yet.</h1>
        <p className='text-gray-500 mt-2'>Go to homepage to continue shopping</p>
        <Link
          to='/'
          className='mt-3 inline-block px-4 py-2 bg-red text-white rounded-md font-semibold hover:brightness-110'
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className=''>
      <div className='flex flex-col-reverse gap-6'>
        {orders.map((order, i) => (
          <div key={order.orderId || i} className='bg-white rounded-xl shadow-md  p-6'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5'>
              <div>
                <h2 className='text-lg font-semibold text-red-600'>
                  Sipariş No: #{order.orderId.slice(0, 8).toUpperCase()}
                </h2>
                <p className='text-sm text-gray-500'>Tarih: {order.orderDate}</p>
              </div>
              <div className='text-right mt-3 sm:mt-0'>
                <p className='text-lg font-bold text-green-600'>{order.paymentStatus}</p>
                <p className='text-gray-600'>
                  Toplam: $ {numeral(order.totalAmount).format('0,0.00')}
                </p>
              </div>
            </div>

            <div
              className={`overflow-y-scroll ${
                order.products.length === 1 && 'scroll-none'
              } grid grid-cols-1 h-[97.5px] md:grid-cols-2 gap-4`}
            >
              {order.products.map((product, idx) => (
                <div
                  key={idx}
                  className='flex items-center gap-4  rounded-lg p-3 hover:shadow-md transition'
                >
                  <img
                    src={product.images.front || '/placeholder.png'}
                    alt={product.title}
                    className='w-20 h-20 object-contain rounded-md '
                  />
                  <div className='flex flex-col justify-between'>
                    <p className='font-medium text-gray-800'>{product.title}</p>
                    <p className='text-sm text-gray-500'>
                      {product.amount} × $ {numeral(product.price).format('0,0.00')}
                    </p>
                    <p className='text-sm font-semibold text-black'>
                      Ara Toplam: $ {numeral(product.amount * product.price).format('0,0.00')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
