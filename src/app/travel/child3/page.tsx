import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";

export default function Travel() {
  const props = {
    parent: { url: "/travel", title: "여행" },
    child1: { url: "/travel/child1", title: "여행1" },
    child2: { url: "/travel/child2", title: "여행2" },
    child3: { url: "/travel/child3", title: "여행3" },
    child4: { url: "/travel/child4", title: "여행4" },
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <nav>
        <Nav props={props} />
      </nav>
      <hr />
      <main>
        <h1>여행 자식3 컴포넌트</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
