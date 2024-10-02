import api from "@/api/api";
import { useAuthStore } from "@/zustand/auth.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  handleClickLogInModal: () => void;
}

function Header({ handleClickLogInModal }: HeaderProps) {
  const queryClient = useQueryClient();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isAuthInitialized = useAuthStore((state) => state.isAuthInitialized);

  const { mutate: logOut } = useMutation({
    mutationFn: async () => {
      await api.auth.logOut();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["accessToken"] });
    },
  });

  const handleClickLogOut = async () => {
    logOut();
    alert("로그아웃 되었습니다");
  };

  return (
    <header className="border-b py-4 px-8 flex items-center min-w-full justify-between">
      <div className="flex gap-x-16 items-center">
        <Link href={"/"} className="text-2xl font-bold">
          발랑
        </Link>
        <nav className="text-base">
          <Link href={"/brands"}>BRANDS</Link>
        </nav>
      </div>
      <ul className="flex gap-x-4">
        {isAuthInitialized ? (
          isLoggedIn ? (
            <>
              <li>
                <Link href={"/cart"}>장바구니</Link>
              </li>
              <li>
                <p onClick={handleClickLogOut} className="cursor-pointer">
                  로그아웃
                </p>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/sign-up"}>회원가입</Link>
              </li>
              <li>
                <p onClick={handleClickLogInModal} className="cursor-pointer">
                  로그인
                </p>
              </li>
            </>
          )
        ) : null}
      </ul>
    </header>
  );
}

export default Header;
