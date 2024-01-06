import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";

export default function SiteMap() {
  const props = {
    parent: { url: "/sitemap", title: "사이트맵" },
  };
  return (
    <div>
      <Header />
      <hr />
      <Nav props={props} />
      <hr />
      <h1>사이트맵 컴포넌트</h1>
      <hr />
      <Footer />
    </div>
  );
}
