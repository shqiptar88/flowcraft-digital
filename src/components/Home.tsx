// src/components/Home.tsx
import Header from "./Header";
import Hero from "./Hero";
import USP from "./USP";
import Services from "./Services";
import Process from "./Process";
import Projects from "./Projects";
import FAQ from "./FAQ";
import Footer from "./Footer";

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