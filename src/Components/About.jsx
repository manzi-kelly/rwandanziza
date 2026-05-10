import React from "react";
import {
  FaWhatsapp,
  FaGlobeAfrica,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const About = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "250792669133";

    const message =
      "Hello World Visitors Safari! I'm interested in booking a safari trip.";

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section
      id="about"
      className="relative py-16 bg-white overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-green-100 blur-3xl opacity-40 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-100 blur-3xl opacity-40 rounded-full"></div>

      <div className="max-w-6xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">

            <div className="rounded-[24px] overflow-hidden shadow-2xl">
              <img
                src="T (1).jpg"
                alt="Rwanda Safari"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Floating Mini Card */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl px-5 py-4 border border-gray-100">
              <h3 className="text-2xl font-black text-green-700">
                15K+
              </h3>

              <p className="text-sm text-gray-600">
                Happy Travelers
              </p>
            </div>
          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[0.25em] text-green-700 text-xs font-semibold mb-4">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5">
              Premium Safari Experiences In Rwanda
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 text-base">
              World Visitors Safari creates unforgettable luxury
              adventures across Rwanda and East Africa. From
              gorilla trekking to wildlife safaris, we deliver
              authentic travel experiences with comfort and style.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              We connect travelers with Africa’s beauty while
              supporting local communities and sustainable tourism.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-3">
                  <FaGlobeAfrica size={20} />
                </div>

                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  African Tours
                </h3>

                <p className="text-xs text-gray-600">
                  Explore Rwanda & East Africa.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                  <FaUsers size={20} />
                </div>

                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  Trusted Guides
                </h3>

                <p className="text-xs text-gray-600">
                  Local safari experts.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                  <FaHandshake size={20} />
                </div>

                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  Partnerships
                </h3>

                <p className="text-xs text-gray-600">
                  Supporting communities.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-3">
                  <FaWhatsapp size={20} />
                </div>

                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  Quick Booking
                </h3>

                <p className="text-xs text-gray-600">
                  Easy WhatsApp booking.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={handleWhatsAppContact}
                className="bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-full font-semibold flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all duration-300"
              >
                <FaWhatsapp size={20} />

                Book Safari
              </button>

              <button className="border border-gray-300 hover:border-green-700 hover:text-green-700 px-7 py-3 rounded-full font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">

          <div className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg transition duration-300">
            <h3 className="text-3xl font-black text-green-700">
              100+
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Safari Tours
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg transition duration-300">
            <h3 className="text-3xl font-black text-green-700">
              15K+
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Travelers
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg transition duration-300">
            <h3 className="text-3xl font-black text-green-700">
              5★
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Experience
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg transition duration-300">
            <h3 className="text-3xl font-black text-green-700">
              24/7
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;