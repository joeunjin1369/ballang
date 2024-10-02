import { Product } from "@/schema/products.schema";
import Link from "next/link";
import React from "react";


function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className=" flex flex-col">
      <div className="aspect-[3/4] mb-4">
        <img
          src={product.imgSrc}
          className="object-cover hover:scale-105 transition"
        />
      </div>
      <div className="grid gap-y-2">
        <p className="text-sm font-bold">{product.brand.nameEn}</p>
        <p className="text-[15px]">{product.name}</p>
        <div className="text-sm flex items-baseline gap-2">
          <span className="font-bold text-red-500 line-through">
            \{Number(product.originalPrice).toLocaleString()}
          </span>
          <span className="font-bold">
            \{Number(product.price).toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
