import React from "react";
import {
  FaHiking,
  FaCity,
  FaPaw,
  FaHotel,
  FaTag,
  FaHeadset,
} from "react-icons/fa";

import { GiVolcano } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      icon: <FaPaw size={26} />,
      title: "Safari Adventures",
      description:
        "Experience unforgettable wildlife safaris across Rwanda’s national parks.",
    },
    {
      icon: <FaHiking size={26} />,
      title: "Scenic Hiking",
      description:
        "Explore breathtaking trails with incredible mountain views.",
    },
    {
      icon: <GiVolcano size={28} />,
      title: "Volcano Tours",
      description:
        "Adventure through Rwanda’s beautiful volcanic landscapes.",
    },
    {
      icon: <FaCity size={26} />,
      title: "City Experience",
      description:
        "Discover Kigali’s modern lifestyle, culture, and nightlife.",
    },
    {
      icon: <FaPaw size={26} />,
      title: "Gorilla Trekking",
      description:
        "Meet rare mountain gorillas in their natural habitat.",
    },
    {
      icon: <FaHotel size={26} />,
      title: "Luxury Hotels",
      description:
        "Premium accommodation with comfort and elegance.",
    },
    {
      icon: <FaTag size={26} />,
      title: "Affordable Prices",
      description:
        "Luxury travel experiences at competitive prices.",
    },
    {
      icon: <FaHeadset size={26} />,
      title: "24/7 Support",
      description:
        "Dedicated travel assistance anytime during your trip.",
    },
  ];

  return (
    <section
      id="destination"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 blur-3xl rounded-full opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100 blur-3xl rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-green-700 text-sm font-semibold mb-5">
            Premium Experiences
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Explore Rwanda In Luxury Style
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Discover unforgettable safari adventures,
            gorilla trekking, volcano tours, luxury stays,
            and premium travel experiences crafted for
            modern explorers.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">

          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-start gap-6 border-b border-gray-100 pb-10"
            >

              {/* Icon */}
              <div className="min-w-[70px] h-[70px] rounded-2xl bg-green-50 text-green-700 flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-all duration-500 shadow-sm">
                {service.icon}
              </div>

              {/* Content */}
              <div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-24 pt-16 border-t border-gray-100">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left */}
            <div className="max-w-2xl">

              <p className="uppercase tracking-[0.25em] text-green-700 text-sm font-semibold mb-4">
                Rwanda Luxury Safari
              </p>

              <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                Begin Your African Adventure
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Experience world-class safaris, breathtaking
                landscapes, and unforgettable wildlife moments
                with World Visitors Safari.
              </p>
            </div>

            {/* Right */}
            <div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-9 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300">
                Book Your Safari
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;