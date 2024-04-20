import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { mypageLinks } from "@/storage/linkData/linkData";

export default function Mypage() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <nav id="nav">
        <Nav links={mypageLinks} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>마이페이지 자식3 컴포넌트</h1>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
