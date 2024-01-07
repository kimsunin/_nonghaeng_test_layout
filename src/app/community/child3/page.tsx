import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { communityLinks } from "@/storage/linkData/linkData";

export default function community() {
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <nav>
        <Nav links={communityLinks} />
      </nav>
      <hr />
      <main>
        <h1>커뮤니티 자식3 컴포넌트</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
