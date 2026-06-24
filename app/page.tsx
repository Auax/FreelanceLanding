import { Contact } from "./components/sections/Contact";
import { FAQ } from "./components/sections/FAQ";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { SelectedWork } from "./components/sections/SelectedWork";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <FeatureGrid />
        <SelectedWork />
        <Pricing />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
