import Link from "next/link";
import React from "react";
import Image from "next/image";
import img from "../../public/img/navigationImg/img.jpeg";

function Nav({ links }) {
  const childLinks = Object.keys(links)
    .filter((key) => key !== "parent")
    .map((key) => (
      <Link key={key} href={links[key].url} className="pl-20">
        {links[key].title}
      </Link>
    ));
  // <Link></Link> 태그가 하나하나의 객체로 존재하는 객체
  return (
    <>
      <div className="nav_innner h-full">
        <div className="nav_menu flex absolute w-full mt-32 h-20 z-10">
          <div className="mainMenu">
            <div className="pl-20 text-2xl ">
              <Link href={links.parent.url}>{links.parent.title}</Link>
            </div>
            <div className="path absolute bg-teal-100 pl-20 w-full left-0 bottom-0">
              <Link href="/">홈</Link>
              <span> > </span>
              {links.parent.title}
            </div>
          </div>
          <div className="subMenu bg-teal-400 absolute h-full w-2/4 right-0">
            <div className="mt-7">{childLinks}</div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image src={img} className="absolute w-full h-52" />
        </div>
      </div>
    </>
  );
}

export default Nav;
