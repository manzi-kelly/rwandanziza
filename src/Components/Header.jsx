import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNow = () => {
    const whatsappNumber = "250792669133";

    const message =
      "Hello! I'm interested in booking a safari trip with World Visitors Safari.";

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleNavigationClick = (e, sectionId) => {
    e.preventDefault();

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Tours", id: "destination" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-700 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                W
              </span>
            </div>

            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-none">
                World Visitors
              </h1>

              <span className="text-[10px] uppercase tracking-[0.3em] text-green-700 font-semibold">
                Safari
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) =>
                  handleNavigationClick(e, link.id)
                }
                className="text-gray-700 hover:text-green-700 font-medium text-sm transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <button
              onClick={handleBookNow}
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
            >
              Book Now

              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100">
          <nav className="flex flex-col px-5 py-5 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) =>
                  handleNavigationClick(e, link.id)
                }
                className="text-gray-700 hover:text-green-700 font-medium transition"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={handleBookNow}
              className="mt-3 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-medium transition"
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