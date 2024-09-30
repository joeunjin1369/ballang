"use client";

import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import Page from "../../_components/Page/Page";
import Link from "next/link";

function ProductDetailPage() {
  const { productId } = useParams();

  console.log();

  const { data } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => api.products.getProduct(productId),
  });

  const product = data?.result;

  console.log(product);

  return (
    <Page>
      <section className="max-w-[950px] m-auto grid grid-cols-2 gap-x-6">
        <div>
          <img src={product?.imgSrc} className="aspect-[3/4]" />
        </div>
        <div className="py-8 flex flex-col">
          <Link href={`/brands?brandId=${product?.brandId}`} className="flex gap-x-2  font-bold text-[15px] border-b py-2 ">
            <span>{product?.brand.nameKr}</span>
            <span>/</span>
            <span>{product?.brand.nameEn}</span>
          </Link>
          <h1 className="text-lg mt-2">{product?.name}</h1>
          <div className="grid grid-cols-5 mt-16 gap-y-5 font-bold text-sm md:text-base">
            <div>정가</div>
            <div className="col-span-4 font-normal text-red-500 line-through">
              \{Number(product?.originalPrice).toLocaleString()}
            </div>
            <div>판매가</div>
            <div className="col-span-4">
              \{Number(product?.price).toLocaleString()}
            </div>
            <div>배송</div>
            <div className="col-span-4 font-normal">
              {product?.deliveryType}
            </div>
            <div>잔여재고</div>
            <div className="col-span-4 font-normal">{product?.onlineStock}</div>
          </div>
          <button className="mt-10 bg-black py-4 text-white font-bold hover:-translate-y-1 transition">장바구니에 담기</button>
        </div>
      </section>
    </Page>
  );
}

export default ProductDetailPage;
