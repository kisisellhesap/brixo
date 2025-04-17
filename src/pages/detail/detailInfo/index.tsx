import { FC } from "react";
import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { GiSleevelessJacket } from "react-icons/gi";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import DetailInfoSkeleton from "./detailInfoSkeleton";

const DetailInfo: FC = () => {
  const { loading, singleProduct } = useSelector(
    (store: RootState) => store.productReducer
  );

  if (loading && !singleProduct) {
    return <DetailInfoSkeleton />;
  }

  if (!loading && singleProduct) {
    return (
      <div className="text-gray flex flex-col font-bold gap-5 w-[40%] max-lg:w-[100%]">
        <h2 className=" text-3xl">{singleProduct.title}</h2>

        <span className="text-black/50  text-2xl">
          Size : {singleProduct.size}
        </span>
        <div className="flex items-center justify-between">
          <h3 className="text-3xl">$ {singleProduct.price}</h3>
          <span className="text-2xl line-through text-black/40">
            $ {singleProduct.price}
          </span>
        </div>

        <button className="bg-yellow-200 px-3 py-2  flex items-center gap-3 rounded-lg cursor-pointer justify-center hover:brightness-110">
          <FaRegHeart />
          {/* <FaHeart /> */}

          <span> SAVE ITEM</span>
        </button>
        <button className="bg-red text-pink px-3 py-2  flex items-center gap-3 rounded-md cursor-pointer justify-center hover:brightness-110">
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
              MORE INFORMATION:
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
