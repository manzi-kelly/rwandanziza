import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowDown,
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "T (1).jpg",
      title: "Discover Rwanda",
      subtitle:
        "Luxury safari adventures across breathtaking landscapes and unforgettable wildlife experiences.",
    },
    {
      image: "IMG_0308.JPG",
      title: "Explore Nature",
      subtitle:
        "Journey through volcanoes, forests, lakes, and East Africa’s hidden beauty.",
    },
    {
      image: "T (3).jpg",
      title: "Cultural Experience",
      subtitle:
        "Experience authentic traditions, culture, and warm hospitality.",
    },
    {
      image: "IMG_0307.JPG",
      title: "Wildlife Adventure",
      subtitle:
        "Meet mountain gorillas and discover Africa’s rare wildlife.",
    },
    {
      image: "T (5).jpg",
      title: "Visit Kigali",
      subtitle:
        "Experience Africa’s cleanest and most modern city.",
    },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const scrollDown = () => {
    const nextSection = document.getElementById("about");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[90vh] overflow-hidden"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(0,0,0,0.55),
                  rgba(0,0,0,0.45)
                ),
                url("${slide.image}")
              `,
            }}
          ></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">

            {/* Small Text */}
            <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-5 animate-bounce">
              Rwanda Luxury Safari
            </p>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6">
              {slides[currentSlide].title}

              <span className="block text-green-400">
                RwandaNziza
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-10">
              {slides[currentSlide].subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
                Explore Rwanda
              </button>

              <button
                onClick={scrollDown}
                className="border border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-green-700 transition duration-300 flex items-center justify-center"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-green-700 transition duration-300 flex items-center justify-center"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-10 h-3 bg-green-400"
                : "w-3 h-3 bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 right-6 md:right-10 z-30 flex flex-col items-center gap-2 text-white"
      >
        <span className="text-xs tracking-[0.25em]">
          SCROLL
        </span>

        <div className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center animate-bounce hover:bg-green-700 transition-all duration-300">
          <ArrowDown size={18} />
        </div>
      </button>
    </section>
  );
};

export default Hero;