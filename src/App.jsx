import React from "react";

// COMPONENTS
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">

      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="relative z-10">

        {/* HERO SECTION */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <About />
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <Services />
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <Contact />
        </section>

        {/* BLOG SECTION */}
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