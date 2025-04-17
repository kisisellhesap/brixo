import { FC } from "react";
import { GiRoundStar } from "react-icons/gi";
import RewiewBtn from "../../../components/RewiewBtn";
import { Product } from "../../../types";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}
const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`detail/${product.id}`}
      className="shadow-css  cursor-pointer p-4 rounded-md flex flex-col gap-3 font-bold italic text-gray group "
    >
      <header className="flex justify-between gap-2 items-center">
        <h3 className="">{product.more.brand}</h3>
        <p className="flex items-center gap-2 text-red">
          <span>{product.rating}</span> <GiRoundStar />
        </p>
      </header>

      <img
        src={product.images.front}
        alt={product.title}
        className="max-w-[250px] max-lg:max-w-[180px] object-fit-cover mix-blend-darken group-hover:scale-110 transition mx-auto"
      />

      <h2 className="truncate">{product.title}</h2>
      <div className="flex justify-between gap-2 mb-5">
        <p className="line-through">$19.00</p>
        <p>$7.00</p>
      </div>

      <RewiewBtn />
    </Link>
  );
};

export default ProductCard;
