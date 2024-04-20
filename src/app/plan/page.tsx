import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { planLinks } from "@/storage/linkData/linkData";

export default function Plan() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <nav id="nav">
        <Nav links={planLinks} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>기획 컴포넌트</h1>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
