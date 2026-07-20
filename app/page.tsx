import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { CoOp, Concierge, How, Shops, Network, Benefits, Performance, Sustainability } from "@/components/Sections";
import Faq from "@/components/Faq";
import Join from "@/components/Join";
import ShopJoin from "@/components/ShopJoin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <CoOp />
        <Concierge />
        <How />
        <Shops />
        <Network />
        <ShopJoin />
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
