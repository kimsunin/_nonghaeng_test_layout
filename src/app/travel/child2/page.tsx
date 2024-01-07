import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { travelLinks } from "@/storage/linkData/linkData";

export default function Travel() {
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <nav>
        <Nav links={travelLinks} />
      </nav>
      <hr />
      <main>
        <h1>여행 자식2 컴포넌트</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
