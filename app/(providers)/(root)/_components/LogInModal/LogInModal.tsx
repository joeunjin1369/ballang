import React from "react";

interface HeaderProps {
  handleClickLogIn: () => void;
}

function LogInModal({ handleClickLogIn }: HeaderProps) {
  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) handleClickLogIn();
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
              id="email"
              type="password"
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
          <button className="mt-4 bg-black py-4 text-white font-bold hover:-translate-y-1 transition w-full">
            회원가입 하기
          </button>
        </section>
      </div>
    </div>
  );
}

export default LogInModal;
