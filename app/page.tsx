import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Club, How, Benefits, Performance, Sustainability } from "@/components/Sections";
import Faq from "@/components/Faq";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Club />
        <div className="hairline" />
        <How />
        <Benefits />
        <Performance />
        <Sustainability />
        <Faq />
        <Join />
      </main>
      <Footer />
    </>
  );
}
