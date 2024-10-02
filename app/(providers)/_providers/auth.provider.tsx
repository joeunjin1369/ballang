"use client";

import api from "@/api/api";
import { useAuthStore } from "@/zustand/auth.store";
import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const { data : accessToken } = useQuery({
    queryKey: ["accessToken"],
    queryFn: api.auth.accessToken,
  });

  useEffect(() => {
    if (accessToken) {
      console.log(accessToken);
      setIsLoggedIn(accessToken.result ? true : false);
      initializeAuth();
    }
  }, [accessToken, initializeAuth, setIsLoggedIn]);

  return <>{children}</>;
}

export default AuthProvider;
