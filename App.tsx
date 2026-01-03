
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';


const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        <section id="why-choose-us" className="py-20 bg-background-light">
          <WhyChooseUs />
        </section>

        <section id="process" className="py-20 bg-white">
          <Process />
        </section>

        <section id="projects" className="py-20 bg-background-light">
          <Portfolio />
        </section>

        <section className="py-20 bg-white">
          <Testimonials />
        </section>

        <section id="faq" className="py-20 bg-background-light">
          <FAQ />
        </section>

        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
