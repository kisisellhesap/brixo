import { FC } from "react";
import { GiRoundStar } from "react-icons/gi";
import RewiewBtn from "../../../../components/RewiewBtn";
import { Product } from "../../../../types";
import { Link } from "react-router-dom";
import { discountPercentage } from "../../../../utils/discountPercentage";

interface SliderCardProps {
  item: Product;
}
const SliderCard: FC<SliderCardProps> = ({ item }) => {
  return (
    <Link
      to={`/products/detail/${item.id}`}
      className="w-[100%] h-[100%] max-lg:flex-col flex gap-5 relative cursor-pointer"
    >
      <div className="flex flex-col gap-7 w-[50%] max-lg:w-[100%]  max-lg:order-2 order-1">
        <div className="flex justify-between items-center">
          <p className="font-abidik text-3xl max-lg:text-2xl text-red">
            {item.more.brand ? item.more.brand : item.title}{" "}
          </p>
          <div className="flex gap-2 items-center text-red font-bold">
            <GiRoundStar />
            <span>{item.rating}</span>
          </div>
        </div>

        {item.more.brand && (
          <h2 className="text-5xl max-lg:text-3xl">{item.title}</h2>
        )}
        <p className="italic">{item.description}</p>

        <div className="flex items-center justify-between">
          <RewiewBtn />
          <span className=" line-through text-gray/50 text-2xl">
            $ {item.price}
          </span>
        </div>

        <span className="text-4xl bg-red text-pink py-1 px-3 absolute right-0 top-0 rounded-full shadow-md">
          ${" "}
          {discountPercentage({
            percent: item.discountPercentage,
            price: item.price,
          }).toFixed(0)}
        </span>
        <div className="flex flex-wrap gap-2 mt-10 ">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-red text-pink p-1 rounded-sm text-[13px] font-bold shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-pink flex items-center justify-center w-[50%] max-lg:w-[100%]  max-lg:order-1 order-2">
        <img
          src={item.images.front}
          alt={item.title}
          className=" w-[50%]  max-lg:w-[30%] min-w-[300px]  object-fit-cover mix-blend-darken"
        />
      </div>
    </Link>
  );
};

export default SliderCard;
