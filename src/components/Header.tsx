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
    <li key={index}>
      <Link href={menuItem.href}>{menuItem.title}</Link>
      <div className="hidden absolute top-full group-hover:block bg-green-50 bg-opacity-50 w-full">
        {menuItem.subMenu && subMenuLinks(menuItem.subMenu)}
      </div>
    </li>
  ));

  return (
    <>
      <h1>header</h1>
      <div className="flex">
        <div>
          <Link href="/">홈</Link>
        </div>
        <nav className="relative group">
          <ul className="flex cursor-pointer">{mainMenuLinks}</ul>
        </nav>
        <div>
          <Link href="/mypage">마이페이지</Link>
          <Link href="/sitemap">메뉴</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
