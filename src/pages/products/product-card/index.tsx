import { FC } from "react";
import { GiRoundStar } from "react-icons/gi";
import RewiewBtn from "../../../components/RewiewBtn";

const ProductCard: FC = () => {
  return (
    <div className="shadow-md hover:shadow-2xl p-4 rounded-md flex flex-col gap-3 font-bold italic text-gray">
      <header className="flex justify-between gap-2 items-center">
        <h3 className="">Essence</h3>
        <p className="flex items-center gap-2">
          <span>4.3</span> <GiRoundStar />
        </p>
      </header>

      <img
        src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
        alt=""
        className="max-w-[250px] object-fit-cover"
      />

      <h2>Essence Mascara Lash Princess</h2>
      <div className="flex justify-between gap-2 mb-5">
        <p className="line-through">$19.00</p>
        <p>$7.00</p>
      </div>

      <RewiewBtn />
    </div>
  );
};

export default ProductCard;
