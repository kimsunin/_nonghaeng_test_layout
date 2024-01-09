import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <main>
        <div className="pt-20"></div>
        <h1>홈입니다</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
