import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRoute, FaChartLine } from "react-icons/fa"; // icons for projects

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      name: "Tour Booking App",
      icon: <FaRoute className="text-5xl text-pink-500" />,
      desc: "A full-stack MERN travel booking platform with destination search, secure bookings, and admin dashboard.",
      link: "https://github.com/Uzairfyp/tour-booking-app"
    },
    {
      name: "MERN Admin Dashboard",
      icon: <FaChartLine className="text-5xl text-purple-500" />,
      desc: "A modern MERN admin dashboard with real-time analytics, CRUD operations, and role-based authentication.",
      link: "https://github.com/Uzairfyp/Mern-admin-dashboard"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        {/* Intro */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          A showcase of my work in <span className="text-pink-400 font-semibold">full-stack web development</span>. Each project highlights my skills in building scalable, interactive applications using the MERN stack.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-2 text-left"
            >
              <div className="flex items-center justify-center mb-4">
                {project.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4 text-center">{project.desc}</p>
              <div className="flex justify-center">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md text-white hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
