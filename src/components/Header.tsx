import Link from "next/link";
import React from "react";
import { mainMenuData, subMenuData } from "@/storage/linkData/linkData";

function Header() {
  const mainMenuLinks = mainMenuData.map((menuItem, index) => (
    <li key={index}>
      <Link href={menuItem.href}>{menuItem.title}</Link>
    </li>
  ));

  const subMenuLinks = subMenuData.map((menu, index) => (
    <ul key={index} className="flex flex-col">
      {menu.title.map((item, subIndex) => (
        <li key={subIndex}>
          <Link href={menu.href[subIndex]}>{item}</Link>
        </li>
      ))}
    </ul>
  ));

  return (
    <>
      <h1>header</h1>
      <div className="flex">
        <div>
          <Link href="/">홈</Link>
        </div>
        <div className="relative group">
          <div id="메인메뉴 링크들" className="cursor-pointer">
            <ul className="flex">{mainMenuLinks}</ul>
          </div>
          <div
            id="세부메뉴 링크들"
            className="hidden absolute top-full left-0 group-hover:block bg-green-50 bg-opacity-50"
          >
            <div className="flex">{subMenuLinks}</div>
          </div>
        </div>
        <div>
          <Link href="/mypage">마이페이지</Link>
          <Link href="/sitemap">메뉴</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
