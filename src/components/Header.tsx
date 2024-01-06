import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <h1>header</h1>
      <Link href="/">홈</Link>
      <div className="relative group">
        <ul className="flex">
          <li>
            <div className="cursor-pointer">
              <Link href="/introduce">소개</Link>
            </div>
            <div className="hidden absolute top-full left-0 group-hover:block bg-green-50">
              <div>세부 메뉴 1</div>
              <div>세부 메뉴 2</div>
              <div>세부 메뉴 3</div>
            </div>
          </li>
          <li>
            <Link href="/travel">여행</Link>
          </li>
          <li>
            <Link href="/plan">기획</Link>
          </li>
          <li>
            <Link href="/community">커뮤니티</Link>
          </li>
        </ul>
      </div>
      <Link href="/mypage">마이페이지</Link>
      <Link href="/sitemap">메뉴</Link>
    </div>
  );
}

export default Header;
