import { FC, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Filter: FC = () => {
  return (
    <div className=" bg-gray/10 backdrop-blur-sm fixed inset-0 z-10 hidden">
      <div className="bg-gray w-[300px] h-[100vh] text-pink px-5">
        <header className="flex gap-3 items-center justify-center  py-4  border-b border-pink/20 font-bold">
          <h3 className="text-4xl">Filters</h3>

          <button className="ml-auto text-xl underline">Reset</button>
          <FaXmark className="text-3xl" />
        </header>
        <div className="flex flex-col gap-10 py-10 border-b border-pink/20">
          <div className="flex flex-col gap-5 ">
            <h2 className="text-2xl">Category</h2>

            <div className="flex flex-col gap-1">
              <button className="flex gap-5  text-xl px-3 py-2 cursor-pointer w-fit">
                <input type="checkbox" className="w-5" />
                <span>Jackets</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 py-10 border-b border-pink/20">
          <div className="flex flex-col gap-5 ">
            <h2 className="text-2xl">Gender</h2>
            <div className="flex flex-col gap-1">
              <button className="flex gap-5  text-xl px-3 py-2 cursor-pointer w-fit">
                <input type="checkbox" className="w-5" />
                <span>Men</span>
              </button>
              <button className="flex gap-5  text-xl px-3 py-2 cursor-pointer w-fit">
                <input type="checkbox" className="w-5" />
                <span>Women</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 py-10 border-b border-pink/20">
          <div className="flex flex-col gap-5 ">
            <h2 className="text-2xl">Size</h2>
            <div className="flex flex-col gap-1">
              <button className="flex gap-5  text-xl px-3 py-2 cursor-pointer w-fit">
                <input type="checkbox" className="w-5" />
                <span>M</span>
              </button>
              <button className="flex gap-5  text-xl px-3 py-2 cursor-pointer w-fit">
                <input type="checkbox" className="w-5" />
                <span>L</span>
              </button>
              <button className="flex gap-5  text-xl px-3 py-2 cursor-pointer w-fit">
                <input type="checkbox" className="w-5" />
                <span>XL</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
