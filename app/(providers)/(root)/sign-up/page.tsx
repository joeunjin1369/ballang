"use client";

import api from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";

function SignUpPage() {
  const queryClient = useQueryClient();
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { mutate: signUp } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return api.auth.signUp(email, password);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["accessToken"] });
    },
  });

  const handleClickSignUp: ComponentProps<"button">["onClick"] = async () => {
    if (!email) return alert("이메일을 입력해 주세요");
    if (!email.includes("@") || !email.includes("."))
      return alert("올바른 이메일을 입력해 주세요");
    if (!password) return alert("비밀번호를 입력해 주세요");
    if (password !== passwordConfirm)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");

    signUp({ email, password });

    alert("회원가입 되었습니다");

    route.push("/");
  };

  return (
    <main className="px-8 py-10 mx-auto max-w-screen-lg flex flex-col w-full items-stretch">
      <h2 className="font-bold text-3xl text-center my-12">회원가입</h2>
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
        <div className="grid gap-y-1.5 w-full">
          <label className="text-sm" htmlFor="passwordConfirm">
            비밀번호 확인
          </label>
          <input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            id="passwordConfirm"
            type="password"
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <button
          onClick={handleClickSignUp}
          className="mt-4 bg-black py-4 text-white font-bold hover:-translate-y-1 transition w-full"
        >
          회원가입 하기
        </button>
      </section>
    </main>
  );
}

export default SignUpPage;
