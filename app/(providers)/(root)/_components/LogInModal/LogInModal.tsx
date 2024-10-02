"use client";

import api from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

interface LogInModalProps {
  handleClickLogInModal: () => void;
}

function LogInModal({ handleClickLogInModal }: LogInModalProps) {
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: logIn } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return api.auth.logIn(email, password);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["accessToken"] });
    },
  });

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) handleClickLogInModal();
  };

  const handleClickLogIn = async () => {
    if (!email) return alert("이메일을 입력해 주세요");
    if (!email.includes("@") || !email.includes("."))
      return alert("올바른 이메일을 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");

    logIn({ email, password });

    alert("로그인 되었습니다.");

    handleClickLogInModal();
  };
  return (
    <div
      onClick={handleClickBackground}
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
    >
      <div className="bg-white rounded-md w-full max-w-[400px] px-5 py-8">
        <h2 className="font-bold text-3xl text-center my-12">로그인</h2>
        <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
          <div className="grid gap-y-1.5 w-full">
            <label className="text-sm" htmlFor="email">
              이메일
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="text"
              className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
            />
          </div>
          <div className="grid gap-y-1.5 w-full">
            <label className="text-sm" htmlFor="password">
              비밀번호
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
            />
          </div>
          <button
            onClick={handleClickLogIn}
            className="mt-4 bg-black py-4 text-white font-bold hover:-translate-y-1 transition w-full"
          >
            로그인 하기
          </button>
        </section>
      </div>
    </div>
  );
}

export default LogInModal;
