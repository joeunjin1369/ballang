"use client";

import React, { PropsWithChildren, useState } from "react";
import Header from "./_components/Header/Header";
import LogInModal from "./_components/LogInModal/LogInModal";

function RootLayout({ children }: PropsWithChildren) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleClickLogInModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <>
      <Header handleClickLogInModal={handleClickLogInModal} />
      <main>{children}</main>
      {isLoginModalOpen && <LogInModal handleClickLogInModal={handleClickLogInModal} />}
    </>
  );
}

export default RootLayout;
