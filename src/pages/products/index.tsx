import { FC } from "react";
import ProductCard from "./product-card";
import Filter from "./Filter";

const Products: FC = () => {
  return (
    <div className="grid  grid-cols-[200px_auto] gap-3 ">
      <Filter />
      <div className="grid grid-cols-3 gap-4 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
