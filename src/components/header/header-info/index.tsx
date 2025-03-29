import { FC } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderInfo: FC = () => {
  return (
    <div className="container flex items-center justify-between gap-3 font-semibold italic mt-2">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <button className="icon">
            <FaInstagram />
          </button>
          <button className="icon">
            <FaXTwitter />
          </button>
          <button className="icon">
            <FaPinterest />
          </button>
        </div>
      </div>

      <h3>"Your Shopping, Your Way!"</h3>

      <Link to="cart" className="text-3xl relative cursor-pointer">
        <BsCart2 />
        <span className="text-sm p-3 w-[20px] h-[20px] flex items-center justify-center text-pink bg-red rounded-full absolute right-[-10px] top-[-12px]">
          3
        </span>
      </Link>
    </div>
  );
};

export default HeaderInfo;
