"use client";

import React, { useEffect, useState } from "react";
import Page from "../_components/Page/Page";
import { useQuery } from "@tanstack/react-query";
import api from "@/api/api";
import Link from "next/link";
import CartProduct from "./_components/CartProduct";
import { useAuthStore } from "@/zustand/auth.store";
import { useRouter } from "next/navigation";

function CartPage() {
  const route = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  if (!isLoggedIn) return route.replace("/");

  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: api.cart.getCart,
  });

  const cartProducts = data?.items;

  return (
    <Page>
      <h2 className="py-10 text-center font-bold text-3xl">장바구니</h2>
      {cartProducts?.length === 0 ? (
        <section className="flex items-center justify-center flex-col">
          <h6 className="mt-4">장바구니가 비어 있습니다.</h6>
          <Link
            href={"/"}
            className="mt-10 bg-white py-4 border border-black text-black font-bold hover:-translate-y-1 transition w-[250px] text-center"
          >
            쇼핑하러 가기
          </Link>
        </section>
      ) : (
        <section>
          <ul className="border-b max-w-screen-lg m-auto">
            {cartProducts?.map((cartProduct) => (
              <li key={cartProduct.id}>
                <CartProduct cartProduct={cartProduct} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Page>
  );
}

export default CartPage;
