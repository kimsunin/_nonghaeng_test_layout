import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { mypageLinks } from "@/storage/linkData/linkData";

export default function Mypage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <nav>
        <Nav links={mypageLinks} />
      </nav>
      <hr />
      <main>
        <h1>마이페이지 자식1 컴포넌트</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
