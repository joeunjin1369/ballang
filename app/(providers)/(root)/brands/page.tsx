import React from "react";
import Page from "../_components/Page/Page";
import BrandsPageContent from "./_components/BrandsPageContent/BrandsPageContent";

function BrandsPage() {
  return (
    <Page>
      <h2 className="py-10 text-center font-bold text-3xl">Brands</h2>

      <BrandsPageContent />
    </Page>
  );
}

export default BrandsPage;
