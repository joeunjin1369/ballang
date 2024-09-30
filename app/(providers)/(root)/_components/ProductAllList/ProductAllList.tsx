"use client"

import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductAllList() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: api.products.getProducts,
  });

  const products = data?.result;
  return (
    <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
      {isLoading && <p>상품을 불러오는 중...</p>}

      {products?.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductAllList;
