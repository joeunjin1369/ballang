import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

function BrandsList() {
  const { data: brandsData } = useQuery({
    queryKey: ["brands"],
    queryFn: api.brands.getBrands,
  });

  const brands = brandsData?.result;

  return (
    <ul className="gap-x-4  gap-y-6 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 justify-items-center">
      <li className="col-span-3 sm:col-span-4 md:col-span-6 mb-3">
        <Link href={"brands"}>ALL</Link>
      </li>
      {brands?.map((brand) => (
        <li key={brand.id}>
          <Link href={`/brands?brandId=${brand.id}`}>{brand.nameKr}</Link>
        </li>
      ))}
    </ul>
  );
}

export default BrandsList;
