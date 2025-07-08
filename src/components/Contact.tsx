
import { Mail, Phone, MapPin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Whether it's about a new project, solving a CTF, teaming up for a hackathon, or just vibing over BGMI — I'm always up for a good chat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:moshrrafp@gmail.com"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">moshrrafp@gmail.com</p>
          </a>

          <a
            href="tel:+919006852432"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">+91 90068 52432</p>
          </a>

          <a
            href="https://github.com/moshrraf7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Github className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">github.com/moshrraf7</p>
          </a>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">Open to remote & on-site</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 border border-pink-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-pink-100 mb-6 text-lg">
              "Let's build, break, and fix cool stuff together!"
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:moshrrafp@gmail.com"
                className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-pink-100 transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
