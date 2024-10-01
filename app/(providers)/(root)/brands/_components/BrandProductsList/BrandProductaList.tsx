"use client";

import api from "@/api/api";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../../../_components/ProductCard/ProductCard";
import { ProductsData } from "@/schema/products.schema";
import { BrandProductData } from "@/schema/brands.schema";

function BrandProductsList({ brandId }: { brandId: string | null }) {
  const queryKey = brandId ? ["brand", brandId] : ["products"];

  const queryFn = brandId
    ? () => api.brands.getBrand(brandId)
    : api.products.getProducts;

  const { data, isLoading } = useQuery<ProductsData | BrandProductData>({
    queryKey,
    queryFn,
  });

  const products = brandId
    ? (data as BrandProductData)?.result?.products || []
    : (data as ProductsData)?.result || [];

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

export default BrandProductsList;
