import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";

export default function Plan() {
  const props = {
    parent: { url: "/plan", title: "기획" },
    child1: { url: "/plan/child1", title: "기획1" },
    child2: { url: "/plan/child2", title: "기획2" },
  };
  return (
    <div>
      <Header />
      <hr />
      <Nav props={props} />
      <hr />
      <h1>기획 컴포넌트</h1>
      <hr />
      <Footer />
    </div>
  );
}
