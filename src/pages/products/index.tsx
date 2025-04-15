import { FC, useEffect } from "react";
import ProductCard from "./product-card";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getAllProducts } from "../../redux/actions/getAllProducts";
import ProductCardSkeleton from "./productCardSkeleton";

const Products: FC = () => {
  const { products, loading } = useSelector(
    (store: RootState) => store.productReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="grid  grid-cols-[200px_auto] gap-3 ">
      <Filter />
      <div className="grid grid-cols-3 gap-4 ">
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
