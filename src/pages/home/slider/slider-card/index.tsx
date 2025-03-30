import { FC } from "react";
import { GiRoundStar } from "react-icons/gi";
import RewiewBtn from "../../../../components/RewiewBtn";

const SliderCard: FC = () => {
  return (
    <div className="w-[100%] h-[100%]  flex relative cursor-pointer">
      <div className="flex flex-col gap-7 w-[50%]">
        <div className="flex justify-between items-center">
          <p className="font-abidik text-5xl text-red">Essence </p>
          <div className="flex gap-2 items-center text-red font-bold">
            <GiRoundStar />
            <span>4.94</span>
          </div>
        </div>

        <h2 className="text-5xl">Essence Mascara Lash Princess</h2>
        <p className="italic">
          The Essence Mascara Lash Princess is a popular mascara known for its
          volumizing and lengthening effects. Achieve dramatic lashes with this
          long-lasting and cruelty-free formula.
        </p>

        <div className="flex items-center justify-between">
          <RewiewBtn />
          <span className="text-xl line-through">$ 9.99</span>
        </div>

        <span className="text-4xl bg-red text-pink py-1 px-3 absolute right-0 top-0 rounded-full shadow-md">
          $ 7.17
        </span>
        <div className="flex flex-wrap gap-2 mt-auto ">
          <span className="bg-red text-pink p-1 rounded-sm text-[13px] font-bold shadow-md">
            beauty
          </span>
          <span className="bg-red text-pink p-1 rounded-sm text-[13px] font-bold shadow-md">
            mascrass
          </span>
        </div>
      </div>
      <img
        src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
        alt="Image 1"
        className="w-[50%] h-[100%] object-fit-cover"
      />
    </div>
  );
};

export default SliderCard;
