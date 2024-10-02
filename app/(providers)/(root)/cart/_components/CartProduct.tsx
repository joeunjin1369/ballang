import api from "@/api/api";
import { CartItem } from "@/schema/cart.schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

function CartProduct({ cartProduct }: { cartProduct: CartItem }) {
  const queryClient = useQueryClient();
  const product = cartProduct.product;

  const { mutate: plusCart } = useMutation({
    mutationFn: (productId: string) => {
      return api.cart.addItemToCart(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const { mutate: minusCart } = useMutation({
    mutationFn: (productId: string) => {
      return api.cart.removeItemFromCart(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const { mutate: clearItemCart } = useMutation({
    mutationFn: (productId: string) => {
      return api.cart.clearItemInCart(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const productId = product.id;

  const handleClickPlus = () => {
    plusCart(String(productId));
  };

  const handleClickMinus = () => {
    if (cartProduct.quantity === 0) clearItemCart(String(productId));

    minusCart(String(productId));
  };

  return (
    <section className="flex h-60 border-t py-5 justify-between">
      <Link href={`/products/${product.id}`} className="flex gap-x-5">
        <div className="aspect-[3/4]">
          <img src={product.imgSrc} />
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="font-bold text-[15px]">
            {product.brand.nameKr} / {product.brand.nameEn}
          </div>
          <p className="text-[15px]">{product.name}</p>
          <div className="text-sm">
            <span className="text-red-500 line-through ">
              \{Number(product.originalPrice).toLocaleString()}
            </span>
            <span className="ml-3 font-bold">
              \{Number(product.price).toLocaleString()}
            </span>
          </div>
          <div className="text-sm">
            {product.deliveryType} | 잔여재고 {product.onlineStock}ea
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-center font-bold">
        <div className="flex border border-black">
          <button
            onClick={handleClickMinus}
            className="w-[25px] h-[25px] text-center block bg-black text-white"
          >
            -
          </button>
          <p className="px-2 block">{cartProduct.quantity}</p>
          <button
            onClick={handleClickPlus}
            className="w-[25px] h-[25px] text-center block bg-black text-white"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartProduct;
