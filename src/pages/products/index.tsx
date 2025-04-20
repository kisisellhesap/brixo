import { FC } from "react";
import ProductCard from "./product-card";
import Filter from "./Filter";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductCardSkeleton from "./productCardSkeleton";
import { CiFilter } from "react-icons/ci";

const Products: FC = () => {
  const { products, loading } = useSelector(
    (store: RootState) => store.productReducer
  );

  return (
    <div className="flex flex-col gap-10">
      <header className=" flex justify-end">
        <div className="font-bold text-xl flex gap-2 hover:brightness-105 bg-pink/30  items-center p-2 border-1 border-gray/50 w-fit rounded-md shadow-css cursor-pointer">
          <CiFilter />

          <span>Filter</span>
        </div>
      </header>

      {loading ? <Filter /> : <Filter />}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-[653px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 ">
        {loading
          ? Array.from({ length: 30 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
