import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { communityLinks } from "@/storage/linkData/linkData";

export default function community() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <hr />
      <nav id="nav">
        <Nav links={communityLinks} />
      </nav>
      <hr />
      <main id="main">
        <div id="content">
          <h1>커뮤니티 자식3 컴포넌트</h1>
        </div>
      </main>
      <hr />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
