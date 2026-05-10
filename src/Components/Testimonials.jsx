import React, { useEffect, useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "David Mukamana",
      role: "Safari Traveler",
      location: "Kigali, Rwanda",
      avatar: "DM",
      quote:
        "One of the most beautiful safari experiences I’ve ever had. Rwanda’s landscapes, wildlife, and hospitality were unforgettable.",
    },

    {
      id: 2,
      name: "Sarah Umukundwa",
      role: "Luxury Explorer",
      location: "Muhanga, Rwanda",
      avatar: "SU",
      quote:
        "Everything felt premium and perfectly organized. From gorilla trekking to luxury stays, every moment exceeded expectations.",
    },

    {
      id: 3,
      name: "James Manzi",
      role: "Adventure Photographer",
      location: "Musanze, Rwanda",
      avatar: "JM",
      quote:
        "The experience was beyond tourism. It felt authentic, emotional, and deeply connected to Rwanda’s culture and nature.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[0.35em] text-green-700 text-sm font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Trusted By Travelers Worldwide
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Hear from travelers who explored Rwanda with
            unforgettable safari adventures and premium
            experiences.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative">

          <div className="bg-white border border-gray-100 rounded-[40px] p-8 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

            <div className="flex flex-col items-center text-center">

              {/* Avatar */}
              <div className="relative mb-8">

                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white text-4xl font-black shadow-xl">
                  {testimonials[current].avatar}
                </div>

                {/* Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-green-100 scale-125"></div>
              </div>

              {/* Quote Icon */}
              <div className="mb-6">
                <FaQuoteLeft className="text-green-600 text-4xl opacity-80" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-400 text-lg"
                  />
                ))}
              </div>

              {/* Quote */}
              <h3 className="text-2xl md:text-5xl font-black text-gray-900 leading-[1.5] max-w-5xl mb-10 transition-all duration-500">
                “{testimonials[current].quote}”
              </h3>

              {/* User Info */}
              <div className="mb-12">

                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {testimonials[current].name}
                </h4>

                <p className="text-green-700 font-semibold">
                  {testimonials[current].role}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {testimonials[current].location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-5">

                <button
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full border border-gray-200 bg-white hover:bg-green-600 hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <FaArrowLeft />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-500 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-3 mt-10">

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-12 h-3 bg-green-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-green-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Bottom Mini Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrent(index)}
              className={`text-left rounded-[28px] p-6 transition-all duration-500 border ${
                current === index
                  ? "border-green-500 bg-green-50 shadow-lg"
                  : "border-gray-100 bg-white hover:shadow-lg"
              }`}
            >

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                  {item.avatar}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-green-700">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.quote.slice(0, 110)}...
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;