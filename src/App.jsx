import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden bg-white">

      {/* GLOBAL HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main>

        {/* HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* SERVICES */}
        <section id="services">
          <Services />
        </section>

        {/* GALLERY */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials">
          <Testimonials />
        </section>

              {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

        {/* BLOG */}
        <section id="blog">
          <Blog />
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;