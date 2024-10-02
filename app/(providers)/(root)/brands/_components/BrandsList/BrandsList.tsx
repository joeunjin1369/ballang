import api from "@/api/api";
import Link from "next/link";
import React from "react";

async function BrandsList({ brandId }: { brandId: string | null }) {
  // const { data: brandsData } = useQuery({
  //   queryKey: ["brands"],
  //   queryFn: api.brands.getBrands,
  // });

  const brandsData = await api.brands.getBrands();

  const brands = brandsData?.result;

  return (
    <ul className="gap-x-4  gap-y-6 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 justify-items-center">
      <li className="col-span-3 sm:col-span-4 md:col-span-6 mb-3">
        <Link className={!brandId ? "font-bold" : ""} href={"brands"}>
          ALL
        </Link>
      </li>
      {brands?.map((brand) => (
        <li key={brand.id}>
          <Link
            className={Number(brandId) === brand.id ? "font-bold" : ""}
            href={`/brands?brandId=${brand.id}`}
          >
            {brand.nameKr}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BrandsList;
