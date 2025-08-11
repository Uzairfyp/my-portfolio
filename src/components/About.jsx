import React from "react";
import { FaLaptopCode, FaUserGraduate, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
        </h2>

        {/* Short Intro */}
        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-12">
          Hi, I'm Uzair — a passionate <span className="text-purple-400 font-semibold">MERN Stack Developer</span> 
          who loves crafting modern, scalable web applications. I enjoy turning complex problems into elegant solutions.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1">
            <FaLaptopCode className="text-purple-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Developer</h3>
            <p>I build high-performance, responsive, and user-friendly applications using the MERN stack.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1">
            <FaUserGraduate className="text-pink-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
            <p>I believe in constant learning and staying updated with the latest technologies and trends.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1">
            <FaLightbulb className="text-rose-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p>I enjoy finding creative, efficient, and scalable solutions to real-world challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
