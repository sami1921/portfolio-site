import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`h-screen flex flex-col justify-center items-center px-6 transition-all duration-500 ${
        darkMode ? "bg-slate-900" : "bg-pink-50"
      }`}
    >
      <div className="text-center space-y-4 animate-fade-in">
        <h2
          className={`font-mono text-lg transition-colors duration-500 ${
            darkMode ? "text-cyan-400" : "text-pink-600"
          }`}
        >
          Hi, my name is
        </h2>

        <h1
          className={`text-5xl md:text-7xl font-bold transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          }`}
        >
          Samuel Ayalew.
        </h1>

        <h3
          className={`text-3xl md:text-5xl font-semibold transition-colors duration-500 ${
            darkMode ? "text-slate-400" : "text-slate-700"
          }`}
        >
          I design and develop modern full-stack web applications.
        </h3>

        <p
          className={`max-w-xl mx-auto mt-4 leading-relaxed transition-colors duration-500 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          I'm a Full-Stack Developer specializing in React, Node.js, and
          MongoDB, passionate about building scalable applications and clean
          user experiences. Alongside development, I also explore photography,
          graphic design, and cinematic editing, combining technical
          problem-solving with creative storytelling.
        </p>

        <div className="pt-8">
          <a
            href="#projects"
            className={`px-8 py-3 border-2 font-bold transition-all duration-300 rounded-md inline-block ${
              darkMode
                ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                : "border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white shadow-md"
            }`}
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
