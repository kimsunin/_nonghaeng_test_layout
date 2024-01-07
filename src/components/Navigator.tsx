import Link from "next/link";
import React from "react";

function Nav({ links }) {
  const childLinks = Object.keys(links)
    .filter((key) => key !== "parent")
    .map((key) => (
      <Link key={key} href={links[key].url}>
        {links[key].title}
      </Link>
    ));
  // <Link></Link> 태그가 하나하나의 객체로 존재하는 객체

  return (
    <>
      <h1>navigator</h1>
      <div id="상위 페이지 제목">
        <Link href={links.parent.url}>{links.parent.title}</Link>
      </div>
      <div id="하위 페이지 제목들">{childLinks}</div>
    </>
  );
}

export default Nav;
