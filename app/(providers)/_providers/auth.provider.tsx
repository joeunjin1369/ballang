"use client";

import api from "@/api/api";
import { useAuthStore } from "@/zustand/auth.store";
import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const { data } = useQuery({
    queryKey: ["accessToken"],
    queryFn: api.auth.accessToken,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setIsLoggedIn(data.result ? true : false);
      initializeAuth();
    }
  }, [data, initializeAuth, setIsLoggedIn]);

  return <>{children}</>;
}

export default AuthProvider;
