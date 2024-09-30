"use client";

import api from "@/api/api";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../../../_components/ProductCard/ProductCard";

function ProductsBrandList({ brandId }: { brandId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["brand", brandId],
    queryFn: () => api.brands.getBrand(brandId),
  });

  const brand = data?.result;
  const products = brand?.products;

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

export default ProductsBrandList;
