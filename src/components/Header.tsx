import Link from "next/link";
import React from "react";
import { headerLinks } from "@/storage/linkData/linkData";

function Header() {
  const subMenuLinks = (subMenu) => (
    <ul>
      {subMenu.map((item, subIndex) => (
        <li key={subIndex}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );

  const mainMenuLinks = headerLinks.map((menuItem, index) => (
    <li key={index} className="relative">
      <Link href={menuItem.href}>{menuItem.title}</Link>
      <div className="hidden absolute top-full group-hover:block bg-green-50">
        {menuItem.subMenu && subMenuLinks(menuItem.subMenu)}
      </div>
    </li>
  ));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-20 bg-white ">
        <h1>header</h1>
        <div className="flex">
          <div>
            <Link href="/">홈</Link>
          </div>
          <nav className="relative group">
            <ul className="flex cursor-pointer">{mainMenuLinks}</ul>
          </nav>
          <div>
            <form>
              <input type="text" placeholder="정보를 찾고계신가요?"></input>
              <button>검색</button>
            </form>
          </div>
          <div>
            <Link href="/mypage">마이페이지</Link>
            <Link href="/sitemap">메뉴</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
