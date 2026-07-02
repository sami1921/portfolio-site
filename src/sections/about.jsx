import { useSelector } from "react-redux";
import profilePic from "../assets/photo.jpg";

const About = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-64 h-64 bg-cyan-400 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl">
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
            <img
              src={profilePic}
              alt="Samuel Ayalew"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h2
            className={`text-3xl font-bold transition-colors duration-500 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            About Me
          </h2>

          <p
            className={`leading-relaxed transition-colors duration-500 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I am a passionate full-stack Web developer specializing in modern
            web applications built with React, Node.js,Express and MongoDB. I
            enjoy designing scalable backend systems, building responsive user
            interfaces, and creating
            <strong className={darkMode ? "text-cyan-400" : "text-cyan-600"}>
              Security
            </strong>
            ,
            <strong className={darkMode ? "text-cyan-400" : "text-cyan-600"}>
              {" "}
              Scalability
            </strong>
            , and
            <strong className={darkMode ? "text-cyan-400" : "text-cyan-600"}>
              {" "}
              Seamless User Experiences
            </strong>
            . <br />
            Alongside development, I have a strong interest in photography and
            graphic design, where I explore visual storytelling and cinematic
            creativity. Combining technical problem-solving with creative
            thinking allows me to build digital experiences that are both
            functional and visually engaging.
          </p>

          <div className="flex gap-4 pt-4 text-cyan-400 text-sm font-medium">
            <span>#ReactJS</span>
            <span>#NodeJS</span>
            <span>#Graphics designing</span>
            <span>#Photography</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
