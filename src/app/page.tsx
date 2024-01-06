import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <main>
        <h1>홈입니다</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
