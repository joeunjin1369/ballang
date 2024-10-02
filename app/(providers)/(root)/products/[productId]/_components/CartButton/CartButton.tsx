"use client";

import api from "@/api/api";
import { useAuthStore } from "@/zustand/auth.store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

function CartButton({ productId }: { productId: string }) {
  const [isin, setIsIn] = useState(false);
  const queryClient = useQueryClient();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const toggleLoginModal = useAuthStore((state) => state.toggleLoginModal);

  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: api.cart.getCart,
  });

  const { mutate: addCart } = useMutation({
    mutationFn: (productId: string) => {
      return api.cart.addItemToCart(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      setIsIn(true);
      alert("장바구니에 추가되었습니다.");
    },
  });

  const { mutate: clearItemCart } = useMutation({
    mutationFn: (productId: string) => {
      return api.cart.clearItemInCart(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      setIsIn(false);
      alert("장바구니에서 제거되었습니다.");
    },
  });

  const cartProducts = data?.items;

  useEffect(() => {
    cartProducts?.map((cartProduct) => {
      if (cartProduct.product.id === +productId) setIsIn(true);
    });
  }, []);

  const handleClickAddCart = () => {
    if (!isLoggedIn) return toggleLoginModal();
    addCart(productId);
  };

  const handleClickClearCart = () => {
    clearItemCart(productId);
  };

  return (
    <>
      {isin ? (
        <button
          onClick={handleClickClearCart}
          className="mt-10 bg-white py-4 text-black border border-black font-bold hover:-translate-y-1 transition"
        >
          장바구니에서 빼기
        </button>
      ) : (
        <button
          onClick={handleClickAddCart}
          className="mt-10 bg-black py-4 text-white font-bold hover:-translate-y-1 transition"
        >
          장바구니에 담기
        </button>
      )}
    </>
  );
}

export default CartButton;
