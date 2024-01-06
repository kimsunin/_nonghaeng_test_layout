import Link from "next/link";
import React from "react";

function Nav({ props }) {
  const childLinks = Object.keys(props)
    .filter((key) => key !== "parent")
    .map((key) => (
      <Link key={key} href={props[key].url}>
        {props[key].title}
      </Link>
    ));
  // <Link></Link> 태그가 하나하나의 객체로 존재하는 객체

  return (
    <div>
      <h1>navigator</h1>
      <div id="상위 페이지 제목">
        <Link href={props.parent.url}>{props.parent.title}</Link>
      </div>
      <div id="하위 페이지 제목들">{childLinks}</div>
    </div>
  );
}

export default Nav;
