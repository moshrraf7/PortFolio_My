
import { useState, useEffect } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer & Cybersecurity Enthusiast";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-pink-300 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            MD Moshrraf
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 h-8 mb-6">
            <span className="border-r-2 border-pink-400 animate-pulse pr-1">
              {text}
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "2s" }}>
          Passionate about building modern, scalable solutions and securing digital experiences. 
          2× College Hackathon Winner with 10+ projects that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "2.5s" }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-pink-500 rounded-full text-pink-400 font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
