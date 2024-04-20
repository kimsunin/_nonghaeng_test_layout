import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { introduceLinks } from "@/storage/linkData/linkData";

export default function IntroduceChild3() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>

      <nav id="nav">
        <Nav links={introduceLinks} />
      </nav>

      <main id="main">
        <div id="content">
          <h1>소개 자식4 컴포넌트</h1>
        </div>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
