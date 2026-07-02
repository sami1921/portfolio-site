import React from "react";
import { useSelector } from "react-redux";

const Gallery = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const media = [
    {
      id: 1,
      type: "photo",
      url: "/path-to-photo1.jpg",
      title: "Street Photography",
    },
    {
      id: 2,
      type: "video",
      url: "/path-to-video.mp4",
      title: "Sam Graphics",
    },
    // Add more items here
  ];

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-12 flex items-center gap-4 transition-colors duration-500 ${
            darkMode ? "text-slate-100" : "text-slate-900"
          }`}
        >
          <span className="text-cyan-400 font-mono text-xl">04.</span>
          Creative Lab
          <div
            className={`h-[1px] flex-grow ml-4 ${darkMode ? "bg-slate-700" : "bg-slate-300"}`}
          ></div>
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {media.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-lg transition-all duration-500 border ${
                darkMode
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-slate-200 shadow-md hover:shadow-xl"
              }`}
            >
              <div
                className={`aspect-video flex items-center justify-center italic transition-colors ${
                  darkMode
                    ? "bg-slate-700 text-slate-500"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {item.title}
              </div>

              <div className="absolute inset-0 bg-cyan-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
                <p className="text-white font-bold text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </p>
                <span className="text-cyan-400 text-xs mt-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  View {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
