import React from "react";

// COMPONENTS
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

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