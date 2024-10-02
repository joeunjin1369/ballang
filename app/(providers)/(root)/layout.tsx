"use client";

import React, { PropsWithChildren } from "react";
import Header from "./_components/Header/Header";
import LogInModal from "./_components/LogInModal/LogInModal";
import { useAuthStore } from "@/zustand/auth.store";

function RootLayout({ children }: PropsWithChildren) {
  const isLoginModalOpen = useAuthStore((state) => state.isLoginModalOpen);

  return (
    <>
      <Header/>
      <main>{children}</main>
      {isLoginModalOpen && <LogInModal/>}
    </>
  );
}

export default RootLayout;
