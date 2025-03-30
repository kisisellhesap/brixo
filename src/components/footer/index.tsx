import { FC } from "react";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-pink py-12 mt-auto">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Brixo</h3>
          <p className="text-sm leading-6 text-gray-400 italic">
            Brixo is a global e-commerce platform offering a seamless and
            inspiring shopping experience. Discover products from all over the
            world with fast delivery and smart recommendations.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="italic cursor-pointer hover:text-pink w-fit">
              New Arrivals
            </li>
            <li className="italic cursor-pointer hover:text-pink w-fit">
              Best Sellers
            </li>
            <li className="italic cursor-pointer hover:text-pink w-fit">
              Gift Cards
            </li>
            <li className="italic cursor-pointer hover:text-pink w-fit">
              Categories
            </li>
            <li className="italic cursor-pointer hover:text-pink w-fit">
              All Products
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="italic cursor-pointer hover:text-pink w-fit">
              Help Center
            </li>
            <li className="italic cursor-pointer hover:text-pink w-fit">
              Shipping & Delivery
            </li>
            <li className="italic cursor-pointer hover:text-pink w-fit">
              Returns & Refunds
            </li>
            <li className="italic cursor-pointer hover:text-pink w-fit">
              Track Order
            </li>
            <li className="italic cursor-pointer hover:text-pink w-fit">
              Contact Us
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-3 italic">
            Subscribe to get the latest deals and exclusive offers.
          </p>

          <div className="flex gap-5 mt-18 text-gray-400 text-3xl">
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaPinterest className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* CopyRight */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Brixo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
