import React, { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return <main className="p-8">{children}</main>;
}

export default Page;
