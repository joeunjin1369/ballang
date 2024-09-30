import React, { PropsWithChildren } from "react";
import Header from "./_components/Header/Header";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default RootLayout;
