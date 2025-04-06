import { FC } from "react";
import { GiRoundStar } from "react-icons/gi";

const ProductInCart: FC = () => {
  return (
    <div className="flex gap-3 items-center">
      <img
        src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
        alt=""
        className="max-w-[250px] object-fit-cover"
      />

      <div className="w-full flex flex-col gap-3">
        <header className="flex justify-between gap-2 items-center">
          <h3 className="">Essence</h3>
          <p className="flex items-center gap-2">
            <span>4.3</span> <GiRoundStar />
          </p>
        </header>

        <h2 className="text-2xl font-bold">Essence Mascara Lash Princess</h2>
        <p className="text-sm">
          "The Essence Mascara Lash Princess is a popular mascara known for its
          volumizing and lengthening effects. Achieve dramatic lashes with this
          long-lasting and cruelty-free formula."
        </p>
        <div className="flex justify-between gap-2 mb-5">
          <div className="flex items-center gap-3">
            <button className="w-[25px] h-[25px]  hover:brightness-130 cursor-pointer bg-red text-pink rounded-full  flex items-center justify-center ">
              -
            </button>
            <span className="  text-gray font-extrabold">1</span>
            <button className=" w-[25px] h-[25px]  hover:brightness-130 cursor-pointer bg-red text-pink rounded-full   ">
              +
            </button>
          </div>

          <div className="flex gap-3 items-center">
            <p className="line-through font-bold">$19.00</p>
            <p className="text-2xl bg-red text-pink py-1 px-3 rounded-full shadow-md">
              $7.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
