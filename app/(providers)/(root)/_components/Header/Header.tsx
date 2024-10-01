import Link from "next/link";
import React from "react";

interface HeaderProps {
  handleClickLogIn: () => void;
}

function Header({ handleClickLogIn }: HeaderProps) {
  return (
    <header className="border-b py-4 px-8 flex items-center min-w-full justify-between">
      <div className="flex gap-x-16 items-center">
        <Link href={"/"} className="text-2xl font-bold">
          발랑
        </Link>
        <nav className="text-base">
          <Link href={"/brands"}>BRANDS</Link>
        </nav>
      </div>
      <ul className="flex gap-x-4">
        <li>
          <Link href={"/sign-up"}>회원가입</Link>
        </li>
        <li>
          <p onClick={handleClickLogIn} className="cursor-pointer">
            로그인
          </p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
