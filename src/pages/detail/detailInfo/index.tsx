import { FC, MouseEvent } from "react";
import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { GiSleevelessJacket } from "react-icons/gi";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import DetailInfoSkeleton from "./detailInfoSkeleton";
import { discountPercentage } from "../../../utils/discountPercentage";
import { addToCart } from "../../../redux/actions/addToCart";

const DetailInfo: FC = () => {
  const { loading, singleProduct } = useSelector(
    (store: RootState) => store.productReducer
  );
  const { cartProducts } = useSelector((store: RootState) => store.cartReducer);

  const dispatch = useDispatch<AppDispatch>();

  if (loading && !singleProduct) {
    return <DetailInfoSkeleton />;
  }

  if (!loading && singleProduct) {
    const addToCartFunc = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(addToCart(singleProduct));
    };

    return (
      <div className="text-gray flex flex-col font-bold gap-5 w-[40%] max-lg:w-[100%]">
        <h2 className=" text-3xl">{singleProduct.title}</h2>

        <div className="text-black/50  text-xl flex gap-2 justify-between items-center">
          <span>Size : {singleProduct.size}</span>

          <span>Stock : {singleProduct.stock}</span>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-3xl">
            ${" "}
            {discountPercentage({
              percent: singleProduct.discountPercentage,
              price: singleProduct.price,
            }).toFixed(0)}
          </h3>
          <span className="text-2xl line-through text-black/40">
            $ {singleProduct.price}
          </span>
        </div>

        <button className="bg-yellow-200 px-3 py-2  flex items-center gap-3 rounded-lg cursor-pointer justify-center hover:brightness-110">
          <FaRegHeart />
          {/* <FaHeart /> */}

          <span> SAVE ITEM</span>
        </button>

        <button
          className="bg-red text-pink px-3 py-2  flex items-center gap-3 rounded-md cursor-pointer justify-center hover:brightness-110"
          onClick={addToCartFunc}
          type="button"
        >
          ADD TO BAG
        </button>

        <div className="flex flex-col gap-3">
          <header className="flex items-center gap-3 text-2xl  pb-3 shadow-[0px_2px_0px_0px_rgba(0,0,0,.3)]">
            <GiSleevelessJacket />
            <span>Description</span>
          </header>
          <p>{singleProduct.description}</p>

          <ul className="flex flex-col gap-0 pl-5">
            <li className="list-disc">Sleeve Length: 23 inch</li>
            <li className="list-disc">Bust: 48 inch</li>
            <li className="list-disc">Length: 30 inch</li>
          </ul>

          <div className="text-xl mt-10">
            <p>
              SKU: <span className="italic text-black/50"> E00984184</span>
            </p>
            <p>
              CONDITION: <span className="italic text-black/50">GOOD</span>
            </p>
            <p>
              MORE INFORMATION:{" "}
              <span className="italic text-black/50">FULL LINING</span>
            </p>
            <p>
              FABRIC: <span className="italic text-black/50"> WOOL BLEND</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailInfo;
