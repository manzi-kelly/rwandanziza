import React from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    "Home",
    "Destinations",
    "Tours",
    "Gallery",
    "Blog",
    "About",
  ];

  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-100">

      {/* Soft Background Blur */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-green-50 rounded-full blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10">

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-24">

          <div className="grid lg:grid-cols-12 gap-16">

            {/* BRAND */}
            <div className="lg:col-span-5">

              <div className="mb-8">

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                  World Visitors Safari
                </h2>

                <div className="w-24 h-[4px] bg-green-600 rounded-full mb-8"></div>

                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Discover premium safari adventures, unforgettable
                  wildlife encounters, eco-tourism experiences,
                  and authentic journeys across Rwanda and East Africa
                  with comfort, elegance, and modern exploration.
                </p>
              </div>

              {/* SOCIALS */}
              <div className="flex items-center gap-5">

                <a
                  href="#"
                  className="group w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300"
                >
                  <FaFacebookF className="group-hover:scale-110 transition duration-300" />
                </a>

                <a
                  href="#"
                  className="group w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300"
                >
                  <FaInstagram className="group-hover:scale-110 transition duration-300" />
                </a>

                <a
                  href="#"
                  className="group w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300"
                >
                  <FaTwitter className="group-hover:scale-110 transition duration-300" />
                </a>
              </div>
            </div>

            {/* LINKS */}
            <div className="lg:col-span-3">

              <h3 className="text-2xl font-black text-gray-900 mb-10">
                Quick Links
              </h3>

              <div className="grid grid-cols-2 gap-y-6">

                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase()}`}
                    className="relative text-gray-600 hover:text-green-700 font-medium transition-all duration-300 w-fit after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div className="lg:col-span-4">

              <h3 className="text-2xl font-black text-gray-900 mb-10">
                Contact Info
              </h3>

              <div className="space-y-8">

                {/* LOCATION */}
                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center text-lg shrink-0">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Location
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      Kigali, Rwanda <br />
                      Gasabo District
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center text-lg shrink-0">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Phone
                    </p>

                    <p className="text-gray-600">
                      +250 792 669 133
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center text-lg shrink-0">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Email
                    </p>

                    <p className="text-gray-600 break-all">
                      worldvisiterssafari@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-20 pt-8 border-t border-gray-100">

            <div className="flex flex-col md:flex-row items-center justify-between gap-5">

              <p className="text-gray-500 text-center md:text-left">
                © 2026 World Visitors Safari. All Rights Reserved.
              </p>

              <p className="text-gray-500 text-center md:text-right">
                Designed & Developed By{" "}
                <span className="font-bold text-green-700">
                  Autiva Tech
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;