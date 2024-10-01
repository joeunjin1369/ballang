import React from "react";
import Page from "../_components/Page/Page";
import BrandsList from "./_components/BrandsList/BrandsList";
import BrandProductsList from "./_components/BrandProductsList/BrandProductaList";

interface BrandsPageProps {
  searchParams: {
    brandId: string | null;
  };
}

function BrandsPage(props: BrandsPageProps) {
  const brandId = props.searchParams.brandId;

  return (
    <Page>
      <h2 className="py-10 text-center font-bold text-3xl">Brands</h2>
      <nav className="m-auto max-w-screen-lg mb-20">
        <BrandsList />
      </nav>
      <BrandProductsList brandId={brandId} />
    </Page>
  );
}

export default BrandsPage;
