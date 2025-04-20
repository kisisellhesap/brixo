import { FC } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Socialcons from "../../sociaIcons";

const HeaderInfo: FC = () => {
  return (
    <div className="container flex items-center justify-between gap-3 font-semibold italic mt-2">
      <Socialcons />

      <h3 className="max-lg:hidden">"Your Shopping, Your Way!"</h3>

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
