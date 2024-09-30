import React, { PropsWithChildren } from "react";
import TanstackQueryProvider from "./_providers/tanstack-query.provider";

function ProvidersLayout({ children }: PropsWithChildren) {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
}

export default ProvidersLayout;
