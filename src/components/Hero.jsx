import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white overflow-hidden relative">
      
      {/* Left side - Text content with smooth gradient background */}
      <div className="md:w-1/2 flex flex-col justify-center px-10 py-20 max-w-4xl mx-auto relative z-10 overflow-visible">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-[#2E026D] via-[#3B0A45] to-[#0E4D92] opacity-90 animate-gradientBG" />

        <p className="text-lg text-cyan-400 mb-4 tracking-wide uppercase font-semibold relative inline-block after:absolute after:left-0 after:bottom-[-6px] after:w-14 after:h-0.5 after:bg-cyan-400 after:rounded-full after:animate-underline">
          👋 Hi, my name is
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] leading-tight">
          UZAIR REHMAN
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-300 mb-10">
          I build <span className="text-cyan-400">modern web experiences</span>
        </h2>

        <p className="text-gray-300 mb-16 leading-relaxed text-lg max-w-xl">
          I’m a passionate web developer focused on creating clean, user-friendly, and visually appealing websites that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          <Link
            to="/projects"
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-[#0E4D92] to-[#00CED1] shadow-lg shadow-cyan-500 hover:shadow-cyan-400 transition-shadow duration-400 transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-10 py-4 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-500/30 transition-colors duration-400 transform hover:scale-105"
          >
            Let’s Talk
          </Link>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-14 flex justify-center">
          <svg
            className="w-8 h-8 animate-bounce text-cyan-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Right side - Floating skewed wallpaper with gradient overlay */}
      <div className="md:w-1/2 relative h-96 md:h-auto overflow-hidden rounded-tl-[5rem] rounded-bl-[5rem] shadow-xl animate-floatSlow">
        <div
          className="absolute inset-0 transform skew-x-[-10deg] scale-110 origin-top-right bg-cover bg-center filter brightness-90 transition-transform duration-700 hover:scale-115 hover:skew-x-[-8deg]"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2E026D]/70 via-[#3B0A45]/60 to-[#0E4D92]/60 mix-blend-multiply pointer-events-none rounded-tl-[5rem] rounded-bl-[5rem]" />
      </div>

      {/* Extra styles */}
      <style jsx>{`
        @keyframes gradientBG {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes underline {
          0%, 100% {
            width: 0;
          }
          50% {
            width: 56px;
          }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) skewX(-10deg) scale(1.1);
          }
          50% {
            transform: translateY(-12px) skewX(-12deg) scale(1.15);
          }
        }

        .animate-gradientBG {
          background-size: 200% 200%;
          animation: gradientBG 8s ease infinite;
        }
        .animate-underline::after {
          animation: underline 2.5s ease infinite;
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
