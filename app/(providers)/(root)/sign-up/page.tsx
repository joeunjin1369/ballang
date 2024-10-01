import React from "react";

function SignUpPage() {
  return (
    <main className="px-8 py-10 mx-auto max-w-screen-lg flex flex-col w-full items-stretch">
      <h2 className="font-bold text-3xl text-center my-12">회원가입</h2>
      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
        <div className="grid gap-y-1.5 w-full">
          <label className="text-sm" htmlFor="email">
            이메일
          </label>
          <input
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
            id="password"
            type="password"
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <div className="grid gap-y-1.5 w-full">
          <label className="text-sm" htmlFor="password-re">
            비밀번호 확인
          </label>
          <input
            id="password-re"
            type="password"
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <button className="mt-4 bg-black py-4 text-white font-bold hover:-translate-y-1 transition w-full">회원가입 하기</button>
      </section>
    </main>
  );
}

export default SignUpPage;
