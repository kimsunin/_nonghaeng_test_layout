import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";

export default function community() {
  const props = {
    parent: { url: "/community", title: "커뮤니티" },
    child1: { url: "/community/child1", title: "커뮤니티1" },
    child2: { url: "/community/child2", title: "커뮤니티2" },
    child3: { url: "/community/child3", title: "커뮤니티3" },
    child4: { url: "/community/child4", title: "커뮤니티4" },
  };

  return (
    <div>
      <Header />
      <hr />
      <Nav props={props} />
      <hr />
      <h1>커뮤니티 자식4 컴포넌트</h1>
      <hr />
      <Footer />
    </div>
  );
}
