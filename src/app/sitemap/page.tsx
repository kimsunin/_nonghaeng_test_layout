import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { sitemapLinks } from "@/storage/linkData/linkData";

export default function SiteMap() {
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <nav>
        <Nav links={sitemapLinks} />
      </nav>
      <hr />
      <main>
        <h1>사이트맵 컴포넌트</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
