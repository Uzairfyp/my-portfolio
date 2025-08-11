// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            DevFolio
          </h2>
          <p className="mt-2 text-sm">
            Building modern MERN stack applications with passion and precision.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/projects" className="hover:text-white transition">Projects</Link>
          <Link to="/skills" className="hover:text-white transition">Skills</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-white">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/Uzairfyp"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white hover:scale-110 transition-transform"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/uzair-rehman-a3694836b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white hover:scale-110 transition-transform"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:uzairrehman143@gmail.com"
              aria-label="Email"
              className="hover:text-white hover:scale-110 transition-transform"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DevFolio. All rights reserved.
      </div>
    </footer>
  );
}
