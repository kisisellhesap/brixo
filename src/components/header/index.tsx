import { FC, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import HeaderInfo from "./header-info";
import { BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import Socialcons from "../sociaIcons";

const Header: FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleClose = (e: Event) => {
      if (!(e.target as HTMLElement).closest(".close-window")) {
        setIsHidden(false);
      }
    };

    document.body.addEventListener("click", handleClose);

    return () => {
      document.body.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <header className=" flex flex-col gap-3">
      <HeaderInfo />
      <div className="container flex items-center justify-between">
        <img src="/assets/logo.png" className="w-[140px]" />

        <RxHamburgerMenu
          className="text-4xl text-red min-lg:hidden cursor-pointer close-window"
          onClick={() => setIsHidden(!isHidden)}
        />
        <div
          className={`w-full flex items-center justify-end gap-15 max-lg:justify-start max-lg:fixed max-lg:pb-5 max-lg:bg-pink/90 backdrop-blur-2xl max-lg:max-w-[240px] max-lg:inset-0 max-lg:flex-col max-lg:z-10  max-lg:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.2)]  transition close-window ${
            isHidden
              ? " max-lg:opacity-100 max-lg:pointer-events-auto"
              : "max-lg:opacity-0 max-lg:pointer-events-none"
          }
          }`}
        >
          <div className="min-lg:hidden flex flex-col gap-9 mt-5">
            <Socialcons />
            <img src="/assets/logo.png" className="w-[140px]" />
          </div>

          <nav className="flex gap-8 max-lg:flex-col max-lg:text-center">
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
            className="flex gap-2 items-end p-2 py-1 rounded-lg cursor-pointer bg-red text-pink shadow-md max-lg:mt-auto"
          >
            <BiUser className="text-4xl" />
            <div className="flex flex-col items-start font-bold">
              <span className="text-lg">Login</span>
              <span className="text-[10px]  italic">or Register</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
