import React, { PropsWithChildren } from "react";
import TanstackQueryProvider from "./_providers/tanstack-query.provider";
import AuthProvider from "./_providers/auth.provider";
// import AuthProvider from "./_providers/auth.provider";

function ProvidersLayout({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </TanstackQueryProvider>
  );
}

export default ProvidersLayout;
