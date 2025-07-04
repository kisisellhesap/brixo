import type { FC } from 'react';
import Socialcons from '../sociaIcons';

const Footer: FC = () => {
  return (
    <footer className='bg-[#111827] text-pink py-12 mt-auto '>
      <div className='container  place-items-center text-center grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='text-center'>
          <h3 className='text-lg font-semibold mb-4'>About Brixo</h3>
          <p className='text-sm leading-6 text-gray-400 italic'>
            Brixo is a global e-commerce platform offering a seamless and inspiring shopping
            experience. Discover products from all over the world with fast delivery and smart
            recommendations.
          </p>
        </div>

        <div className='text-center'>
          <h3 className='text-lg font-semibold mb-4'>Shop</h3>
          <ul className='space-y-2 text-sm text-gray-400'>
            <li className='italic cursor-pointer hover:text-pink'>New Arrivals</li>
            <li className='italic cursor-pointer hover:text-pink '>Best Sellers</li>
            <li className='italic cursor-pointer hover:text-pink'>Gift Cards</li>
            <li className='italic cursor-pointer hover:text-pink'>Categories</li>
            <li className='italic cursor-pointer hover:text-pink'>All Products</li>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-lg font-semibold mb-4'>Customer Service</h3>
          <ul className='space-y-2 text-sm text-gray-400'>
            <li className='italic cursor-pointer hover:text-pink'>Help Center</li>
            <li className='italic cursor-pointer hover:text-pink '>Shipping & Delivery</li>
            <li className='italic cursor-pointer hover:text-pink'>Returns & Refunds</li>
            <li className='italic cursor-pointer hover:text-pink'>Track Order</li>
            <li className='italic cursor-pointer hover:text-pink'>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-4'>Stay Connected</h3>
          <p className='text-sm text-gray-400 mb-3 italic'>
            Subscribe to get the latest deals and exclusive offers.
          </p>

          <div className='mt-15 flex items-center justify-center '>
            <Socialcons />
          </div>
        </div>
      </div>

      <div className='mt-10 text-center text-gray-500 text-sm'>
        © 2025 Brixo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
