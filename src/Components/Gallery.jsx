import React, { useState } from "react";

import {
  FaExpand,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    {
      url: "/Nyungwe.PNG",
      alt: "Nyungwe Forest",
      category: "Nature",
    },

    {
      url: "/Akagera.PNG",
      alt: "Akagera Wildlife",
      category: "Safari",
    },

    {
      url: "/ingajyi (2).PNG",
      alt: "Golden Monkey",
      category: "Adventure",
    },

    {
      url: "/mukuragishwatii.PNG",
      alt: "Gishwati Mukura",
      category: "Eco Tourism",
    },

    {
      url: "/nyandungu 1.PNG",
      alt: "Nyandungu Park",
      category: "Heritage",
    },

    {
      url: "/Nyandungu.PNG",
      alt: "Kigali Nature",
      category: "Destination",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Travel Gallery
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Explore Rwanda Through Stunning Moments
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Discover breathtaking wildlife, landscapes,
            eco-tourism destinations, and unforgettable safari
            adventures captured across Rwanda.
          </p>
        </div>

        {/* Premium Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(image)}
              className="relative overflow-hidden rounded-[30px] cursor-pointer group break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                  index % 3 === 0
                    ? "h-[500px]"
                    : index % 2 === 0
                    ? "h-[350px]"
                    : "h-[420px]"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition duration-500"></div>

              {/* Category */}
              <div className="absolute top-5 left-5">
                <span className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-wide font-semibold px-4 py-2 rounded-full">
                  {image.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      {image.alt}
                    </h3>

                    <p className="text-gray-200 text-sm">
                      Rwanda Luxury Experience
                    </p>
                  </div>

                  {/* Expand Button */}
                  <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-green-600 transition duration-300">
                    <FaExpand size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 p-10 md:p-14 text-center shadow-2xl">
            {/* Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <span className="uppercase tracking-[0.25em] text-green-100 text-xs font-semibold">
                Luxury Safari Experience
              </span>

              <h3 className="text-3xl md:text-5xl font-black text-white mt-5 mb-6 leading-tight">
                Ready To Explore Rwanda?
              </h3>

              <p className="text-green-50 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                Experience unforgettable safaris, wildlife,
                breathtaking landscapes, and luxury adventures
                designed for modern travelers.
              </p>

              <button className="bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-3">
                Explore Destinations

                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            {/* Close */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl hover:scale-110 transition duration-300"
            >
              <FaTimes />
            </button>

            {/* Image */}
            <div className="overflow-hidden rounded-[35px] shadow-2xl">
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                className="w-full max-h-[85vh] object-cover"
              />
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent rounded-b-[35px]">
              <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold text-white">
                {activeImage.category}
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-white mt-5">
                {activeImage.alt}
              </h2>

              <p className="text-gray-300 mt-3 text-lg">
                Explore the beauty of Rwanda through premium
                safari experiences and unforgettable journeys.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;