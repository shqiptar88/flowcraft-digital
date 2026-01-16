import Header from '@/components/Header';
import Hero from '@/components/Hero';
import USPCards from '@/components/USPCards';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Team from '@/components/Team';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Update page title and meta for SEO
    document.title = 'Zahnarztpraxis Hamburg-Eppendorf | Ihr Zahnarzt mit Herz';
  }, []);

  return (
    <>
      {/* SEO Meta Tags are set in index.html */}
      <Header />
      <main>
        <Hero />
        <USPCards />
        <Services />
        <Process />
        <Team />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
