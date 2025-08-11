import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiGraphql, SiTypescript, SiJest } from "react-icons/si";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skills = [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" />, desc: "NoSQL database for modern applications." },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" />, desc: "Fast, unopinionated web framework for Node.js." },
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" />, desc: "Library for building user interfaces." },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl" />, desc: "JavaScript runtime built on Chrome's V8 engine." },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-5xl" />, desc: "Markup language for structuring web content." },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-5xl" />, desc: "Styles web pages and interfaces." },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-5xl" />, desc: "Programming language for web development." },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" />, desc: "Utility-first CSS framework." },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-5xl" />, desc: "Version control and collaboration tools." },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-400 text-5xl" />, desc: "Query language for APIs." },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-5xl" />, desc: "JavaScript with static typing." },
    { name: "Docker", icon: <FaDocker className="text-blue-500 text-5xl" />, desc: "Containerization for consistent environments." },
    { name: "Testing (Jest)", icon: <SiJest className="text-red-500 text-5xl" />, desc: "Testing JavaScript applications." },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My Skills
        </h2>

        {/* Intro Text */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          I’m a passionate <span className="text-purple-400 font-semibold">MERN Stack Developer</span>{" "}
          who loves building modern, scalable web applications. My expertise lies in creating{" "}
          seamless user experiences, optimizing backend performance, and delivering clean, maintainable code.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
