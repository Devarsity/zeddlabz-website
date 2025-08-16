import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Team />
        <Pricing />
        <Blog />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;