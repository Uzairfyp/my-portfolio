import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  // Smooth scroll for anchor links if any
  const handleLinkClick = (e, path) => {
    setOpen(false);
    if (path.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(path);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = ["Projects", "Skills", "About", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-900/95 py-3 shadow-xl" : "bg-gray-900/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 select-none cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 18l6-6-6-6" />
            <path d="M8 6l-6 6 6 6" />
          </svg>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Uzair Rehman
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, `/${item.toLowerCase()}`)}
              className={`relative group text-gray-300 transition-colors duration-300 ${
                location.pathname === `/${item.toLowerCase()}`
                  ? "text-white font-semibold"
                  : "hover:text-white"
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 hover:shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-all duration-300"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                open ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                open ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, `/${item.toLowerCase()}`)}
              className="block py-3 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 py-3 px-4 text-center rounded-md text-white bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
