"use client";

import React, { useEffect, useState } from "react";
import BrandsList from "../BrandsList/BrandsList";
import ProductAllList from "../../../_components/ProductAllList/ProductAllList";
import ProductsBrandList from "../ProductBrandList/ProductBrandList";
import { useSearchParams } from "next/navigation";

function BrandsPageContent () {
  const params = useSearchParams();
  const [brandId, setBrandId] = useState<string | null>("");

  useEffect(() => {
    setBrandId(params.get("brandId"));
  }, [brandId, params]);

  return (
    <>
      <nav className="m-auto max-w-screen-lg mb-20">
        <BrandsList />
      </nav>

      {!brandId && <ProductAllList />}
      {brandId && <ProductsBrandList brandId={brandId} />}
    </>
  );
}

export default BrandsPageContent;
