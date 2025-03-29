import { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import HeaderInfo from "./header-info";
import { BiUser } from "react-icons/bi";

const Header: FC = () => {
  return (
    <header className="mb-15 flex flex-col gap-3">
      <HeaderInfo />
      <div className="container flex items-center justify-between">
        <img src="./logo.png" className="w-[140px]" />

        <div className=" w-full flex items-center justify-end gap-15">
          <nav className="flex gap-8">
            <NavLink to="home" className="font-bold italic text-lg">
              Home
            </NavLink>
            <NavLink to="products" className="font-bold italic text-lg">
              Products
            </NavLink>
            <NavLink to="contact" className="font-bold italic text-lg">
              Contact
            </NavLink>
          </nav>

          <Link
            to="login"
            className="flex gap-2 items-end p-2 py-1 rounded-lg cursor-pointer bg-red text-pink shadow-md"
          >
            <BiUser className="text-4xl" />
            <div className="flex flex-col items-start font-bold">
              <span className="text-lg">Giriş yap</span>
              <span className="text-[10px]  italic">veya Üye ol</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
