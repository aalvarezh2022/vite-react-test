import "./styles/global.css";
import "./styles/landing.css";

//import { Navbar } from "/components/Navbar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Highlights } from "./components/Highlights";
import { Categories } from "./components/Categories";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Highlights />
        <Categories />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
