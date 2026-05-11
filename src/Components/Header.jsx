import React, { useEffect, useState } from "react";

import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* WHATSAPP */
  const handleBookNow = () => {
    const whatsappNumber = "250792669133";

    const message =
      "Hello! I would like to book a safari experience with World Visitors Safari.";

    const encodedMessage =
      encodeURIComponent(message);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  /* SMOOTH NAVIGATION */
  const handleNavigationClick = (
    e,
    sectionId
  ) => {
    e.preventDefault();

    const section =
      document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  /* NAV LINKS */
  const navLinks = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "Gallery",
      id: "gallery",
    },
    {
      name: "Testimonials",
      id: "testimonials",
    },
    {
      name: "Blog",
      id: "blog",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* NAVBAR */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) =>
              handleNavigationClick(e, "home")
            }
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center shadow-lg">

              <span className="text-white text-xl font-black">
                W
              </span>
            </div>

            <div>

              <h1 className="text-xl md:text-2xl font-black text-gray-900 leading-none">
                World Visitors
              </h1>

              <p className="uppercase tracking-[0.35em] text-[10px] text-green-700 font-bold mt-1">
                Safari
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) =>
                  handleNavigationClick(
                    e,
                    link.id
                  )
                }
                className="relative text-gray-700 hover:text-green-700 font-semibold text-sm transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION */}
          <div className="hidden lg:flex items-center gap-4">

            <button
              onClick={handleBookNow}
              className="group bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Safari

              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition duration-300"
              />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(
                !isMobileMenuOpen
              )
            }
            className="lg:hidden w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-900"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-2xl">

          <nav className="flex flex-col px-6 py-8 space-y-6">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) =>
                  handleNavigationClick(
                    e,
                    link.id
                  )
                }
                className="text-gray-800 hover:text-green-700 text-lg font-semibold transition duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* MOBILE BUTTON */}
            <button
              onClick={handleBookNow}
              className="mt-4 bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-bold transition-all duration-300"
            >
              Book Safari
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;