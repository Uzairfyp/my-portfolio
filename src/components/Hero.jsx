import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  useEffect(() => {
    // Load Landbot script
    const script = document.createElement("script");
    script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
    script.async = true;

    script.onload = () => {
      if (window.Landbot) {
        window.myLandbot = new window.Landbot.Livechat({
          configUrl:
            "https://storage.googleapis.com/landbot.online/v3/H-3116833-3CC9YAYPTGQDXEF1/index.json",
        });
      } else {
        console.error("Landbot script loaded but Landbot is undefined");
      }
    };

    script.onerror = () => {
      console.error("Failed to load Landbot script");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-950 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"></div>

      {/* Background grid */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(#1e1e2f_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

      {/* Left side */}
      <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-20 max-w-4xl mx-auto relative z-10 overflow-visible">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#0a0a0f]/70 via-[#13131f]/80 to-[#0d0d15]/90 backdrop-blur-md border border-gray-800/50 shadow-2xl" />

        <p className="text-lg text-cyan-400 mb-4 tracking-wide uppercase font-semibold relative inline-block pl-2 border-l-4 border-cyan-400/60 animate-pulse">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          UZAIR{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            REHMAN
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-medium text-gray-300 mb-10">
          I build{" "}
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            digital experiences
          </span>{" "}
          that matter
        </h2>

        <p className="text-gray-400 mb-12 leading-relaxed text-base md:text-lg max-w-xl">
          A passionate frontend developer specializing in modern, responsive web
          applications with focus on performance and user experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link
            to="/projects"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-700 to-cyan-600 shadow-lg shadow-purple-500/20 hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
          >
            <span>View My Work</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-gray-700 bg-gray-900/50 text-gray-200 hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
          >
            <span>Let's Collaborate</span>
            <svg
              className="w-4 h-4 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </Link>
        </div>

        {/* Tech stack badges */}
        <div className="mt-16 flex flex-wrap gap-3">
          {["React", "Tailwind", "JavaScript", "Node.js"].map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs bg-gray-800/40 text-gray-300 rounded-full border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll down indicator */}
        <div className="mt-14 flex justify-center">
          <div className="flex flex-col items-center text-cyan-400/70">
            <span className="text-xs mb-2 tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden flex items-center justify-center p-8">
        <div className="relative w-full h-full max-w-2xl">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-gray-700/30 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-all duration-700 hover:scale-110"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)`,
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl"></div>
          <div className="absolute -top-6 right-12 w-12 h-12 bg-purple-600/10 rounded-full backdrop-blur-sm border border-purple-500/30 animate-float"></div>
          <div className="absolute bottom-8 -left-6 w-10 h-10 bg-cyan-500/10 rounded-full backdrop-blur-sm border border-cyan-400/30 animate-floatReverse"></div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => {
          if (window.myLandbot) {
            window.myLandbot.open();
          } else {
            console.error("Landbot is not initialized yet");
          }
        }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        💬
      </button>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(5deg);
          }
        }
        @keyframes floatReverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(12px) rotate(-5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-floatReverse {
          animation: floatReverse 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
