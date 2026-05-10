import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Services />
        <section id="gallery">
          <Gallery />
        </section>
        <Contact />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;