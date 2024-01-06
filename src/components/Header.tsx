import Link from "next/link";

function Header() {
  return (
    <div>
      <h1>header</h1>
      <Link href="/">홈</Link>
      <Link href="/introduce">소개</Link>
      <Link href="/travel">여행</Link>
      <Link href="/plan">기획</Link>
      <Link href="/community">커뮤니티</Link>
      <Link href="/mypage">마이페이지</Link>
      <Link href="/sitemap">메뉴</Link>
    </div>
  );
}

export default Header;
