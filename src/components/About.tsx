
export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi, I'm <span className="text-pink-400 font-semibold">MD Moshrraf</span>, a passionate and results-driven 
                <span className="text-purple-400 font-semibold"> Full-Stack Developer & Cybersecurity Enthusiast</span> with 
                a strong focus on building modern, scalable, and user-friendly digital experiences.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <p className="text-gray-300 text-lg leading-relaxed">
                I love turning ideas into real-world solutions using technologies like 
                <span className="text-pink-400 font-semibold"> React.js, Node.js, PHP, and Python</span>, and I'm always 
                exploring new tools to stay sharp in this fast-evolving tech world.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
              <p className="text-gray-300 text-lg leading-relaxed">
                With a solid foundation in <span className="text-purple-400 font-semibold">Computer Science & Engineering</span>, 
                I've developed <span className="text-pink-400 font-semibold">10+ projects</span> that solve real-world problems — 
                from e-commerce platforms and admin dashboards to AI-based phishing detection systems.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-pink-500/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Hackathon Wins</span>
                  <span className="text-pink-400 font-bold text-2xl">2×</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-600 h-2 rounded-full w-full"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Projects Completed</span>
                  <span className="text-purple-400 font-bold text-2xl">10+</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full w-full"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Problem Solver</span>
                  <span className="text-pink-400 font-bold text-2xl">∞</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-600 h-2 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-300 italic">
            "Let's connect and create something amazing!"
          </p>
        </div>
      </div>
    </section>
  );
};
