"use client";

import React, { PropsWithChildren, useState } from "react";
import Header from "./_components/Header/Header";
import LogInModal from "./_components/LogInModal/LogInModal";

function RootLayout({ children }: PropsWithChildren) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header handleClickLogIn={toggleModal} />
      <main>{children}</main>
      {isModalOpen && <LogInModal handleClickLogIn={toggleModal} />}
    </>
  );
}

export default RootLayout;
