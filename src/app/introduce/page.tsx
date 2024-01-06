import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";

export default function Introduce() {
  const props = {
    parent: { url: "/introduce", title: "소개" },
    child1: { url: "/introduce/child1", title: "소개1" },
    child2: { url: "/introduce/child2", title: "소개2" },
    child3: { url: "/introduce/child3", title: "소개3" },
  };
  return (
    <div>
      <Header />
      <hr />
      <Nav props={props} />
      <hr />
      <h1>소개 컴포넌트</h1>
      <hr />
      <Footer />
    </div>
  );
}
