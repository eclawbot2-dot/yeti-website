import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Concierge, How, Shops, Network, Benefits, Performance, Sustainability } from "@/components/Sections";
import Faq from "@/components/Faq";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Concierge />
        <How />
        <Shops />
        <Network />
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
