"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { headerLinks } from "@/storage/linkData/linkData";

function Header() {
  const [isHover, setIsHover] = useState(false);
  const isLogin = true;

  function onMouseEnter() {
    setIsHover(true);
  }

  function onMouseLeave() {
    setIsHover(false);
  }

  const subMenuLinks = (subMenu) => (
    <ul
      className={`subMenu absolute w-full top-20 z-50 text-center overflow-hidden transition-h duration-500 ease-in-out ${
        isHover ? "h-48" : "h-0"
      }`}
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {subMenu.map((item, subIndex) => (
        <li key={subIndex} className="">
          <Link
            href={item.href}
            className="box-border inline-block w-full pt-5"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  const mainMenuLinks = headerLinks.map((menuItem, index) => (
    <li key={index} className="relative">
      <Link
        href={menuItem.href}
        className="inline-block p-7 hover:text-slate-300"
      >
        {menuItem.title}
      </Link>
      {menuItem.subMenu && subMenuLinks(menuItem.subMenu)}
    </li>
  ));

  return (
    <div className="relative flex items-center h-full header_inner">
      <div className="ml-10 header_logo p-7 ">
        <Link href="/">홈</Link>
      </div>
      <nav className="header_menu ml-52">
        <ul
          className="flex h-full mainMenu"
          onMouseOver={onMouseEnter}
          onMouseLeave={onMouseLeave}
          // 마우스를 오버하면 css를 변경하는 함수를 호출
        >
          {mainMenuLinks}
        </ul>
      </nav>
      <div className="ml-20 header_search p-7">
        <form>
          <input type="text" placeholder="정보를 찾고계신가요?"></input>
          <button>검색</button>
        </form>
      </div>
      <div className="ml-48 header_menu2 p-7">
        {isLogin && (
          <Link href="/mypage/login" className="p-2">
            로그인
          </Link>
        )}
        <Link href="/mypage" className="p-2">
          마이페이지
        </Link>
        <Link href="/sitemap" className="p-2">
          메뉴
        </Link>
      </div>
      {/* subMenu 배경 가상영역 */}
      <div
        className={`menuBg absolute bg-slate-300 opacity-85 top-20 w-full overflow-hidden transition-h duration-500 ease-in-out ${
          isHover ? "h-64" : "h-0"
        }`}
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      ></div>
    </div>
  );
}

export default Header;
