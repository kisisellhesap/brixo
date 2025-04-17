import { FC } from "react";
import ProductCard from "./product-card";
import Filter from "./Filter";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductCardSkeleton from "./productCardSkeleton";

const Products: FC = () => {
  const { products, loading } = useSelector(
    (store: RootState) => store.productReducer
  );

  return (
    <div className="grid  grid-cols-[200px_auto] gap-3 ">
      {loading ? <Filter /> : <Filter />}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-[870px]:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 ">
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
