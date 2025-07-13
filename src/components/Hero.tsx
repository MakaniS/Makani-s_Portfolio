import React, { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState(
    "Open to Work"
  );
  const fullText = "Full Stack Developer & UI/UX Designer";

  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
    >
      {/* Animated background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-800/30 animate-pulse"></div>

        {/* Floating animated circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gray-500/10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-blue-400/10 rounded-full animate-bounce delay-3000"></div>

        {/* Moving grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="bg-blue-300 animate-ping"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-slate-700 p-1">
            <img
              src="/assets/my-avatar.jpg"
              alt="Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in transform hover:scale-105 transition-transform duration-500">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300 animate-pulse">
            Siyamthanda
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
          <span>{displayText}</span>
        </div>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-slide-in-left">
          I am a Computer Systems Engineering graduate with a completed Diploma, 
          currently advancing my expertise through a part-time Advanced Diploma at Tshwane University of Technology. 
          Eager to launch my career, I am actively seeking entry-level or junior opportunities sourced directly through my university (varsity) connections
          , where I can apply my developing technical foundation and contribute to innovative teams.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button
            onClick={handleScrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-slate-800 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Learn More About Me
          </button>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-slate-400 text-white font-semibold rounded-full hover:bg-slate-700/30 hover:border-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            View My Work
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
