import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { travelLinks } from "@/storage/linkData/linkData";

export default function Travel() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <nav id="nav">
        <Nav links={travelLinks} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>여행 자식1 컴포넌트</h1>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
