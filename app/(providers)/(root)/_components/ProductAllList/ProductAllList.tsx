import api from "@/api/api";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

async function ProductAllList() {

  const data = await api.products.getProducts();

  const products = data?.result;
  return (
    <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">

      {products?.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductAllList;
