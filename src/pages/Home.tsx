// src/pages/Home.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import USP from "../components/USP";
import Services from "../components/Services";
import Process from "../components/Process";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <USP />
        <Services />
        <Process />
        <Projects />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}